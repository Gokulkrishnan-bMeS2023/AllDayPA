import { motion, useInView } from "framer-motion";
import { VStack, StackProps } from "@chakra-ui/react";
import { ReactNode, useRef } from "react";

interface ScrollAnimationProps extends StackProps {
  variant: any;
  children: ReactNode;
}

const ScrollAnimation = ({
  variant,
  children,
  ...rest
}: ScrollAnimationProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false });
  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variant}
      style={{ width: "100%", overflow: "hidden" }}
    >
      <VStack {...rest}>{children}</VStack>
    </motion.div>
  );
};

export default ScrollAnimation;
