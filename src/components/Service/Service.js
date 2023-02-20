import "./Service.scss";
import React from "react";
import { FaAddressCard } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";
import { AiOutlineDesktop } from "react-icons/ai";
const Service = () => {
  let serviceCardsData = [
    {
      icon: <FaAddressCard className="card-icon"/>,
      cardType: "Business Strategy",
      cardAbout:
        "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
    {
      icon: <FiLayers className="card-icon"/>,
      cardType: "Website Development",
      cardAbout:
        "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
    {
      icon: <RxPerson className="card-icon"/>,
      cardType: "Marketing & Reporting",
      cardAbout:
        "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
    {
      icon: <AiOutlineDesktop className="card-icon"/>,
      cardType: "Mobile App Development",
      cardAbout:
        "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
    {
      icon: <FaAddressCard className="card-icon"/>,
      cardType: "Website Development",
      cardAbout:
        "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
    {
      icon: <AiOutlineDesktop className="card-icon"/>,
      cardType: "Marketing & Reporting",
      cardAbout:
        "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
  ];
  return (
    <div className="Service-container" id='Service'>
      <div className="service-title-container">
        <h1 className="service-title">Our Service</h1>
        <p className="service-sub-title">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>
      <div className="service-cards-container">
        {serviceCardsData.map((item) => {
          return (
            <div className="each-service-card-container">
              {item.icon}
              <p className="card-type">{item.cardType}</p>
              <p className="card-about">{item.cardAbout}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
