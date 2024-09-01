import { useTranslation } from "react-i18next";
import LanguageButton from "./LanguageButton";

export default function Header() {
  const { t } = useTranslation();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="text-[#ccd6f6] flex items-center justify-between px-[50px] py-[15px] flex-col gap-4 lg:flex-row md:flex-row sm:flex-row">
      <div className="font-bold text-[#64ffda] text-3xl">Youssef</div>
      <div className="flex items-center justify-between gap-[25px]">
        <p 
          onClick={() => handleScroll("home")} 
          className="hover:text-[#64ffda] cursor-pointer">
          {t("Header.home")}
        </p>
        <p 
          onClick={() => handleScroll("about")} 
          className="hover:text-[#64ffda] cursor-pointer">
          {t("Header.About")}
        </p>
        <p 
          onClick={() => handleScroll("experience")} 
          className="hover:text-[#64ffda] cursor-pointer">
          {t("Header.Experince")}
        </p>
        <p 
          onClick={() => handleScroll("skills")} 
          className="hover:text-[#64ffda] cursor-pointer">
          {t("Header.Skills")}
        </p>
        <p 
          onClick={() => handleScroll("projects")} 
          className="hover:text-[#64ffda] cursor-pointer">
          {t("Header.Projects")}
        </p>
      </div>

      <LanguageButton />
    </div>
  );
}
