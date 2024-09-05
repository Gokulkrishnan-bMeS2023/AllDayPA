// import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

// interface props {
//   heading: string;
//   heading2: string;
//   servicesdata: any[];
// }
// const ServicesCard = ({ heading, heading2, servicesdata }: props) => {
//   return (
//     <Flex w={"100%"} p={4} flexDir={"column"} mb={6}>
//       <Flex flexDir={"column"} my={6}>
//         <Heading fontFamily={"'Staatliches', display"} fontWeight={400}>
//           {heading}
//         </Heading>
//         <Text mt={4} fontFamily={"Montserrat, sans-serif"}>
//           {heading2}
//         </Text>
//       </Flex>
//       <Flex gap={4} flexDir={{ base: "column", md: "row" }}>
//         {servicesdata.map((service) => (
//           <Flex
//             key={service.id}
//             flexDir={"column"}
//             gap={4}
//             ml={service.image ? 0 : 4}
//           >
//             {service.image ? (
//               <Image src={service.image} alt="#" />
//             ) : (
//               <Box h={"30px"} />
//             )}
//             <Heading
//               as={"h3"}
//               fontFamily={"Staatliches, display"}
//               fontSize={"20px"}
//               fontWeight={400}
//             >
//               {service.heading}
//             </Heading>
//             <Text
//               mt={2}
//               fontFamily={"Montserrat, sans-serif"}
//               fontSize={"13px"}
//             >
//               {service.description}
//             </Text>
//           </Flex>
//         ))}
//       </Flex>
//     </Flex>
//   );
// };

// export default ServicesCard;

import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import CardAnimation from "../../animation/CardAnimation/CardAnimation";
import ScrollAnimation from "../../animation/ScrollAnimation/ScrollAnimation";
import { headingVariants, textVariants } from "../../animation/variants";

interface Props {
  heading: string;
  heading2: string;
  servicesdata: any[];
}

const ServicesCard = ({ heading, heading2, servicesdata }: Props) => {
  return (
    <Flex w={"100%"} p={4} flexDir={"column"} mb={6}>
      {/* Heading section */}
      <Flex flexDir={"column"} my={6}>
        <ScrollAnimation variant={headingVariants}>
          <Heading
            fontFamily={"'Staatliches', display"}
            fontWeight={400}
            w={"100%"}
          >
            {heading}
          </Heading>
        </ScrollAnimation>
        <ScrollAnimation variant={textVariants}>
          <Text mt={4} fontFamily={"Montserrat, sans-serif"} w={"100%"}>
            {heading2}
          </Text>
        </ScrollAnimation>
      </Flex>

      {/* Services section */}
      <Flex gap={4} flexDir={{ base: "column", md: "row" }}>
        {servicesdata.map((service, index) => (
          <CardAnimation key={service.id} delayOrder={index}>
            <Flex flexDir={"column"} gap={4} ml={service.image ? 0 : 4}>
              {service.image ? (
                <Image src={service.image} alt={service.heading} />
              ) : (
                <Box h={"30px"} />
              )}
              <Heading
                as={"h3"}
                fontFamily={"Staatliches, display"}
                fontSize={"20px"}
                fontWeight={400}
              >
                {service.heading}
              </Heading>
              <Text
                mt={2}
                fontFamily={"Montserrat, sans-serif"}
                fontSize={"13px"}
              >
                {service.description}
              </Text>
            </Flex>
          </CardAnimation>
        ))}
      </Flex>
    </Flex>
  );
};

export default ServicesCard;
