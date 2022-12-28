import React from "react";
import "./index.css";
import "../../app.css";
import { images } from "../../constant";
import { motion } from "framer-motion";
// import { SocialMedia } from "../../components";
import AppWrap from '../../Higher_order_component/AppWapper'
const Abouts = [
  {
    title: "Front-End Developer",
    description:
      "I am a front-end developer with a passion for building beautiful and functional web applications",
    imgURL: images.about01,
  },
  {
    title: "Back-End Developer",
    description:
      "I am a back-end Developer with a passion for building scalable backend with node.js or flask.py",
    imgURL: images.about02,
  },
  {
    title: "MERN-Stack Developer",
    description:
      "I am a MERN Stack developer. I love to design and Apply a proper working backend to that design front end.",
    imgURL: images.about03,
  },
  {
    title: "Python Developer",
    description:
      "I am using python to make software Applications and also use its library Flask for Web development",
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
      <h2 className="head-text">
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
