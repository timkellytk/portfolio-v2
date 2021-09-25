import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import style from "./BackArrow.module.css";

const BackArrow = ({ link, children, internal }) => (
  <Link
    href={link}
    target={internal && "_blank"}
    rel={internal && "noopener noreferrer"}
  >
    <div className={style.Button}>
      <img
        src="/assets/images/utility/back-arrow.svg"
        className={style.ArrowIcon}
        alt="arrow icon"
      />
      <p className={style.ArrowText}>{children}</p>
    </div>
  </Link>
);

BackArrow.propTypes = {
  link: PropTypes.string.isRequired,
};

export default BackArrow;
