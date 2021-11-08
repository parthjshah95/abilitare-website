import React from "react";
import "../../../App.css";
import "../Assets/header.css";
import nano from "../../../images/nano.jpg";

// import "../../Home/Assets/CSS/Opening.css";

function Header() {
  return (
    <div>
      <div className="hero-container1 w-100">
        <h1>
          Our <span className="special-char">Mission</span>
        </h1>
        <div class="container">
          <div class="content1">
            <div class="side1 rounded-lg">
              <img src={nano} />
            </div>
            <div class="main1">
              <h2>The Short</h2>
              <br />
              <p>
                I have no idea what to write in this but this needs to be a
                short one liner or two liner which explains what brainforce
                does.
              </p>
              <br />
            </div>
            <div class="main2">
              <h2>The Long</h2>
              <br />

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                congue ante eget quam mattis fermentum. Vivamus at bibendum
                libero. Nam ut lectus eget nisi tristique cursus vel quis felis.
                Sed non magna quis elit varius placerat sed eu quam. Vestibulum
                sit amet risus nec velit mattis tempor. Nulla quis neque
                volutpat, egestas dui eget, commodo odio. In rhoncus dapibus
                consequat. Fusce sit amet nulla eu sem porttitor vulputate id
                cursus ligula. Integer sagittis lectus et justo tempus
                dignissim. Integer vitae ante at nunc molestie porttitor et
                vitae libero. Donec in quam eu arcu dictum pretium. Fusce
                sagittis vitae ex at sollicitudin
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
