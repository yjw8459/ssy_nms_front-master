import React, { useCallback, useMemo } from "react";
import styled, { css, keyframes } from "styled-components";
import BackgroundLayer from "./layers/BackgroundLayer";
import LineHorLayer from "./layers/LineHorLayer";
import LineVerLayer from "./layers/LineVerLayer";
import StaticLayer from "./layers/StaticLayer";
import SocketLayer from "./layers/SocketLayer";
import SocketAniLayer from "./layers/SocketAniLayer";
import SocketTextLayer from "./layers/SocketTextLayer";
import HoverSocketLayer from "./layers/HoverSocketLayer";

const MapContent = styled.div`
  margin: 0px;
  padding: 0px;
  vertical-align: top;
  width: 100%;
  height: 100%;
  min-height: 847px;
  position: relative;
  overflow: hidden;
`;

const Map = ({
  LineOptions,
  socketData,
  StaticOptions,
  onMouseOver,
  onMouseOut,
  overedSocket,
  clickedSocket,
  onClick,
  setShowModal,
  modalData,
  setModalData,
  initModalData,
}) => {
  const lineRenderer = useMemo(() => {
    // console.log("라인 렌더링 되었습니다.");
    return (
      <>
        <LineHorLayer LineOptions={LineOptions} />
        <LineVerLayer LineOptions={LineOptions} />
      </>
    );
  }, [LineOptions]);

  const staticRenderer = useMemo(() => {
    // console.log("고정 렌더링 되었습니다.");
    return (
      <>
        <BackgroundLayer />
        <StaticLayer StaticOptions={StaticOptions} />
      </>
    );
  }, [StaticOptions]);

  const socketAniLayerRenderer = useMemo(() => {
    // console.log("소켓 애니메이션 렌더링 되었습니다.");
    return (
      <SocketAniLayer
        socketData={socketData}
        overedSocket={overedSocket}
        clickedSocket={clickedSocket}
      />
    );
  });

  const socketTextLayerRenderer = useMemo(() => {
    // console.log("소켓 텍스트 렌더링 되었습니다.");
    return (
      <SocketTextLayer
        socketData={socketData}
        overedSocket={overedSocket}
        clickedSocket={clickedSocket}
      />
    );
  }, [clickedSocket, overedSocket, socketData]);

  const hoverSocketLayerRenderer = useMemo(() => {
    // console.log("hover 소켓 렌더링 되었습니다.");
    return (
      <HoverSocketLayer
        socketData={socketData}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onClick={onClick}
        clickedSocket={clickedSocket}
        setShowModal={setShowModal}
        modalData={modalData}
        setModalData={setModalData}
        initModalData={initModalData}
      />
    );
  }, [socketData]);

  const socketLayerRenderer = useMemo(() => {
    // console.log("소켓 렌더링 되었습니다.");
    return <SocketLayer socketData={socketData} />;
  }, [socketData]);

  return (
    <>
      <MapContent>
        {lineRenderer}
        {staticRenderer}
        {socketAniLayerRenderer}
        {socketTextLayerRenderer}
        {hoverSocketLayerRenderer}
        {socketLayerRenderer}
      </MapContent>
    </>
  );
};

export default React.memo(Map);
