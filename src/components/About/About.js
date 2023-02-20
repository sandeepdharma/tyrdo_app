import "./About.scss";
import React from "react";
import { Progress } from "antd";
const About = () => {
  return (
    <div className="About-container" id='About'>
        <div className="about-matter-container">
        <div className="about-title-container">
        <h1 className="about-title">What do we do?</h1>
        <p className="about-matter">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
        </p>
      </div>
      <div className="about-progress-container">
        <h1 className="about-progress-title">Our Working Process.</h1>
        <div className="about-progress-outer-container">
          <div className="each-progress-container">
            <p className="progress-about">Designing</p>
            <Progress percent={81} />
          </div>
          <div className="each-progress-container">
            <p className="progress-about">Managment</p>
            <Progress percent={72} />
          </div>
          <div className="each-progress-container">
            <p className="progress-about">Marketing</p>
            <Progress percent={89} />
          </div>
          <div className="each-progress-container">
            <p className="progress-about">Development</p>
            <Progress
           
              percent={57}
            />
          </div>
        </div>
      </div>
        </div>
      
      <div className="about-image-container">
        <img
          src="https://trydo.rainbowit.net/assets/images/about/about-3.jpg"
          alt="/"
          className="about-image"
        />
      </div>
    </div>
  );
};

export default About;
