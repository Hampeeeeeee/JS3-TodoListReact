import React from 'react';

interface TodoItemProps {
  id: number;
  task: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, task, completed, onToggle, onDelete }) => {
  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <input 
        type="checkbox" 
        checked={completed} 
        onChange={() => onToggle(id)} 
      />
      <span>{task}</span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default TodoItem;