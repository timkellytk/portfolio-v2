import React from "react";
import style from "./BodyContent.module.css";

const BodyContent = ({ children }) => (
  <div className={style.BodyContent}>{children}</div>
);

export default BodyContent;
