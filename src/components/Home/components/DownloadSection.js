import React, { useLayoutEffect } from "react";
import "../Assets/CSS/DownloadSection.css";
import toolbar from "../../../images/toolbar.png";
import desktopclient from "../../../images/desktop-client.png";
import screen from "../../../images/screen.jpg";
import screen2 from "../../../images/screen2.jpg";


function DownloadSection() {
    return (
        <div className="main">
            <div className="half-block">

                <div className="top">
                    <div className="image">
                        <img src={screen} alt="" />
                    </div>
                    <div className="bottom">
                    <h1>Mouse Toolbar</h1>
                        <div className="buttons">
                            
                            <div className="button">
                                <button class="btn2">Download for Windows  <i class="fab fa-windows fa-lg"></i></button>
                            </div>
                            <div className="button">
                                <button class="btn2">Download for Mac  <i class="fab fa-apple fa-lg"></i></button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <div className="half-block">
                {/* <div className="bottom">
                    <h1>Desktop Client</h1>
                </div> */}
                <div className="top">
                    <div className="image">
                        <img src={screen2} alt="" />
                    </div>
                    <div className="bottom">
                    <h1>Desktop Client</h1>
                    <div className="buttons">
                        
                        <div className="button">
                            <button class="btn2">Download for Windows  <i class="fab fa-windows fa-lg"></i></button>
                        </div>
                        <div className="button">
                            <button class="btn2">Download for Mac  <i class="fab fa-apple fa-lg"></i></button>
                        </div>
                    </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default DownloadSection;
