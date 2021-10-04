import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import Link from "next/link";
import BackArrowImg from "public/assets/images/utility/back-arrow.svg";
import style from "./BackArrow.module.css";

const BackArrow = ({ link, children }) => (
  <Link href={link}>
    <a>
      <div className={style.Button}>
        <div className={style.ArrowIcon}>
          <Image
            src={BackArrowImg}
            width="22px"
            height="10px"
            alt="arrow icon"
          />
        </div>

        <p className={style.ArrowText}>{children}</p>
      </div>
    </a>
  </Link>
);

BackArrow.propTypes = {
  link: PropTypes.string.isRequired,
};

export default BackArrow;
