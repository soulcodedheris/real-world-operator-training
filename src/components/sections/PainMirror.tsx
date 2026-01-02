import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useAnimationVariants } from "@/lib/animations";

export function PainMirror() {
  const { ref, isInView } = useScrollReveal();
  const { fadeInUp, staggerContainer, staggerItem } = useAnimationVariants();

  const items = [
    "Educated but confused about your direction",
    "Consuming content but not progressing",
    "Uncertain how to earn, build, or become relevant",
    "Afraid of wasting your 20s",
  ];

  return (
    <section className="min-h-screen min-h-[100svh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-muted py-20">
      <div ref={ref} className="max-w-container mx-auto">
        <motion.h2
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-3xl sm:text-4xl font-bold text-primary mb-8"
        >
          READ THIS IF YOU'RE TIRED OF GUESSING
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground mb-8"
        >
          If you're:
        </motion.p>
        <motion.ul
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="space-y-4 text-lg text-foreground"
        >
          {items.map((item, index) => (
            <motion.li
              key={index}
              variants={staggerItem}
              className="flex items-start gap-3"
            >
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                  isInView
                    ? { pathLength: 1, opacity: 1 }
                    : { pathLength: 0, opacity: 0 }
                }
                transition={{
                  pathLength: { duration: 0.5, delay: 0.1 + index * 0.1 },
                  opacity: { duration: 0.3, delay: 0.1 + index * 0.1 },
                }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-accent mt-0.5 flex-shrink-0"
              >
                <motion.path
                  d="M20 6L9 17l-5-5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    isInView
                      ? { pathLength: 1, opacity: 1 }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={{
                    pathLength: { duration: 0.5, delay: 0.1 + index * 0.1 },
                    opacity: { duration: 0.3, delay: 0.1 + index * 0.1 },
                  }}
                />
              </motion.svg>
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
        <motion.p
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.5 }}
          className="text-lg text-foreground mt-8"
        >
          This program was built specifically for you.
        </motion.p>
      </div>
    </section>
  );
}
