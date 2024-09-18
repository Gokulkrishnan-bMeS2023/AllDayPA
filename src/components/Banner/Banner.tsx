import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  letterVariants,
  containerVariants,
  blinkVariant,
  textVariants,
} from "./../../animation/variants";
import ScrollAnimation from "../../animation/ScrollAnimation/ScrollAnimation";
import BannerImg from "../../assets/images/bpo_service_banner-1.webp";
import { FaPhoneAlt } from "../../assets/icons/icons";

const heroText1 = "Precision in Every Process –";
const heroText2 = "BPO Services That Drive";
const heroText3 = "Results";

const Banner: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false });

  const fontSize = useBreakpointValue({ base: "22px", md: "40px", lg: "60px" });

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height="auto"
      bgSize="cover"
      // bgPosition="center"
      overflowY="auto"
      bgImage={BannerImg}
      width="100%"
      bgColor="rgba(0, 0, 0, 0.46)"
      backgroundBlendMode="overlay"
      py={"43px"}
    >
      <Container>
        <Box
          ref={sectionRef}
          display="flex"
          gap={2}
          position={"relative"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={{ base: "center", md: "start" }}
          >
            <Box>
              <ScrollAnimation variant={textVariants}>
                <Text
                  fontSize={{ base: "18px", md: "22px" }}
                  mb="1rem"
                  fontWeight={700}
                  color={"#fff"}
                >
                  Isher House, Peel Cross Rd,
                  <br /> Salford M5 4DT, United Kingdom.
                </Text>
              </ScrollAnimation>
            </Box>
            {[heroText1, heroText2, heroText3].map((text, index) => (
              <Heading
                as={motion.h1}
                key={index}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                fontSize={fontSize}
                // textAlign={{ base: "center", md: "start" }}
                color="white"
                lineHeight={{ base: "45px", md: "52px", lg: "78px" }}
              >
                {text.split("").map((char, i) => (
                  <Box as={motion.span} key={i} variants={letterVariants}>
                    {char === " " ? "\u00A0" : char}
                  </Box>
                ))}
              </Heading>
            ))}
            <ScrollAnimation
              variant={textVariants}
              align={"start"}
              alignItems={{ base: "center", md: "start" }}
            >
              <Button
                fontSize="15px"
                bgColor="#0170B9"
                color="#fff"
                _hover={{ bgColor: "#0170B9" }}
                mt={6}
                h={"45px"}
                width="fit-content"
                padding={"12px 24px"}
                fontWeight={600}
                fontFamily={"Roboto, sans-serif"}
              >
                <span style={{ paddingRight: "8px" }}>
                  <motion.div {...blinkVariant}>
                    <FaPhoneAlt />
                  </motion.div>
                </span>
                Contact us now
              </Button>
            </ScrollAnimation>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
