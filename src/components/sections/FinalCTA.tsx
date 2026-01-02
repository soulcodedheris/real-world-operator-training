import { motion } from "framer-motion";
import { CheckCircle2, Clock, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useAnimationVariants } from "@/lib/animations";

const GOOGLE_FORM_URL = "https://forms.google.com"; // Replace with actual Google Form URL

export function FinalCTA() {
  const { ref, isInView } = useScrollReveal();
  const { fadeInUp, staggerContainer, staggerItem, scaleIn, emphasis } = useAnimationVariants();

  const transitions = [
    { from: "confusion", to: "clarity" },
    { from: "consuming", to: "operating" },
    { from: "dreaming", to: "building" },
  ];

  const trustPoints = [
    { icon: Users, label: "Small cohort (5–15)" },
    { icon: Clock, label: "2–3 hours per week" },
    { icon: Zap, label: "Execution-first program" },
  ];

  return (
    <section className="min-h-screen min-h-[100svh] flex items-start justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-28 relative overflow-hidden bg-background">
      {/* Ambient closing “hero” background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-dark opacity-50" />
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-gradient-accent opacity-[0.10] blur-3xl" />
        <div className="absolute -bottom-56 -right-56 h-[680px] w-[680px] rounded-full bg-gradient-accent opacity-[0.08] blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-accent" />
      </div>

      <div ref={ref} className="max-w-container mx-auto relative z-10 w-full">
        <motion.h2
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-[0.35em] mb-6"
        >
          FINAL THOUGHT
        </motion.h2>

        {/* Closing hero copy */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto"
        >
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight leading-tight">
            The world doesn&apos;t reward potential.
            <br />
            It rewards people who can{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              think, solve, and execute.
            </span>
          </h3>

          <p className="text-lg text-muted-foreground mt-5 leading-relaxed max-w-2xl mx-auto">
            If you&apos;re ready to stop guessing, this is the transition point.
          </p>
        </motion.div>

        {/* Transition chips */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          transition={{ delay: 0.15 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {transitions.map((t) => (
            <motion.div
              key={`${t.from}-${t.to}`}
              variants={staggerItem}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/40 px-4 py-2"
            >
              <span className="text-sm text-muted-foreground">From</span>
              <span className="text-sm font-semibold text-primary">{t.from}</span>
              <span className="text-accent font-semibold">→</span>
              <span className="text-sm font-semibold text-primary">{t.to}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA card */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={emphasis}
          transition={{ delay: 0.35 }}
          className="mt-12"
        >
          <Card className="border-border bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/50 overflow-hidden relative">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-gradient-accent-subtle opacity-30" />
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-accent" />
            </div>

            <CardContent className="relative p-6 sm:p-8 lg:p-10">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <motion.p
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInUp}
                    transition={{ delay: 0.45 }}
                    className="text-xl font-semibold text-primary leading-snug"
                  >
                    Apply to join the next cohort.
                  </motion.p>
                  <motion.p
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInUp}
                    transition={{ delay: 0.55 }}
                    className="text-muted-foreground mt-3 leading-relaxed"
                  >
                    Slots are limited to maintain quality, feedback, and
                    accountability.
                  </motion.p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {trustPoints.map((p) => {
                      const Icon = p.icon;
                      return (
                        <div
                          key={p.label}
                          className="inline-flex items-center gap-2 rounded-full border border-border bg-background/25 px-4 py-2"
                        >
                          <Icon className="h-4 w-4 text-accent" />
                          <span className="text-sm text-foreground">
                            {p.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="lg:col-span-5 lg:text-right">
                  <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={scaleIn}
                    transition={{ delay: 0.65 }}
                    className="flex flex-col items-center lg:items-end gap-4"
                  >
                    <Button
                      size="lg"
                      className="text-lg px-8 py-6 hover:scale-[1.02] w-full sm:w-auto"
                      asChild
                    >
                      <a
                        href={GOOGLE_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apply to Join the Next Cohort
                      </a>
                    </Button>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      <span>No spam. Short form. Takes ~2 minutes.</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

