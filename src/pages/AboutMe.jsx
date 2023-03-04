import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/main-image.png";
import { BsArrowRight } from "react-icons/bs";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoReact,
} from "react-icons/io5";

import "./aboutme.css";

const AboutMe = () => {
  return (
    <section id="about-me">
      <h1
        className="section-heading"
        style={{ width: "145px", marginBottom: "3em" }}
      >
        About Me
      </h1>
      <div className="about-main">
        <div className="about-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            impedit sequi dolor odio magnam, Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Eaque, eos delectus! Nesciunt ab
            voluptatibus
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            recusandae dolorem officia doloribus iste assumenda quae vero, nisi
            mollitia aut sapiente ratione quisquam neque, ex adipisci
            aspernatur, et laudantium illum?
          </p>

          <button className="btn about-button">
            <Link to="/contact" className="link">
              Contact
            </Link>
            <BsArrowRight className="link-arrow" />
          </button>
        </div>
        <div className="about-image">
          <img
            src={image}
            alt="about-main-image"
            className="about-name-image"
          />
        </div>
      </div>

      <div className="skill-section">
        <div className="skills-content">
          <h2 className="heading">skills</h2>
          <p className="skill-description">
            I’m a developer with experience in different languages, frameworks
            and technologies. I’m always looking for a new challenges to tackle.
          </p>
        </div>
        <div className="skill-icons">
          <div className="skill">
            <IoLogoHtml5 className="icon" />
            <p>HTML 5</p>
          </div>

          <div className="skill">
            <IoLogoCss3 className="icon" />
            <p>CSS 3</p>
          </div>

          <div className="skill">
            <IoLogoJavascript className="icon" />
            <p>Javascript</p>
          </div>

          <div className="skill">
            <IoLogoNodejs className="icon" />
            <p>NodeJs</p>
          </div>

          <div className="skill">
            <IoLogoReact className="icon" />
            <p>ReactJS</p>
          </div>
        </div>
      </div>

      <div className="experience-section">
        <h2 className="heading">Experience</h2>
        <div className="experiences">
          <div className="experience-heading">Accenture</div>
          <p>(Sept,2022 - Currently Working)</p>
          <div className="experience-content">
            <ul>
              <li>
                ASOC analyst at the Critical Command Center handling the life,
                safety and security operation concerns for Accenture employees.
              </li>
              <li>
                Triggered life and security concerns directly handled by the
                Accenture Global Assistance and Protection team that works to
                protect all Accenture assets worldwide.
              </li>
              <li>
                Monitored critical incidents using Security monitoring tools and
                generated reports to be sent to Accenture Leadership for further
                action.
              </li>
              <li>
                Connect with the Protective Service managers to report all
                emergency situations for immediate action.
              </li>
            </ul>
          </div>
        </div>
        <div className="experiences">
          <div className="experience-heading">Wipro</div>
          <p>(Mar,2019 - Jun,2020)</p>
          <div className="experience-content">
            <ul>
              <li>
                ASOC analyst at the Critical Command Center handling the life,
                safety and security operation concerns for Accenture employees.
              </li>
              <li>
                Triggered life and security concerns directly handled by the
                Accenture Global Assistance and Protection team that works to
                protect all Accenture assets worldwide.
              </li>
              <li>
                Monitored critical incidents using Security monitoring tools and
                generated reports to be sent to Accenture Leadership for further
                action.
              </li>
              <li>
                Connect with the Protective Service managers to report all
                emergency situations for immediate action.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
