import React from 'react'
import Lottie from "lottie-react";
import codingLottie from "../../../assets/Lottie/Animation - 1723634935243.json";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useTranslation();

  return (
    <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.5 }}
    viewport={{ once: true }} // Ensures the animation occurs only once
    className="about-section"
  >
    <div className='px-[50px] text-white' id="about">
        <h1 className='text-center text-4xl lg:text-6xl sm:text-6xl md:text-6xl text-gray-500'>{t("content.About")}</h1>
      <div className='flex items-center justify-around mt-8 flex-col lg:flex-row md:flex-row sm:flex-row'>
        <div className='max-w-[500px]'>
            <p className='text-[18px] lg:text-[22px] md:text-[22px] sm:text-[22px]'>{t("content.AboutFirstPargraph")}</p>
            <p className='text-[18px] lg:text-[22px] md:text-[22px] sm:text-[22px]'> {t("content.AboutSecondPargraph")}</p>
        </div>
        <div className="flex items-center justify-center">
          <Lottie
            animationData={codingLottie}
             className="w-[300px] lg:w-[500px] md:w-[500px]"
          />
        </div>
      </div>
    </div>
  </motion.div>
  )
}

export default About
