import React, { useCallback, useMemo } from "react";
import Layer from "../styledcomponents/map/Layer";
import { SocketAni, OveredSocketAni } from "../styledcomponents/map/SocketAni";
import styled from "styled-components";

const SocketAniClosedContainerBox = styled.div`
  position: absolute;
  animation-duration: 1.75s;
  animation-iteration-count: infinite;
  animation-name: SocketAniClosedContainerBox;
  @keyframes SocketAniClosedContainerBox {
    0% {
      top: 0px;
      opacity: 0;
    }
    1% {
      opacity: 0.7;
    }
    100% {
      top: -25px;
      opacity: 0;
    }
  }
`;
const SocketHoverContainerBox = styled.div`
  position: absolute;
  animation-duration: 1.75s;
  animation-iteration-count: infinite;
  animation-name: SocketHoverContainerBox;
  @keyframes SocketHoverContainerBox {
    0% {
      top: 0px;
      opacity: 0;
    }
    1% {
      opacity: 0.7;
    }
    100% {
      top: -75px;
      opacity: 0;
    }
  }
`;

const SocketAniLayer = ({ socketData, overedSocket }) => {
  // const deviceTypeToString = useCallback((type) => {
  //   const _type = type.toString();
  //   let str = "";
  //   switch (_type) {
  //     case "0":
  //       str = "beforeLoading";
  //       break;
  //     case "1":
  //       str = "wireless";
  //       break;
  //     case "2":
  //       str = "wifi";
  //       break;
  //     case "3":
  //       str = "scanner";
  //       break;
  //     case "4":
  //       str = "cctv";
  //       break;
  //     case "5":
  //       str = "gas";
  //       break;
  //     default:
  //       str = "ERROR";
  //   }
  //   return str;
  // }, []);

  const overedSocketAniLayerRender = useMemo(() => {
    if (socketData) {
      let _socketData = socketData.filter(
        (item) =>
          item.in_status !== "disabled" &&
          item.in_status !== "not installed" &&
          item.in_index === overedSocket.in_index
      );
      return _socketData.map((item, index) => {
        return (
          <OveredSocketAni
            socketOptions={item}
            overed={overedSocket.in_index === item.in_index ? true : false}
            className={`overedsocketAni`}
            key={`overedsocketAniKey` + index}
            id={`overedsocketAni${item.in_index}`}
          />
        );
      });
    }
  }, [socketData, overedSocket.in_index]);

  const socketAniLayerRender = useMemo(() => {
    if (socketData) {
      let _socketData = socketData.filter(
        (item) =>
          item.in_status !== "disabled" &&
          item.in_status !== "not installed" &&
          (item.in_status === "closed" ||
            item.in_index === overedSocket.in_index)
      );
      return _socketData.map((item, index) => {
        return (
          <SocketAni
            socketOptions={item}
            overed={overedSocket.in_index === item.in_index ? true : false}
            className={`socketAni group:${item.group}-no:${item.number}-idx:${item.in_index}`}
            key={`socketAniKey` + item.in_index + index}
            id={`socketAni${item.in_index}`}
          />
        );
      });
    }
  }, [socketData, overedSocket.in_index]);
  return (
    <Layer className={"socketAni-layer"} layer={"socketAni-layer"}>
      <SocketAniClosedContainerBox>
        {socketAniLayerRender}
      </SocketAniClosedContainerBox>
      <SocketHoverContainerBox>
        {overedSocketAniLayerRender}
      </SocketHoverContainerBox>
    </Layer>
  );
};

export default React.memo(SocketAniLayer);
