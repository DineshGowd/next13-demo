import TodoList from "./TodoList";

export default function RootLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <TodoList />
      </div>
      <div>{children}</div>
    </div>
  );
}
