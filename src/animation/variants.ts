import { Variants } from "framer-motion";

//header
export const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

//menu

export const menuVariants = {
  closed: { height: 0, opacity: 0 },
  open: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

//banner
export const letterVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: [1, 1.5, 1],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const blinkVariant = {
  animate: { opacity: [1, 0, 1] },
  transition: { duration: 1, repeat: Infinity, ease: "easeInOut" },
};

export const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      delay: 0.2,
    },
  },
};

//BPO

export const faqItemVariants: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      opacity: { duration: 0.3 },
    },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      opacity: { duration: 0.3 },
    },
  },
};

//contact

export const imageVariants3 = {
  hidden: { y: "20%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

export const headingVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      duration: 0.8,
    },
  },
};

export const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
