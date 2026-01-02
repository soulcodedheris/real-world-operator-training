import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useAnimationVariants } from "@/lib/animations";

export function FAQ() {
  const { ref, isInView } = useScrollReveal();
  const { fadeInUp } = useAnimationVariants();

  const faqs = [
    {
      question: "Will I make money immediately?",
      answer:
        "This program focuses on thinking, execution, and pathways. Income is a result, not a promise.",
    },
    {
      question: "Is this only for entrepreneurs?",
      answer:
        "No. It's for anyone who wants to be relevant and capable in the real world.",
    },
    {
      question: "What if I'm still in school?",
      answer: "This complements school by teaching what school doesn't.",
    },
    {
      question: "Is it online or physical?",
      answer: "Details will be shared with accepted participants.",
    },
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
          FREQUENTLY ASKED QUESTIONS
        </motion.h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg text-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

