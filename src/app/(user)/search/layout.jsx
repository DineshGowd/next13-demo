import Search from "./Search";

export default function RootLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <h1>Search</h1>
      </div>
      <div>
        <Search />
        <div>{children}</div>
      </div>
    </div>
  );
}
