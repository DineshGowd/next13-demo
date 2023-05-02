import { notFound } from "next/navigation";
import React from "react";

const fetchTodo = async (todoId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    {
      next: { revalidate: 60 },
    }
  );
  const todos = await res.json();
  //   console.log("This is the todos:", todos);
  return todos;
};

const TodoPage = async ({ params: { todoId } }) => {
  const todo = await fetchTodo(todoId);
  if (!todo.id) return notFound();

  return (
    <div>
      <p>TodoPage: {todo.id}</p>
      <p>Todotitle: {todo.title}</p>
      <p>TodoPage: {todo.completed}</p>
      <p>TodoPage: {todo.userId}</p>
    </div>
  );
};

export default TodoPage;

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos = await res.json();

  const trimTodos = todos.splice(0, 20);
  return trimTodos.map((todo) => ({
    todoId: todo.id.toString(),
  }));
}
