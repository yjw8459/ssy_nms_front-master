import React, { useCallback } from "react";
import styled from "styled-components";
import { Table, Button } from "semantic-ui-react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSignalStream,
  faWifi,
  faCctv,
  faRouter,
  faSensorOn,
} from "@fortawesome/pro-regular-svg-icons";

const SocketTableContainer = styled.div`
  display: block;
  width: 100%;
  height: 87%;
  margin-top: 10px !important;
  overflow: auto;
  text-align: left;
  letter-spacing: 0px;
  color: #595959;
  opacity: 1;
  font-family: "NotoSansKR-Regular";
  font-size: 16px;

  ::-webkit-scrollbar {
    width: 8px;
    -webkit-appearance: none;
  }
  ::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: #2f2f2f;
    border-radius: 10px;
    box-shadow: inset 0px 0px 3px white;
  }
  ::-webkit-scrollbar-corner {
    display: none;
  }
  table {
    border-collapse: separate;
    text-indent: initial;
    border-spacing: 1px;
  }
  .socket-table,
  .table {
    height: auto;
    width: 100%;
    /* border: 1px solid #4d4d4d !important; */
    padding: 0px;
    margin: 0px;
    background-color: #4d4d4d;
    .row {
      margin: 0px;
      padding: 0px;
      cursor: pointer;
      width: 100%;
      height: 47px;
      background: #2e2e2e 0% 0% no-repeat padding-box;
      &:hover,
      &:focus {
        transition: 0.1s;
        color: #ffffff;
        /* background: #3e3e3e 0% 0% no-repeat padding-box; */
        .name-cell {
          transition: 0.1s;
          /* padding-left: 10px; */
          /* color: #9a9a9a; */
          font-family: "NotoSansKR-Regular";
          &.error {
            color: #ffffff;
          }
        }
        .icon-cell .icon {
          /* transition: 0.2s;
          margin-top: -1px;
          font-size: 23px !important; */
        }
      }
      &.active {
        transition: 0.1s;
        /* background: #3e3e3e 0% 0% no-repeat padding-box; */
        color: #ffffff;
      }
      &.active .error {
        transition: 0.1s;
        color: #ffffff !important;
      }
      .icon-cell {
        display: flex;
        width: 47px;
        height: 47px;
        margin: 0px;
        padding: 0px;
        justify-content: center;
        align-items: center;
        justify-self: center;
        &.error {
          background-color: #ff1111;
        }
        .icon {
          display: flex;
          color: #00ff00;
          vertical-align: middle;
          text-align: center;
          font-size: 19px;
          margin: 0px;
          padding: 0px;
          &.error {
            color: #ffffff;
          }
        }
      }
      .name-cell {
        width: 100%;
        padding: 8px;
        vertical-align: middle;
        font-size: 16px;
        font-family: "NotoSansKR-Regular";
        &.error {
          color: #ff1111;
        }
      }
      .search-cell {
        width: 50px;
        margin: -5px;
        margin-top: -12px;
        padding: 0px;
        position: relative;
        float: right;
        .search-button {
          margin-top: 10px;
          margin-left: 14px;
          height: 28px;
          width: 28px;
          border-radius: 4px;
          color: #f7f7f7;
          background: #4d4d4d 0% 0% no-repeat padding-box;
          /* transition: 0.1s; */
          cursor: pointer;
          opacity: 0;
          &.active {
            opacity: 1;
          }
          &:hover {
            background: #5d5d5d 0% 0% no-repeat padding-box;
            color: #ffffff;
            .search-icon {
              /* font-size: 18px; */
            }
          }
        }
        .search-icon {
          width: 100%;
          vertical-align: middle;
          text-align: center;
          font-size: 15px;
          border-radius: 4px;
          transition: 0.2s;
        }
      }
    }
  }
`;

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
    // console.log(e);
    return "error";
  }
};

const printDeviceIcon = ({ in_status = "disabled", in_device_type = "" }) => {
  let result = "";
  if (in_status === "disabled" || in_status === "not installed") return;
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
  return in_device_type !== "" && result;
};

const SocketTable = ({
  socketData,
  onMouseOver,
  onMouseOut,
  onClick,
  clickedSocket,
  setShowModal,
  setModalData,
  initModalData,
  socketTableData,
  overedSocket,
}) => {
  const TableRenderer = useCallback(() => {
    return (
      socketTableData
        .sort(function (a, b) {
          return a.y < b.y ? -1 : 1;
        })
        // .sort(function (a) {
        //   return a.in_index === clickedSocket.in_index ? -1 : 1;
        // })
        .sort(function (a, b) {
          return a.in_status < b.in_status ? -1 : 1;
        })
        .map((item, index) => {
          return (
            <Table.Row
              className={
                item.in_index === overedSocket.in_index ||
                clickedSocket.in_index === item.in_index
                  ? item.in_status === "closed"
                    ? `row active error ${item.in_index}`
                    : `row active ${item.in_index}`
                  : "row"
              }
              key={`socket-row-${index}`}
              onMouseOver={() => {
                onMouseOver({ in_index: item.in_index, eventOnTable: true });
              }}
              onMouseOut={() => {
                onMouseOut();
              }}
              // onClick={() => {
              //   item.in_status !== "closed" && onClick(item.in_index);
              // }}
              id={`row-id-${item.in_index}`}
            >
              <Table.Cell
                className={
                  item.in_status === "closed" ? "icon-cell error" : "icon-cell"
                }
                name="icons"
                key={`socket-table-icon-${index}`}
              >
                {item.in_index && printDeviceIcon(item)}
              </Table.Cell>
              <Table.Cell
                className={
                  item.in_status === "closed" ? "name-cell error" : "name-cell"
                }
                name="name"
                key={`socket-table-name-${index}`}
              >
                {item.in_index && deviceTypeToName(item)}
                <div
                  className="search-cell"
                  name="search"
                  key={`socket-table-search-${index}`}
                >
                  <div
                    className={
                      overedSocket.in_index === item.in_index ||
                      item.in_status === "closed"
                        ? "search-button active"
                        : "search-button"
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      let newModalData = {
                        in_index: item.in_index,
                        in_status: item.in_status,
                        in_device_type: item.in_device_type,
                        in_name: deviceTypeToName(item),
                        in_local: item.in_local,
                        in_image: item.in_image,
                      };
                      setModalData(newModalData);
                      (overedSocket.in_index === item.in_index ||
                        item.in_status === "closed") &&
                        setShowModal(true);
                    }}
                  >
                    {/* <FontAwesomeIcon
                      icon={faSearch}
                      className={
                        clickedSocket.in_index === item.in_index
                          ? "search-icon active"
                          : "search-icon"
                      }
                    /> */}
                  </div>
                </div>
              </Table.Cell>
            </Table.Row>
          );
        })
    );
  }, [
    clickedSocket.in_index,
    onMouseOut,
    onMouseOver,
    overedSocket.in_index,
    setModalData,
    setShowModal,
    socketTableData,
  ]);
  return (
    <SocketTableContainer>
      <Table className="socket-table">
        <Table.Body>{TableRenderer()}</Table.Body>
      </Table>
    </SocketTableContainer>
  );
};

export default React.memo(SocketTable);
