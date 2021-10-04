import React from "react";
import Image from "next/image";
import OdinLogo from "public/assets/images/projects/the-odin-project/odin-logo.svg";
import NYTImg from "public/assets/images/projects/the-odin-project/new-york-times-clone.png";
import BattleshipImg from "public/assets/images/projects/the-odin-project/battleship.png";
import WaldoImg from "public/assets/images/projects/the-odin-project/waldo.png";
import WeatherImg from "public/assets/images/projects/the-odin-project/project-weather-app.png";
import TicTacToeImg from "public/assets/images/projects/the-odin-project/tic-tac-toe.png";
import BurgerImg from "public/assets/images/projects/the-odin-project/burger-builder.png";
import LibraryImg from "public/assets/images/projects/the-odin-project/library.png";
import RockPaperScissorImg from "public/assets/images/projects/the-odin-project/rock-paper-scissors.png";
import YoutubeImg from "public/assets/images/projects/the-odin-project/youtube-clone.png";
import AppleImg from "public/assets/images/projects/the-odin-project/apple-2014-clone.png";
import NewsWeekImg from "public/assets/images/projects/the-odin-project/newsweek-clone.png";
import TNWImg from "public/assets/images/projects/the-odin-project/tnw-clone.png";
import RestaurantImg from "public/assets/images/projects/the-odin-project/restaurant.png";
import ToDoListImg from "public/assets/images/projects/the-odin-project/to-do-list.png";
import CalculatorImg from "public/assets/images/projects/the-odin-project/calculator.png";
import GoogleImg from "public/assets/images/projects/the-odin-project/google.png";
import ProjectItem from "./ProjectItem";
import Section from "../../util/Section";
import LinkArrow from "../../util/LinkArrow";
import style from "./TheOdinProject.module.css";

const TheOdinProject = () => (
  <Section gradient1="#e0e0e0" gradient2="#eddfc8">
    <div className={style.Content}>
      <Image
        src={OdinLogo}
        alt="the odin project logo"
        height="85"
        width="80"
      />
      <h2>Projects from The Odin Project Bootcamp</h2>
      <p>
        The Odin Project is a full stack web development bootcamp where you
        create websites with JavaScript, React and NodeJS
      </p>
    </div>
    <LinkArrow link="https://github.com/timkellytk">
      View projects on GitHub
    </LinkArrow>
    <div className={style.SectionTop}>
      <div className={style.PhotoContainer}>
        <ProjectItem
          image={NYTImg}
          link="https://github.com/timkellytk/project-new-york-times-clone"
          alt="new york times clone"
        />
        <ProjectItem
          image={BattleshipImg}
          link="https://github.com/timkellytk/project-battleship"
          alt="battleship game"
        />
        <ProjectItem
          image={WaldoImg}
          link="https://github.com/timkellytk/project-wheres-waldo"
          alt="Waldo game"
        />
        <ProjectItem
          image={WeatherImg}
          link="https://github.com/timkellytk/project-weather-app"
          alt="weather app"
        />
        <ProjectItem
          image={TicTacToeImg}
          link="https://timkellytk.github.io/project-tic-tac-toe/"
          alt="tic tac toe game"
        />
        <ProjectItem
          image={BurgerImg}
          link="https://timkellytk.github.io/project-react-burger-app"
          alt="burger builder"
        />
        <ProjectItem
          image={LibraryImg}
          link="https://timkellytk.github.io/project-react-library"
          alt="online book library"
        />
        <ProjectItem
          image={RockPaperScissorImg}
          link="https://timkellytk.github.io/project-rock-paper-scissors"
          alt="rock paper scissors"
        />
      </div>
    </div>
    <div className={style.SectionBottom}>
      <div className={style.PhotoContainer}>
        <ProjectItem
          image={YoutubeImg}
          link="https://github.com/timkellytk/project-youtube-clone"
          alt="youtube clone"
        />
        <ProjectItem
          image={AppleImg}
          link="https://github.com/timkellytk/project-apple-2014-clone"
          alt="apple 2014 clone"
        />
        <ProjectItem
          image={NewsWeekImg}
          link="https://github.com/timkellytk/project-newsweek-clone"
          alt="newsweek clone"
        />
        <ProjectItem
          image={TNWImg}
          link="https://github.com/timkellytk/project-the-next-web-clone"
          alt="the next web clone"
        />
        <ProjectItem
          image={RestaurantImg}
          link="https://timkellytk.github.io/project-restaurant-website"
          alt="restaurant website"
        />
        <ProjectItem
          image={ToDoListImg}
          link="https://timkellytk.github.io/project-to-do-list"
          alt="to do list website"
        />
        <ProjectItem
          image={CalculatorImg}
          link="https://timkellytk.github.io/project-calculator"
          alt="calculator"
        />
        <ProjectItem
          image={GoogleImg}
          link="https://timkellytk.github.io/project-google-homepage/"
          alt="google homepage"
        />
      </div>
    </div>
  </Section>
);

export default TheOdinProject;
