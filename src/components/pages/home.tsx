export default function HomePage() {
  return (
    <main>
      <h1>My Portfolio</h1>

      <section>
        <h2>About Me</h2>
        <p>
          Welcome to my portfolio. Here you can find my projects and work
          experience.
        </p>
      </section>

      <section>
        <h2>Contact Me</h2>
        <p>
          You can reach me via email at{" "}
          <a className="email-link" href="mailto:santorgersen@gmail.com">
            santorgersen@gmail.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
