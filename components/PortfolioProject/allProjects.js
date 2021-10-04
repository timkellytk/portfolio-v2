import React from "react";
import {
  EvolutinaryTutorsImages,
  EvolutionaryTutorsLogo,
  EvolutionaryTutorsAvatar,
  GreenskyImages,
  GreenskyLogo,
  SculptrVRImages,
  SculptrVRLogo,
  SketchboxImages,
  SketchboxLogo,
  SwarmImages,
  SwarmLogo,
  RamblerImages,
  RamblerLogo,
  RamblerAvatar,
} from "./projectImages";
import PortfolioProject from "./index";

export const EvolutionaryTutorsProject = () => (
  <PortfolioProject
    name="Evolutionary Tutors"
    logo={EvolutionaryTutorsLogo}
    url="https://www.evolutionarytutors.com.au/"
    projectTitle="Website Build"
    projectDescription="A bespoke website to find students the best tutors, give tutors
              effective training and save administrators time."
    gradient1="#d3d3f9"
    gradient2="#c8f4fc"
    avatar={EvolutionaryTutorsAvatar}
    quote="Seldom do you come across such a professional and competent young person like Tim. My partner and I had the pleasure of dealing with Tim and Nathan for over six weeks during our acquisition of Evolutionary Tutors. We were particularly impressed by Tim's transparency and attention to detail throughout the entire transaction and, in particular, the handover process. His responses to our queries were always timely, detailed and well-considered."
    avatarName="Darren Pehn"
    avatarTitle="Co-Owner of Evolutionary Tutors"
    images={EvolutinaryTutorsImages}
    content={[
      {
        heading: "The Context",
        paragraph:
          "Evolutionary Tutors is a private tutoring marketplace that matches primary school and high school students with private tutors in Sydney and Melbourne. Evolutionary Tutors was founded in February 2017 by Tim Kelly and Nathan Reidy before being acquired in November 2019. Tim was responsible for building the website and tutor training program for Evolutionary Tutors.",
      },
      {
        heading: "The Requirements",
        paragraph:
          "Evolutionary Tutors is an online-only marketplace that matches parents and students with private tutors. The website needs to feel premium and trustworthy for parents, exclusive and attractive for tutors and simple to update tutors and subjects for administrators.",
      },
    ]}
  />
);

export const GreenskyGamesProject = () => (
  <PortfolioProject
    name="Greensky Games"
    logo={GreenskyLogo}
    url="https://greensky-games.webflow.io/"
    projectTitle="Website Build"
    projectDescription="An indie gaming studio looking to attract the best development talent and get favourable mentions in the press."
    gradient1="#b7d9b8"
    gradient2="#4da13b"
    images={GreenskyImages}
    content={[
      {
        heading: "The Context",
        paragraph:
          "Greensky Games needed a professional website to attract the best developers and work with top media professionals. Greensky creates intense VR games that push the limits of technology, which inspired the minimalist modern website design.",
      },
    ]}
  />
);

export const SculptrVRProject = () => (
  <PortfolioProject
    name="SculptrVR"
    url="https://www.sculptrvr.com/"
    logo={SculptrVRLogo}
    projectTitle="Website Build"
    projectDescription="A bespoke website to get players excited to download and play a 3d virtual reality sculpting game."
    gradient1="#d1ecff"
    gradient2="#98caec"
    images={SculptrVRImages}
    content={[
      {
        heading: "The Context",
        paragraph:
          "SculptrVR wants to be approachable and exciting for the next generation of virtual reality gamers. The website is the gateway for new players to purchase the game and for existing gamers to learn more about playing the game within the documentation.",
      },
    ]}
  />
);

export const SketchboxDesignProject = () => (
  <PortfolioProject
    name="Sketchbox Design"
    logo={SketchboxLogo}
    url="https://design.sketchbox3d.com/"
    projectTitle="Website Update"
    projectDescription="Sketchbox Design is a marketing website for a VR design and collaboration tool."
    gradient1="#d1d0e8"
    gradient2="#ab9ad3"
    images={SketchboxImages}
    content={[
      {
        heading: "The Context",
        paragraph:
          "Sketchbox design is enterprise software for large organisations for developers and designers to build more efficiently and effectively in virtual reality. The website needs to be informative, signal professionalism and get people excited about using the software for better results at work.",
      },
    ]}
  />
);

export const SwarmProject = () => (
  <PortfolioProject
    name="Swarm"
    logo={SwarmLogo}
    url="https://swarm-vr-game.webflow.io/"
    projectTitle="Website Build"
    projectDescription="A website for an intense fast-paced arcade grapple shooter built in VR."
    gradient1="#24dae0"
    gradient2="#bc76e7"
    images={SwarmImages}
    content={[
      {
        heading: "The Context",
        paragraph:
          "Swarm is an intense VR game built to capture the excitement of the next generation of gamers. The website is an important platform for players to learn more, giving them the confidence to buy the game.",
      },
    ]}
  />
);

export const TheRamblerCoProject = () => (
  <PortfolioProject
    name="The Rambler Co"
    url="https://www.therambler.co/"
    logo={RamblerLogo}
    projectTitle="Website Build"
    projectDescription="A responsive website built from scratch to showcase the travel photography and stories for James Vodicka and his team"
    gradient1="#e8dfca"
    gradient2="#f7c7a4"
    avatar={RamblerAvatar}
    quote="I have been working with Tim to build a new content-focused Australian travel website, The Rambler Co, over the past few months and have been highly impressed with his knowledge, work ethic and professionalism in helping us bring our ideas to life. Not only has Tim worked tirelessly on the design of the website... Tim has gone above and beyond in solving the problems presented to him, and has always offered appropriate solutions to any issues that have arisen. I have loved working with Tim to bring The Rambler Co to life."
    avatarName="James Vodicka"
    avatarTitle="Founder of The Rambler Co"
    images={RamblerImages}
    content={[
      {
        heading: "The Context",
        paragraph:
          "The Rambler Co is a community of travel lovers fuelled by a desire for local discovery, sharing travel stories to inspire your next Australian adventure. Tim is responsible for building a responsive website with a bespoke design, fast loading speeds, an intuitive back-end and high-quality training documentation.",
      },
      {
        heading: "The Requirements",
        paragraph:
          "The website needs to have a delightful design for users, a navigation to access stories and travel locations and an easy way to upload the latest stories and locations. The website needs website tracking for users and high-quality training documentation for the founder to update and maintain the website over time.",
      },
    ]}
  />
);
