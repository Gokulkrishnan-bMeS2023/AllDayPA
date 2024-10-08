import { Flex, Heading, Image, Text, HStack, VStack } from "@chakra-ui/react";
import ImageComts from "../../components/ImageComts/ImageComts";
import ServicesCard from "../../components/ServicesCard/ServicesCard";
import {
  servicesdata,
  servicesdata1,
} from "../../components/ServicesCard/data";
import PageTransitions from "../../animation/PageTransitions/PageTransitions";
import ScrollAnimation from "../../animation/ScrollAnimation/ScrollAnimation";
import { headingVariants, textVariants } from "../../animation/variants";
import services from "../../assets/images/services.webp";
import PrimaryButton from "../../components/Form/PrimaryButton";

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
              src={services}
              alt="servicesimg"
              objectFit={"cover"}
              h={"272px"}
              w={"100%"}
              loading="lazy"
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
                <PrimaryButton Label="DISCOVER MORE" to="/contact" />
                <PrimaryButton Label="REACH OUT" to="/contact" />
              </Flex>
            </ScrollAnimation>
          </Flex>
        </HStack>
      </VStack>
    </PageTransitions>
  );
};

export default Services;
