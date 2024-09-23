import { IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaChevronUp } from "../../assets/icons/icons";
import { motion } from "framer-motion";

const MotionIconButton = motion(IconButton);

const BackToTopButton = () => {
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsButtonVisible(scrollTop > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTopButton = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const buttonVariants = {
    hidden: { x: 100, opacity: 0 }, // Start off-screen (to the right)
    visible: { x: 0, opacity: 1 },  // Move into view
  };

  return (
    <MotionIconButton
      icon={<FaChevronUp />}
      onClick={handleBackToTopButton}
      size="sm"
      position="fixed"
      bottom="6"
      right="6"
      rounded={2}
      bg={"#3A3A3A"}
      color={"#fff"}
      initial="hidden"
      animate={isButtonVisible ? "visible" : "hidden"}
      variants={buttonVariants}
      transition={{ type: "tween", duration: 0.5 }}
      _hover={{ bgColor: "#3A3A3A" }}
      aria-label={"back-to-top-button"}
      mb={14}
      zIndex={1}
    />
  );
};

export default BackToTopButton;

