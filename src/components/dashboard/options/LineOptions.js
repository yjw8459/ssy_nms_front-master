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

  // ?????? ??????
  // {
  //   line_type : "", ?????? ??????
  //   group : "", ??????
  //   number : "1", ????????? ?????????
  //   in_index: "", db ?????????
  //   in_local: "loc1", ??????
  //   state: 1, ??????
  //   rotate: "ver", ver ?????????, hor ????????? rotate
  //   animation: "forward", ??????????????? ?????? forward ????????? reverse ?????????
  //   x: 1192, x???
  //   y: 915, y???
  //   width: 50, ??????

  // },
];

export default LineOptions;
