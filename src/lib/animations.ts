import type { Variants } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function useAnimationVariants() {
  const prefersReducedMotion = useReducedMotion();

  const fadeInUp: Variants = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.5,
        ease: "easeOut",
      },
    },
  };

  const fadeIn: Variants = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.4,
        ease: "easeOut",
      },
    },
  };

  const fadeInLeft: Variants = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      x: prefersReducedMotion ? 0 : -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.5,
        ease: "easeOut",
      },
    },
  };

  const fadeInRight: Variants = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      x: prefersReducedMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.5,
        ease: "easeOut",
      },
    },
  };

  const scaleIn: Variants = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      scale: prefersReducedMotion ? 1 : 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.4,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer: Variants = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const staggerItem: Variants = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.4,
        ease: "easeOut",
      },
    },
  };

  const emphasis: Variants = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      scale: prefersReducedMotion ? 1 : 0.98,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.5,
        ease: "easeOut",
      },
    },
  };

  return {
    fadeInUp,
    fadeIn,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggerContainer,
    staggerItem,
    emphasis,
  };
}

