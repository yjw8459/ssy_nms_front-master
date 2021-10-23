import styled, { css } from "styled-components";
import React from "react";
// export const addAnimation = (name, body) => {
//   let dynamicStyles = null;
//   dynamicStyles = document.createElement("style");
//   dynamicStyles.type = "text/css";
//   document.head.appendChild(dynamicStyles);

//   dynamicStyles.sheet.insertRule(
//     `@keyframes ${name} {${body}}`,
//     dynamicStyles.length
//   );
// };

const switchingDeviceImage = ({ in_status, in_device_type }) => {
  let css = "";
  let isErr = "";
  if (in_status.toString() === "closed") {
    isErr = "_err";
  }
  switch (in_device_type.toString()) {
    case "1":
      css = `background-image: url("/icons/wireless${isErr}.svg");`;
      break;
    case "2":
      css = `background-image: url("/icons/wifi${isErr}.svg");`;
      break;
    case "3":
      css = `background-image: url("/icons/scanner${isErr}.svg");`;
      break;
    case "4":
      css = `background-image: url("/icons/camera${isErr}.svg");`;
      break;
    case "5":
      css = `background-image: url("/icons/gas${isErr}.svg");`;
      break;
    case "hide":
      css = `opacity : 0;`;
      break;
    default:
      css = `background-image: url("/icons/uninst.svg");`;
  }
  return css;
};

export const SocketAni = styled.div`
  position: absolute;
  width: 57px;
  height: 50px;
  left: ${(props) => props.socketOptions.x}px;
  top: ${(props) => props.socketOptions.y}px;
  background-size: contain;
  background-repeat: no-repeat;
  ${(props) =>
    !props.overed &&
    css`
      ${switchingDeviceImage(props.socketOptions)}
    `}
  /* animation-name: ${(props) =>
    `activeSocket` + props.socketOptions.in_index}; */
  animation-duration: 1.75s;
  animation-iteration-count: infinite;
`;

export const OveredSocketAni = styled.div`
  position: absolute;
  width: 57px;
  height: 50px;
  left: ${(props) => props.socketOptions.x}px;
  top: ${(props) => props.socketOptions.y}px;
  background-size: contain;
  background-repeat: no-repeat;
  ${(props) =>
    props.overed &&
    css`
      ${switchingDeviceImage(props.socketOptions)}
    `}
  /* animation-name: ${(props) =>
    `overedSocket` + props.socketOptions.in_index}; */
  animation-duration: 1.75s;
  /* animation-timing-function: ease-out; */
  animation-iteration-count: infinite;
`;

export default React.memo(SocketAni);
