import React, { useLayoutEffect } from "react";
import "../Assets/CSS/DownloadSection.css";
import toolbar from "../../../images/toolbar.png";
import desktopclient from "../../../images/desktop-client.png";
import { Button } from "./Button";
import leftclick from "../../../images/left-click.gif";
import rightclick from "../../../images/right-click.gif";
import doubleclick from "../../../images/double-click.gif";
import scroll from "../../../images/scroll.gif";
import pin from "../../../images/pin.gif";
import settings from "../../../images/settings.gif";
import none from "../../../images/none.gif";
import clickanddrag from "../../../images/click-and-drag.gif";



function DownloadSection() {
    return (
        <>
        <div className="main">
            <div className="left">
                <img src="" alt="" />
            </div>
            <div className="right">
                <h1>Abili Toolbar</h1>
                <div className="buttons">
                    <Button
                        className="btns"
                        buttonStyle="btn--primary"
                        buttonSize="btn--large"
                        href="#"
                    >
                        Download for Windows  <i class="fab fa-windows fa-lg"></i>
                    </Button>
                    
                    <Button
                        className="btns"
                        buttonStyle="btn--primary"
                        buttonSize="btn--large"
                        href="#"
                    >
                        Download for Mac  <i class="fab fa-apple fa-lg"></i>
                    </Button>
                </div>
            </div>
        </div>
        <div className="how-to">
            <h1>How To Use?</h1>
            <div className="single-section">
                <div className="left-gif">
                    <img src={leftclick} alt="" />
                </div>
                <div className="right-info">
                    <h1>Left Click</h1>
                </div>
            </div>
        </div>
        </>
    )
}

export default DownloadSection;
