import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Brain,
  CheckCircle2,
  ChevronRight,
  Map,
  Rocket,
  Route,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useAnimationVariants } from "@/lib/animations";
import { cn } from "@/lib/utils";

type Phase = {
  number: string;
  title: string;
  weeks: string;
  description: string;
  learnings: string[];
  result: string;
  icon: React.ComponentType<{ className?: string }>;
};

function PhaseDetail({
  phase,
  staggerContainer,
  staggerItem,
}: {
  phase: Phase;
  staggerContainer: Parameters<typeof motion.ul>[0]["variants"];
  staggerItem: Parameters<typeof motion.li>[0]["variants"];
}) {
  const DetailIcon = phase.icon;
  return (
    <div className="h-full flex flex-col">
      {/* Top row: phase badge + meta */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="size-14 aspect-square rounded-full bg-gradient-accent text-accent-foreground flex items-center justify-center font-bold text-2xl shadow-glow-accent">
            {phase.number}
          </div>
          <div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-semibold uppercase tracking-wider">
              <DetailIcon className="h-4 w-4 text-accent" />
              {phase.weeks}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mt-2 leading-tight">
              {phase.title}
            </h3>
            <p className="text-lg text-foreground mt-3 max-w-2xl leading-relaxed">
              {phase.description}
            </p>
          </div>
        </div>

        {/* Result pill */}
        <div className="sm:text-right">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-gradient-accent-subtle px-4 py-2 whitespace-nowrap">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-sm font-semibold text-muted-foreground">
              Result:
            </span>
            <span className="text-sm font-semibold text-primary">
              {phase.result}
            </span>
          </div>
        </div>
      </div>

      {/* Learnings */}
      <div className="mt-8 grid sm:grid-cols-2 gap-6 flex-1">
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            You&apos;ll learn
          </p>
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.06 }}
            className="space-y-3"
          >
            {phase.learnings.map((learning) => (
              <motion.li
                key={learning}
                variants={staggerItem}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground leading-relaxed">
                  {learning}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Micro “preview” card */}
        <div className="rounded-2xl border border-border bg-background/25 p-5 sm:p-6 self-start">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            What changes for you
          </p>
          <p className="text-xl font-bold text-primary leading-snug">
            You leave this phase with{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              {phase.result}
            </span>
          </p>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
            It&apos;s designed to feel practical, not theoretical. You understand
            the logic, then you apply it.
          </p>
        </div>
      </div>
    </div>
  );
}

export function Phases() {
  const { ref, isInView } = useScrollReveal();
  const { fadeInUp, staggerContainer, staggerItem } = useAnimationVariants();
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = React.useState(0);

  const phases: Phase[] = [
    {
      number: "1",
      title: "RESET YOUR THINKING",
      weeks: "Weeks 1–3",
      description:
        "Unlearn school-based thinking and install real-world logic.",
      learnings: [
        "How value is created",
        "Why most people stay stuck",
        "How to think in outcomes, not effort",
      ],
      result: "Mental clarity.",
      icon: Brain,
    },
    {
      number: "2",
      title: "SELF-MAPPING & POSITIONING",
      weeks: "Weeks 4–6",
      description: "Understand where you fit in the real world.",
      learnings: [
        "Strength discovery",
        "Skill identification",
        "Decision filters (what to pursue vs ignore)",
      ],
      result: "Direction without confusion.",
      icon: Map,
    },
    {
      number: "3",
      title: "REAL-WORLD EXECUTION",
      weeks: "Weeks 7–9",
      description: "Apply everything through practical tasks.",
      learnings: [
        "Solve real problems",
        "Practice communication and leverage",
        "Build something small but real",
      ],
      result: "Confidence from action.",
      icon: Rocket,
    },
    {
      number: "4",
      title: "PATHWAY & NEXT STEPS",
      weeks: "Weeks 10–12",
      description: "Design your next 6–12 months with clarity.",
      learnings: [
        "Lock in a realistic path",
        "Avoid returning to confusion",
        "Learn how to compound skills over time",
      ],
      result: "Momentum and certainty.",
      icon: Route,
    },
  ];

  const active = phases[activeIndex];

  const accordionValue = `phase-${activeIndex}`;

  function handleAccordionChange(value: string | undefined) {
    if (!value) return;
    const idx = Number(value.replace("phase-", ""));
    if (!Number.isNaN(idx)) setActiveIndex(idx);
  }

  return (
    <section
      id="phases"
      className="min-h-screen min-h-[100svh] flex items-start justify-center px-4 sm:px-6 lg:px-8 bg-muted pt-24 pb-28 relative overflow-hidden"
    >
      {/* Ambient background accents (subtle, decorative) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-gradient-accent opacity-[0.10] blur-3xl" />
        <div className="absolute -bottom-56 -right-56 h-[680px] w-[680px] rounded-full bg-gradient-accent opacity-[0.08] blur-3xl" />
        <div className="absolute inset-0 bg-gradient-dark opacity-40" />
      </div>

      <div ref={ref} className="max-w-container mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 tracking-tight"
          >
            THE 4-PHASE TRANSFORMATION
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            A structured journey from confusion to capability, with real
            execution in every phase.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          transition={{ staggerChildren: 0.12 }}
          className="grid lg:grid-cols-12 gap-6 lg:gap-8 relative z-10"
        >
          {/* Mobile: accordion (no horizontal scrolling) */}
          <motion.div variants={staggerItem} className="md:hidden">
            <Card className="border-border bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/50 overflow-hidden relative">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-gradient-accent-subtle opacity-25" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-accent" />
              </div>

              <CardContent className="relative p-4">
                <Accordion
                  type="single"
                  collapsible
                  value={accordionValue}
                  onValueChange={handleAccordionChange}
                  className="w-full"
                >
                  {phases.map((phase, idx) => {
                    const Icon = phase.icon;
                    return (
                      <AccordionItem
                        key={phase.number}
                        value={`phase-${idx}`}
                        className="border-border"
                      >
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-start gap-3 min-w-0 pr-3">
                            <div className="size-10 aspect-square rounded-full bg-gradient-accent-subtle text-accent flex items-center justify-center font-bold ring-1 ring-border/60">
                              {phase.number}
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                <Icon className="h-4 w-4 text-accent" />
                                {phase.weeks}
                              </div>
                              <div className="font-semibold text-primary leading-snug mt-1">
                                {phase.title}
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                          <div className="pt-2">
                            <PhaseDetail
                              phase={phase}
                              staggerContainer={staggerContainer}
                              staggerItem={staggerItem}
                            />
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>

          {/* Phase selector */}
          <motion.div variants={staggerItem} className="hidden md:block lg:col-span-4">
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
              {phases.map((phase, idx) => {
                const Icon = phase.icon;
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={phase.number}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-current={isActive ? "step" : undefined}
                    className={cn(
                      // Fixed height prevents “wobble” when titles/descriptions vary in length.
                      "text-left min-w-[220px] sm:min-w-[260px] md:min-w-0 rounded-xl border px-4 py-4 transition-all h-[112px]",
                      "bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/50",
                      "hover:border-accent/50 hover:shadow-glow-accent",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      isActive
                        ? "border-accent/60 shadow-glow-accent"
                        : "border-border"
                    )}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div
                          className={cn(
                            "size-10 aspect-square rounded-full flex items-center justify-center font-bold ring-1 ring-border/60",
                            isActive
                              ? "bg-gradient-accent text-accent-foreground shadow-glow-accent ring-accent/40"
                              : "bg-gradient-accent-subtle text-accent"
                          )}
                        >
                          {phase.number}
                        </div>
                        <div className="min-w-0 overflow-hidden">
                          <div className="flex items-center gap-2 mb-1">
                            <Icon
                              className={cn(
                                "h-4 w-4",
                                isActive ? "text-accent" : "text-muted-foreground"
                              )}
                            />
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider whitespace-nowrap">
                              {phase.weeks}
                            </span>
                          </div>
                          <div className="font-semibold text-primary leading-snug line-clamp-1">
                            {phase.title}
                          </div>
                          <div className="text-sm text-muted-foreground mt-1 line-clamp-2 leading-snug">
                            {phase.description}
                          </div>
                        </div>
                      </div>

                      <ChevronRight
                        className={cn(
                          "h-5 w-5 mt-1 transition-transform flex-shrink-0",
                          isActive
                            ? "text-accent translate-x-0.5"
                            : "text-muted-foreground"
                        )}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Featured phase panel */}
          <motion.div variants={staggerItem} className="hidden md:block lg:col-span-8">
            <Card className="border-border bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/50 overflow-hidden relative">
              {/* Decorative gradient frame */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-gradient-accent-subtle opacity-30" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-accent" />
                <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-accent opacity-[0.10] blur-3xl" />
              </div>

              {/* Stable height reduces layout shift when switching phases (without looking “empty”) */}
              <CardContent className="relative p-6 sm:p-8 lg:p-10 min-h-[480px] flex flex-col">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={active.number}
                    className="h-full flex flex-col"
                    initial={
                      prefersReducedMotion
                        ? { opacity: 1 }
                        : { opacity: 0, y: 12 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    exit={
                      prefersReducedMotion
                        ? { opacity: 1 }
                        : { opacity: 0, y: -8 }
                    }
                    transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
                  >
                    <PhaseDetail
                      phase={active}
                      staggerContainer={staggerContainer}
                      staggerItem={staggerItem}
                    />

                    <div className="mt-6">
                      <Button
                        variant="outline"
                        className="w-full justify-between"
                        onClick={() =>
                          setActiveIndex((i) => Math.min(i + 1, phases.length - 1))
                        }
                        disabled={activeIndex === phases.length - 1}
                      >
                        Next phase
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
