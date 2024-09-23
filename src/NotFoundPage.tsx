import { Box, Heading, Text } from "@chakra-ui/react";
import PrimaryButton from "./components/Form/PrimaryButton";

const NotFoundPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      textAlign="center"
      px="4"
    >
      <Box>
        <Heading as="h1" size="2xl" mb="6">
          404 Not Found
        </Heading>
        <Text fontSize="lg" mb="6">
          Sorry, the page you are looking for does not exist.
        </Text>
        <PrimaryButton Label="Go to Home Page" to="/" />
      </Box>
    </Box>
  );
};

export { NotFoundPage };
