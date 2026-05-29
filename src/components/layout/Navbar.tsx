import Dropdown from "../ui/Dropdown";

const projectLinks = [
  { label: "Auction Project", href: "/auction" },
  { label: "Online Shop Project", href: "/online-shop" },
  { label: "Social Media Project", href: "/social-media" },
];

export default function Navbar() {
  return (
    <nav className="flex w-full justify-center gap-4 py-4  bg-black/40 ">
      <a href="/">Home</a>
      <Dropdown label="My Projects" items={projectLinks} />
    </nav>
  );
}
