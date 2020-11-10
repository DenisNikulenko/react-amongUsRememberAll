import React from 'react';
import "./footer.scss"
import {AiOutlineInstagram} from "react-icons/ai";


const Footer = props => {
    return(
        <div className="footer">
            <div>
                <h2>Made Demis Nikulenko</h2>
            </div>
            <div>
                <a href="https://www.instagram.com/nikulenko_denis/"  alt="ins" target="blank"><AiOutlineInstagram className="iconInst" /></a>
            </div>
        </div>
    )
}

export default Footer;