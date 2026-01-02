import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useAnimationVariants } from "@/lib/animations";

export function Outcome() {
  const { ref, isInView } = useScrollReveal();
  const { fadeInUp, staggerContainer, staggerItem, emphasis } =
    useAnimationVariants();

  const outcomes = [
    "Understand how the real world actually works",
    "Think in problems → solutions → value",
    "Identify a skill or pathway that fits you",
    "Execute real tasks (not just learn theory)",
    "Gain clarity, confidence, and direction",
    "Stop feeling stuck and behind in life",
  ];

  return (
    <section className="min-h-screen min-h-[100svh] flex items-center px-4 sm:px-6 lg:px-8 bg-gradient-subtle py-section-loose">
      <div ref={ref} className="max-w-container mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left-aligned content */}
          <div className="lg:col-span-8">
            <motion.h2
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="text-display font-bold text-primary mb-8"
            >
              WHAT THIS PROGRAM HELPS YOU ACHIEVE
            </motion.h2>
            <motion.p
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground mb-8"
            >
              By the end of 12 weeks, you will:
            </motion.p>
            <motion.ul
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="space-y-4 mb-12"
            >
              {outcomes.map((outcome, index) => (
                <motion.li
                  key={index}
                  variants={staggerItem}
                  className="flex items-start gap-3 text-lg text-foreground"
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
                  <span>{outcome}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={emphasis}
              transition={{ delay: 0.8 }}
              className="relative mt-10 lg:max-w-xl py-2"
            >
              <p className="text-2xl sm:text-3xl font-bold leading-tight text-primary xl:whitespace-nowrap">
                This is not motivation. This is{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  capability
                </span>
                .
              </p>
            </motion.div>
          </div>

          {/* Right-side visual accent */}
          <div className="lg:col-span-4 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="sticky top-24"
            >
              <div className="w-full rounded-2xl border border-border bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/50 overflow-hidden">
                <img
                  src="/freepik_assistant_1767383326223.png"
                  alt="Program outcome visual"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
