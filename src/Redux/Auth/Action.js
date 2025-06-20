import {
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
  GET_USERS_REQUEST,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "@/Redux/Auth/ActionType";
import { API_BASE_URL } from "@/config/Api";
import axios from "axios";

export const register = (userData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);

    if (response.status === 201 || response.data?.HTTP_STATUS_CREATED) {
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
      return { success: true };
    } else {
      dispatch({ type: REGISTER_FAILURE, payload: "Unexpected response." });
      return { success: false, error: "Unexpected response from server." };
    }
  } catch (err) {
    const errorMessage = err.response?.data?.message || err.response?.data || err.message;
    console.error("Registration Error: ", errorMessage);

    dispatch({ type: REGISTER_FAILURE, payload: errorMessage });
    return { success: false, error: errorMessage };
  }
};

export const login = (userData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
    if (data.token) {
      localStorage.setItem("jwt", data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: data });
      dispatch(getUser());
      console.log("Login Success", data);
    } else {
      dispatch({ type: LOGIN_FAILURE, error: data.message });
    }
  } catch (error) {
    console.error("Login Error: ", error.response?.data || error.message);
    dispatch({ type: LOGIN_FAILURE, payload: error.response?.data || error.message });
  }
};

export const getUser = () => async (dispatch) => {
  dispatch({ type: GET_USERS_REQUEST });
  try {
    const { data } = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
    dispatch({ type: GET_USER_SUCCESS, payload: data });
    console.log("Get Users Profile Success", data);
  } catch (error) {
    console.error("Get User Profile Error: ", error.response?.data || error.message);
    dispatch({ type: GET_USER_FAILURE, payload: error.response?.data || error.message });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
  localStorage.clear();
};
