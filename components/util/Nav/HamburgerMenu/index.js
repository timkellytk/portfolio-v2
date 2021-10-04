/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import MenuImg from "public/assets/images/utility/menu.svg";
import style from "./HamburgerMenu.module.css";

const HamburgerMenu = ({ clicked }) => (
  <div className={style.Menu} onClick={clicked}>
    <Image src={MenuImg} alt="menu" height="25" width="25" />
  </div>
);

HamburgerMenu.propTypes = {
  clicked: PropTypes.func.isRequired,
};

export default HamburgerMenu;
