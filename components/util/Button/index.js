import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import style from "./Button.module.css";

const Button = ({ link, children }) => (
  <Link href={link}>
    <a className={style.Button} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  </Link>
);

Button.propTypes = {
  link: PropTypes.string.isRequired,
};

export default Button;
