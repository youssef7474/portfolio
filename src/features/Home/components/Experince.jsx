import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion';

const Experince = () => {
  const { t } = useTranslation();
  const [selectedExperience, setSelectedExperience] = useState(1); // Using id for easier comparison

  const ExperianceArray = [
    {
      id: 1,
      companyName: "Experiance.SmartGateIT",
      title: "Experiance.FrontendDeveloper",
      startDate: "Experiance.september2023",
      endDate: "Experiance.PRESENT",
      JobDescription: "Experiance.SmartDescription",
      skills: [
        { technlogies: "JavaScript" },
        { technlogies: "TypeScript" },
        { technlogies: "ReactJS" },
        { technlogies: "Redux toolkit" },
        { technlogies: "Tailwind CSS" },
        { technlogies: "Next Js" },
        { technlogies: "chakra ui" },
        { technlogies: "Git & GitHub" },
        { technlogies: "Team Leading Skills" },
      ],
    },
    {
      id: 2,
      companyName: "Experiance.4ZSoftware",
      title: "Experiance.FrontendDeveloper",
      startDate: "Experiance.June2023",
      endDate: "Experiance.september2023",
      JobDescription: "Experiance.4zDescription",
      skills: [
        { technlogies: "JavaScript" },
        { technlogies: "TypeScript" },
        { technlogies: "ReactJS" },
        { technlogies: "Redux toolkit" },
        { technlogies: "Tailwind CSS" },
        { technlogies: "Git & GitHub" },
        { technlogies: "bootstrap" },
      ],
    },
    {
      id: 3,
      companyName: "Experiance.Freelancing",
      title: "Experiance.FreelancerDeveloper",
      startDate: "Experiance.July2022",
      endDate: "Experiance.PRESENT",
      JobDescription: "Experiance.FreelancingDescription",
      skills: [
        { technlogies: "JavaScript" },
        { technlogies: "TypeScript" },
        { technlogies: "ReactJS" },
        { technlogies: "Redux toolkit" },
        { technlogies: "Tailwind CSS" },
        { technlogies: "Git & GitHub" },
        { technlogies: "bootstrap" },
        { technlogies: "FireBase" },
      ],
    },
    {
      id: 4,
      companyName: "Experiance.IEEE",
      title: "Experiance.WorkshopInternship",
      startDate: "Experiance.October2021",
      endDate: "Experiance.January2022",
      JobDescription: "Experiance.IEEEDescription",
      skills: [
        { technlogies: "HTML" },
        { technlogies: "CSS" },
        { technlogies: "bootstrap" },
        { technlogies: "JavaScript" },
        { technlogies: "responsive web design" },
        { technlogies: "Git & GitHub" },
        { technlogies: "Soft Skills" },
        { technlogies: "presentation skills" },





      ],
    },
  ];

  return (

    <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.5 }}
    viewport={{ once: true }} // Ensures the animation occurs only once
    className="about-section"
  >
      <div className="px-[50px] text-white" id="experience">
      <h1 className="text-center text-4xl lg:text-6xl sm:text-6xl md:text-6xl text-gray-500">
        {t("Header.Experince")}
      </h1>

      <div className="flex items-center justify-center gap-10 mt-10 flex-col lg:flex-row md:flex-row sm:flex-row">
        <div className="flex items-center justify-center flex-col gap-10 lg:flex-col md:flex-col sm:flex-col">
          {ExperianceArray.map((experience) => (
            <div
              key={experience.id}
              className={`text-3xl cursor-pointer p-4 ${
                selectedExperience === experience.id
                  ? "text-[#64ffda] border-b border-[#64ffda]"
                  : ""
              }`}
              onClick={() => setSelectedExperience(experience.id)}
            >
              {t(experience.companyName)}
            </div>
          ))}
        </div>

        {/* Dynamically render experience details */}
        {ExperianceArray.map((experience) => (
          <div
            key={experience.id}
            className={`max-w-[1000px] flex flex-col gap-6 ${
              selectedExperience === experience.id ? "block" : "hidden"
            }`}
          >
            <h1 className="text-xl lg:text-2xl sm:text-2xl md:text-2xl">
              {t(experience.title)}{" "}
              <span className="text-[#64ffda]">@ {t(experience.companyName)}</span>
            </h1>
            <p>
              {t(experience.startDate)} -{" "}
              <span className="text-[#64ffda]">{t(experience.endDate)}</span>
            </p>
            <p>{t(experience.JobDescription)}</p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {experience.skills.map((skill, index) => (
                <div key={index} className="border w-fit p-2 rounded-lg hover:bg-[#64ffda] hover:text-black">
                  {skill.technlogies}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
  );
};

export default Experince;
