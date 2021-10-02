import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import Section from "../../util/Section";
import LinkArrow from "../../util/LinkArrow";

const PortfolioPreview = ({
  gradient1,
  gradient2,
  logo,
  name,
  description,
  link,
}) => (
  <Section gradient1={gradient1} gradient2={gradient2}>
    <div>
      <div style={{ position: "relative", height: "65px" }}>
        <Image
          src={logo}
          height="65"
          width="200"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt={`${name} logo`}
        />
      </div>
      <p>{description}</p>
      <LinkArrow link={link}>View Full Project</LinkArrow>
    </div>
  </Section>
);

PortfolioPreview.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  gradient1: PropTypes.string.isRequired,
  gradient2: PropTypes.string.isRequired,
};

export default PortfolioPreview;
