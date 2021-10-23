import styled, { css } from "styled-components";
import React from "react";
const SocketHover = styled.div`
  position: absolute;
  width: 56px;
  height: 47px;
  left: ${(props) => props.socketOptions.x}px;
  top: ${(props) => props.socketOptions.y + 1}px;
  border-radius: 100px 30px 150px 100px;
  /* opacity: 0.5; */
  /* background-color: green; */
  transform: rotate(30deg);
  cursor: pointer;
`;

export default React.memo(SocketHover);
