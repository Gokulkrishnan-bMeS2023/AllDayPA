import { Box, Container, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { headerVariants } from "../../animation/variants";
import Navbar from "../Navbar/Navbar";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const Header = () => {
  return (
    <>
      <Box display={{ base: "none", lg: "block" }}>
        <MotionBox
          display="flex"
          bg="#0170B9"
          minH="40px"
          alignItems="center"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          <Container>
            <MotionBox
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              h={"46.8px"}
            >
              <MotionText
                fontWeight="bold"
                color="#fff"
                fontSize="16px"
                fontFamily={"Montserrat, sans-serif"}
                variants={headerVariants}
              >
                ALWAYS OPEN! We work 24/7
              </MotionText>
              <MotionText
                fontWeight={"bold"}
                color="#fff"
                fontSize="12px"
                letterSpacing="2px"
                variants={headerVariants}
                fontFamily={"Montserrat, sans-serif"}
              >
                CALL NOW! +44 161 909 6900
              </MotionText>
            </MotionBox>
          </Container>
        </MotionBox>
      </Box>
      <Navbar />
    </>
  );
};

export default Header;
