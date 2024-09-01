import React from "react";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import codingLottie from "../../../assets/Lottie/Animation - 1723632409497.json";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoIosDocument } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import cvPDF from '../../../assets/Youssef-Mohamed-Ahmed-Resume.pdf'; // Adjust path if needed

const HomeComponents = () => {



  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/youssef-mohamed-18740721a/", "_blank");
  };
  
  const handleGitHubClick = () => {
    window.open("https://github.com/youssef7474", "_blank");
  };
  
  const handleDocumentClick = () => {
    const link = document.createElement("a");
    link.href = cvPDF; // Use the imported PDF path
    link.download = "Youssef_Ibrahim_Cv.pdf"; // Optional: Specify a download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const handleEmailClick = () => {
    window.open("mailto:youssef.mohamed.refai@gmail.com");
  };
  
  const handlePhoneClick = () => {
    window.open("tel:+201020233296");
  };
  
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+201020233296");
  };

  const { t } = useTranslation();
  return (
    <div className="px-[50px] text-white h-[800px] flex items-center justify-center flex-col " id="home" >
      <div className="w-full flex items-center justify-between flex-col">
        <div className="flex items-center justify-center">
          <Lottie
            animationData={codingLottie}
            className="w-[300px] lg:w-[500px] md:w-[500px]"
          />
        </div>
        <div className="text-center flex items-center justify-center flex-col gap-3 max-w-[1000px]">
          <h1 className="text-4xl font-bold">{t("content.TitleHome")}</h1>
          <p className="text-xl">
            {t("content.ParagraphHomeFirst")}
            <span className="text-[#64ffda] text-2xl">
              {t("content.HelwanUniversity")}
            </span>
            {t("content.ParagraphHomeSecond")}
          </p>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-center gap-5">
      <FaLinkedin
        size={20}
        className="hover:text-[#64ffda] cursor-pointer"
        onClick={handleLinkedInClick}
      />
      <FaGithub
        size={20}
        className="hover:text-[#64ffda] cursor-pointer"
        onClick={handleGitHubClick}
      />
      <IoIosDocument
        size={20}
        className="hover:text-[#64ffda] cursor-pointer"
        onClick={handleDocumentClick}
      />
      <MdEmail
        size={20}
        className="hover:text-[#64ffda] cursor-pointer"
        onClick={handleEmailClick}
      />
      <FaPhoneAlt
        size={20}
        className="hover:text-[#64ffda] cursor-pointer"
        onClick={handlePhoneClick}
      />
      <FaWhatsapp
        size={20}
        className="hover:text-[#64ffda] cursor-pointer"
        onClick={handleWhatsAppClick}
      />
    </div>
    </div>
  );
};

export default HomeComponents;
