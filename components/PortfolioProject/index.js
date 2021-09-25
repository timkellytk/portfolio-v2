import React from "react";
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

  const imageScroll = images
    .slice(0, 7)
    .map((image) => (
      <img
        src={image}
        key={`scroll ${image}`}
        className={style.Image}
        alt="ebook website"
      />
    ));
  const ImageScreenshots = () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    images.map((image) => (
      <img
        src={image}
        key={`screenshot ${image}`}
        className={style.Screenshot}
        alt="ebook website"
      />
    ));

  const ContentComponent = () =>
    // eslint-disable-next-line implicit-arrow-linebreak
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
              <a href={url} target="_blank" rel="noopener noreferrer">
                {logo && (
                  <img src={logo} className={style.Logo} alt={`${name} Logo`} />
                )}
              </a>
            </div>
            <h1>{projectTitle}</h1>
            <p>{projectDescription}</p>
          </Animate>
        </div>
        <div className={style.HeroImageSection} style={gradient}>
          <Animate delayTitle>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <div className={style.ImageContainer}>{imageScroll}</div>
            </a>
          </Animate>
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
