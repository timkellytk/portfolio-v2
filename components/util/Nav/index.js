import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import Link from "next/link";
import Logo from "../../../public/assets/images/utility/tk-logo.png";
import NavItems from "./NavItems";
import HamburgerMenu from "./HamburgerMenu";
import style from "./Nav.module.css";

const Nav = ({ open }) => (
  <>
    <header className={style.Nav}>
      <Link href="/">
        <a>
          <div className={style.Logo}>
            <Image
              src={Logo}
              alt="Tim Kelly logo"
              height="30px"
              width="120px"
              quality="100"
              priority
            />
          </div>
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
