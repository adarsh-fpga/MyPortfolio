import React, { Component } from "react";

export default class DataScienceImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="720"
        height="520"
        viewBox="0 0 720 520"
        role="img"
        aria-label="RISC-V SoC integration diagram"
      >
        <title>RISC-V SoC integration diagram</title>
        <rect x="96" y="86" width="528" height="348" rx="30" fill={theme.compImgHighlight} />
        <rect x="132" y="122" width="456" height="276" rx="18" fill={theme.body} stroke={theme.text} strokeWidth="7" />

        <rect x="250" y="190" width="220" height="118" rx="18" fill={theme.imageHighlight} />
        <text x="360" y="242" textAnchor="middle" fill={theme.body} fontFamily="Arial, Helvetica, sans-serif" fontSize="30" fontWeight="700">
          RISC-V
        </text>
        <text x="360" y="276" textAnchor="middle" fill={theme.body} fontFamily="Arial, Helvetica, sans-serif" fontSize="22">
          SoC Core
        </text>

        <rect x="168" y="148" width="96" height="54" rx="10" fill={theme.text} />
        <rect x="456" y="148" width="96" height="54" rx="10" fill={theme.text} />
        <rect x="168" y="318" width="96" height="54" rx="10" fill={theme.text} />
        <rect x="456" y="318" width="96" height="54" rx="10" fill={theme.text} />

        <text x="216" y="182" textAnchor="middle" fill={theme.body} fontFamily="Arial, Helvetica, sans-serif" fontSize="18" fontWeight="700">
          UART
        </text>
        <text x="504" y="182" textAnchor="middle" fill={theme.body} fontFamily="Arial, Helvetica, sans-serif" fontSize="18" fontWeight="700">
          GPIO
        </text>
        <text x="216" y="352" textAnchor="middle" fill={theme.body} fontFamily="Arial, Helvetica, sans-serif" fontSize="18" fontWeight="700">
          AXI
        </text>
        <text x="504" y="352" textAnchor="middle" fill={theme.body} fontFamily="Arial, Helvetica, sans-serif" fontSize="18" fontWeight="700">
          MEM
        </text>

        <path d="M264 176h84v14M456 176h-84v14M264 346h84v-38M456 346h-84v-38" stroke={theme.imageHighlight} strokeWidth="8" strokeLinecap="round" fill="none" />
        <path d="M142 434h436" stroke={theme.headerColor} strokeWidth="10" strokeLinecap="round" />
        <text x="360" y="468" textAnchor="middle" fill={theme.secondaryText} fontFamily="Arial, Helvetica, sans-serif" fontSize="22">
          C | C++ | Python | HW-SW Co-verification
        </text>
      </svg>
    );
  }
}
