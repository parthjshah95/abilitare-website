import React, { useLayoutEffect } from "react";
import "../Assets/CSS/DownloadSection.css";
import toolbar from "../../../images/toolbar.png";
import desktopclient from "../../../images/desktop-client.png";
import { Button } from "./Button";


function DownloadSection() {
    return (
        <div className="main">
            <div className="left">
                <img src={toolbar} alt="" />
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
    )
}

export default DownloadSection;
