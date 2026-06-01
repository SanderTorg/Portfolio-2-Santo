import { motion } from "motion/react";

const orbs = [
  {
    size: 600,
    color: "rgba(170, 59, 255, 0.20)",
    x: ["5vw", "25vw", "10vw"],
    y: ["-5vh", "15vh", "30vh"],
    duration: 22,
  },
  {
    size: 500,
    color: "rgba(192, 132, 252, 0.14)",
    x: ["60vw", "45vw", "70vw"],
    y: ["50vh", "20vh", "60vh"],
    duration: 28,
  },
  {
    size: 450,
    color: "rgba(170, 59, 255, 0.12)",
    x: ["30vw", "55vw", "20vw"],
    y: ["65vh", "80vh", "55vh"],
    duration: 18,
  },
  {
    size: 380,
    color: "rgba(139, 92, 246, 0.15)",
    x: ["75vw", "60vw", "80vw"],
    y: ["5vh", "25vh", "10vh"],
    duration: 25,
  },
];

export default function AnimatedBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: orb.size,
            height: orb.size,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: "blur(70px)",
            top: 0,
            left: 0,
          }}
          animate={{ x: orb.x, y: orb.y }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
