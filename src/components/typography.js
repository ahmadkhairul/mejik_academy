import React from "react";

const Typography = ({ style, children, onClick }) => {
  return (
    <span onClick={onClick} style={style}>
      {children}
    </span>
  );
};

export default Typography;
