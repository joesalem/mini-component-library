import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const { transparentGray15, gray700, black } = COLORS;

const Wrapper = styled.div`
   position: relative;
   width: max-content;
`;

const NativeSelect = styled.select`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   opacity: 0;
   appearance: none;
`;

const StyledSelect = styled.div`
   padding: 12px 52px 12px 16px;
   color: ${gray700};
   background-color: ${transparentGray15};
   font-size: 1rem;
   border-radius: 8px;

   ${NativeSelect}:focus + & {
      border: 2px solid hsl(218deg 57% 53%);
   }

   ${NativeSelect}:hover + & {
      color: ${black};
   }
`;

const IconWrapper = styled.div`
   height: 24px;
   width: 24px;
   position: absolute;
   top: 0;
   bottom: 0;
   right: 10px;
   margin: auto;
   pointer-events: none;
`;

const Select = ({ label, value, onChange, children }) => {
   const displayedValue = getDisplayedValue(value, children);

   return (
      <Wrapper>
         <NativeSelect label={label} value={value} onChange={onChange}>
            {children}
         </NativeSelect>
         <StyledSelect>
            {displayedValue}
            <IconWrapper>
               <Icon id={"chevron-down"} size={24} strokeWidth={2} />
            </IconWrapper>
         </StyledSelect>
      </Wrapper>
   );
};

export default Select;
