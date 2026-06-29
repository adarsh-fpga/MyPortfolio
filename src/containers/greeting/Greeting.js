import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Greeting(props) {
  const theme = props.theme;
  const heroImage = require("../../assets/images/rtl_design_verification.png");
  const heroImageSrc = heroImage.default || heroImage;

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="button-greeting-div">
                <Button
                  text="Download Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
                <Button text="Contact Me" href="/contact" theme={theme} />
              </div>
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              className="greeting-hero-image"
              src={heroImageSrc}
              alt="RTL design and verification with FPGA, RISC-V, AXI, Verilog, SystemVerilog, and UVM"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
