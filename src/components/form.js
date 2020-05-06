import React from "react";
import Typography from "../components/typography";

const style = {
  form: {
    display: "flex",
    flexDirection: "column",
    width: "400px"
  },
  checkLabel: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    color: "#ffffff"
  }
};

export const Form = ({ children }) => {
  return <form style={style.form}>{children}</form>;
};

export const Label = ({ children, style }) => {
  return <label style={style}>{children}</label>;
};

export const Checkbox = ({ value, label, name, onChange }) => {
  return (
    <>
      <input
        type="checkbox"
        value={value}
        name={name}
        id={name}
        onChange={onChange}
      />
      <label style={style.checkLabel} for={name}>
        {label}
      </label>
    </>
  );
};

export const Input = ({ type, name, value, placeholder, onChange, style }) => {
  return (
    <input
      style={style}
      type={type}
      onChange={onChange}
      name={name}
      value={value}
      placeholder={placeholder}
    />
  );
};

export const Select = ({ name, children, value, onChange }) => {
  return (
    <select
      className="form-input"
      name={name}
      onChange={onChange}
      value={value}
    >
      {children}
    </select>
  );
};
