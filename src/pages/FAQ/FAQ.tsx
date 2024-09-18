import { Flex } from "@chakra-ui/react";
import ImageComts from "../../components/ImageComts/ImageComts";
import FAQComts from "../../components/FAQComts/FAQComts";
import PageTransitions from "../../animation/PageTransitions/PageTransitions";

const FAQ = () => {
  return (
    <PageTransitions>
      <Flex flexDir={"column"}>
        <ImageComts
          heading="Discover Your Answers Here"
          heading2="FAQs: Get insights on our BPO solutions, cost-effectiveness, and implementation processes."
        />
        <FAQComts />
      </Flex>
    </PageTransitions>
  );
};

export default FAQ;
