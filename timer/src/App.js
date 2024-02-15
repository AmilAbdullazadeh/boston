import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import uniqid from "uniqid";
import { validate } from "./helpers";

function App() {

  const [list, setList] = useState([])

  const [todo, setTodo] = useState({
    text: '',
    completed: false,
    id: 0
  })

  const [errors, setErrors] = useState({
    text: ''
  });

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target

    setTodo({
      ...todo,
      [name]: value
    })

    const error = validate(name, value)

    setErrors({
      [name]: error
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (errors.text.length > 0) {
      alert('Something went wrong')
    } else {
      
      setList([
        ...list,
        {
          ...todo,
          id: uniqid(),
        },
      ]);

      setTodo({
        text: "",
        completed: false,
      });
    }

  }

  function toggle(id) {
    const element = list.find(item => item.id === id)
    element.completed ? element.completed = false : element.completed = true
    setList([...list])
  }

  return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text">Todo: </label>
          <input
            name="text"
            defaultValue={todo.text}
            value={todo.text}
            onChange={handleChange}
          />
          {errors.text && <p style={{ color: "red" }}>{errors.text}</p>}
        </div>

        <button type="submit">Submit</button>

        {list.map((item) => (
          <div
            onClick={() => toggle(item.id)}
            style={{
              textDecoration: item.completed ? "line-through" : "none",
              opacity: item.completed ? 0.7 : 1,
            }}
            key={item.id}
          >
            {item.text}
          </div>
        ))}
      </form>;
  );
}

export default App;
