import { useState } from "react";
import "./App.css";

type Todo = {
  text: string;
  done: boolean;
};

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTodos([...todos, { text: task, done: false }]);
    setTask("");
  };

  const toggleDone = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].done = !updatedTodos[index].done;
    setTodos(updatedTodos);
  };

  const deleteTask = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="todoList">
        <h1>Todo List</h1>
        <section className="row">
          <input
            className="taskInput"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
          />
          <button onClick={addTask} className="addTaskButton">
            Add Task
          </button>
        </section>

        <ul>
          {todos.map((todo, index) => (
            <li key={index} className={todo.done ? "checked" : ""}>
              <section
                onClick={() => toggleDone(index)}
              >
                {todo.text}
              </section>
              <span onClick={() => deleteTask(index)}>🗑️</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
