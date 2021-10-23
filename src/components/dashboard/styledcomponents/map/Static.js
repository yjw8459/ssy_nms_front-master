import styled, { css } from "styled-components";
import React from "react";

const Static = styled.div`
  position: absolute;
  width: 114px;
  height: 101px;
  left: ${(props) => props.staticOptions.x}px;
  top: ${(props) => props.staticOptions.y}px;
  background-image: url(${(props) => props.staticOptions.src});
  background-size: auto;
  background-repeat: no-repeat;
`;

export default React.memo(Static);
