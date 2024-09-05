import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    CompanyName: "",
    email: "",
    message: "",
  });

  const toast = useToast();

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    toast({
      title: "Form submitted.",
      description: "We've received your message and will get back to you soon.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setFormData({
      Name: "",
      CompanyName: "",
      email: "",
      message: "",
    });
  };

  return (
    <Box
      // borderWidth={1}
      // borderRadius="md"
      // boxShadow="md"
      // backgroundColor="white"
      width={"100%"}
      fontFamily={"Montserrat, sans-serif"}
    >
      <form onSubmit={handleSubmit}>
        <FormControl id="Name" mb={4} isRequired>
          <FormLabel fontWeight={"bold"}>Name </FormLabel>
          <Input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            h={"52px"}
            bg={"#FAFAFA"}
            _hover={{ bg: "#fff" }}
            borderColor={"#dddddd"}
            borderRadius={0}
          />
        </FormControl>

        <FormControl id="email" mb={4} isRequired>
          <FormLabel fontWeight={"bold"}>Email </FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            h={"52px"}
            bg={"#FAFAFA"}
            _hover={{ bg: "#fff" }}
            borderColor={"#dddddd"}
            borderRadius={0}
          />
        </FormControl>

        <FormControl id="CompanyName" mb={4}>
          <FormLabel fontWeight={"bold"}>Company Name</FormLabel>
          <Input
            type="text"
            name="CompanyName"
            value={formData.CompanyName}
            onChange={handleChange}
            h={"52px"}
            bg={"#FAFAFA"}
            _hover={{ bg: "#fff" }}
            borderColor={"#dddddd"}
            borderRadius={0}
          />
        </FormControl>

        <FormControl id="message" mb={4}>
          <FormLabel fontWeight={"bold"}>Comment or Message </FormLabel>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            bg={"#FAFAFA"}
            _hover={{ bg: "#fff" }}
            borderColor={"#dddddd"}
            borderRadius={0}
          />
        </FormControl>

        <Button
          bg="#0170B9"
          color={"#fff"}
          _hover={{ bg: "#0170B9" }}
          type="submit"
          width="fit-content"
          borderRadius={0}
          fontFamily={"'Montserrat', sans-serif"}
          fontSize={"12px"}
          letterSpacing={"2px"}
          padding={"17px 20px"}
        >
          SUBMIT
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
