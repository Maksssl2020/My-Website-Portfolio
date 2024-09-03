import React from "react";
import Section from "./Section.jsx";
import SectionBanner from "../banner/SectionBanner.jsx";
import ContactMeForm from "../form/ContactMeForm.jsx";

const ContactMeSection = () => {
  const [isSectionVisible, setIsSectionVisible] = React.useState(false);

  return (
    <Section id={"contact"} setVisibility={setIsSectionVisible}>
      <SectionBanner title={"Contact Me"} />
      <ContactMeForm isVisible={isSectionVisible} />
    </Section>
  );
};

export default ContactMeSection;
