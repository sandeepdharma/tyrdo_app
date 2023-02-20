import "./QuickIntro.scss";
import React from "react";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
const QuickIntro = () => {
  return (
    <div className="QuickIntro-container">
      <div className="quickintro-inner-container">
        <MdOutlinePlayCircleFilled className="play-button" />
      </div>
    </div>
  );
};

export default QuickIntro;
