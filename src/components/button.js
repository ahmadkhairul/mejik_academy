import React from "react";

const style = {
  default: {
    width: "100%",
    height: "45px",
    background: "#FAC024",
    borderRadius: "4px"
  },
  primary: {
    width: "100%",
    height: "45px",
    background: "#8854D0",
    borderRadius: "4px"
  },
  secondary: {
    width: "100%",
    height: "45px",
    background: "#FFFFFF",
    border: "1px solid #8854D0",
    borderRadius: "4px"
  }
};

const Button = ({ login, primary, secondary, type, onClick, children }) => {
  return (
    <button
      style={
        login
          ? style.login
          : primary
          ? style.primary
          : secondary
          ? style.secondary
          : style.default
      }
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
