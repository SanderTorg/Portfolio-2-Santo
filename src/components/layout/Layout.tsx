import { Outlet } from "@tanstack/react-router";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
