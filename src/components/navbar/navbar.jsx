import React, {useState} from 'react'
import logo from "../../image/logo_new.png"
import "./index.css"
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

function Navbar() {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='app__navbar'>
        <div >
          <img className='app__navbar-img' src={logo} alt="Logo" width="100px"/>
        </div>
    
        
            <ul className='app__navlink'>
              {["Home", "About", "Work","Skill", "Contact"].map((element)=> (
                <li className='app__navlink-li' id={`${element}`} key={`${element}`}>
                    <div />
                    <a href={`#${element.toLowerCase()}`} id={`link-${element}`}>{element}</a>
                    
                </li>
              ))}
            </ul>
            <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar