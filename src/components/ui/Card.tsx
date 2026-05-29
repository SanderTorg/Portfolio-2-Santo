import { motion } from "motion/react";

interface CardProps {
  title: string;
  children: React.ReactNode;
  image?: string;
  href?: string;
}

export default function Card({ title, image, children, href }: CardProps) {
  return (
    <motion.a
      href={href}
      className="card"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {image && <img src={image} alt={title} className="card-image" />}
      <h2>{title}</h2>
      <p>{children}</p>
    </motion.a>
  );
}
