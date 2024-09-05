import PageTransitions from "../../animation/PageTransitions/PageTransitions";
import ContactComts from "../../components/ContactComts/ContactComts";
import ImageComts from "../../components/ImageComts/ImageComts";

const Contact = () => {
  return (
    <PageTransitions>
      <ImageComts
        heading="Connect with Our Business Process Experts"
        heading2="Reach Out to My Our Streamlined BPO Solutions"
      />

      <ContactComts />
    </PageTransitions>
  );
};

export default Contact;
