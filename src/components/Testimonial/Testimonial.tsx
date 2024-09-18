import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, IconButton, VStack, Text, Avatar } from "@chakra-ui/react";
import FAQImg1 from "../../assets/images/testimonial-1.webp";
import FAQImg2 from "../../assets/images/testimonial-2.webp";
import { FaArrowLeft, FaArrowRight } from "../../assets/icons/icons";

// Sample testimonial data
const testimonials = [
  {
    text: "Working with All Day Pa has been a game-changer for us. Their services are top-notch and cost-effective.",
    author: "Emily Brown",
    authorImage: FAQImg1,
  },
  {
    text: "All Day Pa has significantly increased our efficiency and allowed us to focus on growth. Highly recommended!",
    author: "Jane Smith",
    authorImage: FAQImg2,
  },
];

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

// Animation variants
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
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
      <IconButton
        aria-label="Previous"
        icon={<FaArrowLeft />}
        onClick={() => paginate(-1)}
        variant="ghost"
        colorScheme="teal"
        position="absolute"
        top="50%"
        left="10px"
        transform="translateY(-50%)"
        zIndex={1}
      />
      <IconButton
        aria-label="Next"
        icon={<FaArrowRight />}
        onClick={() => paginate(1)}
        variant="ghost"
        colorScheme="teal"
        position="absolute"
        top="50%"
        right="10px"
        transform="translateY(-50%)"
        zIndex={1}
      />
    </Box>
  );
};

export default TestimonialSlider;
