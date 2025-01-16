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
    <div className={"flex flex-col gap-4 text-white"}>
      <AnimatePresence>
        <label
          className={
            "ml-2 font-bold max-xs:text-sm xs:text-lg md:text-xl lg:text-2xl"
          }
        >
          {title}
        </label>
        {inputType === "input" ? (
          <motion.input
            key={"input"}
            whileFocus={{ borderColor: "#0066FF" }}
            style={{ borderColor: "#FFFFFF" }}
            type={valueType}
            className={
              "gray-dark-gray-background-gradient rounded-xl border-2 px-4 focus:outline-none max-xs:h-[40px] xs:h-[50px]"
            }
            {...register}
          />
        ) : (
          <motion.textarea
            key={"textarea"}
            whileFocus={{ borderColor: "#0066FF" }}
            style={{ borderColor: "#FFFFFF" }}
            className={
              "gray-dark-gray-background-gradient h-[150px] resize-none rounded-xl border-2 p-4 focus:outline-none"
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
            className={"ml-3 font-medium max-xs:text-xs xs:text-sm md:text-lg"}
          >
            {errors}
          </motion.label>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FormInput;
