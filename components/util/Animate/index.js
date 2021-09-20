import React from "react";
import style from "./Animate.module.css";

const Animate = ({ children, delayContent, delayTitle }) => {
  let animate = <div className={style.Animate}>{children}</div>;

  if (delayContent) {
    animate = (
      <div className={`${style.Animate} ${style.DelayContent}`}>{children}</div>
    );
  }

  if (delayTitle) {
    animate = (
      <div className={`${style.Animate} ${style.DelayTitle}`}>{children}</div>
    );
  }

  return animate;
};

export default Animate;
