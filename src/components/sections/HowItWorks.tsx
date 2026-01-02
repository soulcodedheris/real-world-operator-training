import { motion } from "framer-motion";
import { Clock, Users, Video, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useAnimationVariants } from "@/lib/animations";

export function HowItWorks() {
  const { ref, isInView } = useScrollReveal();
  const { fadeInUp, staggerContainer, scaleIn } = useAnimationVariants();

  const items = [
    {
      title: "Duration",
      description: "12 Weeks",
      icon: Clock,
    },
    {
      title: "Format",
      description: "Small cohort (5–15 people)",
      icon: Users,
    },
    {
      title: "Delivery",
      description: "Live sessions + guided execution",
      icon: Video,
    },
    {
      title: "Support",
      description: "Feedback, accountability, structure",
      icon: MessageCircle,
    },
  ];

  return (
    <section className="min-h-screen min-h-[100svh] flex items-center px-4 sm:px-6 lg:px-8 py-section-normal bg-background">
      <div ref={ref} className="max-w-container mx-auto">
        <motion.h2
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-2xl sm:text-3xl font-semibold text-primary mb-16 text-center"
        >
          HOW THE PROGRAM WORKS
        </motion.h2>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8"
        >
          {items.map((item, index) => {
            const Icon = item.icon;
            // Staggered card heights for visual interest
            const heightVariants = [
              "lg:h-[280px]",
              "lg:h-[300px]",
              "lg:h-[280px]",
              "lg:h-[300px]",
            ];
            return (
              <motion.div
                key={item.title}
                variants={scaleIn}
                className={index % 2 === 1 ? "lg:mt-8" : ""}
              >
                <Card
                  className={`border-border h-full flex flex-col ${heightVariants[index]}`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-accent-subtle flex items-center justify-center">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-primary">
                        {item.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 flex-1">
                    <p className="text-foreground text-center text-base leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.p
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.5 }}
          className="text-lg text-foreground text-center max-w-2xl mx-auto"
        >
          You don't just learn. You apply, execute, and reflect.
        </motion.p>
      </div>
    </section>
  );
}
