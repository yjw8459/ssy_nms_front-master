import axios from "axios";
import { FormTextArea } from "semantic-ui-react";
import { API } from "../lib/server.config";

// 최초 전체 데이터 조회
export const getNetworks = async () => {
  const response = await axios.get(`${API}/api/networks`);
  return response.data;
};

// // INDEX로 조회하는 비동기 함수
// export const getCctvById = async (index) => {
//   const response = await axios.get(`${API}/api/cctv/cctvs/${index}`);
//   return response.data;
// };
