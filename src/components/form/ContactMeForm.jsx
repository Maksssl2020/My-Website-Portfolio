import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import FormInput from "../input/FormInput.jsx";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const ContactMeForm = ({ isVisible }) => {
  const { t } = useTranslation();
  const form = useRef();

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = () => {
    emailjs
      .send(
        "service_rx4hmga",
        "template_4fa6pqy",
        {
          user_name: getValues().name,
          user_email: getValues().email,
          message: getValues().contactMessage,
        },
        {
          publicKey: "coSWWXaO8Q6sYVoNv",
        },
      )
      .then(
        () => {
          reset();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={isVisible && { opacity: 2 }}
      transition={{ duration: 1.0 }}
      className={
        "flex h-auto flex-col gap-6 rounded-xl border-custom-blue-100 p-8 max-sm:w-full sm:w-[575px] sm:border-4 md:w-[600px] lg:w-[650px]"
      }
      ref={form}
      onSubmit={handleSubmit(sendEmail)}
    >
      <FormInput
        key={"userName"}
        title={t("contactMeName")}
        register={register("name", {
          required: t("contactMeNameError"),
        })}
        errors={errors?.name?.message !== null}
        errorLanguageKey={"contactMeNameError"}
      />
      <FormInput
        key={"userEmail"}
        title={"E-mail"}
        valueType={"email"}
        register={register("email", {
          required: t("contactMeEmailRequiredError"),
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: t("contactMeEmailPatternError"),
          },
        })}
        errors={errors?.email?.message !== null}
        errorLanguageKey={
          errors?.email?.type === "required"
            ? "contactMeEmailRequiredError"
            : "contactMeEmailPatternError"
        }
      />
      <FormInput
        title={t("contactMeMessage")}
        key={"userMessage"}
        valueType={"text"}
        inputType={"text-form"}
        register={register("contactMessage", {
          required: t("contactMeMessageError"),
        })}
        errors={errors?.contactMessage?.message !== null}
        errorLanguageKey={"contactMeMessageError"}
      />
      <motion.button
        type={"submit"}
        whileHover={{
          color: "#FFFFFF",
          background: "#0066FF",
          borderColor: "#FFFFFF",
        }}
        style={{
          color: "#0066FF",
          background: "#000000",
          borderColor: "#0066FF",
        }}
        className={
          "mt-8 w-full rounded-xl border-4 font-bold uppercase tracking-widest text-white max-xs:h-[45px] 3xs:text-sm xs:h-[50px] xs:text-xl sm:h-[55px] md:h-[65px] md:text-2xl lg:h-[75px] lg:text-3xl"
        }
      >
        {t("contactMeButton")}
      </motion.button>
    </motion.form>
  );
};

export default ContactMeForm;
