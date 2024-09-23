import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import PrimaryButton from "./PrimaryButton";

const ContactForm = () => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    CompanyName: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    Name: "",
    email: "",
  });

  // Handle input change
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear error message when user starts typing
    }));
  };

  // Validate email format
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle input blur (when user leaves input field)
  const handleBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    if (!value.trim()) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "This field is required",
      }));
    } else if (name === "email" && !validateEmail(value)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address",
      }));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Form validation
    const errors: Record<string, string> = {};
    if (!formData.Name.trim()) {
      errors.Name = "This field is required";
    }
    if (!formData.email.trim()) {
      errors.email = "This field is required";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      ...errors,
    }));

    if (Object.keys(errors).length > 0) {
      return; // Prevent submission if there are validation errors
    }

    setIsLoading(true);

    const formJson = JSON.stringify({
      ...formData,
      access_key: "757f119e-6bf2-41ab-b249-f7f259c8d585",
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: formJson,
      });
      const result = await response.json();
      console.log(result);

      if (result.success) {
        toast({
          title: "Form submitted.",
          description:
            "We've received your message and will get back to you soon.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        // Clear the form
        setFormData({
          Name: "",
          email: "",
          CompanyName: "",
          message: "",
        });
      } else {
        toast({
          title: "Submission failed.",
          description: "Please try again later.",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
    } catch (error) {
      toast({
        title: "An error occurred.",
        description: "Unable to submit form.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formInputProps = {
    h: "52px",
    bg: "#FAFAFA",
    _hover: { bg: "#fff" },
    borderColor: "#dddddd",
    borderRadius: 0,
  };

  const handleScroll = (start: ScrollLogicalPosition, id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ block: start, behavior: "smooth" });
  };

  return (
    <Box width="100%" fontFamily="Montserrat, sans-serif" id="formdiv">
      <form onSubmit={handleSubmit}>
        <FormControl id="Name" mb={4} isInvalid={!!formErrors.Name}>
          <FormLabel fontWeight="bold">Name</FormLabel>
          <Input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            onBlur={handleBlur} // Validate when input loses focus
            {...formInputProps}
          />
          {formErrors.Name && (
            <FormErrorMessage>{formErrors.Name}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl id="email" mb={4} isInvalid={!!formErrors.email}>
          <FormLabel fontWeight="bold">Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur} // Validate when input loses focus
            {...formInputProps}
          />
          {formErrors.email && (
            <FormErrorMessage>{formErrors.email}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl id="CompanyName" mb={4}>
          <FormLabel fontWeight="bold">Company Name</FormLabel>
          <Input
            type="text"
            name="CompanyName"
            value={formData.CompanyName}
            onChange={handleChange}
            onBlur={handleBlur}
            {...formInputProps}
          />
        </FormControl>

        <FormControl id="message" mb={4}>
          <FormLabel fontWeight="bold">Comment or Message</FormLabel>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={4}
            bg="#FAFAFA"
            _hover={{ bg: "#fff" }}
            borderColor="#dddddd"
            borderRadius={0}
          />
        </FormControl>

        <Flex justify={{ base: "center", md: "start" }}>
          <PrimaryButton
            Label="SUBMIT"
            isLoading={isLoading}
            handleClick={() => handleScroll("start", "formdiv")}
          />
        </Flex>
      </form>
    </Box>
  );
};

export default ContactForm;
