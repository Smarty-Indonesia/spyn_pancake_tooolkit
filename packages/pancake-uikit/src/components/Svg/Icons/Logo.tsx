import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="640" height="640" viewBox="0 0 640 640" {...props}>
      <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect id="Rectangle" fill="#000000" x="0" y="0" width="640" height="640"></rect>
        <g id="Group" transform="translate(320.500000, 320.500000) rotate(45.000000) translate(-320.500000, -320.500000) translate(162.000000, 102.000000)">
            <rect id="Rectangle" fill="#5471F9" x="0" y="0" width="60" height="60"></rect>
            <rect id="Rectangle" fill="#FDDF5E" x="254" y="377" width="60" height="60"></rect>
            <polygon id="Rectangle" fill="#5471F9" points="1.8189894e-12 114 60 114 60 254 200 254 200 314 1.8189894e-12 314"></polygon>
            <polygon id="Rectangle" fill="#FDDF5E" transform="translate(217.000000, 214.000000) rotate(180.000000) translate(-217.000000, -214.000000) " points="117 114 177 114 177 254 317 254 317 314 117 314"></polygon>
        </g>
    </g>
    </Svg>
  );
};

export default Icon;
