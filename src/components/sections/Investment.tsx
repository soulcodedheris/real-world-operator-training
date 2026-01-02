import { motion } from "framer-motion";
import { CheckCircle2, Clock, CreditCard, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useAnimationVariants } from "@/lib/animations";

export function Investment() {
  const { ref, isInView } = useScrollReveal();
  const { fadeInUp, staggerContainer, staggerItem } = useAnimationVariants();

  const timeItems = [
    "2–3 hours per week",
    "Execution > attendance",
    "Serious participants see clarity early (Week 1–2)",
  ];

  const investmentItems = [
    "Clarity",
    "Capability",
    "Direction",
    "Future leverage",
  ];

  return (
    <section className="min-h-screen min-h-[100svh] flex items-start justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-28 bg-background relative overflow-hidden">
      {/* Ambient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-gradient-accent opacity-[0.08] blur-3xl" />
        <div className="absolute -bottom-56 -right-56 h-[680px] w-[680px] rounded-full bg-gradient-accent opacity-[0.06] blur-3xl" />
      </div>
      <div ref={ref} className="max-w-container mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-12 relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
            Time + Investment
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mt-3 leading-relaxed">
            Clear expectations up front, so you can commit with confidence.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          transition={{ staggerChildren: 0.12 }}
          className="grid lg:grid-cols-2 gap-6 lg:gap-8 relative z-10"
        >
          {/* Time Commitment card */}
          <motion.div variants={staggerItem}>
            <Card className="border-border bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/50 overflow-hidden relative h-full">
              <div className="pointer-events-none absolute top-0 left-0 right-0 h-1 bg-gradient-accent" />
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      <Clock className="h-4 w-4 text-accent" />
                      Time commitment
                    </div>
                    <h3 className="text-2xl font-bold text-primary mt-2">
                      2–3 hours / week
                    </h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      Small weekly effort, designed for consistency.
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 rounded-full border border-accent/30 bg-gradient-accent-subtle px-4 py-2">
                    <Sparkles className="h-4 w-4 text-accent" />
                    <span className="text-sm font-semibold text-primary whitespace-nowrap">
                      Execution‑first
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    What that looks like
                  </p>
                  <motion.ul
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.06 }}
                    className="space-y-3"
                  >
                    {timeItems.map((item) => (
                      <motion.li
                        key={item}
                        variants={staggerItem}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground leading-relaxed">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Investment card */}
          <motion.div variants={staggerItem}>
            <Card className="border-border bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/50 overflow-hidden relative h-full">
              <div className="pointer-events-none absolute top-0 left-0 right-0 h-1 bg-gradient-accent" />
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      <CreditCard className="h-4 w-4 text-accent" />
                      Investment
                    </div>
                    <h3 className="text-2xl font-bold text-primary mt-2">
                      ₦150,000 – ₦300,000
                    </h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      Depending on cohort size and bonuses.
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 rounded-full border border-border bg-background/25 px-4 py-2">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-sm font-semibold text-primary whitespace-nowrap">
                      Payoff‑focused
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      You&apos;re investing in
                    </p>
                    <motion.ul
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                      transition={{ staggerChildren: 0.06 }}
                      className="space-y-3"
                    >
                      {investmentItems.map((item) => (
                        <motion.li
                          key={item}
                          variants={staggerItem}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-foreground leading-relaxed">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>

                  <div className="rounded-2xl border border-border bg-background/25 p-5 sm:p-6 self-start">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Bottom line
                    </p>
                    <p className="text-xl font-bold text-primary leading-snug">
                      You&apos;re paying for{" "}
                      <span className="bg-gradient-accent bg-clip-text text-transparent">
                        direction + execution.
                      </span>
                    </p>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      Not information. Not hype. Structure, feedback, and a real
                      pathway you can follow.
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                      <Sparkles className="h-4 w-4 text-accent" />
                      Results depend on execution.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

