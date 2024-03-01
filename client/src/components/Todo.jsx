import { useState } from "react";
import { toggleTodo, updateTodo, deleteTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.data);

  const dispatch = useDispatch();

  const onFormSubmit =(e) => {
    e.preventDefault();

    setEditing(prevState => !prevState)

    dispatch(updateTodo(todo._id, text));
  }

  return (
    <li
      className="tasklist"
      style={{
        textDecoration: todo.done ? "line-through" : "",
        color: todo.done ? "#a0a0a0" : "",
        border: todo.done ? "#a0a0a0 solid 2px" : "",
      }}
    >
      <span onClick={() => dispatch(toggleTodo(todo._id))}>
        <span className="todo-data" style={{ display: editing ? "none" : "" }}>
          {todo.data}
        </span>
      </span>
      <form style={{ display: editing ? "inline" : "none" }}
      onSubmit={onFormSubmit}>
        <input
          type="text"
          value={text}
          className="edit-todo"
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <span>
        <span
          className="icon"
          onClick={() => setEditing((prevState) => !prevState)}
        >
          <i className="fa-solid fa-pen"></i>
        </span>
        <span className="icon" onClick={() => dispatch(deleteTodo(todo._id)) }>
          <i className="fa-solid fa-trash"></i>
        </span>
      </span>
    </li>
  );
};

export default Todo;
