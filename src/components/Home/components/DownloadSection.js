import React, { useLayoutEffect } from "react";
import "../Assets/CSS/DownloadSection.css";


function DownloadSection() {
    return (
        <div className="main">
            <div className="half-block">
                <div className="top">
                    <div className="image"></div>
                    <div className="buttons">
                        <div className="button">
                        <button class="btn">Download for Windows  <i class="fab fa-windows fa-lg"></i></button>
                        </div>
                        <div className="button">
                        <button class="btn">Download for Mac  <i class="fab fa-apple fa-lg"></i></button>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <h1>Mouse Toolbar</h1>
                </div>
            </div>
            <div className="half-block">
                <div className="top">
                    <div className="image"></div>
                    <div className="buttons">
                        <div className="button">
                        <button class="btn">Download for Windows  <i class="fab fa-windows fa-lg"></i></button>
                        </div>
                        <div className="button">
                        <button class="btn">Download for Mac  <i class="fab fa-apple fa-lg"></i></button>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <h1>Desktop Client</h1>
                </div>
            </div>
        </div>
    )
}

export default DownloadSection;
