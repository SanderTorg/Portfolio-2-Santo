import { Link } from "@tanstack/react-router";

const tech = [
  "React 19",
  "Next.js",
  "TypeScript",
  "Zustand",
  "Zod",
  "shadcn/ui",
  "Tailwind v4",
];

export default function OnlineShopPage() {
  return (
    <main className="project-page">
      <Link to="/" className="btn-ghost project-page__back">
        ← Back
      </Link>

      <h1 className="hero-title">
        Online <span className="accent-text">Shop</span>
      </h1>

      <p className="project-page__desc">
        An e-commerce platform built with Next.js and React 19, where users can
        browse and search a variety of products and proceed through a full
        checkout flow. State is managed globally with Zustand (with localStorage
        persistence), and all forms use Zod + React Hook Form for validation and
        accessibility.
      </p>

      <ul className="project-page__features">
        <li>Dynamic product search with real-time filtering</li>
        <li>Cart state persisted via Zustand middleware</li>
        <li>Form validation with Zod and React Hook Form</li>
        <li>UI built with shadcn/ui and Tailwind CSS v4</li>
        <li>Deployed on Vercel with Next.js App Router</li>
      </ul>

      <div className="project-page__tech">
        {tech.map((t) => (
          <span key={t} className="tech-tag">
            {t}
          </span>
        ))}
      </div>

      <div className="project-page__links">
        <a
          href="https://jsfw-2025-v1-sander-torgersen-jsf-c.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Visit Live Site →
        </a>
        <a
          href="https://github.com/NoroffFEU/jsfw-2025-v1-sander-torgersen-jsf-ca"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          GitHub Repo
        </a>
      </div>
    </main>
  );
}
