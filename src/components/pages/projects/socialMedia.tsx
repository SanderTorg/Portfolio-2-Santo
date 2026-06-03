import { Link } from "@tanstack/react-router";
import socialMediaImg from "../../../assets/social-media.png";
import socialMediaDetailsImg from "../../../assets/social-media-details.png";
import socialMediaProfileImg from "../../../assets/social-media-profile.png";

const tech = ["TypeScript", "Vite", "Express 5", "Service Worker"];

export default function SocialMediaPage() {
  return (
    <main className="project-page">
      <Link to="/" className="btn-ghost project-page__back">
        ← Back
      </Link>

      <h1 className="hero-title">
        Social <span className="accent-text">Media App</span>
      </h1>

      <div className="project-page__screenshots">
        <img src={socialMediaImg} alt="Social Media App home" loading="lazy" />
        <img
          src={socialMediaDetailsImg}
          alt="Social Media App post detail"
          loading="lazy"
        />
        <img
          src={socialMediaProfileImg}
          alt="Social Media App profile"
          loading="lazy"
        />
      </div>

      <p className="project-page__desc">
        A group project built with Vite and TypeScript, featuring a full
        authentication flow with token storage, client-side routing, and a
        REST-like API abstraction layer. Includes a service worker for
        offline-ready asset caching. Built collaboratively with two other
        developers.
      </p>

      <ul className="project-page__features">
        <li>Authentication flow with secure token storage</li>
        <li>Client-side routing with custom router</li>
        <li>REST API abstraction via service layer</li>
        <li>Offline-ready via service worker</li>
        <li>Collaborative group project (3 developers)</li>
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
          href="https://social-media-santo.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Visit Live Site →
        </a>
        <a
          href="https://github.com/SanderTorg/social-media-santo"
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
