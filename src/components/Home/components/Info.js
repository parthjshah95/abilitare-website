import React from 'react'
import '../Assets/CSS/Info.css';
import infog from "../../../images/infographic.png";
import imgtemp from "../../../images/img-temp.png";
import { Button } from "./Button";

function Info() {
    return (
        <div className="main-info">
            <div className="first">

                <div className="material">
                    <h1>Five Million People Around The World <br />Have Hand Disabilities</h1>
                    <p>These disabilities restrict them from using devices such as computers and mobile phones</p>
                </div>
                <div className="img-info">
                    <img src={infog} alt="" />
                </div>
            </div>
            <div className="second">
                <div className="material2">
                    <h1>Our Head Controlled Mouse Allows Users <br />To Have Complete Functionalities Of A <br />Mouse Just With The Movement Of Their Head</h1>
                    <Button
                        className="btns"
                        buttonStyle="btn--primary"
                        buttonSize="btn--large"
                        href="#sign-up-section"
                    >
                        LEARN HOW IT WORKS
                    </Button>
                </div>
                <div className="img-info2">
                    <img src={imgtemp} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Info