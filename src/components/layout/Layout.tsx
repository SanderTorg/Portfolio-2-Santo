import { Outlet } from "@tanstack/react-router";
import Navbar from "./Navbar";
import AnimatedBackground from "../ui/AnimatedBackground";

export default function Layout() {
  return (
    <div style={{ position: "relative" }}>
      <AnimatedBackground />
      <header
        className="header"
        style={{ position: "sticky", top: 0, zIndex: 10 }}
      >
        <Navbar />
      </header>
      <main
        className="container mx-auto p-4"
        style={{ position: "relative", zIndex: 1 }}
      >
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
