import React, { useEffect, useState } from "react";
import { Image } from "semantic-ui-react";
import styled from "styled-components";
// import analog from "../../lib/clock/analog";
// import digital from "../../lib/clock/digital";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompressArrowsAlt,
  faExpandArrowsAlt,
  faQuestion,
} from "@fortawesome/pro-solid-svg-icons";

const HeaderCompo = styled.div`
  z-index: 15;
  * {
    margin: 0px;
    padding: 0px;
    /* object-fit: cover; */
    a {
      text-decoration: none;
    }
  }
  width: 100%;
  min-width: 1920px;
  min-height: 70px;

  background-color: #2e2e2e;
  display: flex;
  justify-content: space-between;
  position: fixed;
  font-size: 36px;

  justify-content: flex-start;
  .box-one {
    /* border: 2px solid yellowgreen; */
    display: flex;
    .logo-container {
      /* border: 1px solid red; */
      #kep_logo {
        width: 213px;
        height: 34px;
      }
      #ssy_logo {
        width: 183px;
        height: 34px;
      }
      display: flex;
      margin-left: 15px;
      margin-right: 30px;
      width: 450px;
      height: 70px;
      justify-content: space-around;
      align-items: center;
      flex-direction: row;
      flex-wrap: nowrap;
      /* vertical-align: center; */
    }
    .title-container {
      display: flex;
      align-items: center;
      height: 70px;
      width: 300px;
      .web-title {
        font-size: 30px;
        font-family: "NotoSansKR-Regular";
        color: #ffffff;
      }
    }
  }

  #box-two {
    display: flex;
    justify-content: flex-end;
    margin-left: 925px;
  }
  .shortcut-button-list {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 20px;
    .shortcut-button-box {
      width: 45px;
      &:nth-child(n + 2) {
        margin-left: 24px;
      }
      .shortcut-button {
        height: 39px;
        width: 39px;
        border-radius: 47%;
        color: #ffffff;
        font-size: 17px;
        margin-left: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
          cursor: pointer;
          color: #72afd2;
          /* color: #f1592a; */
        }
        &.general-screen {
          background-color: #8fc31f;
          /* opacity: 0.5; */
        }
        &.full-screen {
          background-color: #32b16c;
          /* opacity: 0.5; */
        }
        &.question {
          background-color: #305a70;
        }
      }
      .button-name {
        color: #ffffff;
        font-family: "NotoSansKR-Regular";
        font-size: 12px;
        text-align: center;
        text-decoration: none !important;
      }
    }
  }
`;

const Header = () => {
  // useEffect(() => {
  //   analog.init("canvas_clock");
  //   digital.init("digitalClock");
  // }, []);
  const [fullState, setScreenState] = useState(false);
  // 전체화면 설정
  const openFullScreenMode = () => {
    let docV = document.documentElement;
    // docV.webkitRequestFullscreen();
    if (docV.requestFullscreen) {
      docV.requestFullscreen();
    } else if (docV.mozRequestFullScreen) {
      docV.mozRequestFullScreen();
    } else if (docV.webkitRequestFullscreen) {
      docV.webkitRequestFullscreen();
    } else if (docV.msRequestFullscreen) {
      docV.msRequestFullscreen();
    }
    if (!fullState) {
      setScreenState(true);
    }
  };

  const closeFullScreenMode = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }
    if (fullState) {
      setScreenState(false);
    }
  };

  return (
    <>
      <HeaderCompo>
        <div className="box-one">
          <div className="logo-container">
            <Image id="kep_logo" src="logos/kep_logo.png" />
            <Image id="ssy_logo" src="logos/ssy_logo.png" />
          </div>
          <div className="title-container">
            <p className="web-title"> 안성 - 평택 전력구 NMS</p>
          </div>
        </div>
        <div id="box-two">
          <div className="shortcut-button-list">
            <div className="shortcut-button-box">
              <div
                className="shortcut-button general-screen"
                onClick={closeFullScreenMode}
              >
                {/* <FontAwesomeIcon icon={faCompressArrowsAlt} /> */}
              </div>
              <div className="button-name">일반화면</div>
            </div>
            <div className="shortcut-button-box">
              <div
                className="shortcut-button full-screen"
                onClick={openFullScreenMode}
              >
                {/* <FontAwesomeIcon icon={faExpandArrowsAlt} /> */}
              </div>
              <div className="button-name">전체화면</div>
            </div>
            <div className="shortcut-button-box question">
              <a
                href="http://119.207.78.144:8089/안성-평택 전력구_통합안전관리_시스템_메뉴얼.pdf"
                target="_blank"
                download
              >
                <div className="shortcut-button question">
                  <wesomeIcon icon={faQuestion} />
                </div>
                <div className="button-name">도움말</div>
              </a>
            </div>
          </div>
          {/* <div id="clock-weather-container">
            <div id="clock-container">
              <div id="analogClock">
                <canvas id="canvas_clock" width="58px" height="58px" />
              </div>
              <div id="digitalClock" />
            </div> */}
          {/* <div className="weather-container">
              <p className="weather-text">날씨 맑음</p>
            </div> */}
          {/* </div> */}
        </div>
      </HeaderCompo>
    </>
  );
};

export default React.memo(Header);
// 시계 백업
//  #clock-weather-container {
//   /* border: 1px solid red; */
//   background-color: black;
//   width: 236px;
//   height: 70px;
//   display: block;
//   float: right;
//   #clock-container {
//     display: flex;
//     align-items: center;
//     width: 218px;
//     height: 70px;
//     /* border: 1px solid red; */
//     justify-content: flex-end;
//     #analogClock {
//     }
//     #digitalClock {
//       display: flex;
//       flex-direction: column;
//       margin: 10px;
//       p {
//         font-family: "DS-Digital";
//         color: #ffffff;
//         &#calendar-box {
//           text-align: center;
//           font-size: 23.25px;
//           margin-bottom: 0px;
//           height: 21px;
//         }
//         &#time-box {
//           opacity: 0.5;
//           font-size: 37.24px;
//           width: 130px;
//           height: 38px;
//           letter-spacing: 1px;
//         }
//       }
//     }
//   }
//   .weather-container {
//     /* border: yellow 1px solid; */
//     /* display: flex; */
//     color: white;
//     font-size: 20px;
//     width: 218px;
//     height: 70px;
//   }
// }
