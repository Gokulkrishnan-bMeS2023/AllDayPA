import { Container, Flex } from "@chakra-ui/react";
import ContactForm from "../Form/Contact​Form";
import TextAnimation from "../../animation/TextAnimation/TextAnimation";
import MessageImg from "../../assets/images/istockphoto.webp";

const MessageUs = () => {
  return (
    <Flex flexDirection={"column"} my={10} id="formdiv">
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
            bgImage={MessageImg}
            bgRepeat={"no-repeat"}
            bgPosition={"center"}
            bgSize={"cover"}
            p={4}
            minH={"400px"}
          />
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
