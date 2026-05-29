import { motion } from "motion/react";

interface CardProps {
  title: string;
  children: React.ReactNode;
  image?: string;
}

export default function Card({ title, image, children }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="card text-left cursor-pointer hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg bg-white"
    >
      <h2>{title}</h2>
      {image && <img src={image} alt={title} />}
      <p>{children}</p>
    </motion.div>
  );
}
