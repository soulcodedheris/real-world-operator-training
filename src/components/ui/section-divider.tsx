import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "default" | "gradient" | "minimal";
  className?: string;
}

export function SectionDivider({
  variant = "default",
  className = "",
}: SectionDividerProps) {
  const variants = {
    default: "h-px bg-gradient-accent",
    gradient: "h-0.5 bg-gradient-accent",
    minimal: "h-px bg-border",
  };

  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full ${variants[variant]} ${className}`}
      style={{ transformOrigin: "left" }}
    />
  );
}


