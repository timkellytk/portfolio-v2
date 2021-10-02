import React from "react";
import Link from "next/link";
import style from "./NavItems.module.css";

const NavItems = () => (
  <div className={style.NavMenu}>
    <Link href="/about">
      <a>
        <p className={style.NavLink}>About</p>
      </a>
    </Link>
    <Link href="/portfolio">
      <a>
        <p className={style.NavLink}>Portfolio</p>
      </a>
    </Link>
    <Link href="/contact">
      <a>
        <p className={style.NavLink}>Contact</p>
      </a>
    </Link>
  </div>
);

export default NavItems;
