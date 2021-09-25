import React, { useState } from "react";
import Nav from "../Nav";
import MobileNav from "../Nav/MobileNav";

const Layout = ({ children }) => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <>
      <Nav open={() => setMobileNav(true)} />
      <main>{children}</main>
      <MobileNav show={mobileNav} close={() => setMobileNav(false)} />
    </>
  );
};

export default Layout;
