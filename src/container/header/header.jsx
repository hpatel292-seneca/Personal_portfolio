import React from "react";
import "./index.css";
import "../../app.css";
import { motion } from "framer-motion";
import { images } from "../../constant/index";
import AppWrap from "../../Higher_order_component/AppWapper";

function Header() {
  return (
    <div id="home" className="app__header app__flex app__container">
      <motion.div
        whileInView={{ x: [0, 50], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="d-flex flex-column justify-content-around app__header-profile-div align-items-center"
      >
        <motion.img src={images.profile} className="app__profile" />
        <button type="button" class="btn btn-primary">
          Resume
        </button>
      </motion.div>
      <motion.div
        className="app__header-text"
        whileInView={{ x: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <h1>
          Hey! this is Harshil, a Versatile Software Developer and based in
          Toronto.
        </h1>
        <p className="description">
          I am a young and passionate software developer, with a diverse skill
          set and a hunger for solving problems.
        </p>
        <p className="description">
          I am in final year of computer science program at Seneca College with
          3.9 CGPA, where I learnt about Web Development, Cloud Computing,
          Databases and basic Mobile App Development by not only reading theory,
          but actually building meaningful projects.
        </p>
        <p className="description">
          I am highly skilled full-stack developer with a robust foundation in
          computer science and hands-on experience in cloud computing and
          software development. Proficient in utilizing Azure and AWS for
          developing scalable solutions, with a proven track record in reducing
          bug resolution time and enhancing system performance. Certified
          Microsoft Azure Developer (AZ204) with expertise in C#, Python, and
          JavaScript, complemented by practical experience in ASP.NET, database
          management, and creating intuitive user interfaces.
        </p>
        <p className="description">
          A few months ago, I started doing Open-Source, participated in
          Hacktoberfest 2023 and contributed to various projects on issues
          ranging from UI to Debugging to Devops.
        </p>
        <p className="description">
          My best experience so far has been working on ChatCraft, an
          open-source developer oriented AI Chatbot, where I got to work with an
          incredible team and learn from them.
        </p>
      </motion.div>
    </div>
  );
}

export default AppWrap(Header, "home");
