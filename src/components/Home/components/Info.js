import React from 'react'
import '../Assets/CSS/Info.css';
import wordcloud from "../../../images/wordcloud.jpg";
import imgtemp from "../../../images/img-temp.png";
import { Button } from "./Button";

function Info() {
    return (
        <div className="main-info">
            <div className="first">
                <div className="material">
                    <h1><span className="million">5 Million</span> <br/>cannot use keyboards, mice or <br/>touchscreens with their hands.</h1>
                </div>
                <div className="img-info">
                    <img src={wordcloud} alt="" />
                </div>
            </div>
            <div className="mission">
                <h1>Our Mission</h1>
                <p>Imagine if you could no longer use a computer or smartphone. <br/>How would you do your job? How would you attend online meetings? How would you interact on social media? How would you even access this very website? What would you do? Unfortunately that's a reality for more than 5 million world wide.</p>
                <p>Our mission at Abilitare is to empower them with the same level of productivity as everyone else, be it at work, school or home. </p>
            </div>
        </div>
    )
}

export default Info