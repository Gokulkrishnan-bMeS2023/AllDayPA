import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import Logo from "../../assets/images/logo.webp";
import {
  FaFacebookF,
  FaGoogle,
  FaLinkedin,
  FaTwitter,
  FaYelp,
} from "../../assets/icons/icons";

const Footer = () => {
  return (
    <footer>
      <Flex bg={"#4B4F58"} color={"#fff"} flexDir={"column"} minH="330px">
        <Container my={12}>
          <Flex
            align={"center"}
            flexDir={{ base: "column", md: "row" }}
            alignItems={{ base: "center", md: "flex-start" }}
            gap={4}
          >
            <Flex flex={2}>
              <Box bg={"#fff"} p={2}>
                <Image
                  src={Logo}
                  alt="logo"
                  width={"184px"}
                  height={"95.4px"}
                  loading="lazy"
                  objectFit="contain"
                />
              </Box>
            </Flex>
            <Flex
              flexDir={"column"}
              align={"start"}
              flex={2}
              fontSize={"18px"}
              gap={"3px"}
              fontFamily={"Montserrat, sans-serif"}
            >
              <Link
                href="/"
                _hover={{ color: "#0170B9", textDecoration: "none" }}
              >
                Home
              </Link>
              <Link
                href="/About"
                _hover={{ color: "#0170B9", textDecoration: "none" }}
              >
                About
              </Link>
              <Link
                href="/Services"
                _hover={{ color: "#0170B9", textDecoration: "none" }}
              >
                Services
              </Link>
              <Link
                href="/FAQ"
                _hover={{ color: "#0170B9", textDecoration: "none" }}
              >
                FAQ
              </Link>
              <Link
                href="/Contact"
                _hover={{ color: "#0170B9", textDecoration: "none" }}
              >
                Contact
              </Link>
            </Flex>
            <Flex flexDir={"column"} gap={8} flex={3}>
              <Heading
                fontFamily={"Montserrat, sans-serif"}
                fontSize={"22px"}
                textAlign={{ base: "center", md: "start" }}
              >
                Subscribe us
              </Heading>
              <Input
                type="text"
                bg={"#fff"}
                color={"#000"}
                h={"50px"}
                w={"100%"}
                fontSize={"16px"}
                fontFamily={"Montserrat, sans-serif"}
                borderRadius={0}
                placeholder="Enter Email Address"
              />
            </Flex>
          </Flex>
        </Container>

        <Divider my={4} />
        <Container my={2}>
          <Flex
            justify={"space-between"}
            align={"center"}
            flexDir={{ base: "column", md: "row" }}
            gap={8}
          >
            <Text
              textAlign={{ base: "center", md: "start" }}
              fontSize={"16px"}
              fontFamily={"Montserrat, sans-serif"}
            >
              Copyright © 2024 AllDayPA | Powered by BM e-Solutions
            </Text>
            <Flex gap={4}>
              <Box w="20px" h="20px">
                <FaFacebookF fontSize={20} />
              </Box>
              <Box w="20px" h="20px">
                <FaTwitter fontSize={20} />
              </Box>
              <Box w="20px" h="20px">
                <FaLinkedin fontSize={20} />
              </Box>
              <Box w="20px" h="20px">
                <FaYelp fontSize={20} />
              </Box>
              <Box w="20px" h="20px">
                <FaGoogle fontSize={20} />
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </footer>
  );
};

export default Footer;
