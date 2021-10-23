import React from "react";
import styled, { css } from "styled-components";
import { Button, Image } from "semantic-ui-react";

const ButtonComponent = styled.div`
  .button-title,
  .button-text {
    font-family: "NotoSansKR-Regular";
    font-size: 12px;
  }
  .socket-container,
  .sector-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 60px;
  }
  .button-container {
    display: flex;
    justify-content: space-between;
    padding: 0px;
    width: auto;
    height: 56px;
    .sector-img,
    .socket-img {
      width: 20px;
      height: 20px;
      font-size: 16px;
      margin-bottom: 3px;
      color: #4d4d4d;
      border: 0px;
      transition: 0.2s;
      opacity: 0.2;
      &.active {
        &.all,
        &.one,
        &.two,
        &.all,
        &.wireless,
        &.wifi,
        &.scanner,
        &.camera,
        &.gas {
          color: #ffffff;
          opacity: 1;
        }
      }
    }
    /* &:hover {
      .sector-img,
      .socket-img {
        transition: 0.3s;
        height: 22px !important;
        width: 23px !important;
      }
      .all-button-text {
        transition: 0.3s;
        font-size: 20px;
      }
    } */
    .all-button-text {
      width: 40px !important;
      height: 20px !important;
      font-size: 18px;
      transition: 0.2s;
      margin-bottom: 3px;
    }
    .sector-button,
    .socket-button {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: space-around;
      flex-wrap: wrap;
      border: 0px;
      border-radius: 4px;
      color: #4d4d4d;
      transition: 0.2s !important;
      &.sector-button {
        background: #000000 0% 0% no-repeat padding-box;
        width: 115px;
      }
      &.socket-button {
        background: black;
        width: 56px;
      }
      &.active {
        color: white;
        &.all {
          background: #683509 0% 0% no-repeat padding-box;
        }
        &.one {
          background: #036eb8 0% 0% no-repeat padding-box;
        }
        &.two {
          background: #00a651 0% 0% no-repeat padding-box;
        }
      }
      &:active {
        box-shadow: inset 0px 0px 3px 1px gray;
      }
      &:hover {
        transition: 0.2s;
        background-color: #111111;
      }
    }
  }
`;

const TopButtons = ({
  sectorButtons,
  socketButtons,
  onClickSectorButton,
  onClickSocketButton,
}) => {
  return (
    <ButtonComponent>
      <div className="sector-container">
        <div className="button-container">
          <Button
            className={
              sectorButtons.all
                ? "sector-button all active"
                : "sector-button all inactive"
            }
            toggle
            onClick={() => {
              onClickSectorButton("all");
            }}
          >
            <p className="all-button-text">ALL</p>
            <p className="button-text">전체구간</p>
          </Button>
        </div>
        <div className="button-container">
          <Button
            className={
              sectorButtons.one
                ? "sector-button one active"
                : "sector-button one inactive"
            }
            toggle
            onClick={() => {
              onClickSectorButton("one");
            }}
          >
            <Image
              className={
                sectorButtons.one
                  ? "sector-img one active"
                  : "sector-img one inactive"
              }
              src="/icons/long-arrow-left-L.svg"
            />
            <p className="button-text">1구간</p>
          </Button>
        </div>
        <div className="button-container">
          <Button
            className={
              sectorButtons.two
                ? "sector-button two active"
                : "sector-button two inactive"
            }
            toggle
            onClick={() => {
              onClickSectorButton("two");
            }}
          >
            <Image
              className={
                sectorButtons.two
                  ? "sector-img two active"
                  : "sector-img two inactive"
              }
              src="/icons/long-arrow-right-R.svg"
            />
            <p className="button-text">2구간</p>
          </Button>
        </div>
      </div>
      <div className="socket-container">
        <div className="button-container">
          <Button
            className={
              socketButtons.all
                ? "socket-button active"
                : "socket-button inactive"
            }
            toggle
            onClick={() => {
              onClickSocketButton("all");
            }}
          >
            <p className="all-button-text">ALL</p>
            <p className="button-title">전체</p>
          </Button>
        </div>
        <div className="button-container">
          <Button
            className={
              socketButtons.wireless
                ? "socket-button active"
                : "socket-button inactive"
            }
            toggle
            onClick={() => {
              onClickSocketButton("wireless");
            }}
          >
            <Image
              className={
                socketButtons.wireless
                  ? "socket-img wireless active"
                  : "socket-img wireless inactive"
              }
              src="/icons/signal-stream-L.svg"
            />
            <p className="button-title">무선장비</p>
          </Button>
        </div>
        <div className="button-container">
          <Button
            className={
              socketButtons.wifi
                ? "socket-button active"
                : "socket-button inactive"
            }
            toggle
            onClick={() => {
              onClickSocketButton("wifi");
            }}
          >
            <Image
              className={
                socketButtons.wifi
                  ? "socket-img wifi active"
                  : "socket-img wifi inactive"
              }
              src="/icons/wifi-R.svg"
            />
            <p className="button-title">와이파이</p>
          </Button>
        </div>
        <div className="button-container">
          <Button
            className={
              socketButtons.scanner
                ? "socket-button active"
                : "socket-button inactive"
            }
            toggle
            onClick={() => {
              onClickSocketButton("scanner");
            }}
          >
            <Image
              className={
                socketButtons.scanner
                  ? "socket-img scanner active"
                  : "socket-img scanner inactive"
              }
              src="/icons/router-L.svg"
            />
            <p className="button-title">스캐너</p>
          </Button>
        </div>
        <div className="button-container">
          <Button
            className={
              socketButtons.camera
                ? "socket-button active"
                : "socket-button inactive"
            }
            toggle
            onClick={() => {
              onClickSocketButton("camera");
            }}
          >
            <Image
              className={
                socketButtons.camera
                  ? "socket-img camera active"
                  : "socket-img camera inactive"
              }
              src="/icons/cctv_L.svg"
            />
            <p className="button-title">카메라</p>
          </Button>
        </div>
        <div className="button-container">
          <Button
            className={
              socketButtons.gas
                ? "socket-button active"
                : "socket-button inactive"
            }
            toggle
            onClick={() => {
              onClickSocketButton("gas");
            }}
          >
            <Image
              className={
                socketButtons.gas
                  ? "socket-img gas active"
                  : "socket-img gas inactive"
              }
              src="/icons/sensor-on-L.svg"
            />
            <p className="button-title">가스센서</p>
          </Button>
        </div>
      </div>
    </ButtonComponent>
  );
};

export default React.memo(TopButtons);
