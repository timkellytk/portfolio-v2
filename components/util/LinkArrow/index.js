import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import style from "./LinkArrow.module.css";

const LinkArrow = ({ link, children }) => (
  <Link href={link}>
    <a>
      <div className={style.Button}>
        <p className={style.ArrowText}>{children}</p>
        <img
          src="/assets/images/utility/arrow-icon.svg"
          className={style.ArrowIcon}
          alt="arrow icon"
        />
      </div>
    </a>
  </Link>
);

LinkArrow.propTypes = {
  link: PropTypes.string.isRequired,
};

export default LinkArrow;
