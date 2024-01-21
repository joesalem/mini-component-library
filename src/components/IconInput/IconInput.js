import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
   small: {
      "--leftOffset": -4 + "px",
      "--bottomOffset": -4 + "px",
      "--iconTopOffset": 4 + "px",
      "--iconLeftOffset": 0,
      "--height": 28 + "px",
      "--paddingLeft": 28 + "px",
      "--fontSize": 0.9 + "rem",
      "--underline": 1 + "px",
      "--iconSize": 16,
   },
   large: {
      "--leftOffset": -4 + "px",
      "--bottomOffset": -5 + "px",
      "--iconTopOffset": -3 + "px",
      "--iconLeftOffset": 0,
      "--height": 36 + "px",
      "--paddingLeft": 36 + "px",
      "--fontSize": 1.1 + "rem",
      "--underline": 3 + "px",
      "--iconSize": 20,
   },
};

const { black, gray700, gray500, outline } = COLORS;

const Backbone = styled.div`
   position: relative;
   width: calc(${(p) => p.width}px + var(--paddingLeft));
   height: 24px;
   color: ${gray700};
   border-bottom: var(--underline) solid ${black};

   &:hover {
      color: ${black};
   }
`;

const Input = styled.input`
   padding-left: var(--paddingLeft);
   width: calc(100% - 2 * var(--leftOffset));
   height: var(--height);
   position: absolute;
   bottom: var(--bottomOffset);
   left: var(--leftOffset);
   border: none;
   border-radius: 4px;
   font-size: var(--fontSize);
   font-weight: 700;
   color: inherit;
   background: transparent;

   &::placeholder {
      color: ${gray500};
      font-weight: 400;
   }

   &:focus {
      outline: revert;
      outline-color: ${outline};
   }
`;

const IconWrapper = styled.div`
   position: absolute;
   top: var(--iconTopOffset);
   left: var(--iconLeftOffset);
   width: max-content;
   height: max-content;
   pointer-events: none;
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
   const styles = SIZES[size];
   //const iconSize = size === "large" ? 20 : 16;
   const iconSize = styles["--iconSize"];

   return (
      <>
         <VisuallyHidden>
            <label for="myInput">{label}</label>
         </VisuallyHidden>
         <Backbone style={styles} width={width}>
            <IconWrapper style={styles}>
               <Icon id={icon} size={iconSize} strokeWidth={2} />
            </IconWrapper>
            <Input id="myInput" style={styles} placeholder={placeholder} />
         </Backbone>
      </>
   );
};

export default IconInput;
