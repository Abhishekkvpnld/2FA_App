import api from "./api.js";

export const registerUser = async (username, password) => {
    const response = await api.post("/auth/register", { username, password });
    return response?.data;
};

export const loginUser = async (username, password) => {
    const response = await api.post(
      "/auth/login",
      { username, password },
      { withCredentials: true },
    );

    console.log(response.data)
    return response.data;
};


export const authStatus = async () => {
  try {
    const response = await api.get(
      "/auth/status",
      { withCredentials: true }
    );
    return response?.data;
  } catch (error) {
    throw error;
  }
};


export const logoutUser = async () => {
  try {
    const response = await api.post(
      "/auth/logout",
      {},
      { withCredentials: true }
    );
    return response?.data;
  } catch (error) {
    throw error;
  }
};


export const setup2FA = async () => {
    const response = await api.post(
      "/auth/2fa/setup",
      {},
      { withCredentials: true }
    );
    return response?.data;
};



export const verify2FA = async (token) => {
    const response = await api.post(
      "/auth/2fa/verify",
      { token },
      { withCredentials: true }
    );
    return response?.data;
};


export const reset2FA = async () => {
  try {
    const response = await api.post(
      "/auth/2fa/reset",
      {},
      { withCredentials: true }
    );
    return response?.data;
  } catch (error) {
    throw error;
  }
};
