import React from "react";
import PropTypes from "prop-types";
import style from "./ProjectItem.module.css";

const ProjectItem = ({ link, image, alt }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <img src={image} alt={alt} className={style.Photo} />
  </a>
);

ProjectItem.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

ProjectItem.defaultProps = {
  alt: "",
};

export default ProjectItem;
