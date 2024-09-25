import React, { useState } from "react";
import {
  Box,
  Container,
  Flex,
  IconButton,
  Image,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { menuVariants } from "../../animation/variants";
import Logo from "../../assets/images/logo.webp";
import { FiMenu, FiX } from "../../assets/icons/icons";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/faq", label: "FAQ" },
  { path: "/contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const renderLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <Link
        as={RouterLink}
        to={link.path}
        key={link.path}
        onClick={isMobile ? closeMenu : undefined}
        _hover={{ color: "#0170B9", textDecoration: "none" }}
        _activeLink={{
          color: "#0170B9",
          fontWeight: "bold",
          borderBottom: "2px solid #0170B9",
        }}
        fontFamily="Montserrat, sans-serif"
        style={
          location.pathname === link.path ? { color: "#0170B9" } : undefined
        }
        px={isMobile ? 6 : 0}
        py={isMobile ? 2 : 0}
        width={isMobile ? "100%" : undefined}
      >
        {link.label}
      </Link>
    ));

  return (
    <Box bg="#FFF" color="#000">
      <Container>
        <Flex justify="space-between" align="center" minH="85px">
          <Image src={Logo} alt="logo" width="100px" loading="lazy" />
          <IconButton
            display={{ base: "flex", lg: "none" }}
            onClick={toggleMenu}
            icon={
              isMenuOpen ? (
                <FiX style={{ color: "#0170B9", fontSize: "25px" }} />
              ) : (
                <FiMenu style={{ color: "#0170B9", fontSize: "25px" }} />
              )
            }
            aria-label="Toggle Menu"
            variant="ghost"
          />
          <Flex
            as="nav"
            align="center"
            gap={10}
            display={{ base: "none", lg: "flex" }}
          >
            {renderLinks()}
          </Flex>
        </Flex>
      </Container>

      <motion.div
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuVariants}
        style={{ overflow: "hidden" }}
      >
        <Flex
          as="nav"
          direction="column"
          align="start"
          display={{ base: "flex", lg: "none" }}
          bgColor="#f9f9f9"
          py={2}
          borderTop="1px solid #e9e9e9"
        >
          {renderLinks(true)}
        </Flex>
      </motion.div>
    </Box>
  );
};

export default Navbar;
