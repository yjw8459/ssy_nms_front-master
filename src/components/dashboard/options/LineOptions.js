import Loc1MainOptions from "./lineoptions/Loc1MainOptions";
import Loc1DownOptions from "./lineoptions/Loc1DownOptions";
import Loc1TbmOptions from "./lineoptions/Loc1TbmOptions";
import Loc1EndOptions from "./lineoptions/Loc1EndOptions";

import Loc1LeftStartOptions from "./lineoptions/Loc1LeftStartOptions";
import Loc1LeftStartLinkOptions from "./lineoptions/Loc1LeftStartLinkOptions";
import Loc1LeftStartShortLinkOptions from "./lineoptions/Loc1LeftStartShortLinkOptions";
import Loc1LeftBridgeOptions from "./lineoptions/Loc1LeftBridgeOptions";
import Loc1LeftConnectOptions from "./lineoptions/Loc1LeftConnectOptions";
import Loc1LeftLinkOptions from "./lineoptions/Loc1LeftLinkOptions";
import Loc1Left1400Options from "./lineoptions/Loc1Left1400Options";

// Loc2
import Loc2MainOptions from "./lineoptions/Loc2MainOptions";
import Loc2DownOptions from "./lineoptions/Loc2DownOptions";
import Loc2TbmOptions from "./lineoptions/Loc2TbmOptions";
import Loc2EndOptions from "./lineoptions/Loc2EndOptions";

import Loc2RightLinkOptions from "./lineoptions/Loc2RightLinkOptions";
import Loc2RightStartOptions from "./lineoptions/Loc2RightStartOptions";
import Loc2RightStartLinkOptions from "./lineoptions/Loc2RightStartLinkOptions";
import Loc2RightStartShortLinkOptions from "./lineoptions/Loc2RightStartShortLinkOptions";
import Loc2RightConnectOptions from "./lineoptions/Loc2RightConnectOptions";
import Loc2RightBridgeOptions from "./lineoptions/Loc2RightBridgeOptions";

import Loc2Right2400Options from "./lineoptions/Loc2Right2400Options";

const LineOptions = [
  ...Loc1MainOptions,
  ...Loc1DownOptions,
  ...Loc1TbmOptions,
  ...Loc1EndOptions,

  ...Loc1LeftStartOptions,
  ...Loc1LeftStartLinkOptions,
  ...Loc1LeftStartShortLinkOptions,
  ...Loc1LeftBridgeOptions,
  ...Loc1LeftConnectOptions,
  ...Loc1LeftLinkOptions,
  ...Loc1Left1400Options,
  // ================
  ...Loc2MainOptions,
  ...Loc2DownOptions,
  ...Loc2EndOptions,
  ...Loc2TbmOptions,

  ...Loc2RightLinkOptions,
  ...Loc2RightStartOptions,
  ...Loc2RightStartLinkOptions,
  ...Loc2RightStartShortLinkOptions,
  ...Loc2RightConnectOptions,
  ...Loc2RightBridgeOptions,

  ...Loc2Right2400Options,

  // 라인 객체
  // {
  //   line_type : "", 라인 타입
  //   group : "", 그룹
  //   number : "1", 라인의 넘버링
  //   in_index: "", db 인덱스
  //   in_local: "loc1", 구간
  //   state: 1, 상태
  //   rotate: "ver", ver 수직선, hor 수평선 rotate
  //   animation: "forward", 애니매이션 방향 forward 정방향 reverse 역방향
  //   x: 1192, x값
  //   y: 915, y값
  //   width: 50, 길이

  // },
];

export default LineOptions;
