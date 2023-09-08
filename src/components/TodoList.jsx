import PropTypes from "prop-types";

import Todoitem from "./Todoitem";
import { useState } from "react";

function TodoList({ todos, handledelete, handletoggle, setTodos }) {
  const [sort, setSort] = useState("order");
  let Sortedtodos;
  if (sort == "order") Sortedtodos = todos;
  if (sort == "title")
    Sortedtodos = todos.slice().sort((a, b) => a.title.localeCompare(b.title));
  if (sort == "completed")
    Sortedtodos = todos
      .slice()
      .sort((a, b) => Number(b.completed) - Number(a.completed));

  const ClearAllitems = () => {
    const confirmed = confirm("Are you sure you want to delete all todos");
    if (confirmed) setTodos([]);
  };
  return (
    <div className="todo-list">
      <ul>
        {Sortedtodos.map((todo) => (
          <Todoitem
            {...todo}
            key={todo.id}
            handledelete={handledelete}
            handletoggle={handletoggle}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
          }}
        >
          <option value="order">sort by order of input </option>
          <option value="title">sort alphabetically</option>
          <option value="completed">sort by state </option>
        </select>
        <button onClick={ClearAllitems}>clear List</button>
      </div>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handledelete: PropTypes.func,
  setTodos: PropTypes.func,
  handletoggle: PropTypes.func,
};
export default TodoList;
