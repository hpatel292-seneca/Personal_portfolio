import React, {useState} from 'react'
import "../../app.css"
import "./Work.css"
import AppWarp from '../../Higher_order_component/AppWapper'
import { motion, useAnimationControls } from "framer-motion";
function Work() {

  const controls = useAnimationControls();
  const data = [
    { title: "web app", content: [1, 2, 3, 4, 5] },
    { title: "Flask app", content: [6, 2, 3, 4, 5] },
    { title: "C++ app", content: [7, 2, 3, 4, 5] },
    { title: "React app", content: [8, 2, 3, 4, 5] }
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  async function handleClick(index) {
    await controls.start({
      y: [0, 100],
      opacity: [1, 0],
      transition: { duration: 1 }
    });
    setSelectedIndex(index);
    await controls.start({
      y: [100, 0],
      opacity: [0, 1],
      transition: { duration: 1 }
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
          className="app__work-content"
          animate={controls}
          transition={{ duration: 2 }}
        >
          {selectedData.map((item, index) => (
            <div className="app__work-content-item">{item}</div>
          ))}
        </motion.div>
      </motion.div>

    </div>
      // </div >
  )
}

export default AppWarp(Work, "work")