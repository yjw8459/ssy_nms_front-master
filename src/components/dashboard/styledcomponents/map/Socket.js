import styled, { css } from "styled-components";
import React from "react";
const switchingDeviceImage = ({ in_status, in_device_type, text }) => {
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
    case "not installed":
      css = `background-image: url("/icons/uninst.svg");`;
      break;
    default:
      css = `background-image: url("/icons/uninst.svg");`;
  }
  if (text === "미입력 장비") {
    css = `background-image: url("/icons/uninst.svg");`;
  }
  if (in_status === "not installed") {
    css = `background-image: url("/icons/uninst.svg");`;
  }
  return css;
};

const Socket = styled.div`
  position: absolute;
  width: 57px;
  height: 50px;
  left: ${(props) => props.socketOptions.x}px;
  top: ${(props) => props.socketOptions.y}px;
  background-size: contain;
  background-repeat: no-repeat;
  /* background-color: red; */
  /* opacity: 0.3; */
  ${(props) =>
    css`
      ${switchingDeviceImage(props.socketOptions)}
    `}
  ${(props) =>
    props.socketOptions.in_status === "disabled" &&
    css`
      opacity: 0;
    `}
`;

export default React.memo(Socket);
