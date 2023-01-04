import React from "react";
import "./index.css";
import "../../app.css";
import { images } from "../../constant";
import { motion } from "framer-motion";
// import { SocialMedia } from "../../components";
import AppWrap from '../../Higher_order_component/AppWapper'
const Abouts = [
  {
    title: "Who Am I?",
    description:
      "Hi, I'm Harshil Patel. I am a passionate designer and developer based out of Toronto, Ontario. I love creating appealing web apps that are also responsive, accessible, and logically designed to provide an optimal user experience. Aside from designing and coding, I offer a friendly, honest, respectful, creative personality and I am always looking to learn new technologies and improve with what I already know.",
    imgURL: images.about04,
  },
  {
    title: "Front-End Developer",
    description:
      "I am a front-end developer with a passion for building beautiful and functional web applications. I love to create components and animations as it allows to engage user and it also good for user experience. I am using FramerMotion, material-ui for animation react component.",
    imgURL: images.about01,
  },
  {
    title: "Open Source Developer",
    description:
      "Contributing to Open Source Project is feel like actually contributing to the community. This help me to Improve Coding Skills, Gain Experience working with real software, and to develop a team work skill.",
    imgURL: images.about02,
  },
  {
    title: "Full Stack Developer",
    description:
      "I love to work on end to end on an application. My most used stack is MERN and I am good at Javascript. Working on Full stack, allow me to explore different technologies and packages that out there in market and how those packages can be used",
    imgURL: images.about03,
  },
  {
    title: "Python Developer",
    description:
      "I am using python to make software Applications and also use its library Flask for Web development. Python is very powerful and popular programming language and i found that working in python allow us to develop complex web applications with less and simple code.",
    imgURL: images.about04,
  },
  
];
function About() {
  return (
    <motion.div
      whileInView={{ y: [150, 0], opacity: [0, 1] }}
      transition={{ duration: 1.5 }}
      className="app__about app__container About"
      id="about"
    >
      <h2 className="head-text app__about-heading">
        I know that <span>Good Design</span>
        <br /> means <span>Good Bussiness</span>
      </h2>

      <div className="app__profiles">
        {Abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgURL} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
      
    </motion.div>
  );
}

export default AppWrap(About, "about");

