import OurServicesImg from "../../assets/images/Data Entry.webp"
import DataEntrywebp1 from "../../assets/images/Document-Processing.webp"
import DataEntrywebp2 from "../../assets/images/Customer-Support.webp"

export const faqData = [
  {
    id:1,
    heading: "Data Entry",
    imgUrl: OurServicesImg,
    items: [
      {
        question: "Accuracy and Precision",
        answer:
          "Our data entry services are designed to handle large volumes of data with exceptional accuracy. We ensure that your information is entered correctly and consistently, reducing errors and improving data reliability.",
      },
      {
        question: "Efficient Data Management",
        answer:
          "From data extraction to entry and verification, we manage the entire process efficiently. Our team uses advanced tools and techniques to streamline data handling, ensuring quick turnaround times.",
      },
      {
        question: "Custom Solutions",
        answer:
          "We tailor our data entry services to meet your specific needs, whether it’s updating databases, processing forms, or managing records. Our flexible approach ensures that we provide solutions that align with your business requirements.",
      },
    ],
  },
  {
    id:2,
    heading: "Document Processing",
    imgUrl: DataEntrywebp1,
    items: [
      {
        question: "Scanning and Digitizing",
        answer:
          "We provide comprehensive document scanning and digitizing services to convert physical documents into digital formats. This enhances accessibility and reduces the risk of data loss.",
      },
      {
        question: "Document Organization",
        answer:
          "Our team organizes and categorizes your documents systematically, making it easy to retrieve and manage information. We ensure that your documents are stored securely and are easily accessible when needed.",
      },
      {
        question: "Secure Handling",
        answer:
          "We prioritize the security of your documents throughout the processing phase. Our protocols include encrypted storage and restricted access to protect sensitive information.",
      },
    ],
  },
  {
    id:3,
    heading: "Customer Support",
    imgUrl: DataEntrywebp2,
    items: [
      {
        question: "Multi-Channel Support",
        answer:
          "We offer customer support across various channels, including phone, email, and live chat. This ensures that your clients receive prompt assistance through their preferred method of communication.",
      },
      {
        question: "Professional Representation",
        answer:
          "Our support team is trained to represent your brand professionally, maintaining high standards of service. We focus on providing courteous and effective support to enhance your customer experience.",
      },
      {
        question: "24/7 Availability",
        answer:
          "To meet the diverse needs of your clients, we provide round-the-clock support. This ensures that your customers receive timely assistance and solutions, no matter when they reach out.",
      },
    ],
  },
];
