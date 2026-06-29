import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
import { competitiveSites } from "../../portfolio";
import { certifications } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    const certificationLogos = [
      { name: "NPTEL", logo_path: "nptel_logo.png" },
      { name: "TIMTS", logo_path: "certificate_logo.svg" },
      { name: "AICRA", logo_path: "certificate_logo.svg" },
      { name: "Coursera", logo_path: "coursera_logo.png" },
      { name: "CDAC", logo_path: "cdac_logo.png" },
    ];
    const educationHighlights = [
      "B.E. foundation in electronics, communication systems, digital logic, and microprocessors.",
      "PG Diploma training focused on VLSI, Verilog, SystemVerilog, UVM, and FPGA tool flows.",
      "Additional coursework across sensors, robotics, programming, electronics, and machine learning.",
    ];
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Basic Qualification and Certifications
                </h3>
                <div className="education-summary">
                  <div className="cert-logo-strip">
                    {certificationLogos.map((item) => {
                      const logo = require(`../../assets/images/${item.logo_path}`);
                      const logoSrc = logo.default || logo;
                      return (
                        <div
                          className="cert-logo-pill"
                          key={item.name}
                          style={{ backgroundColor: theme.highlight }}
                        >
                          <img src={logoSrc} alt={`${item.name} logo`} />
                          <span style={{ color: theme.text }}>{item.name}</span>
                        </div>
                      );
                    })}
                  </div>
                  <ul className="education-highlight-list">
                    {educationHighlights.map((item) => (
                      <li key={item} style={{ color: theme.secondaryText }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <CompetitiveSites logos={competitiveSites.competitiveSites} />
              </div>
            </div>
          </Fade>
          <Educations theme={this.props.theme} />
          {certifications.certifications.length > 0 ? (
            <Certifications theme={this.props.theme} />
          ) : null}
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
