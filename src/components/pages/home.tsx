import Card from "../ui/Card";
import heroImg from "../../assets/hero.png";

export default function HomePage() {
  return (
    <main>
      <h1>My Portfolio</h1>

      <section>
        <h2>Featured Projects</h2>
        <p>Here are some of my recent projects.</p>

        <div className="flex flex-wrap gap-4">
          <Card title="Social Media Project" image={heroImg}>
            Description of the project goes here.
          </Card>
          <Card title="Online Shop" image={heroImg}>
            Description of the project goes here.
          </Card>
          <Card title="Auction House" image={heroImg}>
            Description of the project goes here.
          </Card>
        </div>
      </section>

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
