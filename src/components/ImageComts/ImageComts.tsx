import {
  Box,
  Container,
  Flex,
  Heading as ChakraHeading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { headingVariants, imageVariants3 } from "../../animation/variants";
import ScrollAnimation from "../../animation/ScrollAnimation/ScrollAnimation";

const MotionHeading = motion(ChakraHeading);

interface Props {
  heading: string;
  heading2: string;
}

const ImageComts = ({ heading, heading2 }: Props) => {
  const fontSize = useBreakpointValue({ base: "35px", md: "40px", lg: "42px" });

  return (
    <ScrollAnimation variant={imageVariants3}>
      <Box
        bgImage={"assets/images/about.avif"}
        bgColor="rgba(0, 0, 0, 0.60)"
        backgroundBlendMode="overlay"
        bgSize="cover"
        bgPos={"center"}
        py={"35px"}
        w={"100%"}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Container>
          <Flex
            flexDir={{ base: "column", md: "row" }}
            color={"#fff"}
            align={"center"}
            justify={"space-between"}
            gap={{ base: 8, md: 2 }}
            width={"100%"}
          >
            <MotionHeading
              as="h5"
              fontSize={fontSize}
              fontWeight={400}
              fontFamily={"'Staatliches', display"}
              variants={headingVariants}
            >
              {heading}
            </MotionHeading>
            <MotionHeading
              textAlign="center"
              fontSize={{ base: "14px", md: "14px", lg: "16px" }}
              fontWeight={400}
              fontFamily={"Montserrat, sans-serif"}
              variants={headingVariants}
            >
              {heading2}
            </MotionHeading>
          </Flex>
        </Container>
      </Box>
    </ScrollAnimation>
  );
};

export default ImageComts;
