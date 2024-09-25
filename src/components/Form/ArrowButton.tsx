import { IconButton } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "../../assets/icons/icons";

const ArrowButton: React.FC<{ direction: number; onClick: () => void }> = ({
  direction,
  onClick,
}) => (
  <IconButton
    aria-label={direction === -1 ? "Previous" : "Next"}
    icon={direction === -1 ? <FaArrowLeft /> : <FaArrowRight />}
    onClick={onClick}
    variant="ghost"
    colorScheme="teal"
    position="absolute"
    top="50%"
    transform="translateY(-50%)"
    left={direction === -1 ? "10px" : "unset"}
    right={direction === 1 ? "10px" : "unset"}
    zIndex={1}
  />
);

export default ArrowButton;
