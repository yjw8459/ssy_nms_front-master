import { useEffect } from "react";
import io from "socket.io-client";
import { API } from "../lib/server.config";
import * as socketsAPI from "../api/socketsAPI";
import {
  createPromiseThunk,
  handleAsyncActions,
  reducerUtils,
} from "../lib/asyncUtils";

// 소켓 연결 객체
// export default io("http://192.168.0.39:3000", { path: "/socket.io" });

// 앱 마운트 시 소켓 연결 dispatch 실행, redux 구축

const GET_CLOSED_DATA = "networks/GET_CLOSED_DATA";
const GET_CLOSED_DATA_SUCCESS = "networks/GET_CLOSED_DATA_SUCCESS";
const GET_CLOSED_DATA_ERROR = "networks/GET_CLOSED_DATA_ERROR";

let socket;
export const recieveClosedData = () => (dispatch) => {
  if (!socket) {
    socket = io.connect(API); //3000번 포트 사용(서버)
    socket.emit("closedData", "최현석");
    socket.on("closedData", (data) => {
      // console.log("서버에서 응답온 데이터", data);
      const payload = {
        closedData: data,
      };
      dispatch({ type: GET_CLOSED_DATA, payload });
    });
  }
};

export const socketDisconnect = () => (dispatch) => {
  socket.disconnect();
};

const GET_NETWORKS = "network/GET_NETWORKS";
const GET_NETWORKS_SUCCESS = "network/GET_NETWORKS_SUCCESS";
const GET_NETWORKS_ERROR = "network/GET_NETWORKS_ERROR";

export const getNetworks = createPromiseThunk(
  GET_NETWORKS,
  socketsAPI.getNetworks
);

const initState = {
  networks: reducerUtils.initial(),
};

const getNetworksReducer = handleAsyncActions(GET_NETWORKS, "networks", true);

export default function networks(state = initState, action) {
  switch (action.type) {
    case GET_NETWORKS:
    case GET_NETWORKS_SUCCESS:
    case GET_NETWORKS_ERROR:
      return getNetworksReducer(state, action);
    case GET_CLOSED_DATA:
      return {
        ...state,
        closedData: action.payload.closedData,
      };
    default:
      return state;
  }
}
