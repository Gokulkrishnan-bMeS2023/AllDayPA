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
      [name]: "",
    }));
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
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

    const { Name, email } = formData;
    const errors: Record<string, string> = {};

    if (!Name.trim()) errors.Name = "This field is required";
    if (!email.trim()) errors.email = "This field is required";
    else if (!validateEmail(email)) errors.email = "Invalid email address";

    if (Object.keys(errors).length > 0) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        ...errors,
      }));
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          access_key: "757f119e-6bf2-41ab-b249-f7f259c8d585",
        }),
      });
      const result = await response.json();

      toast({
        title: result.success ? "Form submitted." : "Submission failed.",
        description: result.success
          ? "We'll get back to you soon."
          : "Please try again later.",
        status: result.success ? "success" : "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });

      if (result.success) {
        setFormData({ Name: "", email: "", CompanyName: "", message: "" });
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
    <Box width="100%" fontFamily="Montserrat, sans-serif">
      <form onSubmit={handleSubmit}>
        {["Name", "email"].map((field) => (
          <FormControl
            key={field}
            id={field}
            mb={4}
            isInvalid={!!formErrors[field as keyof typeof formErrors]}
          >
            <FormLabel fontWeight="bold">
              {field.charAt(0).toUpperCase() + field.slice(1)}
              <span style={{ color: "red", paddingLeft: "5px" }}>*</span>
            </FormLabel>
            <Input
              type={field === "email" ? "email" : "text"}
              name={field}
              value={formData[field as keyof typeof formData]}
              onChange={handleChange}
              onBlur={handleBlur}
              {...formInputProps}
            />
            <FormErrorMessage>
              {formErrors[field as keyof typeof formErrors]}
            </FormErrorMessage>
          </FormControl>
        ))}

        <FormControl id="CompanyName" mb={4}>
          <FormLabel fontWeight="bold">Company Name</FormLabel>
          <Input
            type="text"
            name="CompanyName"
            value={formData.CompanyName}
            onChange={handleChange}
            {...formInputProps}
          />
        </FormControl>

        <FormControl id="message" mb={4}>
          <FormLabel fontWeight="bold">Comment or Message</FormLabel>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
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
