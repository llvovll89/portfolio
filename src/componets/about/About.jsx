import React from "react";
import "./About.css";
import { FaAward, FaUserSecret, FaUniversity } from "react-icons/fa";
import AboutImg from "../../assets/img/about-img.png";

function About() {
  return (
    <section id="about">
      <h5>Hello</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-info">
          <div className="about-img">
            <img src={AboutImg} alt="" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-item">
              <FaUserSecret className="about-icon" />
              <h5>이름</h5>
              <small>신입 프론트엔드 개발자</small>
            </article>
            <article className="about-item">
              <FaAward className="about-icon" />
              <h5>경력 X</h5>
              <small>신입 프론트엔드 개발자</small>
            </article>
            <article className="about-item">
              <FaUniversity className="about-icon" />
              <h5>대구대학교 / 컴퓨터소프트웨어 전공</h5>
              <small>4년 졸업</small>
            </article>
          </div>
          <p className="info-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam illo
            voluptate, hic debitis illum magni natus earum, vero neque
            voluptatum blanditiis temporibus repudiandae, officiis sequi
            eveniet? Veritatis, voluptatem ullam. Veniam?
          </p>

          <a href="#contact" className="btn btn-primary">Conact</a>
        </div>
      </div>
    </section>
  );
}

export default About;
