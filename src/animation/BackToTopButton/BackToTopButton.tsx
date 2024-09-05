import { IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

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

  return (
    <IconButton
      icon={<FaChevronUp />}
      onClick={handleBackToTopButton}
      size="sm"
      position="fixed"
      bottom="6"
      right="6"
      rounded={2}
      bg={"#3A3A3A"}
      color={"#fff"}
      opacity={isButtonVisible ? 1 : 0}
      transition="opacity 0.3s"
      _hover={{ bgColor: "#3A3A3A" }}
      aria-label={"back-to-top-button"}
      mb={14}
    />
  );
};

export default BackToTopButton;
