import React, { useState, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  Box,
  Text,
  Icon,
  Flex,
  Image,
  Heading,
  Container,
} from "@chakra-ui/react";
import { imageVariants, faqItemVariants } from "../../animation/variants";
import { faqData } from "./data";
import TextAnimation from "../../animation/TextAnimation/TextAnimation";
import CardAnimation from "../../animation/CardAnimation/CardAnimation";
import { FaCaretRight, FaCaretUp } from "../../assets/icons/icons";

interface FAQItem {
  question: string;
  answer: string;
}

const OurServices: React.FC<{
  heading: string;
  imgUrl: string;
  items: FAQItem[];
}> = ({ heading, imgUrl, items }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false });

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box width="100%" maxWidth="600px" bg={"#fff"} height={"fit-content"}>
      <Box textAlign="start">
        <motion.div
          ref={sectionRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={imageVariants}
        >
          <Image
            src={imgUrl}
            alt="FAQ Image"
            width="100%"
            height="200px"
            maxH={"100%"}
            objectFit={"cover"}
          />
        </motion.div>
        <Heading
          // as={"h3"}
          fontSize={{ base: "18px", md: "18px", lg: "20px" }}
          mx={2}
          my={4}
        >
          {heading}
        </Heading>
      </Box>

      {/* FAQ Items */}
      {items.map((item, index) => {
        const isOpen = expandedIndex === index;
        return (
          <Box key={index} borderBottomWidth={"1px"} overflow="hidden">
            <motion.div
              onClick={() => toggleFAQ(index)}
              initial={false}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Flex
                py={3}
                cursor="pointer"
                align="center"
                justifyContent={"start"}
                gap={2}
                color={"#0170B9"}
                ml={2}
              >
                <Icon as={isOpen ? FaCaretUp : FaCaretRight} />
                <Text fontWeight="bold">{item.question}</Text>
              </Flex>
            </motion.div>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={faqItemVariants}
                  style={{ overflow: "hidden" }}
                >
                  <Box px={4} py={2} bg="white">
                    <Text>{item.answer}</Text>
                  </Box>
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        );
      })}
    </Box>
  );
};

const FAQ: React.FC = () => {
  return (
    <Container my={10}>
      <Flex direction={"column"}>
        <TextAnimation text="Our Services" />
        <Box
          display={"flex"}
          flexDir={{ base: "column", md: "row" }}
          gap={{ base: 2, md: 4, lg: 8 }}
        >
          {faqData.map((section, index) => (
            <CardAnimation  key={section.id} delayOrder={index}>
              <OurServices
                heading={section.heading}
                imgUrl={section.imgUrl}
                items={section.items}
              />
            </CardAnimation>
          ))}
        </Box>
      </Flex>
    </Container>
  );
};

export default FAQ;
