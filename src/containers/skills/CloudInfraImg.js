import React, { Component } from "react";

export default class CloudInfraImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="720"
        height="520"
        viewBox="0 0 720 520"
        role="img"
        aria-label="FPGA implementation and timing flow"
      >
        <title>FPGA implementation and timing flow</title>
        <rect x="126" y="96" width="300" height="300" rx="34" fill={theme.text} />
        <rect x="178" y="148" width="196" height="196" rx="22" fill={theme.imageHighlight} />
        <path d="M218 210h116M218 248h76M218 286h116" stroke={theme.body} strokeWidth="14" strokeLinecap="round" />

        {[
          [82, 154],
          [82, 214],
          [82, 274],
          [82, 334],
          [426, 154],
          [426, 214],
          [426, 274],
          [426, 334],
        ].map(([x, y]) => (
          <path key={`${x}-${y}`} d={`M${x} ${y}h44`} stroke={theme.imageHighlight} strokeWidth="14" strokeLinecap="round" />
        ))}
        {[
          [184, 52],
          [244, 52],
          [304, 52],
          [364, 52],
          [184, 396],
          [244, 396],
          [304, 396],
          [364, 396],
        ].map(([x, y]) => (
          <path key={`${x}-${y}`} d={`M${x} ${y}v44`} stroke={theme.imageHighlight} strokeWidth="14" strokeLinecap="round" />
        ))}

        <rect x="486" y="126" width="140" height="54" rx="12" fill={theme.body} stroke={theme.text} strokeWidth="5" />
        <rect x="486" y="222" width="140" height="54" rx="12" fill={theme.body} stroke={theme.text} strokeWidth="5" />
        <rect x="486" y="318" width="140" height="54" rx="12" fill={theme.body} stroke={theme.text} strokeWidth="5" />
        <text x="556" y="161" textAnchor="middle" fill={theme.text} fontFamily="Arial, Helvetica, sans-serif" fontSize="20" fontWeight="700">
          SYNTH
        </text>
        <text x="556" y="257" textAnchor="middle" fill={theme.text} fontFamily="Arial, Helvetica, sans-serif" fontSize="20" fontWeight="700">
          STA
        </text>
        <text x="556" y="353" textAnchor="middle" fill={theme.text} fontFamily="Arial, Helvetica, sans-serif" fontSize="20" fontWeight="700">
          BITSTREAM
        </text>
        <path d="M426 248h44M556 180v42M556 276v42" stroke={theme.imageHighlight} strokeWidth="8" strokeLinecap="round" />
      </svg>
    );
  }
}
