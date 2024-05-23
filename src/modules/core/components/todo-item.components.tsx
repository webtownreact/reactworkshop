import React from 'react';
import { ITodo } from '../interfaces/todo.interface';

export interface ITodoItemProps {
  iTodo: ITodo;
  completeTodo: (id: number) => void;
  unCompleteTodo: (id: number) => void;
}

export const TodoItemComponent = ({ iTodo, completeTodo, unCompleteTodo }: ITodoItemProps) => {
  const getIsCompletedClassNames: (iTodo: ITodo) => string = (iTodo: ITodo) => {
    return iTodo.isCompleted ? 'line-through' : '';
  };

  return (
    <div className="flex items-center justify-between">
      <h2 className={getIsCompletedClassNames(iTodo)}>{iTodo.name}</h2>
      {iTodo.isCompleted ? (
        <button
          type="button"
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
          onClick={() => unCompleteTodo(iTodo.id)}
        >
          Uncomplete
        </button>
      ) : (
        <button
          type="button"
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
          onClick={() => completeTodo(iTodo.id)}
        >
          Complete
        </button>
      )}
    </div>
  );
};
