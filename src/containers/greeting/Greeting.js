import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Greeting(props) {
  const theme = props.theme;
  const profileImage = require("../../assets/images/profile_photo.png");
  const profileImageSrc = profileImage.default || profileImage;
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
              <div className="portfolio-repo-btn-div">
                <Button
                  text="View Portfolio Repo"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            <div className="greeting-profile-card" aria-label="Adarsh Kumar Thakur profile">
              <div className="greeting-profile-frame">
                <img
                  className="greeting-profile-img"
                  src={profileImageSrc}
                  alt="Adarsh Kumar Thakur"
                />
              </div>
              <div className="greeting-chip-lines" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
