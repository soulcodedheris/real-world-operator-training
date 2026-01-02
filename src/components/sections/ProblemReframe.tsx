import { motion } from "framer-motion";
import {
  Book,
  GraduationCap,
  Lightbulb,
  Target,
  TrendingUp,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useAnimationVariants } from "@/lib/animations";

export function ProblemReframe() {
  const { ref, isInView } = useScrollReveal();
  const { fadeInUp, fadeInLeft, fadeInRight } = useAnimationVariants();

  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-section-normal bg-background">
      <div ref={ref} className="max-w-container mx-auto">
        <motion.h2
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-2xl sm:text-3xl font-semibold text-primary mb-16 text-center"
        >
          THE REAL PROBLEM NO ONE TALKS ABOUT
        </motion.h2>
        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Asymmetric grid: 40% left, 60% right */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInLeft}
            className="md:col-span-5 text-muted-foreground md:pt-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <Book className="h-5 w-5 text-muted-foreground opacity-60" />
              <h3 className="text-xl font-semibold text-muted-foreground opacity-70">
                School trained you to:
              </h3>
            </div>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-2">
                <GraduationCap className="h-5 w-5 text-muted-foreground opacity-50 mt-0.5 flex-shrink-0" />
                <span>Memorize</span>
              </li>
              <li className="flex items-start gap-2">
                <GraduationCap className="h-5 w-5 text-muted-foreground opacity-50 mt-0.5 flex-shrink-0" />
                <span>Follow instructions</span>
              </li>
              <li className="flex items-start gap-2">
                <GraduationCap className="h-5 w-5 text-muted-foreground opacity-50 mt-0.5 flex-shrink-0" />
                <span>Pass exams</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInRight}
            transition={{ delay: 0.2 }}
            className="md:col-span-7 text-primary relative"
          >
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: "easeOut",
              }}
              style={{ transformOrigin: "top" }}
              className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-accent"
            />
            <div className="md:hidden mb-8">
              <Separator />
            </div>
            <div className="md:pl-8 flex items-center gap-2 mb-6">
              <Lightbulb className="h-5 w-5 text-accent" />
              <h3 className="text-xl font-semibold mb-0">
                But the real world rewards people who can:
              </h3>
            </div>
            <ul className="md:pl-8 space-y-3 text-lg">
              <li className="flex items-start gap-2">
                <Lightbulb className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Think independently</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Solve problems</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Create value</span>
              </li>
              <li className="flex items-start gap-2">
                <Lightbulb className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Communicate clearly</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Build leverage with skills and systems</span>
              </li>
            </ul>
          </motion.div>
        </div>
        <motion.p
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
          className="text-lg text-foreground mt-12 max-w-2xl"
        >
          That gap is why many smart young people feel lost.
          <br />
          <span className="font-semibold">
            The Real-World Operator Program exists to close that gap.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
