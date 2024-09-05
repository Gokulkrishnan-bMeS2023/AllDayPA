import { Heading, VStack, Text, Flex, Button } from "@chakra-ui/react";
import { FAQdata } from "./data";
import ScrollAnimation from "../../animation/ScrollAnimation/ScrollAnimation";
import { headingVariants, textVariants } from "../../animation/variants";

const FAQComts = () => {
  return (
    <VStack py={14} bg={"#fff"} m={2} px={2} color={"#3A3A3A"}>
      <ScrollAnimation variant={headingVariants}>
        <Heading fontFamily={"'Staatliches', display"} fontWeight={400}>
          Got a question? We’ve got answers.
        </Heading>
      </ScrollAnimation>
      <ScrollAnimation variant={textVariants}>
        <Text mt={2} fontFamily={"Montserrat, sans-serif"}>
          Explore our comprehensive BPO services designed to optimize business
          operations and enhance efficiency.
        </Text>
      </ScrollAnimation>
      <Flex flexDir={"column"} gap={2}>
        {FAQdata.map((faq) => (
          <Flex flexDir={"column"} key={faq.id} fontWeight={400} gap={4} py={4}>
            <ScrollAnimation variant={textVariants}>
              <Heading
                as={"h3"}
                fontSize={"20px"}
                fontFamily={"Montserrat, sans-serif"}
                w="100%"
              >
                {faq.question}
              </Heading>
            </ScrollAnimation>
            <ScrollAnimation variant={textVariants}>
              <Text
                pb={2}
                fontFamily={"Montserrat, sans-serif"}
                fontSize={"13px"}
                w="100%"
                borderBottom={faq.id === 4 ? "none" : "1px solid black"}
              >
                {faq.answer}
              </Text>
            </ScrollAnimation>
          </Flex>
        ))}
      </Flex>
      <Flex flexDir={"column"} align={"center"} gap={4} h={"35vh"} mt={10}>
        <ScrollAnimation variant={textVariants}>
          <Heading
            fontWeight={400}
            fontSize={{ base: "28px", md: "30px", lg: "40px" }}
            fontFamily={"Staatliches, display"}
          >
            Contact Us
          </Heading>
        </ScrollAnimation>
        <ScrollAnimation variant={textVariants}>
          <Text fontFamily={"Montserrat, sans-serif"} textAlign={"center"}>
            Get Immediate Support at My Blog
          </Text>
        </ScrollAnimation>
        <ScrollAnimation variant={textVariants}>
          <Button
            bg={"#0170B9"}
            color={"#fff"}
            w={"fit-content"}
            px={"20px"}
            py={"17px"}
            borderRadius={0}
          >
            FIND OUT MORE
          </Button>
        </ScrollAnimation>
      </Flex>
    </VStack>
  );
};

export default FAQComts;
