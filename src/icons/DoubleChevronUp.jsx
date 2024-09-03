import React from "react";

const DoubleChevronUp = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 18.75 7.5-7.5 7.5 7.5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 7.5-7.5 7.5 7.5"
      />
    </svg>
  );
};

export default DoubleChevronUp;
