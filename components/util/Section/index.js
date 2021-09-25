import React from "react";
import PropTypes from "prop-types";
import ContentContainer from "../ContentContainer";
import style from "./Section.module.css";

const Section = ({ children, gradient1, gradient2 }) => {
  const background = `linear-gradient(to bottom right,${gradient1}, ${gradient2})`;

  return (
    <div
      className={style.Section}
      style={{
        background,
      }}
    >
      <ContentContainer section>{children}</ContentContainer>
    </div>
  );
};

Section.propTypes = {
  gradient1: PropTypes.string.isRequired,
  gradient2: PropTypes.string.isRequired,
};

export default Section;
