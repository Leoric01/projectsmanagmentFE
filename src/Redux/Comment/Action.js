import * as actions from "./ActionType";
import api from "../../config/api";

export const createComment = (commentData) => async (dispatch) => {
    dispatch({type: actions.CREATE_COMMENT_REQUEST});
    try {
        const response = await api.post(`/api/comment`, commentData);
        dispatch({
            type: actions.CREATE_COMMENT_SUCCESS,
            comment: response.data
        });
        console.log("Comment create success: " + response.data);
    } catch (error) {
        dispatch({type: actions.CREATE_COMMENT_FAILURE, error: error.message || error.response?.data});
        console.error("Comment create failed: ", error.response?.data || error.message);
    }
};

export const deleteComment = (commentId) => async (dispatch) => {
    dispatch({type: actions.DELETE_COMMENT_REQUEST});
    try {
        const response = await api.delete(`/api/comment/${commentId}`);
        dispatch({type: actions.DELETE_COMMENT_SUCCESS, commentId});
        console.log("delete comment success: ", response.data);
    } catch (error) {
        dispatch({type: actions.DELETE_COMMENT_FAILURE, error: error.message || error.response?.data});
        console.error("Delete comment failed: ", error.message || error.response?.data);
    }
};

export const fetchComments = (issueId) => async (dispatch) => {
    dispatch({type: actions.FETCH_COMMENT_REQUEST});
    try {
        const response = await api.get(`/api/comment/${issueId}`);
        dispatch({type: actions.FETCH_COMMENT_SUCCESS, comments: response.data});
        console.log("fetch comment success: ", response.data);
    } catch (error) {
        dispatch({type: actions.FETCH_COMMENT_FAILURE, error: error.message || error.response?.data});
        console.error("Fetch comments of issue " + issueId + " id failed: ", error.message || error.response?.data);
    }
};
