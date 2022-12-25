import React from 'react'
import "./index.css"
import "../../app.css"
import {motion} from 'framer-motion'
import { images } from '../../constant/index'
import image from '../../constant/image'
import AppWrap from '../../Higher_order_component/AppWapper'

function Header() {
  return (
    <div  className='app__header app__flex app__container'>
        <motion.div
            className='app__header-info app__flex'
            whileInView={{x:[-100, 0], opacity:[0 ,1]}}
            transition={{duration:1}}
        >
            <div className='app__badge app__flex'>
                <div className='app__flex'>
                    <span className='app__emoji'>👋</span>

                    <div className='p-text' style={{marginLeft: '25px'}}>
                         <p className='p-text'>Hello, I am</p>
                        <h1 className='head-text'>Harshil</h1>
                    </div>
                
                </div>
            </div>
            <div className='tag-cmp app__flex'>
                <p className='p-text tag-txt'>Full Stack</p>
                
                <p className='p-text tag-txt'>Web Developer</p>
            </div>

        </motion.div>

        <motion.div
            className='app__header-img app__flex'
            whileInView={{ opacity:[0 ,1]}}
            transition={{duration:1}}
        >
            <motion.img 
            whileInView={{opacity: [0, 1]}}
             src={images.profile} className="app__profile"></motion.img>
            <motion.img
                whileInView={{scale: [0, 1]}}
                className="app__circle"
                transition={{duration: 1, ease: "easeInOut"}}
                src={images.circle}
            >

            </motion.img>
        </motion.div>

        <motion.div
            className='image-cmp app__flex'
            whileInView={{ opacity:[0 ,1], scale: [0, 1]}}
            transition={{duration:1}}
        >
        {[images.javascript, images.redux, images.sass].map((image, index)=> (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={image} alt="profile_bg" className='circle' />
            </div>
        ))}
        </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');