import Link from "next/link";
import React from "react";

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos = await res.json();
  console.log("This is the todos:", todos);
  return todos;
};
const TodoList = async () => {
  const todos = await fetchTodos();
  return (
    <div>
      {todos.map((todo) => (
        <p>
          <Link href={`/todos/${todo.id}`}>Todo : {todo.id}</Link>
        </p>
      ))}
    </div>
  );
};

export default TodoList;
