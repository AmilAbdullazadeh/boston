import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import uniqid from "uniqid";
import { validate } from "../../helpers";
import "../../style/bootstrap.min.css";

export default function Home() {
  const [list, setList] = useState([]);
  const [editable, setEditable] = useState(false);
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [todo, setTodo] = useState({
    title: "",
    completed: false,
    id: 0,
  });



  const [errors, setErrors] = useState({
    title: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (errors.title.length > 0) {
      alert("Something went wrong");
    } else {

      const data = {
        ...todo,
        id: uniqid(),
      };

      setIsLoading(true);

      axios.post("https://jsonplaceholder.typicode.com/todos", data)
        .then((res) => {
          console.log(res.data);
          toast.success("Data added successfully!");
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
        });

      setList([
        ...list,
        data,
      ]);

      setTodo({
        title: "",
        completed: false,
      });
    }
  };

  const handleEdit = (e, id) => {
    e.preventDefault();

    setIsLoading(true);

    const updatedData = list.map(item => item.id === id ? { ...item, title: item.title } : item);
    
    axios
      .put("https://jsonplaceholder.typicode.com/todos/5", updatedData)
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setTodo({
      ...todo,
      [name]: value,
    });

    const error = validate(name, value);

    setErrors({
      [name]: error,
    });
  };

  function toggle(id) {
    const element = list.find((item) => item.id === id);
    element.completed
      ? (element.completed = false)
      : (element.completed = true);
    setList([...list]);
  }

  function remove(e, id) {
    e.preventDefault();
    e.stopPropagation();
    const filteredData = list.filter(() => list.id !== id);
    setList(filteredData);
  }

  function edit(e, id) {
    e.preventDefault();
    e.stopPropagation();
    const element = list.find((item) => item.id === id);
    setTitle(element.title);
    setEditable(true);
  }


  useEffect(() => {
    setIsLoading(true);

    axios("https://jsonplaceholder.typicode.com/todos?_limit=4")
      .then((res) => {
        setList(res.data);
        toast.success("Data loaded successfully!");
      })
      .catch((err) => toast.error("Error loading data!", err))
      .finally(() => {
        setIsLoading(false);
      })
  }, []);

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <form>
        <div>
          <label htmlFor="title">Todo: </label>
          <input
            className="form-control mb-3"
            name="title"
            defaultValue={todo.title}
            value={editable ? title : ""}
            onChange={handleChange}
          />
          {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
        </div>

        <button
          onClick={editable ? handleEdit : handleSubmit}
          className="btn btn-outline-warning"
          type="submit"
        >
          {editable ? "Edit" : "Add"}
        </button>

        <ul className="list-group mt-2">
          {list.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex flex-column align-items-center justify-content-between"
              onClick={() => toggle(item.id)}
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {item.title}

              {!item.completed && (
                <div className="div">
                  <button
                    className="btn btn-danger mx-1"
                    onClick={(e) => remove(e, item.id)}
                  >
                    Remove
                  </button>

                  <button
                    className="btn btn-warning mx-1"
                    onClick={(e) => edit(e, item.id)}
                  >
                    Edit
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </form>
    </>
  );
}
