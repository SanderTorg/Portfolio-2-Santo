import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "motion/react";

interface FeatureTileProps {
  title: string;
  children: React.ReactNode;
  image?: string;
  href?: string;
  index: number;
}

export default function FeatureTile({
  title,
  image,
  children,
  href,
  index,
}: FeatureTileProps) {
  const isReversed = index % 2 !== 0;
  const tileRef = useRef<HTMLAnchorElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  const glareX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [0, 1], ["0%", "100%"]);
  const glareOpacity = useMotionValue(0);
  const glareOpacitySpring = useSpring(glareOpacity, {
    stiffness: 300,
    damping: 30,
  });
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.09) 0%, transparent 65%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = tileRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
    glareOpacity.set(1);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
    glareOpacity.set(0);
  }

  return (
    <motion.a
      ref={tileRef}
      href={href}
      className={`feature-tile${isReversed ? " feature-tile--reversed" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, x: isReversed ? 70 : -70 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.015 }}
      style={{
        position: "relative",
        overflow: "hidden",
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          pointerEvents: "none",
          background: glareBackground,
          opacity: glareOpacitySpring,
        }}
      />

      {image && (
        <div className="feature-tile__image">
          <img src={image} alt={title} />
        </div>
      )}

      <div className="feature-tile__content">
        <h2>{title}</h2>
        <p>{children}</p>
        <span className="feature-tile__cta">View Project →</span>
      </div>
    </motion.a>
  );
}
