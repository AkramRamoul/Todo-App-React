import PropTypes from "prop-types";

import Todoitem from "./Todoitem";

function TodoList({ todos, handledelete, handletoggle }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <Todoitem
          {...todo}
          key={todo.id}
          handledelete={handledelete}
          handletoggle={handletoggle}
        />
      ))}
    </ul>
  );
}
TodoList.propTypes = {
  completed: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handledelete: PropTypes.func.isRequired,
  handletoggle: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};
export default TodoList;
