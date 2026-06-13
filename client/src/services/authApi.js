import api from "./api.js";

export const registerUser = async (username, password) => {
  try {
    const response = await api.post("/auth/register", { username, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await api.post(
      "/auth/login",
      { username, password },
      { withcredentials: true },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const authStatus = async () => {
  try {
    const response = await api.get(
      "/auth/status",
      { withcredentials: true }
    );
    return response?.data;
  } catch (error) {
    throw error;
  }
};


export const logout = async () => {
  try {
    const response = await api.post(
      "/auth/logout",
      {},
      { withcredentials: true }
    );
    return response?.data;
  } catch (error) {
    throw error;
  }
};


export const setup2FA = async () => {
  try {
    const response = await api.post(
      "/auth/2fa/setup",
      {},
      { withcredentials: true }
    );
    return response?.data;
  } catch (error) {
    throw error;
  }
};



export const verify2FA = async (token) => {
  try {
    const response = await api.post(
      "/auth/2fa/verify",
      { token },
      { withcredentials: true }
    );
    return response?.data;
  } catch (error) {
    throw error;
  }
};


export const reset2FA = async () => {
  try {
    const response = await api.post(
      "/auth/2fa/reset",
      {},
      { withcredentials: true }
    );
    return response?.data;
  } catch (error) {
    throw error;
  }
};
