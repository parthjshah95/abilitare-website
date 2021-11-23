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
            {/* <div className="second">
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
            </div> */}
            <div className="mission">
                <h1>Our Mission</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
}

export default Info