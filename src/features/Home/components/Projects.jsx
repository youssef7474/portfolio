import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";
import RestechoImg from "../../../assets/Imges/istockphoto-1407200725-2048x2048.jpg";
import MAGNAImg from "../../../assets/Imges/Screenshot 2024-08-25 133815.png";
import AccountingImg from "../../../assets/Imges/accounting.jpg";
import HRImg from "../../../assets/Imges/hr.jpg";
import Reservation from "../../../assets/Imges/reservation.jpg";
import PlayGround from "../../../assets/Imges/playGround.jpg";
import AlAzhar from "../../../assets/Imges/alazhar.jpg";
import Movie from "../../../assets/Imges/movie.png";
import Menu from "../../../assets/Imges/menu.png";
import Figma from "../../../assets/Imges/everlane.png";
import HangMan from "../../../assets/Imges/hangMan.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      projectName: "Projects.Restecho",
      shortDescription: "Projects.RestechoShortDescription",
      img: RestechoImg,
      deployLink: "",
      githubLink: "",
      technlogies: [
        { tech: "React JS" },
        { tech: "axios" },
        { tech: "i18next" },
        { tech: "chakra ui" },

        { tech: "react hook form" },
        { tech: "Git & GitHub" },
        { tech: "Redux Toolkit" },
        { tech: "Team Leading " },
        { tech: "Team Work" },
      ],

      longDiscription: [
        {
          Point: "Projects.RestechoLongDiscriptionPointOne",
          description: "Projects.RestechoLongDiscriptionPargraphOne",
        },
        {
          Point: "Projects.RestechoLongDiscriptionPointTwo",
          description: "Projects.RestechoLongDiscriptionPargraphTwo",
        },
        {
          Point: "Projects.RestechoLongDiscriptionPointthree",
          description: "Projects.RestechoLongDiscriptionPargraphthree",
        },
        {
          Point: "Projects.RestechoLongDiscriptionPointFour",
          description: "Projects.RestechoLongDiscriptionPargraphFour",
        },
        {
          Point: "Projects.RestechoLongDiscriptionPointFive",
          description: "Projects.RestechoLongDiscriptionPargraphFive",
        },
        {
          Point: "Projects.RestechoLongDiscriptionPointSix",
          description: "Projects.RestechoLongDiscriptionPargraphSix",
        },
        {
          Point: "Projects.RestechoLongDiscriptionPointSeven",
          description: "Projects.RestechoLongDiscriptionPargraphSeven",
        },
        {
          Point: "Projects.RestechoLongDiscriptionPointeight",
          description: "Projects.RestechoLongDiscriptionPargrapheight",
        },
        {
          Point: "Projects.RestechoLongDiscriptionPointnine",
          description: "Projects.RestechoLongDiscriptionPargraphnine",
        },
        {
          Point: "Projects.RestechoLongDiscriptionPointTen",
          description: "Projects.RestechoLongDiscriptionPargraphTen",
        },
      ],
      SummeryDescription: "Projects.RestechoSummeryDiscreption",
    },
    {
      id: 2,
      projectName: "Projects.MAGNA",
      shortDescription: "Projects.MAGNAshortDescription",
      img: MAGNAImg,
      deployLink: "https://admin-dashboard-youssef.netlify.app/",
      githubLink: "https://github.com/youssef7474/Graduation",
      technlogies: [
        { tech: "React JS" },
        { tech: "Bootstarp" },
        { tech: "FireBase" },
        { tech: "Git & GitHub" },
        { tech: "Redux Toolkit" },
      ],

      longDiscription: [
        {
          Point: "Projects.MAGNALongDiscriptionPointONE",
          description: "Projects.MAGNALongDiscriptionPargraphONE",
        },
        {
          Point: "Projects.MAGNALongDiscriptionPointTwo",
          description: "Projects.MAGNALongDiscriptionPargraphTwo",
        },
        {
          Point: "Projects.MAGNALongDiscriptionPointThree",
          description: "Projects.MAGNALongDiscriptionPargraphThree",
        },
        {
          Point: "Projects.MAGNALongDiscriptionPointFour",
          description: "Projects.MAGNALongDiscriptionPargraphFour",
        },
        {
          Point: "Projects.MAGNALongDiscriptionPointFive",
          description: "Projects.MAGNALongDiscriptionPargraphFive",
        },
        { Point: "Projects.MAGNALongDiscriptionPointSIX" },
      ],
      SummeryDescription: "Projects.MAGNASummeryDiscreption",
    },
    {
      id: 3,
      projectName: "Projects.AccountingSystem",
      shortDescription: "Projects.AccountingShortDescription",
      img: AccountingImg,
      deployLink: "",
      githubLink: "",
      technlogies: [
        { tech: "React JS" },
        { tech: "axios" },
        { tech: "i18next" },
        { tech: "chakra ui" },

        { tech: "react hook form" },
        { tech: "Git & GitHub" },
        { tech: "Redux Toolkit" },
        { tech: "Team Leading " },
        { tech: "Team Work" },
      ],

      longDiscription: [
        {
          Point: "Projects.AccountingLongDiscriptionPointONE",
          description: "Projects.AccountingLongDiscriptionPargraphONE",
        },
        {
          Point: "Projects.AccountingLongDiscriptionPointTwo",
          description: "Projects.AccountingLongDiscriptionPargraphTwo",
        },
        {
          Point: "Projects.AccountingLongDiscriptionPointThree",
          description: "Projects.AccountingLongDiscriptionPargraphThree",
        },
        {
          Point: "Projects.AccountingLongDiscriptionPointFour",
          description: "Projects.AccountingLongDiscriptionPargraphFour",
        },
        {
          Point: "Projects.AccountingLongDiscriptionPointFive",
          description: "Projects.AccountingLongDiscriptionPargraphFive",
        },
        {
          Point: "Projects.AccountingLongDiscriptionPointsix",
          description: "Projects.AccountingLongDiscriptionPargraphSix",
        },
      ],
      SummeryDescription: "Projects.AccountingSummeryDiscreption",
    },
    {
      id: 4,
      projectName: "Projects.HRSystem",
      shortDescription: "Projects.HRShortDescription",
      img: HRImg,
      deployLink: "",
      githubLink: "",
      technlogies: [
        { tech: "React JS" },
        { tech: "axios" },
        { tech: "i18next" },
        { tech: "chakra ui" },

        { tech: "react hook form" },
        { tech: "Git & GitHub" },
        { tech: "Redux Toolkit" },
        { tech: "Team Leading " },
        { tech: "Team Work" },
      ],

      longDiscription: [
        {
          Point: "Projects.HRLongDiscriptionPointONE",
          description: "Projects.HRLongDiscriptionPargraphONE",
        },
        {
          Point: "Projects.HRLongDiscriptionPointTwo",
          description: "Projects.HRLongDiscriptionPargraphTwo",
        },
        {
          Point: "Projects.HRLongDiscriptionPointThree",
          description: "Projects.HRLongDiscriptionPargraphThree",
        },
        {
          Point: "Projects.HRLongDiscriptionPointFour",
          description: "Projects.HRLongDiscriptionPargraphFour",
        },
        {
          Point: "Projects.HRLongDiscriptionPointFive",
          description: "Projects.HRLongDiscriptionPargraphFive",
        },
        {
          Point: "Projects.HRLongDiscriptionPointSix",
          description: "Projects.HRLongDiscriptionPargraphSix",
        },
        {
          Point: "Projects.HRLongDiscriptionPointSeven",
          description: "Projects.HRLongDiscriptionPargraphSeven",
        },
      ],
      SummeryDescription: "Projects.HRSummeryDiscreption",
    },
    // {
    //   id: 7,
    //   projectName: "Projects.AlAzharUniversity",
    //   shortDescription: "Projects.AlAzharMangmentSystem",
    //   img: AlAzhar,
    //   deployLink: "",
    //   githubLink: "",
    //   technlogies: [
    //     { tech: "React JS" },
    //     { tech: "axios" },
    //     { tech: "i18next" },
    //     { tech: "chakra ui" },

    //     { tech: "react hook form" },
    //     { tech: "Git & GitHub" },
    //     { tech: "Redux Toolkit" },
    //     { tech: "Team Leading " },
    //     { tech: "Team Work" },
    //   ],

    //   longDiscription: [
    //     {
    //       Point: "Projects.AlAzharLongDiscriptionPointONE",
    //       description: "Projects.AlAzharLongDiscriptionPargraphONE",
    //     },
    //     {
    //       Point: "Projects.AlAzharLongDiscriptionPointTwo",
    //       description: "Projects.AlAzharLongDiscriptionPargraphTwo",
    //     },
    //     {
    //       Point: "Projects.AlAzharLongDiscriptionPointThree",
    //       description: "Projects.AlAzharLongDiscriptionPargraphThree",
    //     },
    //     {
    //       Point: "Projects.AlAzharLongDiscriptionPointFour",
    //       description: "Projects.AlAzharLongDiscriptionPargraphFour",
    //     },
    //     {
    //       Point: "Projects.AlAzharLongDiscriptionPointFive",
    //       description: "Projects.AlAzharLongDiscriptionPargraphFive",
    //     },
    //     {
    //       Point: "Projects.AlAzharLongDiscriptionPointSix",
    //       description: "Projects.AlAzharLongDiscriptionPargraphSix",
    //     },
    //     {
    //       Point: "Projects.AlAzharLongDiscriptionPointSeven",
    //       description: "Projects.AlAzharLongDiscriptionPargraphSeven",
    //     },
    //     {
    //       Point: "Projects.AlAzharLongDiscriptionPointeight",
    //       description: "Projects.AlAzharLongDiscriptionPargraphEight",
    //     },
    //   ],
    //   SummeryDescription: "Projects.AlAzharSummeryDiscreption",
    // },
    {
      id: 5,
      projectName: "Projects.NiyatClinic",
      shortDescription: "Projects.NiyatShortDescription",
      img: Reservation,
      deployLink: "",
      githubLink: "",
      technlogies: [
        { tech: "React JS" },
        { tech: "axios" },
        { tech: "i18next" },
        { tech: "chakra ui" },

        { tech: "react hook form" },
        { tech: "Git & GitHub" },
        { tech: "Redux Toolkit" },
        { tech: "Team Leading " },
        { tech: "Team Work" },
      ],

      longDiscription: [
        {
          Point: "Projects.NiyatLongDiscriptionPointONE",
          description: "Projects.NiyatLongDiscriptionPargraphONE",
        },
        {
          Point: "Projects.NiyatLongDiscriptionPointTwo",
          description: "Projects.NiyatLongDiscriptionPargraphTwo",
        },
        {
          Point: "Projects.NiyatLongDiscriptionPointThree",
          description: "Projects.NiyatLongDiscriptionPargraphThree",
        },
        {
          Point: "Projects.NiyatLongDiscriptionPointFour",
          description: "Projects.NiyatLongDiscriptionPargraphFour",
        },
        {
          Point: "Projects.NiyatLongDiscriptionPointFive",
          description: "Projects.NiyatLongDiscriptionPargraphFive",
        },
        {
          Point: "Projects.NiyatLongDiscriptionPointSix",
          description: "Projects.NiyatLongDiscriptionPargraphSix",
        },
      ],
      SummeryDescription: "Projects.NiyatSummeryDiscreption",
    },

    {
      id: 6,
      projectName: "Projects.playGroundMangmentSystem",
      shortDescription: "Projects.PlayGroundShortDescription",
      img: PlayGround,
      deployLink: "",
      githubLink: "",
      technlogies: [
        { tech: "React JS" },
        { tech: "axios" },
        { tech: "i18next" },
        { tech: "chakra ui" },

        { tech: "react hook form" },
        { tech: "Git & GitHub" },
        { tech: "Redux Toolkit" },
        { tech: "Team Leading " },
        { tech: "Team Work" },
      ],

      longDiscription: [
        {
          Point: "Projects.PlayGroundLongDiscriptionPointONE",
          description: "Projects.PlayLongDiscriptionPargraphONE",
        },
        {
          Point: "Projects.PlayGroundLongDiscriptionPointTwo",
          description: "Projects.PlayLongDiscriptionPargraphTwo",
        },
        {
          Point: "Projects.PlayGroundLongDiscriptionPointThree",
          description: "Projects.PlayLongDiscriptionPargraphThree",
        },
        {
          Point: "Projects.PlayGroundLongDiscriptionPointFour",
          description: "Projects.PlayLongDiscriptionPargraphFour",
        },
        {
          Point: "Projects.PlayGroundLongDiscriptionPointFive",
          description: "Projects.PlayLongDiscriptionPargraphFive",
        },
        {
          Point: "Projects.PlayGroundLongDiscriptionPointSix",
          description: "Projects.PlayLongDiscriptionPargraphSix",
        },
        {
          Point: "Projects.PlayGroundLongDiscriptionPointSeven",
          description: "Projects.PlayLongDiscriptionPargraphSeven",
        },
      ],
      SummeryDescription: "Projects.PlayGroundSummeryDiscreption",
    },

    {
      id: 6,
      projectName: "Projects.moviesCinema",
      shortDescription: "Projects.moviesCinemaShortDescription",
      img: Movie,
      deployLink: "https://youssefmovies.netlify.app/",
      githubLink: "https://github.com/youssef7474/Movies",
      technlogies: [
        { tech: "React JS" },
        { tech: "bootstrap" },
        { tech: "Git & GitHub" },
        {tech :"API Featching"}
      ],

      longDiscription: [
        {
          Point: "Projects.moviesCinemaPointOne",
          description: "Projects.moviesCinemaLongDiscriptionPargraphONE",
        },
        {
          Point: "Projects.moviesCinemaPointTwo",
          description: "Projects.moviesCinemaLongDiscriptionPargraphTwo",
        },
        {
          Point: "Projects.moviesCinemaPointThree",
          description: "Projects.moviesCinemaLongDiscriptionPargraphThree",
        },

      ],
      SummeryDescription: "Projects.moviesCinemaSummeryDiscreption",
    },

    {
      id: 6,
      projectName: "Projects.MenuProject",
      shortDescription: "Projects.MenuShortDescription",
      img: Menu,
      deployLink: "https://resturan-menu-youssef.netlify.app/",
      githubLink: "https://github.com/youssef7474/Menu",
      technlogies: [
        { tech: "React JS" },
        { tech: "bootstrap" },
        { tech: "Git & GitHub" },
      ],

      longDiscription: [
        {
          Point: "Projects.menuPointOne",
          description: "Projects.MenuLongDiscriptionPargraphONE",
        },
        {
          Point: "Projects.menuPointTwo",
          description: "Projects.MenuLongDiscriptionPargraphTwo",
        },
        {
          Point: "Projects.menuPointThree",
          description: "Projects.MenuLongDiscriptionPargraphThree",
        },
        {
          Point: "Projects.menuPointFour",
          description: "Projects.MenuLongDiscriptionPargraphFour",
        },

      ],
      SummeryDescription: "Projects.MenuSummery",
    },



    {
      id: 6,
      projectName: "Projects.EverlaneStore",
      shortDescription: "Projects.EverlaneStoreShortDescription",
      img: Figma,
      deployLink: "https://everlane-youssef.netlify.app/",
      githubLink: "https://github.com/youssef7474/EcomerceFigmaTemplete",
      technlogies: [
        { tech: "React JS" },
        { tech: "TailWind css" },
        { tech: "Figma" },
        { tech: "Git & GitHub" },
      ],

      longDiscription: [
        {
          Point: "Projects.EverlaneStorePointOne",
          description: "Projects.EverlaneStoreLongDiscriptionPargraphONE",
        },
        {
          Point: "Projects.EverlaneStorePointTwo",
          description: "Projects.EverlaneStoreLongDiscriptionPargraphTwo",
        },
        {
          Point: "Projects.EverlaneStorePointThree",
          description: "Projects.EverlaneStoreLongDiscriptionPargraphThree",
        },
        {
          Point: "Projects.EverlaneStorePointFour",
          description: "Projects.EverlaneStoreLongDiscriptionPargraphFour",
        },
        {
          Point: "Projects.EverlaneStorePointFive",
          description: "Projects.EverlaneStoreLongDiscriptionPargraphFive",
        },

      ],
      SummeryDescription: "Projects.EverlaneStoreSummary",
    },

    {
      id: 6,
      projectName: "Projects.HangmanGame",
      shortDescription: "Projects.HangmanGameShortDescription",
      img: HangMan,
      deployLink: "https://hangman-youssef.netlify.app/",
      githubLink: "https://github.com/youssef7474/HangMan-TypeScript",
      technlogies: [
        { tech: "React JS" },
        { tech: "TailWind css" },
        { tech: "TypeScript" },
        { tech: "Vite" },
        { tech: "Git & GitHub" },
      ],

      longDiscription: [
        {
          Point: "Projects.HangmanGamePointOne",
          description: "Projects.HangmanGameLongDiscriptionPargraphONE",
        },
        {
          Point: "Projects.HangmanGamePointTwo",
          description: "Projects.HangmanGameLongDiscriptionPargraphTwo",
        },
        {
          Point: "Projects.HangmanGamePointThree",
          description: "Projects.HangmanGameLongDiscriptionPargraphThree",
        },
        {
          Point: "Projects.HangmanGamePointFour",
          description: "Projects.HangmanGameLongDiscriptionPargraphFour",
        },
        {
          Point: "Projects.HangmanGamePointFive",
          description: "Projects.HangmanGameLongDiscriptionPargraphFive",
        },
        {
          Point: "Projects.HangmanGamePointSix",
          description: "Projects.HangmanGameLongDiscriptionPargraphSix",
        },

      ],
      SummeryDescription: "Projects.HangmanGameSummary",
    },
  ];

  const [showAllProjects, setShowAllProjects] = useState(false); // State to manage visibility

  const { t } = useTranslation();
  return (
    <div className="mt-[50px] px-[50px] sm:px-[150px] md:px-[150px] lg:px-[150px] mb-[100px]" id="projects">
      <h1 className="text-center text-4xl lg:text-6xl sm:text-6xl md:text-6xl text-gray-500 ">
        {" "}
        {t("Projects.Projects")}
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {projects
          .slice(0, showAllProjects ? projects.length : 4)
          .map((el, index) => {
            return (
              <div key={index}>
                <ProjectCard el={el} />
              </div>
            );
          })}

      </div>
      <div className="mt-6 flex items-center justify-center">
          <button
            className="bg-white text-black font-bold py-2 px-4 rounded hover:bg-[#64ffda]"
            onClick={() => setShowAllProjects(!showAllProjects)}
          >
            {showAllProjects ? t("Projects.ShowLess") : t("Projects.ShowMore")}
          </button>
        </div>
    </div>
  );
};

export default Projects;
