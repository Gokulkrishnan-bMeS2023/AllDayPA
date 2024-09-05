import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  HStack,
  VStack,
} from "@chakra-ui/react";
import ImageComts from "../../components/ImageComts/ImageComts";
import ServicesCard from "../../components/ServicesCard/ServicesCard";
import {
  servicesdata,
  servicesdata1,
} from "../../components/ServicesCard/data";
import PageTransitions from "../../animation/PageTransitions/PageTransitions";
import ScrollAnimation from "../../animation/ScrollAnimation/ScrollAnimation";
import { headingVariants, textVariants } from "../../animation/variants";

const Services = () => {
  return (
    <PageTransitions>
      <VStack color={"#3a3a3a"}>
        <ImageComts
          heading="Your Go-To for BPO Solutions"
          heading2="Streamline Business Processes with Our BPO Services"
        />
        <Flex flexDir={"column"} gap={4}>
          <ServicesCard
            heading={"Innovative BPO Solutions for Businesses"}
            heading2={
              "Elevate your business efficiency with our BPO services. Expert team available 24/7 to streamline your processes."
            }
            servicesdata={servicesdata}
          />
          <ServicesCard
            heading={"Innovative BPO Solutions for Businesses"}
            heading2={
              "Elevate your business efficiency with our BPO services. Expert team available 24/7 to streamline your processes."
            }
            servicesdata={servicesdata1}
          />
        </Flex>
        <HStack
          gap={6}
          p={4}
          w={"100%"}
          flexDir={{ base: "column", md: "row" }}
        >
          <Flex flex={2} w={"100%"}>
            <Image
              src="assets/images/services.png"
              alt="#"
              objectFit={"cover"}
              h={"272px"}
              w={"100%"}
            />
          </Flex>
          <Flex flexDir={"column"} align={"start"} h={"auto"} m={4} flex={3}>
            <ScrollAnimation variant={headingVariants}>
              <Heading fontFamily={"'Staatliches', display"} fontWeight={400}>
                Optimize Your Business Today
              </Heading>
            </ScrollAnimation>
            <ScrollAnimation variant={textVariants}>
              <Text mt={4} fontFamily={"Montserrat, sans-serif"}>
                Leverage our expert BPO services to streamline your operations.
                We’re available around the clock to ensure your business is
                always running smoothly.
              </Text>
            </ScrollAnimation>
            <ScrollAnimation variant={textVariants}>
              <Flex
                gap={4}
                my={8}
                flexDir={{ base: "column", md: "row" }}
                fontFamily={"Montserrat, sans-serif"}
              >
                <Button
                  bg={"#0170B9"}
                  color={"#fff"}
                  _hover={{ bg: "#0170B9" }}
                  px={"20px"}
                  py={"17px"}
                  borderRadius={0}
                  fontSize={"12px"}
                  letterSpacing={1}
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
                  fontSize={"12px"}
                  letterSpacing={1}
                >
                  REACH OUT
                </Button>
              </Flex>
            </ScrollAnimation>
          </Flex>
        </HStack>
      </VStack>
    </PageTransitions>
  );
};

export default Services;
