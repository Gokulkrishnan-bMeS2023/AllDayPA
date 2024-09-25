import {
  Flex,
  Heading as ChakraHeading,
  Text as ChakraText,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { headingVariants, textVariants } from "../../animation/variants";
import ContactForm from "../Form/Contact​Form";

const MotionHeading = motion(ChakraHeading);
const MotionText = motion(ChakraText);
const MotionFlex = motion(Flex);

const ContactComts = () => {
  return (
    <MotionFlex
      align={"center"}
      justify={"center"}
      my={6}
      initial="hidden"
      animate="visible"
      variants={textVariants}
      id="formdiv"
    >
      <MotionFlex
        flexDir={{ base: "column", md: "row" }}
        align={"center"}
        justify={"center"}
        w={{ base: "100%", md: "75%" }}
        gap={{ base: 10, md: 10, lg: 10 }}
        m={4}
      >
        <MotionFlex flexDir="column" flex={1} color={"#3A3A3A"} gap={4}>
          <MotionHeading
            fontWeight={"36px"}
            fontFamily={"Staatliches, display"}
            variants={headingVariants}
          >
            Contact Us for Streamlined BPO Solutions
          </MotionHeading>
          <MotionText
            fontSize={{ base: "14px", md: "16px" }}
            fontFamily={"Montserrat, sans-serif"}
            variants={textVariants}
          >
            Isher House, Peel Cross Rd, <br /> Salford M5 4DT, <br />
            United Kingdom.
            <br />
            <strong>Phone – </strong>+44 161 909 6900 <br />
            <strong>Email – </strong>
            info@alldaypa.com
          </MotionText>
        </MotionFlex>
        <MotionFlex flex={1} w={"100%"} variants={textVariants}>
          <ContactForm />
        </MotionFlex>
      </MotionFlex>
    </MotionFlex>
  );
};

export default ContactComts;
