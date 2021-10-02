import React from "react";
import Link from "next/link";
import Button from "../util/Button";
import BodyContent from "../util/BodyContent";
import ContentContainer from "../util/ContentContainer";
import Animate from "../util/Animate";
import style from "./Contact.module.css";

const Contact = () => (
  <div className="margin">
    <BodyContent>
      <ContentContainer>
        <div className={style.CentreContent}>
          <Animate delayTitle>
            <div className={style.CentreContent}>
              <div className={style.Avatar} />
              <h1 className={style.Title}>Get in touch</h1>
              <p>
                Contact me at{" "}
                <Link href="mailto:timpkelly1@gmail.com">
                  <a>timpkelly1@gmail.com</a>
                </Link>{" "}
                for upcoming web developer roles.
              </p>
            </div>
            <div className={style.ContactContainer}>
              <Button link="mailto:timpkelly1@gmail.com">Email Me</Button>
              <div className={style.SocialContainer}>
                <Link href="https://github.com/timkellytk">
                  <a target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/utility/github.png"
                      className={style.SocialIcon}
                      alt="github"
                    />
                  </a>
                </Link>
                <Link href="https://www.linkedin.com/in/tim-patrick-kelly/">
                  <a target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/utility/linkedin.png"
                      className={style.SocialIcon}
                      alt="linkedin"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </Animate>
        </div>
      </ContentContainer>
    </BodyContent>
  </div>
);

export default Contact;
