import { Outlet } from "react-router-dom";
import Header from "./shared/Header";

function Layout() {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default Layout;
