import React from "react";
import { Todo } from "../types";

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="relative pr-20 pl-2 py-2 border-b bg-white rounded-md">
      <span
        onClick={() => onToggle(todo.id)}
        className={`cursor-pointer block ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 hover:text-red-700"
      >
        Sil
      </button>
    </div>
  );
};

export default TodoItem;
