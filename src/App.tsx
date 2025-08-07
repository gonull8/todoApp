import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    const newTodo: Todo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setInput("");
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container" role="main" aria-label="To Do List Application">
      <h1 className="app-title">TO DO LIST APP</h1>

      <div className="todo-input-group">
        <input
          type="text"
          className="todo-input"
          placeholder="Add New Task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          aria-label="Task input"
          autoComplete="off"
          autoFocus
        />
        <button
          type="button"
          onClick={addTodo}
          className="add-button"
          aria-label="Add new task"
        >
          Enter
        </button>
      </div>

      <div className="todo-list" aria-live="polite" aria-relevant="additions removals">
        {todos.length === 0 ? (
          <p className="no-tasks" aria-live="polite">
            No tasks added yet.
          </p>
        ) : (
          todos.map((todo) => (
            <div key={todo.id} className="todo-item">
              <span className="todo-text">{todo.text}</span>
              <button
                type="button"
                onClick={() => deleteTodo(todo.id)}
                className="delete-button"
                aria-label={`Delete task: ${todo.text}`}
              >
                Sil
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
