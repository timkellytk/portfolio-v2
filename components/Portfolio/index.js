import React from "react";
import BodyContent from "../util/BodyContent";
import Animate from "../util/Animate";
import ContentContainer from "../util/ContentContainer";
import {
  TheRamblerCoPreview,
  EvolutionaryTutorsPreview,
  SwarmPreview,
  GreenskyGamesPreview,
  SculptrVRPreview,
  SketchboxDesignPreview,
} from "./PortfolioPreview/allPreviews";
import PortfolioPreview from "./PortfolioPreview";

// import TheOdinProject from "./TheOdinProject/TheOdinProject";
import style from "./PortfolioComponent.module.css";

const PortfolioComponent = () => (
  <BodyContent>
    <Animate delayTitle>
      <ContentContainer>
        <h1>Web Development Portfolio</h1>
        <p>
          A collection of websites built for real-world clients and hobby
          projects created with the latest technologies.
        </p>
      </ContentContainer>
    </Animate>
    <div className="margin">
      <Animate delayContent>
        <div className={style.Grid}>
          <SwarmPreview PortfolioPreview={PortfolioPreview} />
          <GreenskyGamesPreview PortfolioPreview={PortfolioPreview} />
          <SketchboxDesignPreview PortfolioPreview={PortfolioPreview} />
          <TheRamblerCoPreview PortfolioPreview={PortfolioPreview} />
          <SculptrVRPreview PortfolioPreview={PortfolioPreview} />
          <EvolutionaryTutorsPreview PortfolioPreview={PortfolioPreview} />
        </div>
        {/*  <TheOdinProject /> */}
      </Animate>
    </div>
  </BodyContent>
);

export default PortfolioComponent;
