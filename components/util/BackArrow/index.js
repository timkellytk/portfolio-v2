import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import style from "./BackArrow.module.css";

const BackArrow = ({ link, children }) => (
  <Link href={link}>
    <a>
      <div className={style.Button}>
        <img
          src="/assets/images/utility/back-arrow.svg"
          className={style.ArrowIcon}
          alt="arrow icon"
        />
        <p className={style.ArrowText}>{children}</p>
      </div>
    </a>
  </Link>
);

BackArrow.propTypes = {
  link: PropTypes.string.isRequired,
};

export default BackArrow;
