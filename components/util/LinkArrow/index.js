import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import style from "./LinkArrow.module.css";

const LinkArrow = ({ link, internal, children }) => (
  <Link
    href={link}
    target={!internal && "_blank"}
    rel={!internal && "noopener noreferrer"}
  >
    <div className={style.Button}>
      <p className={style.ArrowText}>{children}</p>
      <img
        src="/assets/images/utility/arrow-icon.svg"
        className={style.ArrowIcon}
        alt="arrow icon"
      />
    </div>
  </Link>
);

LinkArrow.propTypes = {
  link: PropTypes.string.isRequired,
};

export default LinkArrow;
