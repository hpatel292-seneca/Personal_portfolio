import React from 'react'
import "./contact.css"
import "../../app.css"
import AppWarp from '../../Higher_order_component/AppWapper'
import { motion } from 'framer-motion'
import { images } from '../../constant'
function Contact() {
    return (
        <motion.div className='app__container app__flex' id='contact'
            whileInView={{ y: [200, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
        >
            <h2 className='head-text'>Contact Details</h2>
            <div className='app__contact-details'>
                <a href="mailto: abc@example.com" className="app__contact-email app__flex">
                    <img src={images.email} alt="email logo" />
                    <span>Example123@gmail.com</span>
                </a>
                <a href="tel:+1234567890" className="app__contact-phone app__flex">
                    <img src={images.mobile} alt="phone logo" />
                    <span>+1234567890</span>
                </a>
            </div>
            <div className='app__form'>
                <form action="#" method="post">
                    <input type="text"  />
                </form>
            </div>
        </motion.div>
    )
}

export default AppWarp(Contact, "contact")