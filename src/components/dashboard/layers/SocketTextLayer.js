import React, { useCallback } from "react";
import Layer from "../styledcomponents/map/Layer";
import SocketText from "../styledcomponents/map/SocketText";

const deviceTypeToName = ({ in_name, in_local, in_device_type }) => {
  try {
    let result = "";

    switch (in_device_type.toString()) {
      case "0":
        result = "미입력장비";
        break;
      case "1":
        result = "무선장비";
        break;
      case "2":
        result = "와이파이";
        break;
      case "3":
        result = "스캐너";
        break;
      case "4":
        result = "카메라";
        break;
      case "5":
        result = "가스센서";
        break;
    }
    switch (in_local) {
      case "loc1":
        result += "_1구간_";
        break;
      case "loc2":
        result += "_2구간_";
        break;
    }
    result += in_name;

    return result;
  } catch (e) {
    console.log(e);
    return "error";
  }
};

const SocketTextLayer = ({ socketData, overedSocket, clickedSocket }) => {
  const socketTextLayerRender = useCallback(() => {
    if (socketData) {
      return socketData
        .filter(
          (item) =>
            item.in_status !== "disabled" && item.in_status !== "not installed"
        )
        .map((item, index) => {
          //   if (item.in_index === clickedSocket.in_index) {
          //     addAnimation(
          //       `activeSocketText${item.in_index}`,
          //       `0%,
          //       100% {
          //         top:  ${item.y}px;
          //       }
          //       50% {
          //         top: ${item.y + 10}px;
          //       }`
          //     );
          //   }
          return (
            <SocketText
              socketOptions={item}
              className={`socketText idx:` + item.in_index}
              key={`socketText` + index}
              overedSocket={overedSocket}
              clickedSocket={clickedSocket}
            >
              <p className={"socket-text"} key={`socketText-p` + index}>
                {deviceTypeToName(item)}
              </p>
            </SocketText>
          );
        });
    }
  }, [socketData, clickedSocket, overedSocket]);
  return (
    <Layer className={"socket-text-layer"} layer={"socket-text-layer"}>
      {socketTextLayerRender()}
    </Layer>
  );
};

export default React.memo(SocketTextLayer);
