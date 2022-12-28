import React, { useState } from 'react'
import "../../app.css"
import "./Work.css"
import AppWarp from '../../Higher_order_component/AppWapper'
import { motion, useAnimationControls } from "framer-motion";
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import data from './data.jsx'
function Work() {

  const controls = useAnimationControls();
  // const data = Data
  const [selectedIndex, setSelectedIndex] = useState(0);
  async function handleClick(index) {
    await controls.start({
      y: [0, 100],
      opacity: [1, 0],
      transition: { duration: 0.5 }
    });
    setSelectedIndex(index);
    await controls.start({
      y: [100, 0],
      opacity: [0, 1],
      transition: { duration: 0.5 }
    });
  }
  const selectedData = data[selectedIndex].content;


  return (
    <div id='work' className='app__work App app__container'>
      <h2 className='head-text'>My Creative <span>Portfolio</span> Section</h2>
      <motion.div
        className="App"
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
      // key={selectedData}
      >
        <div className="app__flex app__work-filter">
          {data.map((item, index) => (
            <div
              className={`app__work-filter-item ${index === selectedIndex ? "selected" : ""
                }`}
              onClick={() => {
                handleClick(index);
              }}
            >
              {item.title}
            </div>
          ))}
        </div>

        <motion.div
          className="app__work-content app__flex"
          animate={controls}
          transition={{ duration: 2, staggerChildren: 0.5}}
        >
          {selectedData.map((item, index) => (
            // <div className="app__work-content-item">
            //   <img src={item.imgURL}/>
            //   <p>"Web App"</p>
            //   <h5>{item.title}</h5>
            //   <p>{item.text}</p>
            // </div>
            <div className="app__work-item app__flex" key={index}>
              <div
                className="app__work-img app__flex"
              >
                <img src={item.imgURL} alt={item.name} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className="app__work-hover app__flex"
                >
                  
                  <a href={item.github} target="_blank" rel="noreferrer">

                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                      
                    </motion.div>
                  </a>
                  {item.live_site && <a href={item.live_site} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>}
                  
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h5 className="bold-text">{item.title}</h5>
                <p className="p-text" style={{ marginTop: 10 }}>{item.text}</p>

                <div className="app__work-tag app__flex">
                  <p className="p-text">{item.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

    </div>
    // </div >
  )
}

export default AppWarp(Work, "work")