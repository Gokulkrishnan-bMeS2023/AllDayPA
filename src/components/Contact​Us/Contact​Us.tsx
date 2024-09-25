import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import TextAnimation from "../../animation/TextAnimation/TextAnimation";
import {
  FaLocationDot,
  MdContactMail,
  MdOutlinePhoneIphone,
} from "../../assets/icons/icons";

const ContactItem: React.FC<{ icon: React.ReactNode; text: string }> = ({
  icon,
  text,
}) => (
  <Flex gap={4} align="center">
    <Box border="3px solid #0170B9" borderRadius="50%" p={2}>
      {icon}
    </Box>
    <Heading
      fontSize={{ base: "18px", md: "20px" }}
      fontFamily="Roboto, sans-serif"
    >
      {text}
    </Heading>
  </Flex>
);

const ContactUs = () => {
  return (
    <Flex h="auto" my={10}>
      <Container>
        <TextAnimation text="Contact us" />
        <Flex gap={6} flexDir={{ base: "column", md: "row" }}>
          <Flex flexDir="column" gap={4} bg="#fff" p={4} flex={2}>
            <ContactItem
              icon={<MdOutlinePhoneIphone fontSize="24px" color="#0170B9" />}
              text="+44 161 909 6900"
            />
            <ContactItem
              icon={<MdContactMail fontSize="24px" color="#0170B9" />}
              text="contact@info.com"
            />
            <ContactItem
              icon={<FaLocationDot fontSize="24px" color="#0170B9" />}
              text="Isher House, Peel Cross Rd, Salford M5 4DT, United Kingdom."
            />
          </Flex>

          <Flex flex={3}>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95235.64451500914!2d-2.284224!3d53.479963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae3c28dbc619%3A0x2ad8588eedbe253f!2sIsher%20House!5e0!3m2!1sen!2sus!4v1693913384210!5m2!1sen!2sus"
              height={300}
              width="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default ContactUs;
