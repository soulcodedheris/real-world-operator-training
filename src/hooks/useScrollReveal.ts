import { useInView } from "framer-motion";
import { useRef } from "react";

interface UseScrollRevealOptions {
  amount?: number;
  once?: boolean;
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const {
    amount = 0.1,
    once = true,
  } = options;

  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount,
    once,
  });

  return { ref, isInView };
}

