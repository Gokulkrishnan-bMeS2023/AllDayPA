import { Container, Flex, Image, Text } from "@chakra-ui/react";
import ScrollAnimation from "../../animation/ScrollAnimation/ScrollAnimation";
import { headingVariants } from "../../animation/variants";
import TextAnimation from "../../animation/TextAnimation/TextAnimation";
import aboutimg1 from "../../assets/images/Logo-removebg-preview.webp";
import aboutimg2 from "../../assets/images/About-Us.webp";

const AboutUs = () => {
  return (
    <Flex maxH={"auto"} my={8}>
      <Container>
        <Flex
          gap={{ base: "5%", md: "10%" }}
          flexDir={{ base: "column", md: "row" }}
        >
          <Flex flexDir={"column"} flex={3} align={"start"}>
            <TextAnimation text={"About us"} />
            <ScrollAnimation variant={headingVariants}>
              <Text fontSize={"16px"} lineHeight={"26px"} color={"#7A7A7A"}>
                To deliver exceptional BPO services that drive efficiency and
                growth for businesses. Starting as a small enterprise, we have
                evolved into a trusted leader in the sector, known for our
                commitment to quality and innovation. Our journey is marked by a
                relentless pursuit of excellence and a dedication to meeting the
                diverse needs of our clients.
                <br />
                <br />
                Our success is driven by a team of dedicated professionals who
                bring diverse skills and expertise to the table. From innovative
                thinkers to meticulous planners, our team works collaboratively
                to deliver outstanding results. We are passionate about what we
                do and committed to providing exceptional service that supports
                our clients’ growth and success.
              </Text>
            </ScrollAnimation>
          </Flex>
          <Flex
            flex={2}
            alignItems={"center"}
            justify={"space-evenly"}
            // flexDir={{ base: "column", md: "row" }}
            gap={4}
          >
            <Flex>
              <Image
                src={aboutimg1}
                alt="About Us"
                width={"130px"}
                height={"400px"}
                loading="lazy"
                objectFit={"contain"}
              />
            </Flex>
            <Flex>
              <Image
                src={aboutimg2}
                alt="About Us"
                width={"230px"}
                height={"400px"}
                loading="lazy"
                objectFit={"contain"}
              />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AboutUs;
