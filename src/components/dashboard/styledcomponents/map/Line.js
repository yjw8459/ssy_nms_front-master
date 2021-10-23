import React from "react";
import styled, { css } from "styled-components";

const Line = styled.div`
  display: inline-block;
  position: absolute;
  left: ${(props) => props.lineOptions.x}px;
  top: ${(props) => props.lineOptions.y}px;
  width: ${(props) => props.lineOptions.width}px;
  ${(props) =>
    props.lineOptions.in_status === "open" &&
    css`
      border-top: 2px solid #12e312;
    `}
  ${(props) =>
    props.lineOptions.in_status === "closed" &&
    css`
      border-top: 2px solid #fe0000;
    `}
    ${(props) =>
    props.lineOptions.in_status === "not installed" &&
    css`
      border-top: 2px solid #201d20;
    `}
    ${(props) =>
    props.lineOptions.in_status === "disabled" &&
    css`
      border-top: 0px;
    `}
`;

export default React.memo(Line);
