import React, { useState } from 'react';
import { ITodo } from '../interfaces/todo.interface';
import { todos as defaultTodos } from '../consts/todo.const';
import { TodoItemComponent } from './todo-item.components';

export const TodoComponent = () => {
  const [todos, setTodos] = useState(defaultTodos);

  const completeTodo = (id: number) => {
    setTodos(
      todos.map((iTodo: ITodo) => {
        if (id === iTodo.id) {
          return {
            ...iTodo,
            isCompleted: true,
          };
        }

        return iTodo;
      }),
    );
  };

  const unCompleteTodo = (id: number) => {
    setTodos(
      todos.map((iTodo: ITodo) => {
        if (id === iTodo.id) {
          return {
            ...iTodo,
            isCompleted: false,
          };
        }

        return iTodo;
      }),
    );
  };

  return (
    <main className="container mx-auto grid grid-cols-1">
      <div className="flex items-center justify-between">
        <h1>Todo application</h1>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Create todo
        </button>
      </div>

      {todos.map((iTodo: ITodo) => (
        <div key={iTodo.id}>
          <TodoItemComponent iTodo={iTodo} completeTodo={completeTodo} unCompleteTodo={unCompleteTodo} />
        </div>
      ))}
    </main>
  );
};
