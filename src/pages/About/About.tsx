import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import DedicatedProfessionals from "../../components/DedicatedProfessionals/DedicatedProfessionals";
import ClientSuccessStories from "../../components/ClientSuccessStories/ClientSuccessStories";
import BusinessProcesses from "../../components/BusinessProcesses/BusinessProcesses";
import ImageComts from "../../components/ImageComts/ImageComts";
import PageTransitions from "../../animation/PageTransitions/PageTransitions";
import ScrollAnimation from "../../animation/ScrollAnimation/ScrollAnimation";
import { headingVariants, textVariants } from "../../animation/variants";
import AboutImg from "../../assets/images/The-AllDayPA-Journey.webp";

const About = () => {
  return (
    <PageTransitions>
      <ImageComts
        heading={" Streamlined BPO Solutions for Your Business"}
        heading2={
          " We focus on enhancing your business efficiency with cost-effective BPO solutions."
        }
      />
      <ScrollAnimation variant={headingVariants}>
        <Heading
          as={"h1"}
          textAlign={"center"}
          fontFamily={"'Staatliches',display"}
          fontWeight={400}
          my={4}
        >
          Cost-Effective BPO Solutions
        </Heading>
      </ScrollAnimation>
      <Flex flexDir={"column"} gap={6} mx={4} my={14}>
        <Flex align={"center"} justify={"center"} w={"100%"}>
          <ScrollAnimation variant={textVariants}>
            <Text
              fontWeight={400}
              fontSize={"16px"}
              color={"#3a3a3a3aa"}
              fontFamily={"'Montserrat', sans-serif"}
            >
              Streamline Your Business Processes with our BPO Solutions. Boost
              efficiency and cut costs with our expert services.
            </Text>
          </ScrollAnimation>
        </Flex>
        <Flex align={"center"} justify={"center"}>
          <Image
            src={AboutImg}
            objectFit={"cover"}
            alt="aboutimg"
            h={{ base: "169px", md: "421px", lg: "550px" }}
            w={{ base: "100%", md: "100%", lg: "67%" }}
          />
        </Flex>
      </Flex>
      <DedicatedProfessionals />
      <ClientSuccessStories />
      <BusinessProcesses />
    </PageTransitions>
  );
};

export default About;
