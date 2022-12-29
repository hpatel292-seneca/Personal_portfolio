import React, { useState, useRef } from 'react'
import "./contact.css"
import "../../app.css"
import AppWarp from '../../Higher_order_component/AppWapper'
import { motion } from 'framer-motion'
import { images } from '../../constant'
import emailjs from '@emailjs/browser';
function Contact() {
    const form = useRef();
    const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' })
    const { user_name, user_email, message } = formData;
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const handleChangeInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(formData)
        emailjs.sendForm('service_buu48ok', 'template_1px5gln', form.current, 'SqoGyeZGsT8AZ8T3u')
      .then((result) => {
          console.log(result.text);
          setIsFormSubmitted(true); 
      }, (error) => {
          console.log(error.text);
      });
        
      };
    return (
        <motion.div className='app__container app__flex' id='contact'
            whileInView={{ y: [200, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
        >
            <h2 className='head-text'>Contact Details</h2>
            <div className='app__contact-details'>
                <a href="mailto: hpatel292@myseneca.ca" className="app__contact-email app__flex">
                    <img src={images.email} alt="email logo" />
                    <span>hpatel292@myseneca.ca</span>
                </a>
                <a href="tel:+16478623246" className="app__contact-phone app__flex">
                    <img src={images.mobile} alt="phone logo" />
                    <span>+16478623246</span>
                </a>
            </div>
            <div className='app__form'>
                {!isFormSubmitted ?
                    <form ref={form} onSubmit={handleSubmit}>
                        <div className='app__flex' >
                            <input required className="p-text" type="text" placeholder="Your Name" name="user_name" value={user_name} onChange={handleChangeInput} />
                        </div>
                        <div className='app__flex' >
                            <input required className="p-text" type="text" placeholder="Your Email" name="user_email" value={user_email} onChange={handleChangeInput} />
                        </div>
                        <div className='app__flex'>
                            <textarea
                            required
                                className="p-text textArea"
                                placeholder="Your Message"
                                value={message}
                                name="message"
                                onChange={handleChangeInput}
                            />
                        </div>
                        <button type="submit" className="submit-btn p-text app__flex" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
                        </form> : (
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