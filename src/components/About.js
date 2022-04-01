import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import "./About.css";

function About() {
  return (
    <div className="about">
      <a href="https://github.com/D1183-Mustafa" target="_blank">
        <BsGithub className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/mustafa-alta%C5%9F-b49b77225/" target="_blank">
        <BsLinkedin className="icon" />
      </a>
      <a href="https://twitter.com/developer_altas" target="_blank">
        <BsTwitter className="icon" />
      </a>
      <a href="https://www.instagram.com/xmmuussx/" target="_blank">
        <BsInstagram className="icon" />
      </a>
    </div>
  );
}

export default About;
