import React from "react";
import Link from "next/link";
import style from "./NavItems.module.css";

const NavItems = () => (
  <div className={style.NavMenu}>
    <Link href="/about">
      <p className={style.NavLink}>About</p>
    </Link>
    <Link href="/portfolio">
      <p className={style.NavLink}>Portfolio</p>
    </Link>
    <Link href="/contact">
      <p className={style.NavLink}>Contact</p>
    </Link>
  </div>
);

export default NavItems;
