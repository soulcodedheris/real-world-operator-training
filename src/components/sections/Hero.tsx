import { motion } from "framer-motion";
import { Clock, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnimationVariants } from "@/lib/animations";

const GOOGLE_FORM_URL = "https://forms.google.com"; // Replace with actual Google Form URL

export function Hero() {
  const { fadeInUp, scaleIn } = useAnimationVariants();

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 bg-background relative overflow-hidden">
      {/* Ambient hero background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-dark opacity-55" />
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-gradient-accent opacity-[0.10] blur-3xl" />
        <div className="absolute -bottom-56 -right-56 h-[680px] w-[680px] rounded-full bg-gradient-accent opacity-[0.08] blur-3xl" />
      </div>

      <div className="mx-auto relative z-10 w-full max-w-6xl">
        <div className="mx-auto text-center max-w-5xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/40 px-4 py-2"
          >
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Applications open
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            <span className="text-primary">From Confusion</span>{" "}
            <span className="text-muted-foreground font-normal">→</span>{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Capability
            </span>
            <span className="text-muted-foreground font-normal">
              {" "}
              in 12 Weeks
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.15 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >
            A real-world operator training for smart young people who feel
            stuck, behind, or unsure how to move forward.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            transition={{ delay: 0.25 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                Apply to Join the Next Cohort
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <a href="#phases">See the 4-phase journey</a>
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.35 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/25 px-4 py-2">
              <Users className="h-4 w-4 text-accent" />
              <span className="text-sm text-foreground">Small cohort (5–15)</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/25 px-4 py-2">
              <Clock className="h-4 w-4 text-accent" />
              <span className="text-sm text-foreground">2–3 hrs / week</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
