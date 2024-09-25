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

const socialLinks = [
  { icon: FaFacebookF, href: "https://www.facebook.com" },
  { icon: FaTwitter, href: "https://www.twitter.com" },
  { icon: FaLinkedin, href: "https://www.linkedin.com" },
  { icon: FaYelp, href: "https://www.yelp.com" },
  { icon: FaGoogle, href: "https://www.google.com" },
];

const navLinks = ["Home", "About", "Services", "FAQ", "Contact"];

const SocialIcon = ({
  icon: Icon,
  href,
}: {
  icon: React.ElementType;
  href: string;
}) => (
  <Link href={href} isExternal _hover={{ color: "#0170B9" }}>
    <Box w="20px" h="20px" cursor="pointer">
      <Icon fontSize={20} />
    </Box>
  </Link>
);

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link href={href} _hover={{ color: "#0170B9", textDecoration: "none" }}>
    {children}
  </Link>
);

const Footer = () => {
  return (
    <footer>
      <Flex bg={"#4B4F58"} color={"#fff"} flexDir={"column"} minH="320px">
        <Container my={12}>
          <Flex
            align={{ base: "center", md: "flex-start" }}
            flexDir={{ base: "column", md: "row" }}
            gap={4}
          >
            {/* Logo Section */}
            <Box flex={2}>
              <Box p={2} bg={"#fff"} w={"fit-content"}>
                <Image
                  src={Logo}
                  alt="logo"
                  width={"184px"}
                  height={"95.4px"}
                  loading="lazy"
                  objectFit="contain"
                />
              </Box>
            </Box>

            <Flex
              flexDir={"column"}
              align={"start"}
              flex={2}
              fontSize={"18px"}
              fontFamily={"Montserrat, sans-serif"}
            >
              {navLinks.map((text) => (
                <NavLink
                  key={text}
                  href={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                >
                  {text}
                </NavLink>
              ))}
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
              {socialLinks.map(({ icon, href }, index) => (
                <SocialIcon key={index} icon={icon} href={href} />
              ))}
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </footer>
  );
};

export default Footer;
