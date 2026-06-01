import Dropdown from "../ui/Dropdown";

const projectLinks = [
  { label: "Auction Project", href: "/auction" },
  { label: "Online Shop Project", href: "/online-shop" },
  { label: "Social Media Project", href: "/social-media" },
];

export default function Navbar() {
  return (
    <nav className="flex flex-wrap w-full justify-center gap-x-4 gap-y-2 py-4 px-4 bg-black/40">
      <a href="/">Home</a>
      <Dropdown label="My Projects" items={projectLinks} />
      <a href="/#about">About</a>
      <a href="/#contact">Contact</a>
    </nav>
  );
}
