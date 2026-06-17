import React, { Component } from "react";

export default class FullStackImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="720"
        height="520"
        viewBox="0 0 720 520"
        role="img"
        aria-label="RTL design waveform and logic blocks"
      >
        <title>RTL design waveform and logic blocks</title>
        <rect x="70" y="72" width="580" height="360" rx="28" fill={theme.compImgHighlight} />
        <rect x="104" y="108" width="512" height="288" rx="18" fill={theme.body} stroke={theme.text} strokeWidth="8" />

        <rect x="142" y="146" width="154" height="108" rx="14" fill={theme.imageHighlight} />
        <text x="219" y="208" textAnchor="middle" fill={theme.body} fontFamily="Arial, Helvetica, sans-serif" fontSize="34" fontWeight="700">
          RTL
        </text>

        <rect x="424" y="146" width="154" height="108" rx="14" fill={theme.text} />
        <text x="501" y="208" textAnchor="middle" fill={theme.body} fontFamily="Arial, Helvetica, sans-serif" fontSize="28" fontWeight="700">
          SVA
        </text>

        <path d="M296 200H424" stroke={theme.text} strokeWidth="10" strokeLinecap="round" />
        <path d="M356 200v76" stroke={theme.text} strokeWidth="10" strokeLinecap="round" />

        <path
          d="M142 322h42v-44h54v76h54v-44h58v-32h54v76h54v-44h58v-32h62"
          fill="none"
          stroke={theme.imageHighlight}
          strokeWidth="12"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <text x="360" y="372" textAnchor="middle" fill={theme.secondaryText} fontFamily="Arial, Helvetica, sans-serif" fontSize="22">
          Verilog | SystemVerilog | UVM | Coverage
        </text>

        <circle cx="116" cy="458" r="10" fill={theme.imageHighlight} />
        <circle cx="604" cy="458" r="10" fill={theme.imageHighlight} />
        <path d="M126 458H594" stroke={theme.headerColor} strokeWidth="8" strokeLinecap="round" />
      </svg>
    );
  }
}
