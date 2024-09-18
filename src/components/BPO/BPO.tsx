import { Box, Container, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { features } from "./data";
import TextAnimation from "../../animation/TextAnimation/TextAnimation";
import CardAnimation from "../../animation/CardAnimation/CardAnimation";
import { Link } from "react-router-dom";
import ImgBPO from "../../assets/images/The-AllDayPA-Journey.webp"

const BPO = () => {
  return (
    <Box height={"auto"} my={10}>
      <Container>
        <TextAnimation text="Why choose us" />
        <Flex gap={4} flexDir={{ base: "column", md: "row" }}>
          <Flex
            flex={1}
            bg={"red"}
            bgSize="cover"
            bgPosition="center"
            bgImage={ImgBPO}
            bgColor="rgba(0, 0, 0, 0.46)"
            backgroundBlendMode="overlay"
            p={4}
          >
            <Heading
              // as={"h3"}
              flex={1}
              lineHeight={10}
              fontSize={"40px"}
              // wordBreak="break-word"
              fontWeight={"bold"}
              color={"#fff"}
              // maxWidth={{ base: "100%", md: "80%" }}
            >
              BPO services designed to streamline your operations and enhance
              overall productivity
            </Heading>
          </Flex>

          <Grid
            flex={2}
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            gap={4}
          >
            {features.map((feature, index) => (
              <CardAnimation key={feature.id} delayOrder={index}>
                <Flex
                  p={4}
                  gap={4}
                  // key={index}
                  bg={"#fff"}
                  flexDir={{ base: "column", lg: "row" }}
                  align={{ base: "center", lg: "initial" }}
                  h={"100%"}
                >
                  <Box w={"fit-content"}>
                    <Box
                      border={"3px solid #0170B9"}
                      p={"7px"}
                      borderRadius={"50%"}
                    >
                      <feature.icon fontSize={"15px"} color="#0170B9" />
                    </Box>
                  </Box>
                  <Flex flexDir={"column"}>
                    <Heading
                      // as={"h6"}
                      fontSize={"22px"}
                      fontWeight={"bold"}
                      fontFamily={"Montserrat, sans-serif"}
                      textAlign={{ base: "center", lg: "initial" }}
                      mb={4}
                      color={"#0170B9"}
                    >
                      <Link to={"/services"}>{feature.title}</Link>
                    </Heading>
                    <Text lineHeight={"26px"} color={"#7A7A7A"}>
                      {feature.description}
                    </Text>
                  </Flex>
                </Flex>
              </CardAnimation>
            ))}
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
};

export default BPO;
