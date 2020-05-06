import React from "react";

export const Container = ({ header, children, style }) => {
  return (
    <div className={header ? "header" : "container"} style={style}>
      {children}
    </div>
  );
};

export const Row = ({ flex, children, style }) => {
  return (
    <div className={flex ? "row flex" : "row"} style={style}>
      {children}
    </div>
  );
};

export const Col = ({ sm, lg, children, style }) => {
  const colsm = sm ? `col-s-${sm}` : `col-s-12`;
  const collg = lg ? `col-${lg}` : `col-12`;
  const colclass = `col ` + collg + ` ` + colsm;
  return (
    <div className={colclass} style={style}>
      {children}
    </div>
  );
};
