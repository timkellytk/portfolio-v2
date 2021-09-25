/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import style from "./HamburgerMenu.module.css";

const HamburgerMenu = ({ clicked }) => (
  <div className={style.Menu} onClick={clicked}>
    <img src="/assets/images/utility/menu.svg" alt="menu" height="25px" />
  </div>
);

HamburgerMenu.propTypes = {
  clicked: PropTypes.func.isRequired,
};

export default HamburgerMenu;
