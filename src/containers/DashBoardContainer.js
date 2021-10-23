import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import Map from "../components/dashboard/Map";
import SideMenu from "../components/dashboard/SideMenu";
import DetailModal from "../components/dashboard/styledcomponents/sidemenu/DetailModal";
import LineOptions from "../components/dashboard/options/LineOptions";
import SocketOptions from "../components/dashboard/options/SocketOptions";
import StaticOptions from "../components/dashboard/options/StaticOptions";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { getNetworks, recieveClosedData } from "../modules/networks";
import {
  LR_lineControl,
  LR_extractLinesByGroup,
  LR_sortSocketsByGroup,
  LR_syncStartLineEqualsTbm,
} from "../lib/LRLineControlLogics";
import {
  Down_extractLinesdByGroup,
  Down_sortSocketsByGroup,
  Down_lineControl,
} from "../lib/DownLineControlLogics";
import {
  Tbm_extractLinesdByGroup,
  Tbm_sortSocketsByGroup,
  Tbm_lineControl,
} from "../lib/TbmLineControlLogics";
import {
  R2400_extractLinesdByGroup,
  R2400_sortSocketsByGroup,
  R2400_lineControl,
} from "../lib/R2400LineControlLogics";
import {
  L1400_extractLinesdByGroup,
  L1400_sortSocketsByGroup,
  L1400_lineControl,
} from "../lib/L1400LineControlLogics";

// const Header = lazy(() => import("../components/common/Header"));
// const Map = lazy(() => import("../components/dashboard/Map"));
// const SideMenu = lazy(() => import("../components/dashboard/SideMenu"));

const ContentLayout = styled.div`
  * {
    margin: 0px;
    padding: 0px;
    vertical-align: top;
    scrollbar-face-color: #4e4e4e;
    scrollbar-track-color: #2e2e2e;
    scrollbar-arrow-color: #2e2e2e;
    scrollbar-highlight-color: #2e2e2e;
    scrollbar-3dlight-color: #2e2e2e;
    scrollbar-shadow-color: #2e2e2e;
    scrollbar-darkshadow-color: #2e2e2e;
  }
  min-width: 1900px;
  min-height: 847px;
  width: 100%;
  height: 100%;
  background-color: #5e5e5e;
  position: relative;
  display: block;
  /* border: 1px solsid orange; */
  overflow: hidden;
`;

const HeaderLayout = styled.div`
  width: 100%;
  min-width: 1920px;
  min-height: 70px;
  height: 70px;
  display: block;
  background-color: #2e2e2e;
`;

const MapLayout = styled.div`
  margin: 11px;
  width: 78.5%;
  height: 90.4vh;
  @media screen and (min-height: 940px) {
    height: 90.7vh;
  }
  @media screen and (min-height: 1000px) {
    height: 91.5vh;
  }
  min-width: 1480px;
  min-height: 950px;
  max-width: 1650px;
  max-height: 1000px;
  background-color: black;
  /* border: 1px solid red; */
  display: inline-flex;
`;

const SideMenuLayout = styled.div`
  margin-top: 11px;
  margin-bottom: 10px;
  width: 19.7%;
  height: 90.4vh;
  @media screen and (min-height: 940px) {
    height: 90.7vh;
  }
  @media screen and (min-height: 1000px) {
    height: 91.5vh;
  }
  min-width: 354px;
  min-height: 950px;
  max-width: 390px;
  max-height: 1000px;
  border-radius: 4px;
  /* border: 1px solid orange; */
  background-color: #2e2e2e;
  display: inline-flex;
`;

const DashBoardContainer = () => {
  // [ Redux Area ] ======================================================================

  const { data, loading, error } = useSelector(
    (state) => state.networks.networks
  );

  const closedDataFromServer = useSelector(
    (state) => state.networks.closedData
  );

  // const data = useSelector((state) => state.sockets.networks.data);
  const dispatch = useDispatch();

  // 최초 1회 전체 데이터 받아옴.
  useEffect(() => {
    dispatch(getNetworks());
  }, [dispatch]);

  // useEffect(() => {
  //   console.table(
  //     SocketOptions.sort(function (a, b) {
  //       return a.in_index < b.in_index ? -1 : a.in_index > b.in_index ? 1 : 0;
  //     })
  //   );
  // }, []);

  // // // // 이후 소켓 연결하여 통신
  useEffect(() => {
    // 기존 데이터에서 closed 상태 index 추출
    extractingIndex(data);
    if (data) {
      dispatch(recieveClosedData());
    }
  }, [data, dispatch]);

  // 전체 데이터에서 closed 상태의 데이터들의 index를 추출해 관리합니다.
  const [extractedIndexes, setExtractedIndexes] = useState([]);

  // 로컬 데이터에서 closed index 추출
  const extractingIndex = useCallback((data) => {
    if (data) {
      let newExtractedIndexes = [];
      data
        .filter((item) => item.in_status === "closed")
        .map((item) => {
          newExtractedIndexes.push(item.in_index);
        });
      setExtractedIndexes(newExtractedIndexes);
      // console.log(
      //   "%c%s",
      //   "color: red; background: yellow; font-size: 15px;",
      //   `데이터에서 추출된 newExtractedIndexes state (하단)`
      // );
      // console.log(newExtractedIndexes);
    }
  }, []);

  // [ State Area ] ======================================
  // 프론트에서 하드코딩으로 할당한 객체 모음입니다.
  const [staticOptions, setStaticeOptions] = useState(StaticOptions);
  const [lineOptions, setLineOptions] = useState(LineOptions);

  // 소켓 데이터의 경우 최초에 하드코딩으로 할당한 것을 값으로 가지고
  // 서버 데이터 수신시에 useEffect를 통해 fetching 해줍니다.
  const [socketData, setSocketData] = useState([]);

  // sidemenu의 table 데이터 입니다.
  // 데이터 정렬이 맵에는 영향을 주면 안되기때문에 별도로 분리하여 관리합니다.
  // 역시 서버 데이터 수신시에 socketData와 동시에 sync 해줍니다.
  const [socketTableData, setSocketTableData] = useState(SocketOptions);

  // sidemenu 1번째 구간 카테고리 제어용 state입니다.
  const [sectorButtons, setSectorButtons] = useState({
    all: true,
    one: false,
    two: false,
  });
  // sidemenu 2번째 장비 카테고리 제어용 state입니다.
  const [socketButtons, setSocketButtons] = useState({
    all: true,
    wireless: false,
    wifi: false,
    scanner: false,
    camera: false,
    gas: false,
  });

  // 클릭된 socket의 index를 관리합니다.
  const [clickedSocket, setClickedSocket] = useState({
    in_index: "",
  });

  // socket table혹은 map 에서 mouseOver된 socket의 index를 관리합니다.
  const [overedSocket, setOveredSocket] = useState({
    in_index: "",
  });

  // socket table에서 상세보기를 눌렀을 때의 값을 관리합니다.
  const [modalData, setModalData] = useState({
    in_index: "",
    in_status: "closed",
    in_device_type: "1",
    in_name: "미수신데이터",
    in_image: "",
    in_local: "",
  });

  // modal 표출 상태를 제어합니다.
  const [showModal, setShowModal] = useState(false);

  // [ init Area ] =======================================

  const initModalData = () => {
    let _modalData = {
      in_index: "",
      in_status: "closed",
      in_device_type: "1",
      in_name: "미수신데이터",
      in_image: "",
      in_local: "",
    };
    setModalData(_modalData);
  };

  // const initTextAnimation = (_in_index) => {
  //   let dynamicStyles = null;
  //   dynamicStyles = document.createElement("style");
  //   dynamicStyles.type = "text/css";
  //   document.head.appendChild(dynamicStyles);

  //   dynamicStyles.sheet.insertRule(
  //     `@keyframes activeSocketText${_in_index} {0%{}100%{}}`,
  //     dynamicStyles.length
  //   );
  // };

  const initSocketButtons = useCallback(() => {
    setSocketButtons({
      // ...defaultSocketButtons,
      all: true,
      wireless: false,
      wifi: false,
      scanner: false,
      camera: false,
      gas: false,
    });
  }, []);

  const initSectorButtons = useCallback(() => {
    setSectorButtons({
      all: true,
      one: false,
      two: false,
    });
  }, []);

  const initOveredSocket = () => {
    const initSocket = { in_index: "" };
    setOveredSocket(initSocket);
  };

  const initClickedSocket = () => {
    const initSocket = { in_index: "" };
    setClickedSocket(initSocket);
  };

  // [ common logic Area ] =======================================

  const onClick = useCallback(
    (_in_index) => {
      // 클릭 시 텍스트 위 아래 움직이는 keyframes 안 움직이게 덮어씌우기
      // if (clickedSocket.in_index) {
      //   initTextAnimation(clickedSocket.in_index);
      // }
      if (_in_index === clickedSocket.in_index) {
        const initSocket = { in_index: "" };
        setClickedSocket(initSocket);
      } else {
        const newClickedSocket = { in_index: _in_index };
        setClickedSocket(newClickedSocket);
      }
      let isInTable = socketTableData.find(
        (item) => item.in_index === _in_index
      );
      if (isInTable === undefined) {
        initSectorButtons();
        initSocketButtons();
      }
    },
    [clickedSocket, initSectorButtons, initSocketButtons, socketTableData]
  );

  const onClickSectorButton = useCallback((str) => {
    if (str) {
      try {
        const newSectorButtons = {
          all: false,
          one: false,
          two: false,
          [str]: true,
        };
        setSectorButtons(newSectorButtons);
        // console.log(newSectorButtons);
      } catch (err) {
        // console.error("sectorbutton 클릭 에러발생", err);
      }
    }
  }, []);S
  const onClickSocketButton = useCallback(
    (str) => {
      if (str) {
        if (str === "all") {
          initSocketButtons();
        } else {
          try {
            const newSocketButtonState = {
              ...socketButtons,
              all: false,
              [str]: !socketButtons[str],
            };
            let clickedButtonCount = 0;
            for (const key in newSocketButtonState) {
              if (newSocketButtonState[key] === true) {
                clickedButtonCount += 1;
              }
            }
            // console.log("clickedButtonCount", clickedButtonCount);
            if (clickedButtonCount === 5) {
              initSocketButtons();
            } else if (clickedButtonCount === 0) {
              initSocketButtons();
            } else {
              setSocketButtons(newSocketButtonState);
            }
          } catch (err) {
            // console.error("socketbutton 클릭 에러발생", err);
          }
        }
      }
    },
    [initSocketButtons, socketButtons]
  );

  const changeOveredSocket = (_in_index) => {
    const newOveredSocket = { in_index: _in_index };
    setOveredSocket(newOveredSocket);
  };

  const onMouseOver = _.debounce(({ in_index, eventOnTable = false }) => {
    if (eventOnTable === false && clickedSocket.in_index !== in_index) {
      initClickedSocket();
    }
    changeOveredSocket(in_index);
  }, 350);

  const onMouseOut = _.debounce(() => {
    initOveredSocket();
  }, 350);
  // [ line logic Area ] ====================================
  // ignoreRuleLineSync : 규칙을 고려하지 않고, 우선 종속된 라인을 동기화 해주고,
  // state를 업데이트 해줍니다.
  const ignoreRuleLineSync = useCallback((newSocketData, _lineOptions) => {
    let newLineOptions = [];
    newSocketData.map((socket) => {
      let tempLineOptions = _lineOptions.filter(
        (line) => line.in_index === socket.in_index
      );
      tempLineOptions.map((line) => {
        newLineOptions.push({
          ...line,
          in_status: socket.in_status,
        });
      });
    });
    return newLineOptions;
  }, []);

  const lineStatusSync = useCallback(
    (newSocketData) => {
      // 1.  라인마다 할당된 in_index 따라 status 할당해주기.
      const _lineOptions = LineOptions;
      const syncedLineOptions = ignoreRuleLineSync(newSocketData, _lineOptions);
      // ignoreRuleLineSync(_lineOptions);
      // 2. group별로 sorting한 데이터를 파라미터로, 규칙에 따른 status할당해주기.

      const loc1_tbm_lineOptions = Tbm_lineControl(
        Tbm_extractLinesdByGroup("loc1", syncedLineOptions),
        Tbm_sortSocketsByGroup(newSocketData, "loc1"),
        "loc1"
      );

      const loc2_tbm_lineOptions = Tbm_lineControl(
        Tbm_extractLinesdByGroup("loc2", syncedLineOptions),
        Tbm_sortSocketsByGroup(newSocketData, "loc2"),
        "loc2"
      );

      const loc1_tbm_isOpen =
        loc1_tbm_lineOptions.find((item) => item.line_type === "entry-line") &&
        loc1_tbm_lineOptions.find((item) => item.line_type === "entry-line")
          .in_status === "open"
          ? true
          : false;
      const loc2_tbm_isOpen =
        loc2_tbm_lineOptions.find((item) => item.line_type === "entry-line") &&
        loc2_tbm_lineOptions.find((item) => item.line_type === "entry-line")
          .in_status === "open"
          ? true
          : false;

      // console.log("loc1_tbm_isOpen ==> ", loc1_tbm_isOpen);
      // console.log("loc2_tbm_isOpen ==> ", loc2_tbm_isOpen);

      let loc1_left_lineOptions = LR_lineControl(
        LR_extractLinesByGroup("loc1", syncedLineOptions),
        LR_sortSocketsByGroup(newSocketData, "loc1"),
        "loc1"
      );
      let loc2_right_lineOptions = LR_lineControl(
        LR_extractLinesByGroup("loc2", syncedLineOptions),
        LR_sortSocketsByGroup(newSocketData, "loc2"),
        "loc2"
      );

      const loc1_down_lineOptions = Down_lineControl(
        Down_extractLinesdByGroup("loc1", syncedLineOptions),
        Down_sortSocketsByGroup(newSocketData, "loc1")
      );
      const loc2_down_lineOptions = Down_lineControl(
        Down_extractLinesdByGroup("loc2", syncedLineOptions),
        Down_sortSocketsByGroup(newSocketData, "loc2")
      );

      const loc2_right_2400_lineOptions = R2400_lineControl(
        R2400_extractLinesdByGroup(_lineOptions),
        R2400_sortSocketsByGroup(newSocketData)
      );

      const loc1_left_1400_lineOptions = L1400_lineControl(
        L1400_extractLinesdByGroup(_lineOptions),
        L1400_sortSocketsByGroup(newSocketData)
      );

      let newLines = [
        ...loc1_tbm_lineOptions,
        ...loc2_tbm_lineOptions,
        ...loc1_left_lineOptions,
        ...loc2_right_lineOptions,
        ...loc1_down_lineOptions,
        ...loc2_down_lineOptions,
        ...loc2_right_2400_lineOptions,
        ...loc1_left_1400_lineOptions,
      ];

      // 인덱스에 동기화한 라인들을, 라인 로직을 거쳐 나온 결과물 newLines의 상태값으로 대채한다.
      syncedLineOptions.map((item, index) => {
        newLines.find((line) => line.line_index === item.line_index) &&
          syncedLineOptions.splice(index, 1, {
            ...item,
            in_status: newLines.find(
              (line) => line.line_index === item.line_index
            ).in_status,
          });
      });

      //main line 동기화, 어느 하나라도 open되어있으면 open상태로 바꾼다.
      const mainLineOpen = newSocketData.find(
        (item) => item.in_status === "open"
      );

      if (
        mainLineOpen !== -1 &&
        mainLineOpen !== undefined &&
        mainLineOpen !== null
      ) {
        syncedLineOptions.map((item, index) => {
          if (item.line_type === "main-line") {
            syncedLineOptions.splice(index, 1, {
              ...item,
              in_status: "open",
            });
          }
        });
      }

      newLines = [...syncedLineOptions];

      newLines = LR_syncStartLineEqualsTbm(
        newLines,
        loc1_tbm_isOpen,
        loc2_tbm_isOpen
      );

      setLineOptions(newLines);
    },
    [ignoreRuleLineSync]
  );

  // [ useEffect Area ] =======================================

  // // 서버에서 받아온 data를 socketOptions와 합쳐서 socketData를 만들어줍니다.
  useEffect(() => {
    let newSocketData = [];
    if (data) {
      data.map((item, index) => {
        let matchedOption = SocketOptions.find(
          (socket) => socket.in_index === item.in_index
        );
        matchedOption = {
          ...matchedOption,
          ...item,
        };
        newSocketData.push(matchedOption);
      });

      setSocketData(newSocketData);

      lineStatusSync(newSocketData);
      // console.log(
      //   "%c%s",
      //   "color: red; background: yellow; font-size: 15px;",
      //   "<소켓데이터 리스트> (하단)"
      // );
      // console.table(newSocketData);
      // console.log(
      //   "%c%s",
      //   "color: red; background: yellow; font-size: 15px;",
      //   "<라인데이터 리스트> (하단)"
      // );
      // console.table(lineStatusSync(newSocketData));
    }
  }, [data]);

  const checkClickedSocketOnList = (list) => {
    if (list === (null || undefined || [])) {
      initClickedSocket();
      return;
    }
    const haveClickedSocket = list.find(
      (item) => item.in_index === clickedSocket.in_index
    );
    if (haveClickedSocket === undefined) {
      initClickedSocket();
    }
  };

  // 상단 카테고리 버튼에 따른 table data 분류및 정렬 로직 입니다.
  useEffect(() => {
    let _socketData = socketData.filter(
      (item) =>
        item.in_name !== "미수신" &&
        item.in_status !== "disabled" &&
        item.in_status !== "not installed" &&
        item.in_index !== undefined &&
        item.in_index !== null
    );
    if (_socketData === (null || undefined || [])) {
      return;
    }
    let newSocketData = [];
    if (sectorButtons.all && socketButtons.all) {
      setSocketTableData(_socketData);
      return;
    } else {
      // 구간 판별
      if (sectorButtons.one) {
        _socketData = _socketData.filter((item) => item.in_local === "loc1");
      } else if (sectorButtons.two) {
        _socketData = _socketData.filter((item) => item.in_local === "loc2");
      }
      // 장비 카테고리 판별
      if (socketButtons.all === true) {
        checkClickedSocketOnList(_socketData);
        setSocketTableData(_socketData);
        return;
      }
      if (socketButtons.wireless === true) {
        newSocketData.push(
          ..._socketData.filter(
            (item) => item.in_device_type.toString() === "1"
          )
        );
        // console.log("무선장비");
      }
      if (socketButtons.wifi === true) {
        newSocketData.push(
          ..._socketData.filter(
            (item) => item.in_device_type.toString() === "2"
          )
        );
        // console.log("와이파이");
      }
      if (socketButtons.scanner === true) {
        newSocketData.push(
          ..._socketData.filter(
            (item) => item.in_device_type.toString() === "3"
          )
        );
        // console.log("스캐너");
      }
      if (socketButtons.camera === true) {
        newSocketData.push(
          ..._socketData.filter(
            (item) => item.in_device_type.toString() === "4"
          )
        );
        // console.log("카메라");
      }
      if (socketButtons.gas === true) {
        newSocketData.push(
          ..._socketData.filter(
            (item) => item.in_device_type.toString() === "5"
          )
        );
        // console.log("가스");
      }
      checkClickedSocketOnList(newSocketData);
      setSocketTableData(newSocketData);
      // console.log("sortedData ->", newSocketData);
    }
  }, [sectorButtons, socketButtons, socketData]);

  // 전체 데이터에서 추출한 closed index와 수신한 closed index가 다른지 판단
  // 다를경우 false 일치할 경우 true
  const idxSync = useCallback(() => {
    let _extractedIndexes = extractedIndexes;
    let _closedDataFromServer = closedDataFromServer;

    let _socketData = socketData;
    let newSocketData = [];
    // local배열과 new 배열이 모두 비어있을 경우 연산하지 않습니다.
    if (_extractedIndexes.length === 0 && _closedDataFromServer.length === 0) {
      // console.log(
      //   "%c%s",
      //   "color: red; background: green; font-size: 15px;",
      //   `수신데이터와 로컬데이터가 모두 비어있어 동기화되지 않았습니다~!`
      // );
    }

    // 나머지 경우 : 새 데이터와 기존데이터 모두 있을 경우

    // 새 데이터와 기존데이터가 다른경우

    // 1. closed에서 open으로 변경
    // local요소와 new 요소를 비교하여 copy_local에서 동일한 요소를 삭제합니다.
    else {
      let copy_extractedIndexes = [..._extractedIndexes];
      let copy_closedDataFromServer = [..._closedDataFromServer];

//

const item = {
  age : 10,
}

const go = (item) => {
  console.log(item?.name ?? "이름없음");

}





//
      _closedDataFromServer.map((new_index) => {
        let matchedIdx = copy_extractedIndexes.findIndex(
          (copy_local_index) => copy_local_index === new_index
        );
        // 탐색결과가 있을 경우
        if (matchedIdx !== -1) {
          //  copy_local에서 new요소와 동일한 요소를 삭제합니다.
          copy_extractedIndexes.splice(matchedIdx, 1);
        }
      });
      // console.log(
      //   "현재 closed->open 상태로 바뀔 indexes ->",
      //   copy_extractedIndexes
      // );

      // 2. open에서 closed로 변경
      // new 요소와 local 요소를 비교하여 copy_new에서 동일한 요소를 삭제합니다.
      _extractedIndexes.map((local_index) => {
        let matchedIdx = copy_closedDataFromServer.findIndex(
          (copy_new_index) => copy_new_index === local_index
        );
        // 탐색결과가 있을 경우
        if (matchedIdx !== -1) {
          //  copy_new에서 local요소와 동일한 요소를 삭제합니다.
          copy_closedDataFromServer.splice(matchedIdx, 1);
        }
      });
      // console.log(
      //   "현재 open->closed 상태로 바뀔 indexes ->",
      //   copy_closedDataFromServer
      // );

      // ! 최적화
      // copy_new와 copy_local의 삭제 로직 완료 후, 두 배열 모두 비어있다면,
      // 이전 상태와 같다, 즉 렌더링이나 추가 로직 수행이 필요없는 상태 유지 상태이므로
      // 더 이상 로직을 실행하지 않고 종료합니다.
      if (
        copy_extractedIndexes.length === 0 &&
        copy_closedDataFromServer.length === 0
      ) {
        // console.log(
        //   "%c%s",
        //   "color: red; background: sky; font-size: 15px;",
        //   `로컬데이터와 수신데이터가 동일하여 상태를 바꾸지 않습니다.`
        // );
        return;
      } else {
        // copy_local에 남은 요소들은 더 이상 closed 상태가 아니라는 의미이므로
        // status를 closed에서 open으로 바꿔줍니다.
        copy_extractedIndexes.map((closedToOpenIdx) => {
          let matchedIdx = _socketData.findIndex(
            (item) => item.in_index === closedToOpenIdx
          );
          // 탐색 결과가 있을 경우
          if (matchedIdx !== -1) {
            // 새 배열에 값 추가
            newSocketData.push({
              ..._socketData[matchedIdx],
              in_status: "open",
            });
            // console.log(
            //   "%c%s",
            //   "color: red; background: gray; font-size: 13px;",
            //   `${_socketData[matchedIdx].in_index} 인덱스 객체를 closed->open 상태로 동기화 합니다.`
            // );
            // 기존배열에서 값 삭제
            _socketData.splice(matchedIdx, 1);
          }
          ///
        });

        // copy_new에 남은 요소들은 더 이상 open 상태가 아니라는 의미이므로
        // status를 open에서 closed로 바꿔줍니다.
        copy_closedDataFromServer.map((openToClosedIdx) => {
          let matchedIdx = _socketData.findIndex(
            (item) => item.in_index === openToClosedIdx
          );
          // 탐색 결과가 있을 경우
          if (matchedIdx !== -1) {
            // 새 배열에 값 추가
            newSocketData.push({
              ..._socketData[matchedIdx],
              in_status: "closed",
            });
            // console.log(
            //   "%c%s",
            //   "color: red; background: white; font-size: 13px;",
            //   `${_socketData[matchedIdx].in_index} 인덱스 객체를 open->closed 상태로 동기화 합니다.`
            // );
            // 기존배열에서 값 삭제
            _socketData.splice(matchedIdx, 1);
          }
        });

        // 상태가 바뀌고 나머지 그대로인 socketData 배열요소들을 더해주기.
        newSocketData = [..._socketData, ...newSocketData];
        setSocketData(newSocketData);
        lineStatusSync(newSocketData);
        // 새 closed 데이터 추출하여 state로 저장
        extractingIndex(newSocketData);
        // console.log(
        //   "%c%s",
        //   "color: red; background: green; font-size: 15px;",
        //   `로컬데이터와 수신데이터가 모두 있어 동기화 하였습니다.`
        // );
      }
    }

    return;
  }, [
    extractedIndexes,
    closedDataFromServer,
    socketData,
    lineStatusSync,
    extractingIndex,
  ]);

  // 소켓 통신 수신 데이터가 바뀔 때마다
  useEffect(() => {
    if (data) {
      // console.log(
      //   "%c%s",
      //   "color: blue; background: yellow; font-size: 15px;",
      //   `===========소켓 수신데이터를 동기화합니다.=================`
      // );
      idxSync();
      // console.log(
      //   "%c%s",
      //   "color: blue; background: yellow; font-size: 15px;",
      //   `===========================================================`
      // );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [closedDataFromServer]);

  // [ rendering Area ] =======================================

  const mapRenderer = useCallback(() => {
    return (
      <MapLayout className="map-layout">
        <Map
          className="map"
          socketData={socketData}
          LineOptions={lineOptions}
          StaticOptions={staticOptions}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          overedSocket={overedSocket}
          clickedSocket={clickedSocket}
          onClick={onClick}
          setShowModal={setShowModal}
          modalData={modalData}
          setModalData={setModalData}
          initModalData={initModalData}
        />
      </MapLayout>
    );
  }, [
    clickedSocket,
    lineOptions,
    modalData,
    onClick,
    onMouseOut,
    onMouseOver,
    overedSocket,
    socketData,
    staticOptions,
  ]);

  const headerRenderer = useCallback(() => {
    return (
      <HeaderLayout className="header-layout">
        <Header className="header" />
      </HeaderLayout>
    );
  }, []);

  const sideMenuRenderer = useCallback(() => {
    return (
      <SideMenuLayout className="sidemenu-layout">
        <SideMenu
          className="sidemenu"
          sectorButtons={sectorButtons}
          socketButtons={socketButtons}
          onClickSectorButton={onClickSectorButton}
          onClickSocketButton={onClickSocketButton}
          socketData={socketData}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          overedSocket={overedSocket}
          clickedSocket={clickedSocket}
          onClick={onClick}
          showModal={showModal}
          setShowModal={setShowModal}
          modalData={modalData}
          setModalData={setModalData}
          initModalData={initModalData}
          socketTableData={socketTableData}
        />
      </SideMenuLayout>
    );
  }, [
    clickedSocket,
    modalData,
    onClick,
    onClickSectorButton,
    onClickSocketButton,
    onMouseOut,
    onMouseOver,
    // overedSocket,
    sectorButtons,
    showModal,
    socketButtons,
    socketData,
    socketTableData,
  ]);

  return (
    <>
      <ContentLayout className="content-layout">
        {showModal && (
          <DetailModal
            showModal={showModal}
            setShowModal={setShowModal}
            modalData={modalData}
            setModalData={setModalData}
            initModalData={initModalData}
          />
        )}
        {headerRenderer()}
        {mapRenderer()}
        {sideMenuRenderer()}
      </ContentLayout>
    </>
  );
};

export default React.memo(DashBoardContainer);
