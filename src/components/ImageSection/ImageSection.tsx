import { Box, Flex, Heading } from "@chakra-ui/react";
import ScrollAnimation from "../../animation/ScrollAnimation/ScrollAnimation";
import { headingVariants } from "../../animation/variants";

interface props {
  img: string;
  heading: string;
  children: React.ReactNode;
}
const ImageSection = ({ img, heading, children }: props) => (
  <Box
    bgImage={img}
    height="250px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    bgColor="rgba(0, 0, 0, 0.46)"
    backgroundBlendMode="overlay"
    bgSize="cover"
  >
    <Flex flexDir="column" gap={4} color="#fff" p={2}>
      <ScrollAnimation variant={headingVariants}>
        <Heading textAlign="center" fontSize="24px">
          {heading}
        </Heading>
      </ScrollAnimation>
      {children}
    </Flex>
  </Box>
);

export default ImageSection;
