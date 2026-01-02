import { motion } from "framer-motion";
import { X, AlertCircle, CheckCircle, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useAnimationVariants } from "@/lib/animations";

export function Differentiation() {
  const { ref, isInView } = useScrollReveal();
  const { fadeInUp, fadeInLeft, fadeInRight, emphasis } =
    useAnimationVariants();

  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-section-loose bg-muted relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="max-w-container mx-auto relative z-10">
        <motion.h2
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-display font-bold text-primary mb-16 text-center"
        >
          WHY THIS PROGRAM IS DIFFERENT
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 relative">
          {/* Overlapping/offset comparison layout */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInLeft}
            className="text-muted-foreground opacity-60 md:transform md:-rotate-1"
          >
            <div className="flex items-center gap-2 mb-6">
              <X className="h-5 w-5 text-muted-foreground opacity-50" />
              <h3 className="text-xl font-semibold mb-0 text-muted-foreground opacity-50">
                Most programs:
              </h3>
            </div>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-muted-foreground opacity-40 mt-0.5 flex-shrink-0" />
                <span>Teach theory</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-muted-foreground opacity-40 mt-0.5 flex-shrink-0" />
                <span>Sell motivation</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-muted-foreground opacity-40 mt-0.5 flex-shrink-0" />
                <span>Leave you alone to "figure it out"</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInRight}
            transition={{ delay: 0.2 }}
            className="text-primary md:transform md:rotate-1 md:mt-8 relative z-10"
          >
            <div className="flex items-center gap-2 mb-6">
              <Star className="h-5 w-5 text-accent" />
              <h3 className="text-xl font-semibold mb-0">This program:</h3>
            </div>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Is built from real execution experience</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Focuses on thinking systems, not trends</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Is small, interactive, and accountability-driven</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Trains you to operate, not impress</span>
              </li>
            </ul>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={emphasis}
          transition={{ delay: 0.4 }}
          className="mt-12 py-2"
        >
          <p className="text-lg sm:text-xl text-primary font-semibold lg:whitespace-nowrap">
            You are not being trained to look smart. You are being trained to be{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              useful
            </span>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
