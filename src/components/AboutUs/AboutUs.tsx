import { Container, Flex, Image, Text } from "@chakra-ui/react";
import ScrollAnimation from "../../animation/ScrollAnimation/ScrollAnimation";
import { headingVariants } from "../../animation/variants";
import TextAnimation from "../../animation/TextAnimation/TextAnimation";

const AboutUs = () => {
  return (
    <Flex
      maxH={"auto"}
      // py={{ base: "10px", md: "23px", lg: "43px" }}
      my={8}
    >
      <Container>
        <Flex gap={"10%"} flexDir={{ base: "column", md: "row" }}>
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
            flexDir={{ base: "column", md: "row" }}
          >
            <Flex>
              <Image
                src="assets/images/Logo-removebg-preview.webp"
                alt=""
                height={"400px"}
                width={"100%"}
              />
            </Flex>
            <Flex>
              <Image
                src="assets/images/About-Us.webp"
                alt="img"
                width={"100%"}
                height={"400px"}
              />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AboutUs;
