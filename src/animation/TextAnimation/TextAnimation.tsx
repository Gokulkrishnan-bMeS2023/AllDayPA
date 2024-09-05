import { Box, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Motion-enabled Text component
const MotionText = motion(Text);

// Animation variants for the container (controls stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

// Animation variants for each letter
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

interface TextAnimationProps {
  text: string;
}

const TextAnimation = ({ text }: TextAnimationProps) => {
  // Reference for the section to detect when it's in view
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false });

  // Split the text into an array of characters
  const letters = text.split("");

  return (
    <Box ref={sectionRef} overflow="hidden" my={6}>
      <MotionText
        as="h1"
        fontSize={{ base: "35px", md: "40px", lg: "60px" }}
        fontWeight="700"
        color="teal.500"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {letters.map((letter, index) => (
          <MotionText
            as="span"
            key={index}
            variants={letterVariants}
            color="#0170B9"
            display="inline-block"
            style={{ marginRight: letter === " " ? "0.25rem" : "0" }}
          >
            {letter}
          </MotionText>
        ))}
      </MotionText>
    </Box>
  );
};

export default TextAnimation;
