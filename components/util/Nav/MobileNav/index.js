/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import NavItems from "../NavItems";
import style from "./MobileNav.module.css";

const MobileNav = ({ show, close }) => {
  let attachedClasses = [style.Load];

  if (show) {
    attachedClasses = [style.MobileNav, style.Open];
  }
  return (
    <div className={attachedClasses.join(" ")}>
      <NavItems />

      <div
        className={style.CloseBtn}
        aria-label="Close the menu"
        onClick={close}
      >
        <Image
          src="public/assets/images/utility/exit.svg"
          alt="Close Menu"
          height="20"
          width="20"
        />
      </div>
    </div>
  );
};

MobileNav.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default MobileNav;
