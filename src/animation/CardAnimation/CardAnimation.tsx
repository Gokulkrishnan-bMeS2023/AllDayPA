import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Box } from "@chakra-ui/react";

// Motion-enabled Box for the card animation
const MotionBox = motion(Box);

// CardAnimation component to wrap around other components
interface CardAnimationProps {
  children: ReactNode;
  delayOrder: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      delay: i * 0.3,
    },
  }),
};

const CardAnimation = ({ children, delayOrder }: CardAnimationProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false });
  return (
    <MotionBox
      ref={sectionRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={delayOrder}
      mb={4}
      p={4}
      border="1px solid #e0e0e0"
      borderRadius="md"
      boxShadow="lg"
      w={"100%"}
      bg={"#fff"}
    >
      {children}
    </MotionBox>
  );
};

export default CardAnimation;
