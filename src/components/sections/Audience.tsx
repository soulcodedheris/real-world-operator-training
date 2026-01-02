import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useAnimationVariants } from "@/lib/animations";

export function Audience() {
  const { ref, isInView } = useScrollReveal();
  const { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } = useAnimationVariants();

  const forItems = [
    "Students & recent graduates",
    "Young professionals feeling stuck",
    "Aspiring entrepreneurs",
    "Anyone tired of guessing their next move",
  ];

  const notForItems = [
    "People seeking quick money",
    "Those unwilling to execute",
    "People allergic to accountability",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-muted py-20">
      <div ref={ref} className="max-w-container mx-auto">
        <motion.h2
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-3xl sm:text-4xl font-bold text-primary mb-12"
        >
          WHO THIS IS FOR
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInLeft}
          >
            <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-2">
              <Check className="h-6 w-6 text-accent" />
              For:
            </h3>
            <motion.ul
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="space-y-3 text-lg text-foreground"
            >
              {forItems.map((item, index) => (
                <motion.li key={index} variants={staggerItem}>
                  • {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInRight}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-2">
              <X className="h-6 w-6 text-muted-foreground opacity-60" />
              Not for:
            </h3>
            <motion.ul
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={staggerContainer}
              transition={{ delay: 0.3 }}
              className="space-y-3 text-lg text-muted-foreground"
            >
              {notForItems.map((item, index) => (
                <motion.li key={index} variants={staggerItem}>
                  • {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

