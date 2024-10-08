import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import ScrollAnimation from "../../animation/ScrollAnimation/ScrollAnimation";
import { headingVariants, textVariants } from "../../animation/variants";
import businessprocess from "../../assets/images/business-process.webp";
import PrimaryButton from "../Form/PrimaryButton";

const BusinessProcesses = () => {
  return (
    <Flex flexDir={"column"} align={"center"} h={"auto"} m={4}>
      <ScrollAnimation variant={headingVariants}>
        <Heading fontFamily={"'Staatliches', display"} fontWeight={400}>
          Streamline Your Business Processes
        </Heading>
      </ScrollAnimation>
      <ScrollAnimation variant={textVariants}>
        <Text mt={4} fontFamily={"Montserrat, sans-serif"} textAlign={"center"}>
          Enhance your operations with our affordable BPO solutions. Our
          dedicated team offers efficient, reliable services customized to fit
          your business needs. Boost your productivity and reach your goals with
          our expert support. Discover More Get In Touch
        </Text>
      </ScrollAnimation>
      <ScrollAnimation variant={textVariants}>
        <Flex gap={4} my={8} flexDir={{ base: "column", md: "row" }}>
          <PrimaryButton Label="DISCOVER MORE" to="/contact" />
          <PrimaryButton Label="REACH OUT" to="/contact" />
        </Flex>
      </ScrollAnimation>
      <Flex w={"100%"} h={"100vh"}>
        <Image
          src={businessprocess}
          w={"100%"}
          objectFit={"cover"}
          alt="aboutimg2"
          h={"100%"}
          loading="lazy"
        />
      </Flex>
    </Flex>
  );
};

export default BusinessProcesses;
