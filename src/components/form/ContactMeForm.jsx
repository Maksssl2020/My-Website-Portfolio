import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import FormInput from "../input/FormInput.jsx";
import emailjs from "@emailjs/browser";

const ContactMeForm = ({ isVisible }) => {
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
        "max-sm:w-full sm:w-[575px] md:w-[600px] lg:w-[650px] h-auto sm:border-4 border-custom-violet-100 rounded-xl p-8 flex flex-col gap-6"
      }
      ref={form}
      onSubmit={handleSubmit(sendEmail)}
    >
      <FormInput
        title={"Name"}
        name={"user_name"}
        register={register("name", {
          required: "Please enter your name.",
        })}
        errors={errors?.name?.message}
      />
      <FormInput
        title={"E-mail"}
        name={"user_email"}
        valueType={"email"}
        register={register("email", {
          required: "Please enter your email address.",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Please enter a valid email address.",
          },
        })}
        errors={errors?.email?.message}
      />
      <FormInput
        title={"Message"}
        name={"message"}
        valueType={"text"}
        inputType={"text-form"}
        register={register("contactMessage", {
          required: "Please enter a message.",
        })}
        errors={errors?.contactMessage?.message}
      />
      <motion.button
        type={"submit"}
        whileHover={{
          color: "#FFFFFF",
          background: "#4386F4",
          borderColor: "#FFFFFF",
        }}
        style={{
          color: "#4386F4",
          background: "#1A1A1A",
          borderColor: "#4386F4",
        }}
        className={
          "w-full max-xs:h-[45px] xs:h-[50px] sm:h-[55px] md:h-[65px] lg:h-[75px] mt-8 border-4 text-white uppercase 3xs:text-sm xs:text-xl md:text-2xl lg:text-3xl font-bold tracking-widest rounded-xl"
        }
      >
        SUBMIT
      </motion.button>
    </motion.form>
  );
};

export default ContactMeForm;
