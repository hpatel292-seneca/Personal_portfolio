import React, { useState } from 'react'
import "./contact.css"
import "../../app.css"
import AppWarp from '../../Higher_order_component/AppWapper'
import { motion } from 'framer-motion'
import { images } from '../../constant'
function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const { username, email, message } = formData;
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const handleChangeInput = (e) => {
        const [name, value] = e
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = () => {
        setLoading(true);
    
        setIsFormSubmitted(true); 
      };
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
                {!isFormSubmitted ?
                    <>
                        <div className='app__flex' >
                            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
                        </div>
                        <div className='app__flex' >
                            <input className="p-text" type="text" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
                        </div>
                        <div className='app__flex'>
                            <textarea
                                className="p-text textArea"
                                placeholder="Your Message"
                                value={message}
                                name="message"
                                onChange={handleChangeInput}
                            />
                        </div>
                        <button type="button" className="submit-btn p-text app__flex" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
                    </> : (
                        <div>
                            <h3 className="head-text">
                                Thank you for getting in touch!
                            </h3>
                        </div>
                    )
                }
            </div>
        </motion.div>
    )
}

export default AppWarp(Contact, "contact")