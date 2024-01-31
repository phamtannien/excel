import axios from "axios";
import { BASE_URL, TOKEN } from "../constant/api.js";

const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    AccessToken: TOKEN,
  },
});

// request.interceptors.request.use((config) => {
//   let accessToken = null;
//   const state = store.getState();

//   if (state.userReducer.userInfo) {
//     accessToken = state.userReducer.userInfo.accessToken;

//     config.headers.Authorization = `Bearer ${accessToken}`
//   }
//   return config;
// });

export { request };
