import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const localvalue = localStorage.getItem("ITEMS");
    if (localvalue == null) return [];
    return JSON.parse(localvalue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addtodo(title) {
    setTodos((current) => {
      if (!title) return current;
      return [...current, { title, id: crypto.randomUUID(), completed: false }];
    });
  }

  function handledelete(id) {
    setTodos((current) => {
      return current.filter((todo) => todo.id !== id);
    });
  }
  function handletoggle(id, checked) {
    setTodos((current) =>
      current.map((todo) =>
        todo.id === id ? { ...todo, completed: checked } : todo
      )
    );
  }
  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <TodoForm onSubmit={addtodo} />
      <TodoList
        todos={todos}
        handledelete={handledelete}
        handletoggle={handletoggle}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
