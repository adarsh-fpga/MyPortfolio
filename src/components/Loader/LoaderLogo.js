import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;

    return (
      <svg
        className="raw_logo"
        width="50%"
        height="40%"
        viewBox="0 0 520 330"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Adarsh Thakur loading logo"
      >
        <rect
          className="loader-chip"
          x="178"
          y="62"
          width="164"
          height="164"
          rx="24"
          stroke={theme.body}
          strokeWidth="6"
        />
        <rect
          className="loader-core"
          x="216"
          y="100"
          width="88"
          height="88"
          rx="14"
          stroke={theme.body}
          strokeWidth="5"
        />

        <path className="loader-pin" d="M144 92H178" stroke={theme.body} />
        <path className="loader-pin" d="M144 132H178" stroke={theme.body} />
        <path className="loader-pin" d="M144 172H178" stroke={theme.body} />
        <path className="loader-pin" d="M342 92H376" stroke={theme.body} />
        <path className="loader-pin" d="M342 132H376" stroke={theme.body} />
        <path className="loader-pin" d="M342 172H376" stroke={theme.body} />
        <path className="loader-pin" d="M210 28V62" stroke={theme.body} />
        <path className="loader-pin" d="M260 28V62" stroke={theme.body} />
        <path className="loader-pin" d="M310 28V62" stroke={theme.body} />
        <path className="loader-pin" d="M210 226V260" stroke={theme.body} />
        <path className="loader-pin" d="M260 226V260" stroke={theme.body} />
        <path className="loader-pin" d="M310 226V260" stroke={theme.body} />

        <path
          className="loader-trace"
          d="M236 126H284M236 152H272M246 178H294"
          stroke={theme.body}
          strokeLinecap="round"
        />
        <circle className="loader-node" cx="294" cy="178" r="6" fill={theme.body} />
        <circle className="loader-node" cx="284" cy="126" r="6" fill={theme.body} />
        <circle className="loader-node" cx="272" cy="152" r="6" fill={theme.body} />

        <text
          x="260"
          y="310"
          textAnchor="middle"
          fill={theme.body}
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="30"
          fontWeight="700"
          letterSpacing="2"
        >
          ADARSH THAKUR
        </text>

        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html: `
                .loader-chip,
                .loader-core {
                  stroke-dasharray: 720;
                  stroke-dashoffset: 720;
                  animation: loaderDash 2.3s ease forwards;
                }

                .loader-core {
                  animation-delay: 0.35s;
                }

                .loader-pin {
                  stroke-width: 7;
                  stroke-linecap: round;
                  stroke-dasharray: 60;
                  stroke-dashoffset: 60;
                  animation: loaderDash 0.9s ease forwards;
                }

                .loader-pin:nth-of-type(3n) {
                  animation-delay: 0.25s;
                }

                .loader-pin:nth-of-type(3n + 1) {
                  animation-delay: 0.45s;
                }

                .loader-trace {
                  stroke-width: 8;
                  stroke-dasharray: 180;
                  stroke-dashoffset: 180;
                  animation: loaderDash 1.4s ease forwards 1.1s;
                }

                .loader-node {
                  opacity: 0;
                  animation: loaderFade 0.8s ease forwards 1.8s;
                }

                text {
                  opacity: 0;
                  animation: loaderFade 0.8s ease forwards 2.1s;
                }

                @keyframes loaderDash {
                  to {
                    stroke-dashoffset: 0;
                  }
                }

                @keyframes loaderFade {
                  to {
                    opacity: 1;
                  }
                }
              `,
            }}
          />
        </defs>
      </svg>
    );
  }
}

export default LogoLoader;
