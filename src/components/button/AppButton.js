import React from "react";
import "./AppButton.css";

const AppButton = ({ children, className, ...props }) => {
  const appBtnClasses = `app-btn ${className}`;
  return (
    <button className={appBtnClasses} {...props}>
      {children}
    </button>
  );
};

export default AppButton;
