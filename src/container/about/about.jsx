import React from "react";
import "./index.css";
import "../../app.css";
import { motion } from "framer-motion";
// import { SocialMedia } from "../../components";
import AppWrap from "../../Higher_order_component/AppWapper";
function About() {
  return (
    <motion.div
      whileInView={{ y: [150, 0], opacity: [0, 1] }}
      transition={{ duration: 1.5 }}
      className="app__about app__container About"
      id="about"
    >
      <h2 className="head-text app__about-heading">
        Work <span>Experience</span>
      </h2>

      <div className="app__profiles">
        <div className="job">
          <h3>
            Software Developer |{" "}
            <span className="blue">
              HealthCare of Ontario Pension Plan (HOOPP)
            </span>
          </h3>
          <span className="date">September 2023 – April 2024</span>
          <ul>
            <li>
              Optimized an email notification system by migrating it from a
              virtual machine (Infrastructure as a Service - <b>IaaS</b>) to
              Azure cloud services (Platform as a Service - <b>PaaS</b>),
              leveraging{" "}
              <b>C#, ASP.NET, CRM, SQL, Azure Durable Functions, Logic Apps</b>,
              and <b>Blob Storage</b> for improved monitoring, scalability, and
              efficiency.
            </li>
            <li>
              Developed a front-end application using <b>React</b> for an
              authentication project, enhancing <b>UI/UX</b> and interface
              responsiveness.
            </li>
            <li>
              Created and presented a <b>proof of concept (POC)</b> for Azure
              Monitoring using <b>Application Insights</b> to collect event and
              error logs, which was approved and implemented,{" "}
              <b>reducing bug detection</b>, and resolution time by 50%;
              provided detailed documentation and <b>knowledge transfer</b> to
              other teams.
            </li>
            <li>
              Developed and implemented email templates using{" "}
              <b>HTML, CSS, and JavaScript</b>, tailored to{" "}
              <b>business requirements</b>, facilitating daily notifications to
              10,000 users, and enhancing communication and{" "}
              <b>user engagement</b>.
            </li>
            <li>
              Developed and maintained <b>CI/CD</b> pipelines for automated
              deployments and <b>PowerShell scripts</b> for task automation.
            </li>
            <li>
              Utilized <b>Docker, Azure DevOps, ServiceNow, and Azure Portal </b>
              for deployment and day-to-day tasks, following Agile
              methodologies.
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default AppWrap(About, "about");
