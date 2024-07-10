import { React, useRef, useEffect } from "react";
import "./index.css";
import "../../app.css";
import { motion } from "framer-motion";
import { images } from "../../constant/index";
import AppWrap from "../../Higher_order_component/AppWapper";
import { annotate, annotationGroup } from "rough-notation";

function Header() {
  const cgpaRef = useRef(null);
  const webDevRef = useRef(null);
  const cloudComputingRef = useRef(null);
  const databasesRef = useRef(null);
  const mobileRef = useRef(null);
  const bugRef = useRef(null);
  const performanceRef = useRef(null);
  const CertifiedRef = useRef(null);
  const experienceRef = useRef(null);

  useEffect(() => {
    const annotations = [
      annotate(cgpaRef.current, {
        type: "highlight",
        color: "orange",
        animationDuration: 1000,
        animationDelay: 2000,
      }),
      annotate(webDevRef.current, {
        type: "underline",
        color: "#313bac",
        animationDuration: 1200,
        animationDelay: 0,
      }),
      annotate(cloudComputingRef.current, {
        type: "underline",
        color: "#313bac",
        animationDuration: 1200,
        animationDelay: 0,
      }),
      annotate(databasesRef.current, {
        type: "underline",
        color: "#313bac",
        animationDuration: 1200,
        animationDelay: 0,
      }),
      annotate(mobileRef.current, {
        type: "underline",
        color: "#313bac",
        animationDuration: 1200,
        animationDelay: 0,
      }),
      annotate(bugRef.current, {
        type: "highlight",
        color: "lightblue",
        animationDuration: 1000,
        animationDelay: 2500,
      }),
      annotate(performanceRef.current, {
        type: "highlight",
        color: "yellow",
        animationDuration: 1000,
        animationDelay: 3000,
      }),
      annotate(CertifiedRef.current, {
        type: "highlight",
        color: "#e997e9",
        animationDuration: 1000,
        animationDelay: 3500,
      }),
      annotate(experienceRef.current, {
        type: "highlight",
        color: "#8b92dd",
        animationDuration: 1000,
        animationDelay: 4000,
      }),
      // annotate(HOOPPRef.current, {
      //   type: "underline",
      //   color: "blue",
      //   animationDuration: 2000,
      //   animationDelay: 6000,
      // }),
    ];

    const group = annotationGroup(annotations);
    group.show();
  }, []);

  return (
    <div id="home" className="app__header app__flex app__container component">
      <motion.div
        whileInView={{ x: [0, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="d-flex flex-column justify-content-around app__header-profile-div align-items-center"
      >
        <motion.img src={images.profile} className="app__profile" />
        <a href="https://www.linkedin.com/in/harshil-patel26/overlay/1720630348218/single-media-viewer/?profileId=ACoAADcrV4MB8JUYn38QWxPLQ77uYMjigoiYlZA">
          <button type="button" class="btn btn-primary">
            Resume &nbsp;
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
        </a>
      </motion.div>
      <motion.div
        className="app__header-text"
        whileInView={{ x: [0, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <h2 className="title">
          Hey! this is <span className="blue">Harshil</span>, a Versatile
          Software Developer <span className="blue">and</span> based in Toronto.
        </h2>
        <p className="description font-medium">
          I am a young and passionate software developer, with a diverse skill
          set and a hunger for solving problems.
        </p>
        <p className="description font-medium">
          I am in final year of computer science program at Seneca Polytechnic
          with <span ref={cgpaRef}>3.9&nbsp;CGPA</span>, where I learnt about{" "}
          <span ref={webDevRef}>Web&nbsp;Development</span>,{" "}
          <span ref={cloudComputingRef}>Cloud&nbsp;Computing</span>,{" "}
          <span ref={databasesRef}>Databases</span>, and{" "}
          <span ref={mobileRef}>Object&nbsp;Oriented&nbsp;Programming</span> by
          not only reading theory, but actually building meaningful projects.
        </p>
        <p className="description font-medium">
          I am highly skilled full-stack developer with a robust foundation in
          computer science and hands-on experience in cloud computing and
          software development. Proficient in utilizing Azure and AWS for
          developing scalable solutions, with a proven track record in reducing{" "}
          <span ref={bugRef}>bug&nbsp;resolution&nbsp;time</span>, and{" "}
          <span ref={performanceRef}>
            enhancing&nbsp;system&nbsp;performance
          </span>
          .{" "}
          <span ref={CertifiedRef}>
            Certified&nbsp;Microsoft&nbsp;Azure&nbsp;Developer&nbsp;(AZ204)
          </span>{" "}
          with expertise in C#, Python, and JavaScript, complemented by
          practical experience in ASP.NET, database management, and creating
          intuitive user interfaces.
        </p>
        <p className="description font-medium">
          I have 2 terms of{" "}
          <span ref={experienceRef}>co-op&nbsp;experience</span> of working as
          software developer at the Healthcare of Ontario Pension Plan (HOOPP)
          where I have gain proficiency in Azure, ASP.NET, SQL and DevOps.
        </p>
      </motion.div>
    </div>
  );
}

export default AppWrap(Header, "home");
