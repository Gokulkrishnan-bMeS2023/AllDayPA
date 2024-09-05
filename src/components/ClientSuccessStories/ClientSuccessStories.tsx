import { Flex, Heading, Text } from "@chakra-ui/react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

// Motion components
const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);

// AnimatedHeading component
const AnimatedHeading = ({
  value,
  duration = 2,
  inView,
  symbol,
  ...props
}: any) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (inView) {
      count.set(0); // Reset the count value to 0 when in view
      const animation = animate(count, value, { duration });
      return () => animation.stop();
    }
  }, [count, value, duration, inView]);

  return <MotionHeading {...props}>{rounded}</MotionHeading>;
};

// StatCard component
const StatCard = ({ number, label, delay, inView, symbol }: any) => {
  return (
    <MotionFlex
      flex={1}
      flexDir={"column"}
      gap={4}
      align={"center"}
      justify={"center"}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Flex align={"center"}>
        <AnimatedHeading
          as={"h3"}
          fontSize={"36px"}
          fontFamily={"'Staatliches', display"}
          fontWeight={400}
          value={number}
          duration={2} // Adjust duration as needed
          inView={inView}
        />
        <Text fontWeight={"bold"} fontSize={"36px"}>
          {symbol}
        </Text>
      </Flex>
      <Heading
        as={"h3"}
        fontSize={"13px"}
        fontFamily={"'Staatliches', display"}
        fontWeight={400}
      >
        {label}
      </Heading>
    </MotionFlex>
  );
};

// ClientSuccessStories component
const ClientSuccessStories = () => {
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { once: false });

  return (
    <MotionFlex
      minH={"40vh"}
      h={"auto"}
      mx={4}
      my={14}
      ref={cardRef}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      flexDir={{ base: "column", md: "row" }}
    >
      <MotionFlex
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        flexDir={"column"}
        flex={1}
      >
        <Heading fontFamily={"'Staatliches', display"} fontWeight={400}>
          Client Success Stories
        </Heading>
        <Text mt={4} fontFamily={"Montserrat, sans-serif"}>
          Our client stories are a powerful testament to the impact of our BPO
          services. By showcasing real-world examples of how we’ve successfully
          addressed challenges and delivered results, these stories offer
          valuable insights into the tangible benefits of partnering with us.
        </Text>
      </MotionFlex>
      <Flex flex={1} flexDir={"column"} gap={{ base: 20, md: 8 }}>
        <Flex
          flex={1}
          flexDir={{ base: "column", md: "row" }}
          gap={{ base: 20, md: 8 }}
        >
          <StatCard
            number={10}
            label="Years in Business"
            delay={0.7}
            inView={inView}
            symbol={" "}
          />
          <StatCard
            number={20000}
            label="Streamlined Solutions for All"
            delay={0.9}
            inView={inView}
            symbol={"+"}
          />
        </Flex>
        <Flex
          flex={1}
          flexDir={{ base: "column", md: "row" }}
          gap={{ base: 20, md: 8 }}
        >
          <StatCard
            number={3000}
            label="Projects Managed"
            delay={1.1}
            inView={inView}
            symbol={"+"}
          />
          <StatCard
            number={95}
            label="Outstanding Client Satisfaction Guaranteed"
            delay={1.3}
            inView={inView}
            symbol={"%"}
          />
        </Flex>
      </Flex>
    </MotionFlex>
  );
};

export default ClientSuccessStories;

