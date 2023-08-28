"use client";
import Image from "next/image";
import React from "react";

const CustomButton = ({
  title,
  containerStyles,
  btnType,
  handleClick,
  textStyles,
  rightIcon,
}) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      onClick={handleClick}
      className={`custom-btn ${containerStyles}`}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right-icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
