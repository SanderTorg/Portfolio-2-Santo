import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Card from "../ui/Card";
import heroImg from "../../assets/hero.png";

const projects = [
  {
    title: "Social Media App",
    href: "/social-media",
    image: heroImg,
    desc: "A full-stack social platform with auth, posts, profiles and a follow system.",
  },
  {
    title: "Online Shop",
    href: "/online-shop",
    image: heroImg,
    desc: "E-commerce store with product listings, cart and checkout flow.",
  },
  {
    title: "Auction House",
    href: "/auction",
    image: heroImg,
    desc: "Real-time auction platform with live bidding and listing management.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="home-page">
      <motion.section
        ref={heroRef}
        className="hero-section"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Frontend Developer
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.65, ease: "easeOut" }}
        >
          Hi, I'm <span className="accent-text">Sander Torgersen</span>
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.55 }}
        >
          I build fast, accessible web experiences with React &amp; TypeScript.
        </motion.p>

        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
        >
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-ghost scr">
            Contact Me
          </a>
        </motion.div>
      </motion.section>

      <section id="projects" className="content-section">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.15 }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.p className="section-label" variants={fadeUp}>
            Projects
          </motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            Things I've Built
          </motion.h2>

          <div className="cards-grid">
            {projects.map((p) => (
              <motion.div key={p.href} variants={fadeUp}>
                <Card title={p.title} image={p.image} href={p.href}>
                  {p.desc}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="about" className="content-section">
        <motion.div
          className="about-layout"
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.25 }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        >
          <div className="about-text">
            <motion.p className="section-label" variants={fadeUp}>
              About
            </motion.p>
            <motion.h2 className="section-title" variants={fadeUp}>
              A Bit About Me
            </motion.h2>
            <motion.p className="about-body" variants={fadeUp}>
              I'm a frontend developer studying at Noroff, passionate about
              building clean, performant UIs. I love working with React,
              TypeScript, and pushing the limits of what's possible in the
              browser.
            </motion.p>
          </div>

          <motion.div
            className="about-image"
            variants={{
              hidden: { opacity: 0, x: 60 },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              },
            }}
          >
            <img src={heroImg} alt="Santo" />
          </motion.div>
        </motion.div>
      </section>

      <section id="contact" className="content-section">
        <motion.div
          className="contact-layout"
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.p className="section-label" variants={fadeUp}>
            Contact
          </motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            Let's Work Together
          </motion.h2>
          <motion.p variants={fadeUp}>
            Got a project in mind? Reach out and let's build something great.
          </motion.p>
          <motion.a
            href="mailto:santorgersen@gmail.com"
            className="btn-primary"
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            santorgersen@gmail.com
          </motion.a>

          <motion.div className="social-links" variants={fadeUp}>
            <motion.a
              href="https://github.com/SanderTorg"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sander-torgersen-545456336/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
