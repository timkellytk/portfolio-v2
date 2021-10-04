import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import ArrowIcon from "public/assets/images/utility/arrow-icon.svg";
import Link from "next/link";
import style from "./LinkArrow.module.css";

const LinkArrow = ({ link, children }) => (
  <Link href={link}>
    <a>
      <div className={style.Button}>
        <p className={style.ArrowText}>{children}</p>
        <div className={style.ArrowIcon}>
          <Image width="22px" height="10px" src={ArrowIcon} alt="arrow icon" />
        </div>
      </div>
    </a>
  </Link>
);

LinkArrow.propTypes = {
  link: PropTypes.string.isRequired,
};

export default LinkArrow;
