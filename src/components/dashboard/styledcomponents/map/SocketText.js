import styled, { css } from "styled-components";
import React from "react";
// export const addAnimation = (name, body, _in_index) => {
//   let dynamicStyles = null;
//   dynamicStyles = document.createElement("style");
//   dynamicStyles.type = "text/css";
//   document.head.appendChild(dynamicStyles);

//   dynamicStyles.sheet.insertRule(
//     `@keyframes ${name} {${body}}`,
//     dynamicStyles.length
//   );
// };

const SocketText = styled.div`
  font-family: "NotoSansKR-Regular";
  font-size: 16px;
  position: absolute;
  border-radius: 4px;
  width: auto;
  height: auto;
  transition: 0.5s;
  text-shadow: 1px 1px 8px black;
  opacity: 0;
  left: ${(props) => props.socketOptions.x + 60}px;
  top: ${(props) => props.socketOptions.y + 15}px;
  /* animation-name: ${(props) =>
    `activeSocketText` + props.socketOptions.in_index};
  animation-duration: 2.5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite; */
  .socket-text {
    padding: 5px;
    text-align: center;
    vertical-align: middle;
  }
  ${(props) =>
    props.socketOptions.in_status === "closed"
      ? css`
          background-color: rgba(0, 0, 0, 0.3);
          color: #ff1100;
          font-weight: 800;
        `
      : css`
          background-color: rgba(0, 0, 0, 0.3);
          color: #ffffff;
        `}
  /* close 상태일 때 text 다 표시하는 스크립트. */
  /* ${(props) =>
    props.socketOptions.in_status === "close"
      ? css`
          opacity: 1;
          background-color: rgba(0, 0, 0, 0.3);
          color: #ff1100;
          font-weight: 800;
        `
      : css`
          background-color: rgba(0, 0, 0, 0.3);
          color: #ffffff;
        `} */
        ${(props) =>
    props.socketOptions.textLocation === "top" &&
    css`
      left: ${(props) => props.socketOptions.x - 240}px;
      top: ${(props) => props.socketOptions.y + 15}px;
    `}
  ${(props) =>
    (props.overedSocket.in_index === props.socketOptions.in_index ||
      props.clickedSocket.in_index === props.socketOptions.in_index) &&
    (props.socketOptions.in_status === "closed"
      ? css`
          opacity: 1;
          background-color: rgba(0, 0, 0, 0.8);
          top: ${(props) => props.socketOptions.y + 5}px;
        `
      : css`
          opacity: 1;
          background-color: rgba(0, 0, 0, 0.8);
          top: ${(props) => props.socketOptions.y + 5}px;
        `)}
`;

export default React.memo(SocketText);
