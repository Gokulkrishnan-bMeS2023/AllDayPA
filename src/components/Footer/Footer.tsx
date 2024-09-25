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
import { Link as RouterLink } from "react-router-dom";

// Social links data
const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com",
    ariaLabel: "Facebook",
  },
  { icon: FaTwitter, href: "https://www.twitter.com", ariaLabel: "Twitter" },
  { icon: FaLinkedin, href: "https://www.linkedin.com", ariaLabel: "LinkedIn" },
  { icon: FaYelp, href: "https://www.yelp.com", ariaLabel: "Yelp" },
  { icon: FaGoogle, href: "https://www.google.com", ariaLabel: "Google" },
];

// Navigation links data
const navLinks = ["Home", "About", "Services", "FAQ", "Contact"];

// Social Icon Component
const SocialIcon = ({
  icon: Icon,
  href,
  ariaLabel,
}: {
  icon: React.ElementType;
  href: string;
  ariaLabel: string;
}) => (
  <Link
    as={RouterLink}
    to={href}
    isExternal
    aria-label={ariaLabel}
    _hover={{ color: "#0170B9" }}
  >
    <Box w="20px" h="20px" cursor="pointer">
      <Icon fontSize={20} />
    </Box>
  </Link>
);

// Navigation Link Component
const NavLink = ({
  href,
  children,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  ariaLabel: string;
}) => (
  <Link
    href={href}
    aria-label={ariaLabel}
    _hover={{ color: "#0170B9", textDecoration: "none" }}
  >
    {children}
  </Link>
);

// Footer Component
const Footer = () => {
  return (
    <footer>
      <Flex bg={"#4B4F58"} color={"#fff"} flexDir={"column"} minH="320px">
        {/* Top Section */}
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
                  alt="Company Logo"
                  width={"184px"}
                  height={"95.4px"}
                  loading="lazy"
                  objectFit="contain"
                />
              </Box>
            </Box>

            {/* Navigation Links */}
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
                  ariaLabel={`${text} Page`}
                >
                  {text}
                </NavLink>
              ))}
            </Flex>

            {/* Subscribe Section */}
            <Flex flexDir={"column"} gap={8} flex={3}>
              <Heading
                fontFamily={"Montserrat, sans-serif"}
                fontSize={"22px"}
                textAlign={{ base: "center", md: "start" }}
              >
                Subscribe to us
              </Heading>
              <Input
                type="email"
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

        {/* Divider */}
        <Divider my={4} />

        {/* Bottom Section */}
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

            {/* Social Icons */}
            <Flex gap={4}>
              {socialLinks.map(({ icon, href, ariaLabel }, index) => (
                <SocialIcon
                  key={index}
                  icon={icon}
                  href={href}
                  ariaLabel={ariaLabel}
                />
              ))}
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </footer>
  );
};

export default Footer;
