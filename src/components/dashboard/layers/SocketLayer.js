import React, { useCallback } from "react";
import Layer from "../styledcomponents/map/Layer";
import Socket from "../styledcomponents/map/Socket";

const SocketLayer = ({ socketData }) => {
  const deviceTypeToString = useCallback((type) => {
    const _type = type.toString();
    let str = "";
    switch (_type) {
      case "0":
        str = "beforeLoading";
        break;
      case "1":
        str = "wireless";
        break;
      case "2":
        str = "wifi";
        break;
      case "3":
        str = "scanner";
        break;
      case "4":
        str = "cctv";
        break;
      case "5":
        str = "gas";
        break;
      default:
        str = "notInstalled";
    }
    return str;
  }, []);

  const socketLayerRender = useCallback(() => {
    // console.log("socketLayer rendering");
    if (socketData) {
      return socketData
        .filter((item) => item.in_status !== "disabled")
        .map((item, index) => {
          return (
            <Socket
              socketOptions={item}
              className={`socket group:${item.group}-no:${item.number}-idx:${
                item.in_index
              }-type:${deviceTypeToString(item.in_device_type)}`}
              id={`socket${item.in_index}` + index}
              key={`socketKey` + item.in_index + index}
            />
          );
        });
    }
  }, [socketData, deviceTypeToString]);

  return (
    <Layer className={"socket-layer"} layer={"socket-layer"}>
      {socketLayerRender()}
    </Layer>
  );
};

export default React.memo(SocketLayer);
