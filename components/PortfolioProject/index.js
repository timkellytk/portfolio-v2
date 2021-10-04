import React from "react";
import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";
import Contact from "../Contact";
import Animate from "../util/Animate";
import BodyContent from "../util/BodyContent";
import ContentContainer from "../util/ContentContainer";
import Button from "../util/Button";
import BackArrow from "../util/BackArrow";
import Quote from "../util/Quote";
import Divider from "../util/Divider";
import style from "./PortfolioProject.module.css";

const PortfolioProject = ({
  gradient1,
  gradient2,
  images,
  url,
  logo,
  projectTitle,
  projectDescription,
  quote,
  name,
  avatar,
  avatarName,
  avatarTitle,
  content,
}) => {
  const gradient = {
    background: `linear-gradient(to bottom right, ${gradient1}, ${gradient2})`,
  };

  const ImageScreenshots = () =>
    images.map((image) => (
      <Image
        src={image}
        key={`screenshot ${image}`}
        height="800"
        width="1400"
        quality="100"
        placeholder="blur"
      />
    ));

  const ContentComponent = () =>
    content.map((topic) => (
      <div key={topic.heading}>
        <h1>{topic.heading}</h1>
        <p>{topic.paragraph}</p>
      </div>
    ));

  return (
    <>
      <div className={[style.Hero, "negativeNavMargin"].join(" ")}>
        <div className={style.HeroContent}>
          <Animate delayTitle>
            <BackArrow link="/portfolio" internal>
              Back To Portfolio
            </BackArrow>
            <div>
              <Link href={url}>
                <a target="_blank" rel="noopener noreferrer">
                  {logo && (
                    <div className={style.Logo}>
                      <Image
                        src={logo}
                        className={style.Logo}
                        alt={`${name} Logo`}
                        height="65"
                        width="200"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="left"
                      />
                    </div>
                  )}
                </a>
              </Link>
            </div>
            <h1>{projectTitle}</h1>
            <p>{projectDescription}</p>
          </Animate>
        </div>
        <div className={style.HeroImageSection} style={gradient}>
          <Link href={url}>
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src={images[0]}
                key={`screenshot ${images[0]}`}
                height="600"
                width="1000"
                quality="100"
                priority
              />
            </a>
          </Link>
        </div>
      </div>
      <BodyContent>
        <ContentContainer>
          <Animate delayTitle>
            <div className="margin">
              {quote && (
                <>
                  <Quote
                    avatar={avatar}
                    quote={quote}
                    avatarName={avatarName}
                    avatarTitle={avatarTitle}
                  />
                  <Divider />
                </>
              )}
              <ContentComponent />
              <h1>The Result</h1>
              <div className={style.ViewWebsiteMargin}>
                <Button link={url}>Visit The Website</Button>
              </div>
              <ImageScreenshots />
            </div>
          </Animate>
        </ContentContainer>
      </BodyContent>
      <Contact />
    </>
  );
};

PortfolioProject.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  projectTitle: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  gradient1: PropTypes.string.isRequired,
  gradient2: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  avatarName: PropTypes.string.isRequired,
  avatarTitle: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PortfolioProject;
