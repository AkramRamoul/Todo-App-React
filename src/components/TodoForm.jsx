import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import "../App.css";
function TodoForm({ onSubmit }) {
  const [newtodo, setewTodo] = useState("");
  const inputref = useRef();
  useEffect(() => {
    inputref.current.focus();
  });

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(newtodo);
    setewTodo("");
  }
  return (
    <form
      className="todo-form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input
        className="input"
        ref={inputref}
        type="text"
        value={newtodo}
        onChange={(e) => {
          setewTodo(e.target.value);
        }}
      ></input>
      <button type="submit">Add Todo </button>
    </form>
  );
}
TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default TodoForm;
