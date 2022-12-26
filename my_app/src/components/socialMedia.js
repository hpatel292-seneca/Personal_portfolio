import React from 'react'
import {AiFillLinkedin, AiFillGithub, AiFillCodepenCircle} from "react-icons/ai"
import "./socialMedia.css"
function SocialMedia() {
  return (
    <div className="app__social">

        <div>
            <AiFillLinkedin />
        </div>
        <div>    
            <AiFillCodepenCircle />
        </div>
        <div>
            <AiFillGithub />
        </div>
    </div>
  )
}

export default SocialMedia