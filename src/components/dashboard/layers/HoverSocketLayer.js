import React, { useCallback } from "react";
import Layer from "../styledcomponents/map/Layer";
import SocketHover from "../styledcomponents/map/SocketHover";
import { Image } from "semantic-ui-react";

const HoverSocketLayer = ({
  socketData,
  onMouseOver,
  onMouseOut,
  onClick,
  setShowModal,
  modalData,
  setModalData,
  initModalData,
}) => {
  const hoverSocketLayerRender = useCallback(() => {
    if (socketData) {
      return socketData
        .filter(
          (item) =>
            item.in_status !== "disabled" && item.in_status !== "not installed"
        )
        .map((item, index) => {
          return (
            <SocketHover
              socketOptions={item}
              className={`socketHover group:${item.group}-no:${item.number}-idx:${item.in_index}`}
              id={`socketHover${item.in_index}`}
              name={item.in_index}
              key={`sockethover` + index}
              onMouseOver={() => {
                onMouseOver({ in_index: item.in_index, eventOnTable: false });
              }}
              onMouseOut={() => {
                onMouseOut();
              }}
              onClick={(e) => {
                e.stopPropagation();
                let newModalData = {
                  in_index: item.in_index,
                  in_status: item.in_status,
                  in_device_type: item.in_device_type,
                  in_name: item.in_name,
                  in_local: item.in_local,
                  in_image: item.in_image,
                };
                setModalData(newModalData);
                setShowModal(true);
              }}
            ></SocketHover>
          );
        });
    }
  }, [socketData, onMouseOver, onMouseOut, setModalData, setShowModal]);

  return (
    <Layer className={"hover-socket-layer"} layer={"hover-socket-layer"}>
      {hoverSocketLayerRender()}
    </Layer>
  );
};

export default React.memo(HoverSocketLayer);
