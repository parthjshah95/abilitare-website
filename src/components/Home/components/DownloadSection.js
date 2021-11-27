import React, { useLayoutEffect } from "react";
import "../Assets/CSS/DownloadSection.css";
import toolbar from "../../../images/toolbar-full.png";
import desktopclient from "../../../images/desktop-client.png";
import { Button } from "./Button";
import leftclick from "../../../images/left-click.gif";
import rightclick from "../../../images/right-click.gif";
import clicks from "../../../images/clicks.gif";
import doubleclick from "../../../images/double-click.gif";
import scroll from "../../../images/scroll.gif";
import pin from "../../../images/pin.gif";
import settings from "../../../images/settings.gif";
import none from "../../../images/none.gif";
import clickanddrag from "../../../images/click-and-drag.gif";



function DownloadSection() {
    return (
        <div>
            <div className="main">
                <div className="left">
                    <img className="toolbarimg" src={toolbar} alt="" />
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
                        <p>
                            1. Select left click by hovering on left click option on the toolbar for a fraction of a second (also called "dwell"). When selected you will hear a 'pop' sound and the button turns orange.<br/>
                            <br/>2. Go to the button you want to click on and hover over it for a fraction of a second (dwell on it) and a left click operation will be performed.
                        </p>
                    </div>
                </div>
                <div className="single-section">
                    <div className="left-gif">
                        <img src={rightclick} alt="" />
                    </div>
                    <div className="right-info">
                        <h1>Right Click</h1>
                        <p>
                            1. Select right click by hovering on right click option on the toolbar for a fraction of a second. When selected you will hear a 'pop' sound and the button turns orange.<br/>
                            <br/>2. Go to the button you want to click on and hover over it for a fraction of a second (dwell on it) and a right click operation will be performed.
                        </p>
                    </div>
                </div>
                <div className="single-section">
                    <div className="left-gif">
                        <img src={scroll} alt="" />
                    </div>
                    <div className="right-info">
                        <h1>Scroll</h1>
                        <p>
                            1. Select scroll up or scroll down by hovering on the option on the toolbar for a fraction of a second. When selected you will hear a 'pop' sound and the button turns orange.<br/>
                            <br/>2. Go to the page you want to scroll and hover over it for a fraction of a second (dwell on it) and the scroll up or scroll down operation will be performed.
                        </p>
                    </div>
                </div>
                <div className="single-section">
                    <div className="left-gif">
                        <img src={clickanddrag} alt="" />
                    </div>
                    <div className="right-info">
                        <h1>Click and Drag</h1>
                        <p>
                            1. Select click and drag by hovering on the option on the toolbar for a fraction of a second. When selected you will hear a 'pop' sound and the button turns orange.<br/>
                            <br/>2. Go to the object you want to click and drag and hover over it for a fraction of a second (dwell on it) and then move the mouse to wherever you want to drag the object.
                        </p>
                    </div>
                </div>
                <div className="single-section">
                    <div className="left-gif">
                        <img src={none} alt="" />
                    </div>
                    <div className="right-info">
                        <h1>None</h1>
                        <p>
                            1. Select none by hovering on the option on the toolbar for a fraction of a second. When selected you will hear a 'pop' sound and the button turns orange.<br/>
                            <br/>2. Once none is selected, no other button is activated and the mouse will not perform any action when it is hovered over any object on the screen.
                        </p>
                    </div>
                </div>
                <div className="single-section">
                    <div className="left-gif">
                        <img src={settings} alt="" />
                    </div>
                    <div className="right-info">
                        <h1>Settings</h1>
                        <p>
                            1. Open settongs by hovering on the option on the toolbar for a fraction of a second. When selected you will hear a 'pop' sound and the settings will pop up.<br/>
                            <br/>2. In settings, you can adjust the dwell time for the mouse and the opacity of the toolbar.
                        </p>
                    </div>
                </div>
                <div className="single-section">
                    <div className="left-gif">
                        <img src={pin} alt="" />
                    </div>
                    <div className="right-info">
                        <h1>Pin</h1>
                        <p>
                            1. Select pin by hovering on the option on the toolbar for a fraction of a second. When selected you will hear a 'pop' sound and the button turns orange.<br/>
                            <br/>2. When the pin button is activated, the toolbar will remain on the screen all the time.<br/>
                            <br/>3. When the pin button is deactivated, the toolbar will be hidden and will only pop up when you hover over the left part of the screen.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadSection;
