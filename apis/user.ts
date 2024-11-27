import { UserState } from "@/types";
import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:5001/e-buddy-monorepo/us-central1";

export function fetchUserData() {
  const token = getAccessToken();
  return axios.get(`${API_BASE_URL}/fetch-user-data`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function updateUserData(data: UserState) {
  const token = getAccessToken();
  return axios.put(`${API_BASE_URL}/update-user-data`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data,
  });
}

function getAccessToken() {
  const auth = localStorage.getItem("auth");
  if (auth) {
    return JSON.parse(auth).accessToken;
  }
  return null;
}
