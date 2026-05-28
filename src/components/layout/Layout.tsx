import { Outlet, Link } from "@tanstack/react-router";

export default function Layout() {
  return (
    <div>
      <header>
        <nav className="gap-4 flex">
          <Link to="/">Home</Link>
          <Link to="/auction">Auction Project</Link>
          <Link to="/online-shop">Online Shop Project</Link>
          <Link to="/social-media">Social Media Project</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
