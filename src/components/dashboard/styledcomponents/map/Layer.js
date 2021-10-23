import styled, { css } from "styled-components";
import React from "react";
// 레이어에 전달되는 props 값과 z-index로 정렬되는 순서는 다음과 같습니다.

// 1.background-layer : 배경 레이어
// 2.line-hor-layer : 수평 줄 레이어
// 3.line-ver-layer : 수직 줄 레이어
// 4.line-ani-hor-layer : 수평 줄 애니메이션 레이어
// 5.line-ani-ver-layer : 수직 줄 애니메이션 레이어
// 6.static-layer : 지점 레이어 (TBM, 1구간, 2구간 등)
// 7.socket-layer : 장비 레이어
// 8.socket-ani-layer : 장비 애니메이션 레이어
// 9.socket-text-layer : 장비 이름 레이어

const Layer = styled.div`
  zoom: 0.96;
  margin: 0px;
  padding: 0px;
  position: absolute;
  /* background-color: red; */
  /* opacity: 0.3; */
  top: -40px;
  left: -110px;
  width: 100%;
  height: 90.4vh;
  @media screen and (min-height: 940px) {
    height: 90.7vh;
  }
  @media screen and (min-height: 1000px) {
    height: 90.7vh;
  }
  min-width: 1674px;
  min-height: 1100px;
  max-width: 2000px;
  max-height: 1200px;
  ${(props) =>
    props.layer === "background-layer" &&
    css`
      left: -20px;
      z-index: 1;
      margin: 0px;
      background-image: url("/icons/background.svg");
      background-size: contain;
      opacity: 1;
    `}
  ${(props) =>
    props.layer === "line-hor-layer" &&
    css`
      z-index: 2;
      /* background-color: blue; */
      /* opacity: 0.5; */
      transform: rotate(210deg);
      /* -webkit-transform :skew(30deg); */
      /* transform : rotateX(15deg) ; */
      /* transform : matrix(1, 0.3, 0.3, 1, 0, 0); */
      /* transform-style : preserve-3d ; */
    `}
${(props) =>
    props.layer === "line-ver-layer" &&
    css`
    /* background-color: orange; */
    /* opacity: 0.5; */
    z-index: 3;
    transform: rotate(150deg);
); 
  `}
    ${(props) =>
    props.layer === "socket-layer" &&
    css`
      z-index: 5;
    `}
    ${(props) =>
    props.layer === "static-layer" &&
    css`
      z-index: 6;
    `}
    ${(props) =>
    props.layer === "socketAni-layer" &&
    css`
      z-index: 7;
    `}
  ${(props) =>
    props.layer === "socket-text-layer" &&
    css`
      z-index: 8;
    `}
    ${(props) =>
    props.layer === "hover-socket-layer" &&
    css`
      z-index: 9;
    `}
`;

export default React.memo(Layer);
