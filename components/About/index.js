import React from "react";
import Link from "next/link";
import BodyContent from "../util/BodyContent";
import ContentContainer from "../util/ContentContainer";
import Animate from "../util/Animate";
import ContactItem from "./ContactItem";
import style from "./About.module.css";

const AboutComponent = () => (
  <BodyContent>
    <ContentContainer>
      <Animate delayTitle>
        <h1 className="margin">
          Hello, my name is Tim. I am a front-end web developer in Sydney,
          Australia
        </h1>
      </Animate>
    </ContentContainer>
    <Animate delayContent>
      <div className={style.Photo} />
      <ContentContainer>
        <p>
          I&apos;m a front-end web developer with a Bachelor of Marketing and
          Media from Macquarie University (GPA 3.9/4) and more than three years
          of experience working for small businesses and large enterprises.
        </p>
        <p>
          In 2017, I co-founded a private tutoring business and created my first
          WordPress website. For the next two and half years, I hustled to build
          the company from $0 to $350k in revenue and learned HTML, CSS and
          JavaScript in the process.
        </p>
        <p>
          In 2020, I studied full-time how to build modern web applications with
          JavaScript, React, Redux and Firebase. I developed websites for
          startups in education, travel, VR gaming and VR software. My freelance
          clients include{" "}
          <Link href="/portfolio/sketchbox-design">
            <a>Sketchbox</a>
          </Link>
          ,{" "}
          <Link href="/portfolio/the-rambler-co">
            <a>The Rambler Co</a>
          </Link>
          ,{" "}
          <Link href="/portfolio/swarm">
            <a>Swarm</a>
          </Link>
          ,{" "}
          <Link href="/portfolio/sculptrvr">
            <a>SculptrVR</a>
          </Link>{" "}
          and{" "}
          <Link href="/portfolio/greensky-games">
            <a>Greensky Games</a>
          </Link>
          .
        </p>
        <p>
          In my previous role as a Developer Intern at{" "}
          <Link href="https://www.southerncrossaustereo.com.au/">
            <a>Southern Cross Austereo</a>
          </Link>
          , we launched{" "}
          <Link href="https://www.listnr.com/">
            <a>LiSTNR</a>
          </Link>
          , an audio platform built with React, Redux, Firebase Cloud Function
          and GraphQL.
        </p>
        <p>
          Now I&apos;m a UI developer at{" "}
          <Link href="https://www.4mation.com.au/">
            <a>4mation Technologies</a>
          </Link>
          , a custom web and software development company based in Surry Hills.
        </p>
        <p>
          <Link href="/assets/pdfs/resume.pdf">
            <a className={style.Resume}>View resume</a>
          </Link>
        </p>
        <div className={style.ContactList}>
          <ContactItem link="mailto:timpkelly1@gmail.com">
            timpkelly1@gmail.com
          </ContactItem>
          <ContactItem link="https://github.com/timkellytk">GitHub</ContactItem>
          <ContactItem link="https://www.linkedin.com/in/tim-patrick-kelly/">
            LinkedIn
          </ContactItem>
        </div>
      </ContentContainer>
    </Animate>
  </BodyContent>
);

export default AboutComponent;
