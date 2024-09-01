import React, { useEffect, useRef } from "react";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";


const { modal, modalContent, close} = styles;


//global model component


const ModalCompo = ({ onClose, ModalHeader, ModalContent }) => {
   const [t, i18n] = useTranslation();  
  const languageNow = i18n.language;

  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, onClose]);

  return (
    <div className="text-[12px] lg:text-[18px] md:text-[16px]">
      <div className={modal}>
        <div className={`${modalContent} `} ref={modalRef}>
          <span
            className={close}
            onClick={onClose}
            style={{ float: languageNow === "en" ? "right" : "left" }}
          >
            &times;
          </span>
          <div>
          {
            ModalHeader&&(
              <div
              style={{ borderBottom: "2px solid black", paddingBottom: "25px" }}
            >
              <h1 style={{ fontWeight: "bold" }}>{ModalHeader}</h1>
            </div>
            )
          }
          

            <div style={{ marginTop: "25px", marginBottom: "25px" }}>
              {ModalContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCompo;