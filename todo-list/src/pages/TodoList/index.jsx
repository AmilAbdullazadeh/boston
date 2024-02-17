import axios from "axios";
import React, { useEffect, useState } from "react";
import List from "../../components/List";
import { baseUrl } from "../../config";


export default function TodoList() {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(baseUrl + "/todos");
      setList(response.data);
    } catch (error) {
      console.info(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>   
          <List test={list} />
    </div>
  );
}
