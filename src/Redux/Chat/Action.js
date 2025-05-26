import * as actionTypes from "./ActionType";
import api from "../../config/Api";

export const sendMessage = (messageData) => async (dispatch) => {
  dispatch({ type: actionTypes.SEND_MESSAGE_REQUEST });
  try {
    const response = await api.post(`/api/messages/send`, messageData);
    dispatch({ type: actionTypes.SEND_MESSAGE_SUCCESS, message: response.data });
    console.log("Message sent success: " + response.data);
  } catch (error) {
    dispatch({ type: actionTypes.SEND_MESSAGE_FAILURE, error: error.message || error.response?.data });
    console.error("Registration Error: ", error.response?.data || error.message);
  }
};

export const fetchChatByProject = (projectId) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_CHAT_BY_PROJECT_REQUEST });
  try {
    const response = await api.get(`/api/projects/${projectId}/chat`);
    dispatch({ type: actionTypes.FETCH_CHAT_BY_PROJECT_SUCCESS, chat: response.data });
    console.log("fetch chat: ", response.data);
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_CHAT_BY_PROJECT_FAILURE, error: error.message || error.response?.data });
    console.error("Fetch chat by project id failed: ", error.response?.data || error.message);
  }
};

export const fetchChatMessages = (chatId) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_CHAT_MESSAGES_REQUEST });
  try {
    const response = await api.get(`/api/messages/chat/${chatId}`);
    dispatch({ type: actionTypes.FETCH_CHAT_MESSAGES_SUCCESS, chatId, messages: response.data });
    console.log("fetch messages success: ", response.data);
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_CHAT_MESSAGES_FAILURE, error: error.message || error.response?.data });
    console.error("Fetch messages of chat " + chatId + " id failed: ", error.response?.data || error.message);
  }
};
