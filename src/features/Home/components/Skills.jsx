import React from "react";
import { useTranslation } from "react-i18next";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import reactIcon from "../../../assets/icons/react-javascript-js-framework-facebook-svgrepo-com.svg";
import ReduxIcon from "../../../assets/icons/redux-svgrepo-com.svg";
import JavaScriptIcon from "../../../assets/icons/javascript-svgrepo-com.svg";
import TypeScriptIcon from "../../../assets/icons/typescript-svgrepo-com.svg";
import TailwindIcon from "../../../assets/icons/tailwindcss-icon-svgrepo-com.svg";
import BootsrapIcon from "../../../assets/icons/bootstrap-svgrepo-com.svg";
import materialUIicon from "../../../assets/icons/material-ui-svgrepo-com.svg";
import CSSIcon from "../../../assets/icons/css3-01-svgrepo-com.svg";
import ChakraUiIcon from "../../../assets/icons/chakraui-svgrepo-com.svg";
import NextJsIcon from "../../../assets/icons/next-js-svgrepo-com.svg";

const Skills = () => {
  const { t } = useTranslation();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const TechnlogiesAndSkills = [
    { technlogy: "JavaScript", icon: JavaScriptIcon },
    { technlogy: "TypeScript", icon: TypeScriptIcon },
    { technlogy: "Java SE", icon: JavaScriptIcon },
    { technlogy: "OOP Concepts", icon: JavaScriptIcon },
    { technlogy: "HTML", icon: JavaScriptIcon },
    { technlogy: "CSS", icon: CSSIcon },
    { technlogy: "React JS", icon: reactIcon },
    { technlogy: "Next JS", icon: NextJsIcon },
    { technlogy: "Vite", icon: JavaScriptIcon },
    { technlogy: "Redux Toolkit", icon: ReduxIcon },
    { technlogy: "Tailwind CSS", icon: TailwindIcon },
    { technlogy: "Bootstrap", icon: BootsrapIcon },
    { technlogy: "Material UI", icon: materialUIicon },
    { technlogy: "Chakra UI", icon: ChakraUiIcon },
    { technlogy: "Git & GitHub", icon: JavaScriptIcon },
    { technlogy: "Axios", icon: JavaScriptIcon },
    { technlogy: "React Hook Form", icon: JavaScriptIcon },
    { technlogy: "Lottie", icon: JavaScriptIcon },
    { technlogy: "i18next", icon: JavaScriptIcon },
  ];

  // Define animation variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="px-[50px] text-white mt-10" id="skills">
        <h1 className="text-center text-4xl lg:text-6xl sm:text-6xl md:text-6xl text-gray-500">
          {t("Header.Skills")}
        </h1>
        <div>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
          >
            <div className="w-[150px] translate-x-[50%] sm:translate-x-[-50%] lg:translate-x-[-50%] md:translate-x-[-50%]">
              <img src={ReduxIcon} alt="Redux" className="mt-4" />
              <h1 className="text-center text-[#64ffda] text-xl my-10">
                Redux Toolkit
              </h1>
            </div>
            <div className="w-[150px] translate-x-[50%] sm:translate-x-[-50%] lg:translate-x-[-50%] md:translate-x-[-50%]">
              <img src={reactIcon} alt="React" className="mt-4" />
              <h1 className="text-center text-[#64ffda] text-xl my-10">
                React JS
              </h1>
            </div>
            <div className="w-[150px] translate-x-[50%] sm:translate-x-[-50%] lg:translate-x-[-50%] md:translate-x-[-50%]">
              <img src={JavaScriptIcon} alt="JavaScript" className="mt-4" />
              <h1 className="text-center text-[#64ffda] text-xl my-10">
                JavaScript
              </h1>
            </div>

            <div className="w-[150px] translate-x-[50%] sm:translate-x-[-50%] lg:translate-x-[-50%] md:translate-x-[-50%]">
              <img src={TypeScriptIcon} alt="TypeScript" className="mt-4" />
              <h1 className="text-center text-[#64ffda] text-xl my-10">
                TypeScript
              </h1>
            </div>

            <div className="w-[150px] translate-x-[50%] sm:translate-x-[-50%] lg:translate-x-[-50%] md:translate-x-[-50%]">
              <img src={TailwindIcon} alt="Tailwind" className="mt-4" />
              <h1 className="text-center text-[#64ffda] text-xl my-10">
                Tailwind CSS
              </h1>
            </div>

            <div className="w-[150px] translate-x-[50%] sm:translate-x-[-50%] lg:translate-x-[-50%] md:translate-x-[-50%]">
              <img src={BootsrapIcon} alt="Bootstrap" className="mt-4" />
              <h1 className="text-center text-[#64ffda] text-xl my-10">
                Bootstrap
              </h1>
            </div>

            <div className="w-[150px] translate-x-[50%] sm:translate-x-[-50%] lg:translate-x-[-50%] md:translate-x-[-50%]">
              <img src={materialUIicon} alt="Material UI" className="mt-4" />
              <h1 className="text-center text-[#64ffda] text-xl my-10">
                Material UI
              </h1>
            </div>

            <div className="w-[150px] translate-x-[50%] sm:translate-x-[-50%] lg:translate-x-[-50%] md:translate-x-[-50%]">
              <img src={CSSIcon} alt="CSS" className="mt-4" />
              <h1 className="text-center text-[#64ffda] text-xl my-10">
                CSS
              </h1>
            </div>

            <div className="w-[150px] translate-x-[50%] sm:translate-x-[-50%] lg:translate-x-[-50%] md:translate-x-[-50%]">
              <img src={ChakraUiIcon} alt="Chakra UI" className="mt-4" />
              <h1 className="text-center text-[#64ffda] text-xl my-10">
                Chakra UI
              </h1>
            </div>

            <div className="w-[150px] translate-x-[50%] sm:translate-x-[-50%] lg:translate-x-[-50%] md:translate-x-[-50%]">
              <img src={NextJsIcon} alt="Next JS" className="mt-4" />
              <h1 className="text-center text-[#64ffda] text-xl my-10">
                Next JS
              </h1>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="text-white px-[50px] sm:px-[150px] md:px-[150px] lg:px-[150px] mt-10">
        <motion.div
          className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {TechnlogiesAndSkills.map((skill) => (
            <motion.div
              key={skill.technlogy}
              className="text-center"
              variants={itemVariants}
            >
             <div  className="border w-fit p-2 rounded-lg hover:bg-[#64ffda] hover:text-black">
             <h1 >{skill.technlogy}</h1>

             </div>
              {/* <img src={skill.icon} alt={skill.technlogy} className="mx-auto" /> */}
            </motion.div>
          ))}
        </motion.div>x
      </div>
    </>
  );
};

export default Skills;
