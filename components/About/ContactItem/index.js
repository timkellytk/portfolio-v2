import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import style from "./ContactItem.module.css";

const ContactItem = ({ link, children }) => (
  <p className={style.ContactItem}>
    <Link href={link}>
      <a>{children}</a>
    </Link>
  </p>
);

ContactItem.propTypes = {
  link: PropTypes.string.isRequired,
};

export default ContactItem;
