import React, { useState } from "react";
import { FaEye, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import PrjectModal from "./PrjectModal";
import { useTranslation } from "react-i18next";

const ProjectCard = ({ el }) => {

    const [showModal,setShowModal]=useState(false)
    const { t } = useTranslation();

    const handleLinkedInClick = (Link) => {
      window.open(Link, "_blank");
    };
  return (
    <>
        <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Card Image Section */}
      <div className="relative group">
        <img
          src={el.img}
          alt={el.projectName}
          className="w-full h-48 object-cover"
        />
        {/* Overlay for Icons on Hover */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-5 space-x-4">
          <p className="text-white hover:text-gray-400" onClick={()=>setShowModal(el)}>
            <FaEye size={24} />
          </p>
          {el.deployLink && (
            <p className="text-white hover:text-gray-400" onClick={()=>handleLinkedInClick(el.deployLink)}>
              <FaExternalLinkAlt size={24} />
            </p>
          )}
          {el.githubLink && (
            <p className="text-white hover:text-gray-400" onClick={()=>handleLinkedInClick(el.githubLink)}>
              <FaGithub size={24} />
            </p>
          )}
        </div>
      </div>

      {/* Card Description Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{t(el.projectName)}</h3>
        <p className="text-gray-600 text-sm">{t(el.shortDescription)}</p>
      </div>
   
    </div>
    {
        showModal&&(
            <PrjectModal setShowModal={()=>setShowModal(false)} data={showModal}/>
        )
    }
    </>
  );
};

export default ProjectCard;
