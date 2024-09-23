import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  Label: string;
  isLoading?: boolean;
  to?: string;
  handleClick?: () => void;
}

const PrimaryButton = ({ isLoading, Label, to, handleClick }: Props) => {
  return (
    <Button
      as={to ? Link : "button"}
      {...(to && { to })} // Use the spread operator to pass `to` prop only when `to` is defined
      bg="#0170B9"
      color="#fff"
      _hover={{ bg: "#0170B9" }}
      type={to ? undefined : "submit"}
      borderRadius={0}
      fontFamily="'Montserrat', sans-serif"
      fontSize="12px"
      letterSpacing="2px"
      px="20px"
      py="17px"
      isLoading={isLoading}
      loadingText="Submitting"
      onClick={handleClick} // Use the spread operator to pass `handleClick` prop only when defined
    >
      {Label}
    </Button>
  );
};

export default PrimaryButton;
