import { Container, Flex } from "@chakra-ui/react";
import ContactForm from "../Form/Contact​Form";
import TextAnimation from "../../animation/TextAnimation/TextAnimation";

const MessageUs = () => {
  return (
    <Flex flexDirection={"column"} my={10}>
      <Container>
        <TextAnimation text={"Message us"} />
        <Flex
          gap={6}
          flexDir={{ base: "column", md: "row" }}
          minH={"100vh"}
          h={"auto"}
        >
          <Flex
            flex={2}
            bgImage="assets/images/istockphoto.jpg"
            bgRepeat={"no-repeat"}
            bgPosition={"center"}
            bgSize={"cover"}
            p={4}
            minH={"400px"}
          ></Flex>
          <Flex flex={3} bg={"#fff"}>
            <Flex p={6} w={"100%"}>
              <ContactForm />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default MessageUs;
