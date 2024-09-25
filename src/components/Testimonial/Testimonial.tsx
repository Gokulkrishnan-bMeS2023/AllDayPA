import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, VStack, Text, Avatar } from "@chakra-ui/react";
import { testimonials } from "./data";
import ArrowButton from "../Form/ArrowButton";
import { variants } from "../../animation/variants";

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

// Swipe confidence and power calculation
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const TestimonialSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const testimonialIndex = wrap(0, testimonials.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <Box position="relative" m={4} overflow="hidden" minH={"300px"}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <VStack
            spacing={4}
            p={6}
            borderRadius="md"
            bg={"#fff"}
            boxShadow="lg"
            height="100%"
            justifyContent="center"
          >
            <Avatar
              src={testimonials[testimonialIndex].authorImage}
              name={testimonials[testimonialIndex].author}
              size="lg"
              loading="lazy"
            />
            <Text
              fontWeight="bold"
              fontSize={{ base: "24px", md: "40px" }}
              color={"#0170B9"}
              textAlign={"center"}
            >
              {testimonials[testimonialIndex].author}
            </Text>
            <Text fontSize={"16px"} textAlign="center" fontStyle="italic">
              "{testimonials[testimonialIndex].text}"
            </Text>
          </VStack>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <ArrowButton direction={-1} onClick={() => paginate(-1)} />
      <ArrowButton direction={1} onClick={() => paginate(1)} />
    </Box>
  );
};

export default TestimonialSlider;
