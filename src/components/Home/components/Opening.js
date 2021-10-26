import React, { useLayoutEffect } from "react";
import "../../../App.css";
import { Button } from "./Button";
import "../Assets/CSS/Opening.css";
import demo_gif from "../../../images/demo_0.gif";
import $ from "jquery";

function Opening() {
  useLayoutEffect(() => {
    //check local token or something
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (event) {
        // On-page links
        if (
          window.location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          window.location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $("html, body").animate(
              {
                scrollTop: target.offset().top,
              },
              1000,
              function () {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                  // Checking if the target was focused
                  return false;
                } else {
                  $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                  $target.focus(); // Set focus again
                }
              }
            );
          }
        }
      });
  }, []);
  //   $('a[href*="#"]')
  //     // Remove links that don't actually link to anything
  //     .not('[href="#"]')
  //     .not('[href="#0"]')
  //     .click(function (event) {
  //       // On-page links
  //       if (
  //         window.location.pathname.replace(/^\//, "") ==
  //           this.pathname.replace(/^\//, "") &&
  //         window.location.hostname == this.hostname
  //       ) {
  //         // Figure out element to scroll to
  //         var target = $(this.hash);
  //         target = target.length
  //           ? target
  //           : $("[name=" + this.hash.slice(1) + "]");
  //         // Does a scroll target exist?
  //         if (target.length) {
  //           // Only prevent default if animation is actually gonna happen
  //           event.preventDefault();
  //           $("html, body").animate(
  //             {
  //               scrollTop: target.offset().top,
  //             },
  //             1000,
  //             function () {
  //               // Callback after animation
  //               // Must change focus!
  //               var $target = $(target);
  //               $target.focus();
  //               if ($target.is(":focus")) {
  //                 // Checking if the target was focused
  //                 return false;
  //               } else {
  //                 $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
  //                 $target.focus(); // Set focus again
  //               }
  //             }
  //           );
  //         }
  //       }
  //     });
  return (
    <div className="horizontal-flex">
      <div className="hero-container">
        <h1>Head Controlled Mouse</h1>
        <div className="short-info">
          <p>
            Hand disability should not stop anyone from using a computer or a
            phone
          </p>
          <p>Control the mouse cursor with your head!</p>
        </div>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            href="#sign-up-section"
          >
            Sign Up For Our Beta!
          </Button>
        </div>
      </div>
      <img class="contain" src={demo_gif} alt="" />
    </div>
  );
}

export default Opening;
