import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const FormInput = ({
  title,
  name,
  valueType = "text",
  inputType = "input",
  register,
  errors,
}) => {
  return (
    <div className={"flex flex-col text-white gap-4"}>
      <AnimatePresence>
        <label className={"ml-2 font-bold text-2xl"}>{title}</label>
        {inputType === "input" ? (
          <motion.input
            whileFocus={{ borderColor: "#4386F4" }}
            style={{ borderColor: "#FFFFFF" }}
            type={valueType}
            className={
              "h-[50px] px-4 rounded-xl focus:outline-none bg-custom-gray-100 border-2"
            }
            {...register}
          />
        ) : (
          <motion.textarea
            whileFocus={{ borderColor: "#4386F4" }}
            style={{ borderColor: "#FFFFFF" }}
            className={
              "h-[150px] resize-none p-4 rounded-xl focus:outline-none bg-custom-gray-100 border-2"
            }
            {...register}
          />
        )}
        {errors && (
          <motion.label
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={"text-lg ml-3 font-medium"}
          >
            {errors}
          </motion.label>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FormInput;
