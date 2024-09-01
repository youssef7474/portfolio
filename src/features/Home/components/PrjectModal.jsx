import React from "react";
import ModalCompo from "../../../components/modal/ModalCompo";
import { useTranslation } from "react-i18next";

const PrjectModal = ({ setShowModal, data }) => {
  const { t } = useTranslation();

  return (
    <ModalCompo
      onClose={() => setShowModal(false)}
      ModalHeader={<h1>{t(data.projectName)}</h1>}
      ModalContent={
        <div>
          <ul className="list-disc pl-5">
            {data.longDiscription.map((el, index) => {
              return (
                <li key={index} className="my-5">
                  <h1 className="font-bold">{t(el.Point)}</h1>
                  <p>{t(el.description)}</p>
                </li>
              );
            })}
          </ul>
          <p>{t(data.SummeryDescription)}</p>
          <div className="px-[20px] my-5">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {data.technlogies.map((el, index) => {
                return (
                  <div
                    className="border w-fit p-2 rounded-lg hover:bg-[#64ffda] hover:text-black"
                    key={index}
                  >
                    {el.tech}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      }
    />
  );
};

export default PrjectModal;
