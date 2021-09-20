import React from "react";
import PropTypes from "prop-types";
import style from "./Button.module.css";

const Button = ({ link, children }) => (
  <a
    href={link}
    className={style.Button}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

Button.propTypes = {
  link: PropTypes.string.isRequired,
};

export default Button;
