import React from "react";
import styled from "styled-components";
import TopButtons from "./styledcomponents/sidemenu/TopButtons";
import SocketTable from "./styledcomponents/sidemenu/SocketTable";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTag, faCompress } from "@fortawesome/pro-solid-svg-icons";
import DetailModal from "./styledcomponents/sidemenu/DetailModal";

const SideMenuContent = styled.div`
  width: 100%;
  height: 100% -5px;
  top: 250px;
  color: white;
  border-radius: 4px;
  padding: 13px !important;
  font-family: "NotoSansKR-Regular";
  font-size: 12px;
`;

const SideMenu = ({
  sectorButtons,
  socketButtons,
  onClickSectorButton,
  onClickSocketButton,
  socketData,
  onMouseOver,
  onMouseOut,
  clickedSocket,
  onClick,
  showModal,
  setShowModal,
  modalData,
  setModalData,
  initModalData,
  socketTableData,
  overedSocket,
}) => {
  return (
    <SideMenuContent className="side-menu-content-component">
      <TopButtons
        sectorButtons={sectorButtons}
        socketButtons={socketButtons}
        onClickSectorButton={onClickSectorButton}
        onClickSocketButton={onClickSocketButton}
      />
      <SocketTable
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        clickedSocket={clickedSocket}
        onClick={onClick}
        setShowModal={setShowModal}
        modalData={modalData}
        setModalData={setModalData}
        initModalData={initModalData}
        socketTableData={socketTableData}
        overedSocket={overedSocket}
      />
    </SideMenuContent>
  );
};

export default React.memo(SideMenu);
