import { Outlet } from "@tanstack/react-router";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
