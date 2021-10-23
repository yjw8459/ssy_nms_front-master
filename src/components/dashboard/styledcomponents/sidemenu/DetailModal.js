import React, { useCallback } from "react";
import { Image } from "semantic-ui-react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faSignalStream,
//   faWifi,
//   faCctv,
//   faRouter,
//   faSensorOn,
// } from "@fortawesome/pro-regular-svg-icons";
import Slider from "react-slick";
import styled from "styled-components";
import { API, ImagePath } from "../../../../lib/server.config";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

const ModalBackground = styled.div`
  z-index: 19;
  position: absolute !important;
  display: block !important;
  top: 0px;
  /* left : 10px; */
  background-color: black;
  opacity: 0.6;
  color: #ffffff;
  width: 1920px;
  height: 1075px;
`;

const Modal = styled.div`
  z-index: 20;

  position: absolute !important;
  display: block !important;
  top: 0px;
  /* left : 10px; */
  color: #ffffff;
  width: 1920px;
  height: 1075px;
  min-height: 1030px;
  min-width: 1900px;
  overflow: hidden;
  @media screen and (max-height: 970px) {
    height: 101.7vh;
    width: 162vh;
  }
  .slick-dots {
    bottom: 20px !important;
  }
  .modal-container {
    margin: 15%;
    height: 620px;
    width: 1030px;
    /* border : 1px solid red; */
    .modal-header {
      padding: 3px;
      vertical-align: middle;
      font-family: "NotoSansKR-Regular";
      font-size: 16px;
      .title {
        color: #ffffff;
        font-family: "NotoSansKR-Regular";
        font-size: 16px;
        margin-left: 5px;
        display: inline;
      }
      .icon {
        transition: 0.5s;
        margin: 3px;
        color: #00ff00;
        vertical-align: middle;
        text-align: center;
        font-size: 19px;
        &.error {
          color: #ff0000;
        }
      }
    }
    .x-button {
      display: inline-block;
      width: 20px;
      height: 20px;
      background: gray;
      text-align: center;
      vertical-align: middle;
      float: right;
      padding: 4px;
      padding-top: 0px;
      color: #2d2d2d;
      border-radius: 6px;
      cursor: pointer;
      transition: 0.5s;
      &:hover {
        transition: 0.5s;
        background: whitesmoke;
        opacity: 0.8;
      }
    }
    .modal-content {
      /* /* display:flex; */
      margin-top: 0px;
      background: #bfbfbf 0% 0% no-repeat padding-box;
      width: 1030px;
      height: 620px;
      border-radius: 3px;
      overflow: hidden;
      .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
        .empty-img {
          /* position: absolute; */
          color: #7c7c7c;
          text-align: center;
          vertical-align: middle;
          /* margin:auto; */
          width: 60px;
          height: 45px;
          margin-left: 480px;
          margin-top: 280px;
        }
        .img {
          display: flex;
          justify-content: center;
          align-items: center;
          width: auto;
          max-width: 1030px;
          height: 620px;
          margin: auto;
          text-align: center;
        }
      }
      .arrow-container {
        position: relative;
      }
    }
    .slick-dots {
      position: absolute;
      top: 520px;
      color: #2d2d2d !important;
    }
    .slick-dots li.slick-active {
      color: #8d8d8d !important;
    }
    .slick-arrow {
      position: absolute;
      top: 310px;
      width: 50px;
      height: 100px;
      background-color: gray;
      border-radius: 6px;
      z-index: 20;
      transition: 0.5s;
      &.slick-prev {
        left: 30px;
      }
      &.slick-next {
        right: 30px;
      }
    }
  }
`;

const DetailModal = ({ showModal, setShowModal, modalData, initModalData }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // centerMode: true,
  };

  const printDeviceIcon = ({ in_status, in_device_type }) => {
    let result = "";
    // switch (in_device_type.toString()) {
    //   case "1":
    //     result = (
    //       <FontAwesomeIcon
    //         icon={faSignalStream}
    //         className={in_status === "closed" ? "icon error" : "icon"}
    //       />
    //     );
    //     break;
    //   case "2":
    //     result = (
    //       <FontAwesomeIcon
    //         icon={faWifi}
    //         className={in_status === "closed" ? "icon error" : "icon"}
    //       />
    //     );
    //     break;
    //   case "3":
    //     result = (
    //       <FontAwesomeIcon
    //         icon={faRouter}
    //         className={in_status === "closed" ? "icon error" : "icon"}
    //       />
    //     );
    //     break;
    //   case "4":
    //     result = (
    //       <FontAwesomeIcon
    //         icon={faCctv}
    //         className={in_status === "closed" ? "icon error" : "icon"}
    //       />
    //     );
    //     break;
    //   case "5":
    //     result = (
    //       <FontAwesomeIcon
    //         icon={faSensorOn}
    //         className={in_status === "closed" ? "icon error" : "icon"}
    //       />
    //     );
    //     break;
    //   default:
    //     break;
    // }
    return result;
  };

  const imageRenderer = useCallback(({ in_image = "" }) => {
    console.log("in_image >", in_image);
    if (in_image === "") {
      return (
        <>
          <div className="image-container">
            <Image src="/image-R.svg" className="empty-img" />
          </div>
        </>
      );
    } else {
      const splitedArr = in_image.split("&");
      return splitedArr.map((item, index) => {
        return (
          <div className="image-container">
            <Image src={`${ImagePath}${item}`} className="img" />
          </div>
        );
      });
    }
  }, []);

  const inLocalToString = (in_local) => {
    let str = "";
    if (in_local === "loc1") {
      str = "1구간";
    } else {
      str = "2구간";
    }
    return str;
  };

  const inDeviceTypeToString = (in_device_type) => {
    let str = "";
    switch (in_device_type.toString()) {
      case "1":
        str = "무선장비";
        break;
      case "2":
        str = "와이파이";
        break;
      case "3":
        str = "스캐너";
        break;
      case "4":
        str = "카메라";
        break;
      case "5":
        str = "가스센서";
        break;
      default:
        break;
    }
    return str;
  };

  return (
    <>
      <ModalBackground />
      <Modal
        onClose={() => {
          setShowModal(false);
          initModalData();
        }}
        // onOpen={() => setShowModal(true)}
        open={showModal}
        size="large"
        className="modal-carousel"
        onClick={() => setShowModal(false)}
      >
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            {printDeviceIcon(modalData)}
            <p className="title">{`${inDeviceTypeToString(
              modalData.in_device_type
            )}_${inLocalToString(modalData.in_local)}_${modalData.in_name}`}</p>
            <div onClick={() => setShowModal(false)} className="x-button">
              X
            </div>
          </div>
          <div className="modal-content">
            <Slider {...settings}>{imageRenderer(modalData)}</Slider>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default React.memo(DetailModal);
