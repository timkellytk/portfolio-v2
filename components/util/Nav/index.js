import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import NavItems from "./NavItems";
import HamburgerMenu from "./HamburgerMenu";
import style from "./Nav.module.css";

const Nav = ({ open }) => (
  <>
    <header className={style.Nav}>
      <Link href="/">
        <a>
          <img
            src="/assets/images/utility/tk-logo.png"
            alt="Tim Kelly logo"
            className={style.Logo}
          />
        </a>
      </Link>
      <nav className={style.DesktopOnly}>
        <NavItems />
      </nav>
      <HamburgerMenu clicked={open} />
    </header>
    <div className={style.NavMargin} />
  </>
);

Nav.propTypes = {
  open: PropTypes.func.isRequired,
};

export default Nav;
