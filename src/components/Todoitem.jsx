import PropTypes from "prop-types";
import "../App.css";

function Todoitem({ completed, id, title, handledelete, handletoggle }) {
  return (
    <li className="todo-item" key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => handletoggle(id, e.target.checked)}
      ></input>
      <span className={completed ? "checked" : ""}>{title}</span>

      <button className="delete" onClick={() => handledelete(id)}>
        X
      </button>
    </li>
  );
}
Todoitem.propTypes = {
  completed: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handledelete: PropTypes.func.isRequired,
  handletoggle: PropTypes.func.isRequired,
};

export default Todoitem;
