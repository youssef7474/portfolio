import { useTranslation } from "react-i18next";
import { SiGoogletranslate } from "react-icons/si";

const LanguageButton = () => {
  const [t, i18n] = useTranslation();
  const languageNow = i18n.language;


  if (languageNow === "ar") {
    document.documentElement.setAttribute("dir", "rtl");

  } else {
    document.documentElement.setAttribute("dir", "ltr");

  }

  const changeLanguageAndDirection = (language) => {
    i18n.changeLanguage(language);

    if (language === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
    } else if (language === "en") {
      document.documentElement.setAttribute("dir", "ltr");
    }
    localStorage.setItem("language", language);
  };



  return (

      <div
      className="flex items-center justify-center gap-3 hover:text-[#64ffda] cursor-pointer"
        onClick={() =>
          changeLanguageAndDirection(languageNow === "en" ? "ar" : "en")
        }
        style={{ cursor: "pointer" }}
      >
        {
          languageNow === "en"?"AR":'EN'
        }
        <SiGoogletranslate />


      </div>

  );
};

export default LanguageButton;
