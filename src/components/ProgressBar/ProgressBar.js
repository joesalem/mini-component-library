/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const { primary, transparentGray35, black } = COLORS;

const SIZES = {
   large: {
      "--width": 370 + "px",
      "--height": 24 + "px",
   },
   medium: {
      "--width": 370 + "px",
      "--height": 12 + "px",
   },
   small: {
      "--width": 370 + "px",
      "--height": 8 + "px",
   },
};

const ProgressBarBase = styled.div`
   box-shadow: inset 0px 2px 4px ${transparentGray35};
   border-radius: 4px;
   width: var(--width);
   height: var(--height);
`;

const LargeProgressBar = styled(ProgressBarBase)`
   padding: 4px;
`;

const Bar = styled.div`
   height: 100%;
   width: ${(p) => p.value}%;
   border-top-left-radius: 4px;
   border-bottom-left-radius: 4px;
   border-top-right-radius: ${(p) =>
      p.value > 98 ? Math.floor(4 - 2 * (100 - p.value)) : 0}px;
   border-bottom-right-radius: ${(p) =>
      p.value > 98 ? Math.floor(4 - 2 * (100 - p.value)) : 0}px;
   background-color: ${primary};
`;

const ProgressBar = ({ value, size }) => {
   const styles = SIZES[size];
   let Component;
   if (size === "large") Component = LargeProgressBar;
   else Component = ProgressBarBase;
   return (
      <Component style={styles} role="progressbar" aria-valuenow={value}>
         <Bar value={value} />
      </Component>
   );
};

export default ProgressBar;
