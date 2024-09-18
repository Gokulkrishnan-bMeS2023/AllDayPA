import { Box, Flex, Heading, useBreakpointValue } from "@chakra-ui/react";
import Banner from "../../components/Banner/Banner";
import OurServices from "../../components/OurServices​/OurServices​";
import AboutUs from "../../components/AboutUs/AboutUs";
import BPO from "../../components/BPO/BPO";
import ContactUs from "../../components/Contact​Us/Contact​Us";
import MessageUs from "../../components/Messageus/MessageUs";
import { headingVariants } from "../../animation/variants";
import Testimonial from "../../components/Testimonial/Testimonial";
import PageTransitions from "../../animation/PageTransitions/PageTransitions";
import ScrollAnimation from "../../animation/ScrollAnimation/ScrollAnimation";
import Img1 from "../../assets/images/services-Data-Entry.webp"
import Img2 from "../../assets/images/about-002-free-img.webp"
import { MdOutlinePhoneIphone } from "../../assets/icons/icons";

const Home = () => {
  const fontSize = useBreakpointValue({ base: "35px", md: "40px", lg: "60px" });

  return (
    <PageTransitions>
      <Box>
        <Banner />
        <AboutUs />
        <Box>
          <Box
            bgImage={Img1}
            height={"250px"}
            alignItems={"center"}
            justifyContent={"center"}
            display={"flex"}
            bgColor="rgba(0, 0, 0, 0.46)"
            backgroundBlendMode="overlay"
            bgSize="cover"
          >
            <Flex flexDir={"column"} gap={4} color={"#fff"} p={2}>
              <ScrollAnimation variant={headingVariants}>
                <Heading textAlign={"center"} fontSize={"24px"}>
                  Solving problems since 1963
                </Heading>
              </ScrollAnimation>
              <ScrollAnimation variant={headingVariants}>
                <Flex align={"center"}>
                  <Heading
                    // as={"h5"}
                    fontSize={fontSize}
                    textAlign={"center"}
                  >
                    <span>BPO Solutions that Drive Results and Save Costs</span>
                  </Heading>
                </Flex>
              </ScrollAnimation>
            </Flex>
          </Box>
        </Box>
        <OurServices />
        <BPO />
        <Testimonial />
        <Box>
          <Box
            bgImage={Img2}
            height={"250px"}
            alignItems={"center"}
            justifyContent={"center"}
            display={"flex"}
            bgColor="rgba(0, 0, 0, 0.46)"
            backgroundBlendMode="overlay"
            bgSize="cover"
          >
            <Flex flexDir={"column"} gap={4} color={"#fff"}>
              <ScrollAnimation variant={headingVariants}>
                <Heading textAlign={"center"} fontSize={"24px"}>
                  We work 24/7
                </Heading>
                <Flex
                  gap={4}
                  align={"center"}
                  flexDir={{ base: "column", md: "row" }}
                  textAlign={"center"}
                >
                  <Box border={"3px solid #fff"} borderRadius={"50%"} p={4}>
                    <MdOutlinePhoneIphone fontSize={fontSize} color="#fff" />
                  </Box>
                  <Heading
                    // as={"h5"}
                    fontSize={fontSize}
                  >
                    Call +44 161 909 6900
                  </Heading>
                </Flex>
              </ScrollAnimation>
            </Flex>
          </Box>
        </Box>
        <MessageUs />
        <ContactUs />
      </Box>
    </PageTransitions>
  );
};

export default Home;



