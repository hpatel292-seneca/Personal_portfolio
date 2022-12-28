import React from 'react'
import "./Skills.css"
import "../../app.css"
import AppWarp from '../../Higher_order_component/AppWapper'
import { motion } from 'framer-motion'
import { images } from '../../constant'

function Skills() {

  const imgMotion = {
    rest: { scale: 1 },
    hover: {
      scale: 1.5
    }
  };

  const spanMotion = {
    rest: { opacity: 0},
    hover: {
      opacity: 1
    }
  };  
  const icons = [{img: images.mongoDB, name: "MongoDB" },
  {img: images.cpp, name: "c++"}, 
  {img: images.css, name: "CSS"}, 
  {img: images.figma, name: "Figma"}, 
  {img: images.git, name: "Git"}, 
  {img: images.graphql, name: "GraphQL"}, 
  {img: images.html, name: "HTML"}, 
  {img: images.javascript, name: "JavaScript"}, 
  {img: images.node,  name: "Node"},
  {img: images.python,  name: "Python"},
  {img: images.react, name: "React"}, 
  {img: images.redux, name: "Redux"}, 
  {img: images.sass,  name: "Sass"},
  {img: images.typescript, name: "TypeScript"},]
  return (
    <motion.div
      className='app__skill app__flex app__container' id='skill'
      whileInView={{y: [150, 0], opacity: [0, 1]}}
      transition={{duration: 1}}
    >
      <h2 className='head-text'>Skills <span>And</span> Education</h2>
      <div className='app__skill-content'>
        <motion.div
          className='app__skill-icons app__flex'
          whileInView={{y: [100, 0], opacity: [0, 1]}}
          transition= {{duration: 1, delay: 0.9 }}
        >
          {icons.map((icon, index)=>(
            <motion.div key={index}
              initial="rest" whileHover="hover"
              className="app__skills-icon app__flex"
            >
              <motion.img variants={imgMotion} src={icon.img} alt="Skill" className="app__skills-item app__flex"/>
              <motion.p variants={spanMotion} className="app__flex"><span>{icon.name}</span></motion.p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className='app__skill-Education app__flex'
          whileInView={{y: [100, 0], opacity: [0, 1]}}
          transition= {{duration: 1, delay: 1.8 }}
        >
          <div>
          <p className='year bold-text'>2021</p>
          <p className='title-edu'><p className='bold-text'>Seneca Collge</p> <span className='p-text'>Computer Prgramming And Analysis</span></p>
          </div>

          <div>
          <p className='year bold-text'>2022</p>
          <p className='title-edu'><p className='bold-text'>Udemy</p> <span className='p-text'> The Complete Web Development Course</span></p>
          </div>

          <div>
          <p className='year bold-text'>2022</p>
          <p className='title-edu'><p className='bold-text'>Udemy</p> <span className='p-text'>100 days of code: The complete Python Pro Bootcamp</span></p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default AppWarp(Skills, "skill") 