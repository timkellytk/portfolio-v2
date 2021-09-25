import React from "react";
import PropTypes from "prop-types";
import style from "./Quote.module.css";

const Quote = ({ quote, avatar, avatarName, avatarTitle }) => (
  <div>
    <p className={style.Quote}>&quot;{quote}&quot;</p>
    <div className={style.QuoteBox}>
      <img src={avatar} className={style.QuoteAvatar} alt={avatarName} />
      <div className={style.AvatarText}>
        <div>{avatarName}</div>
        <div>{avatarTitle}</div>
      </div>
    </div>
  </div>
);

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  avatarName: PropTypes.string.isRequired,
  avatarTitle: PropTypes.string.isRequired,
};

export default Quote;
