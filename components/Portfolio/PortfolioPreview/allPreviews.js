import React from "react";
import EvolutionaryLogo from "public/assets/images/projects/evolutionary-tutors/evolutionary-logo.png";
import GreenskyLogo from "public/assets/images/projects/greensky-games/greensky-logo.png";
import SculptrVRLogo from "public/assets/images/projects/sculptrvr/sculptrvr-logo.png";
import SketchboxDesignLogo from "public/assets/images/projects/sketchbox-design/sketchbox-design-logo.png";
import SwarmLogo from "public/assets/images/projects/swarm/swarm-logo.png";
import RamblerLogo from "public/assets/images/projects/the-rambler-co/rambler-logo.png";

export const EvolutionaryTutorsPreview = ({ PortfolioPreview }) => (
  <PortfolioPreview
    name="Evolutionary Tutors"
    description="Private tutoring marketplace for primary school and high school
              students"
    logo={EvolutionaryLogo}
    link="/portfolio/evolutionary-tutors"
    gradient1="#d3d3f9"
    gradient2="#c8f4fc"
  />
);

export const GreenskyGamesPreview = ({ PortfolioPreview }) => (
  <PortfolioPreview
    name="Greensky Games"
    description="Indie studio focused solely on VR, intense games using the latest technology"
    logo={GreenskyLogo}
    link="/portfolio/greensky-games"
    gradient1="#b7d9b8"
    gradient2="#4da13b"
  />
);

export const SculptrVRPreview = ({ PortfolioPreview }) => (
  <PortfolioPreview
    name="SculptrVR"
    description="Create brilliant new worlds in virtual reality and explore them with friends"
    logo={SculptrVRLogo}
    link="/portfolio/sculptrvr"
    gradient1="#d1ecff"
    gradient2="#98caec"
  />
);

export const SketchboxDesignPreview = ({ PortfolioPreview }) => (
  <PortfolioPreview
    name="Sketchbox Design"
    description="The #1 design and collaboration tool for augmented reality and virtual reality"
    logo={SketchboxDesignLogo}
    link="/portfolio/sketchbox-design"
    gradient1="#d1d0e8"
    gradient2="#ab9ad3"
  />
);

export const SwarmPreview = ({ PortfolioPreview }) => (
  <PortfolioPreview
    name="Swarm"
    description="Epic arcade shooter built for VR, fast-paced, quick-sessions and colourful worlds"
    logo={SwarmLogo}
    link="/portfolio/swarm"
    gradient1="#24dae0"
    gradient2="#bc76e7"
  />
);

export const TheRamblerCoPreview = ({ PortfolioPreview }) => (
  <PortfolioPreview
    name="The Rambler Co"
    description="Sharing travel stories to inspire your next Australian adventure"
    logo={RamblerLogo}
    link="/portfolio/the-rambler-co"
    gradient1="#e8dfca"
    gradient2="#f7c7a4"
  />
);
