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
import Img1 from "../../assets/images/services-Data-Entry.webp";
import Img2 from "../../assets/images/about-002-free-img.webp";
import { MdOutlinePhoneIphone } from "../../assets/icons/icons";
import ImageSection from "../../components/ImageSection/ImageSection";

const Home = () => {
  const fontSize = useBreakpointValue({ base: "35px", md: "40px", lg: "60px" });

  return (
    <PageTransitions>
      <Box>
        <Banner />
        <AboutUs />

        {/* First Image Section */}
        <ImageSection img={Img1} heading="Solving problems since 1963">
          <ScrollAnimation variant={headingVariants}>
            <Heading fontSize={fontSize} textAlign="center">
              BPO Solutions that Drive Results and Save Costs
            </Heading>
          </ScrollAnimation>
        </ImageSection>

        <OurServices />
        <BPO />
        <Testimonial />

        {/* Second Image Section */}
        <ImageSection img={Img2} heading="We work 24/7">
          <ScrollAnimation variant={headingVariants}>
            <Flex
              gap={4}
              align="center"
              flexDir={{ base: "column", md: "row" }}
              textAlign="center"
            >
              <Box border="3px solid #fff" borderRadius="50%" p={4}>
                <MdOutlinePhoneIphone fontSize={fontSize} color="#fff" />
              </Box>
              <Heading fontSize={fontSize}>Call +44 161 909 6900</Heading>
            </Flex>
          </ScrollAnimation>
        </ImageSection>
        <MessageUs />
        <ContactUs />
      </Box>
    </PageTransitions>
  );
};

export default Home;
