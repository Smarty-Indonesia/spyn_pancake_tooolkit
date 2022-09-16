import * as React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="20" height="14.1" viewBox="0 0 20 14.1" {...props}>
      <path fill="#FFFFFF" d="M19.2,1.2C18.5,0.3,17.2,0,14.6,0H5.4c-2.6,0-4,0.4-4.7,1.3C0,2.2,0,3.5,0,5.3v3.5
        c0,3.5,0.8,5.3,5.4,5.3h9.2c2.2,0,3.4-0.3,4.2-1.1c0.8-0.8,1.2-2,1.2-4.2V5.3C20,3.4,20,2.1,19.2,1.2z M12.8,7.5L8.6,9.7
        C8.6,9.8,8.5,9.8,8.4,9.8c-0.1,0-0.2,0-0.3-0.1C7.8,9.6,7.7,9.4,7.7,9.1V4.8c0-0.2,0.1-0.4,0.3-0.5c0.2-0.1,0.4-0.1,0.6,0l4.2,2.2 c0.2,0.1,0.3,0.3,0.3,0.6C13.2,7.2,13.1,7.4,12.8,7.5z"/>
    </Svg>
  );
};

export default Icon;
