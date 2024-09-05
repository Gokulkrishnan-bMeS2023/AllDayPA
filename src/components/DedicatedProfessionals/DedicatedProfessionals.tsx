import {
  Flex,
  Text,
  VStack,
  Image,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { aboutData } from "./data";
import ScrollAnimation from "../../animation/ScrollAnimation/ScrollAnimation";
import { headingVariants, textVariants } from "../../animation/variants";

const MotionBox = motion(Flex);

const PersonCard = ({ person, index }: { person: any; index: number }) => {
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { once: false });

  return (
    <MotionBox
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        opacity: { duration: 1, ease: "easeOut", delay: index * 0.2 },
        y: { duration: 1, ease: "easeOut", delay: index * 0.2 },
      }}
      p={4}
      bg="white"
      borderRadius="md"
      boxShadow="md"
      flexDirection="column"
      alignItems="center"
      gap={2}
    >
      <Image
        src={person.img}
        alt={person.name}
        height={{ base: 300, md: 346 }}
        mb={4}
        w="100%"
        objectFit="cover"
      />
      <Text fontSize="xl" fontWeight="bold" fontFamily="Montserrat, sans-serif">
        {person.name}
      </Text>
      <Text
        color="gray.500"
        fontFamily="Montserrat, sans-serif"
        fontSize="13px"
      >
        {person.subTitle}
      </Text>
      <Text
        mt={2}
        textAlign="center"
        fontFamily="Montserrat, sans-serif"
        fontSize="13px"
      >
        {person.description}
      </Text>
      <Flex gap={2}>
        <FaTwitter />
        <FaLinkedin />
      </Flex>
    </MotionBox>
  );
};

const DedicatedProfessionals = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <VStack spacing={6} align="stretch" m={4} ref={sectionRef}>
      <ScrollAnimation variant={headingVariants}>
        <Heading
          fontFamily="Staatliches, display"
          fontSize="36px"
          opacity={1}
          fontWeight={400}
          w={"100%"}
        >
          Dedicated Professionals
        </Heading>
      </ScrollAnimation>
      <ScrollAnimation variant={textVariants}>
        <Text
          fontSize="16px"
          fontFamily="Montserrat, sans-serif"
          opacity={1}
          w={"100%"}
        >
          Our team of experts offers comprehensive knowledge and a commitment to
          enhancing business efficiency.
        </Text>
      </ScrollAnimation>
      <SimpleGrid columns={[1, 2, 4]} spacing={6}>
        {aboutData.map((person, index) => (
          <PersonCard key={person.id} person={person} index={index} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default DedicatedProfessionals;
