import Loc1MainSockets from "./socketoptions/Loc1MainSockets";
import Loc1LeftSockets from "./socketoptions/Loc1LeftSockets";
import Loc1Left1400Sockets from "./socketoptions/Loc1Left1400Sockets";
import Loc1DownSockets from "./socketoptions/Loc1DownSockets";
import Loc1TbmSockets from "./socketoptions/Loc1TbmSockets";
import Loc1EndSocket from "./socketoptions/Loc1EndSocket";

import Loc2MainSockets from "./socketoptions/Loc2MainSockets";
import Loc2RightSockets from "./socketoptions/Loc2RightSockets";
import Loc2Right2400Sockets from "./socketoptions/Loc2Right2400Sockets";
import Loc2DownSockets from "./socketoptions/Loc2DownSockets";
import Loc2TbmSockets from "./socketoptions/Loc2TbmSockets";
import Loc2EndSocket from "./socketoptions/Loc2EndSocket";

const SocketOptions = [
  // 들어올 데이터
  // {    in_id: "", // 장비 id값
  // in_index: "a1", //장비 인덱스
  // create_at: "", // 등록일
  // update_at: "", // 수정일
  // in_device_type: "", // 장비타입
  // // 1: 무선장비,2 : 와이파이, 3: 스캐너,4: 카메라, 5: 가스센서
  // in_local: "", // loc1, loc2, main
  // in_name: "", // 장비 명칭
  // in_image: "", // 장비 이미지 경로 최대 5장(&)로 구분
  // in_scan_time: "", // 장비 스캔 시간
  // in_ip: "", //url
  // in_port: "", // port
  // device_idx: "", // 각 장비 테이블의 인덱스
  // }
  ...Loc1DownSockets,
  ...Loc1MainSockets,
  ...Loc1LeftSockets,
  ...Loc1Left1400Sockets,
  ...Loc1EndSocket,
  ...Loc1TbmSockets,

  ...Loc2MainSockets,
  ...Loc2DownSockets,
  ...Loc2RightSockets,
  ...Loc2Right2400Sockets,
  ...Loc2EndSocket,
  ...Loc2TbmSockets,
];

export default SocketOptions;
