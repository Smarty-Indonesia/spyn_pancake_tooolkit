import * as React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path fill="#FFFFFF" d="M4.7,6.4h-4c-0.2,0-0.3,0.1-0.3,0.3v12.9c0,0.2,0.1,0.3,0.3,0.3h4C4.8,20,5,19.8,5,19.6V6.7 C5,6.6,4.8,6.4,4.7,6.4z"/>
      <path fill="#FFFFFF" d="M2.6,0C1.2,0,0,1.2,0,2.6c0,1.5,1.2,2.6,2.6,2.6c1.5,0,2.6-1.2,2.6-2.6C5.3,1.2,4.1,0,2.6,0z"/>
      <path fill="#FFFFFF" d="M14.9,6.1c-1.6,0-2.8,0.7-3.5,1.5V6.7c0-0.2-0.1-0.3-0.3-0.3H7.2C7,6.4,6.9,6.6,6.9,6.7v12.9 C6.9,19.8,7,20,7.2,20h4c0.2,0,0.3-0.1,0.3-0.3v-6.4c0-2.2,0.6-3,2.1-3c1.6,0,1.8,1.3,1.8,3.1v6.3c0,0.2,0.1,0.3,0.3,0.3h4 c0.2,0,0.3-0.1,0.3-0.3v-7.1C20,9.4,19.4,6.1,14.9,6.1z"/>

    </Svg>
  );
};

export default Icon;
