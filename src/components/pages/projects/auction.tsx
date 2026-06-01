import { Link } from "@tanstack/react-router";

const tech = ["TypeScript", "Vite", "Tailwind v4", "Vitest", "Playwright"];

export default function AuctionPage() {
  return (
    <main className="project-page">
      <Link to="/" className="btn-ghost project-page__back">
        ← Back
      </Link>

      <h1 className="hero-title">
        Auction <span className="accent-text">House</span>
      </h1>

      <p className="project-page__desc">
        A semester project — a fully featured online auction platform where
        users can register, browse listings, place bids and manage their own
        auctions. Built with vanilla TypeScript and Vite, with a strong focus on
        accessibility, performance, and test coverage.
      </p>

      <ul className="project-page__features">
        <li>User authentication with register and login</li>
        <li>Browse listings with search, tag filter and sort</li>
        <li>Real-time bidding with bid history and status tracking</li>
        <li>Create and edit listings with image galleries</li>
        <li>User profiles with credits, avatar, bio and auction history</li>
        <li>Unit tests (Vitest) and E2E tests (Playwright)</li>
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
          href="https://myauctions.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Visit Live Site →
        </a>
        <a
          href="https://github.com/SanderTorg/sp-2-auction-santorg"
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
