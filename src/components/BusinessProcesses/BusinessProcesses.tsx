import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import ScrollAnimation from "../../animation/ScrollAnimation/ScrollAnimation";
import { headingVariants, textVariants } from "../../animation/variants";

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
          <Button
            bg={"#0170B9"}
            color={"#fff"}
            _hover={{ bg: "#0170B9" }}
            px={"20px"}
            py={"17px"}
            borderRadius={0}
          >
            DISCOVER MORE
          </Button>
          <Button
            bg={"#0170B9"}
            color={"#fff"}
            _hover={{ bg: "#0170B9" }}
            px={"20px"}
            py={"17px"}
            borderRadius={0}
          >
            GET IN TOUCH
          </Button>
        </Flex>
      </ScrollAnimation>
      <Flex w={"100%"} h={"100vh"}>
        <Image
          src="assets/images/business-process.webp"
          w={"100%"}
          objectFit={"cover"}
        />
      </Flex>
    </Flex>
  );
};

export default BusinessProcesses;
