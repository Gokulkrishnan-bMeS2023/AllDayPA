import { motion } from "framer-motion";
import React from "react";

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    duration: 0.7,
    ease: "easeInOut",
  },
};

interface props {
  children: React.ReactNode;
}

const PageTransitions = ({ children }: props) => {
  return <motion.div {...pageTransition}>{children}</motion.div>;
};

export default PageTransitions;
