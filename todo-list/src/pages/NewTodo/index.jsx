import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { baseUrl } from "../../config";

export default function NewTodo() {
    const [title, setTitle] = useState("");
    const navigate = useNavigate(); // useParams, useHistory

  const handleSubmit = (e) => {
      e.preventDefault();
      createTodo()
  };
  

  const createTodo = async () => {
      try {
        const res = await axios.post(baseUrl + '/todos', { title })
        navigate('/')
    } catch (error) {
      console.info(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
