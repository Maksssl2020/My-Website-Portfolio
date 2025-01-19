import React from "react";
import Section from "./Section.jsx";
import SectionBanner from "../banner/SectionBanner.jsx";
import ContactMeForm from "../form/ContactMeForm.jsx";
import { useTranslation } from "react-i18next";

const ContactMeSection = () => {
  const { t } = useTranslation();
  const [isSectionVisible, setIsSectionVisible] = React.useState(false);

  return (
    <Section id={"contact"} setVisibility={setIsSectionVisible}>
      <SectionBanner sectionNumber={"4"} title={t("contactMeTitle")} />
      <ContactMeForm isVisible={isSectionVisible} />
    </Section>
  );
};

export default ContactMeSection;
