import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import style from "./ProjectItem.module.css";

const ProjectItem = ({ link, image, alt }) => (
  <Link href={link}>
    <a target="_blank" rel="noopener noreferrer">
      <div className={style.PhotoBg}>
        <Image
          src={image}
          alt={alt}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </div>
    </a>
  </Link>
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
