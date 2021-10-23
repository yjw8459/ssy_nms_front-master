import React from "react";
import styled, { css } from "styled-components";

export const addAnimation = (name, body) => {
  let dynamicStyles = null;
  dynamicStyles = document.createElement("style");
  dynamicStyles.type = "text/css";
  document.head.appendChild(dynamicStyles);
  dynamicStyles.sheet.insertRule(
    `@keyframes ${name} {${body}}`,
    dynamicStyles.length
  );
};

export const LineAni = styled.div`
  width: 6px;
  height: 6px;
  position: absolute;
  border-radius: 50%;
  left: ${(props) => props.lineOptions.x}px;
  top: ${(props) => props.lineOptions.y - 1}px;
  ${(props) =>
    props.lineOptions.in_status === "open"
      ? // 라인 활성화 상태
        css`
          background-color: #12e312;
          background: radial-gradient(circle at 60% 60%, white, #12e312);
        `
      : props.lineOptions.in_status === "closed"
      ? // 라인 에러 상태
        css`
          background-color: #fe0000;
        `
      : // 라인 비활성화 상태
        css`
          opacity: 0;
        `}
  animation-name: ${(props) => `lineMoving` + props.lineOptions.line_index};
  /* animation-duration: ${(props) => props.lineOptions.width / 100}s; */
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  ${(props) =>
    props.lineOptions.animation === "forward"
      ? css`
          animation-direction: normal;
          /* animation-direction: alternate; */
        `
      : css`
          animation-direction: reverse;
          /* animation-direction: alternate-reverse; */
        `}/* animation-direction:alternate; */
  /* animation-fill-mode: forwards; */
`;

export default React.memo(LineAni);
