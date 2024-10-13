import * as actionTypes from "./ActionType";
import api from "../../config/api";

export const fetchIssuesByProjectId = (id) => {
    return async (dispatch) => {
        dispatch({type: actionTypes.FETCH_ISSUES_BY_PROJECT_ID_REQUEST});
        try {
            const response = await api.get(`/api/issue/project/${id}`);
            dispatch({type: actionTypes.FETCH_ISSUES_BY_PROJECT_ID_SUCCESS, issues: response.data});
            console.log("fetch issue by project id success: ", response.data);
        } catch (error) {
            dispatch({type: actionTypes.FETCH_ISSUES_BY_PROJECT_ID_FAILURE, error: error.message || error.response?.data});
            console.error("Fetch issue of project " + id + " id failed: ", error.response?.data || error.message);
        }
    }
};
export const fetchIssueById = (id) => {
    return async (dispatch) => {
        dispatch({type: actionTypes.FETCH_ISSUE_BY_ID_REQUEST});
        try {
            const response = await api.get(`/api/issue/${id}`);
            dispatch({type: actionTypes.FETCH_ISSUE_BY_ID_SUCCESS, issue: response.data});
            console.log("fetch issue by id ", response.data);
        } catch (error) {
            dispatch({type: actionTypes.FETCH_ISSUE_BY_ID_FAILURE, error: error.message || error.response?.data});
            console.error("Fetch issue with " + id + " id failed: ", error.response?.data || error.message);
        }
    }
};

export const createIssue = (issueData) => {
    return async (dispatch) => {
        dispatch({type: actionTypes.CREATE_ISSUE_REQUEST});
        console.log("Dispatching CREATE_ISSUE_REQUEST");
        try {
            const response = await api.post(`/api/issue`, issueData);
            console.log("Response received: ", response.data);  // Log response
            dispatch({type: actionTypes.CREATE_ISSUE_SUCCESS, issue: response.data});
            console.log("Issue created successfully: ", response.data);
        } catch (error) {
            dispatch({type: actionTypes.CREATE_ISSUE_FAILURE, error: error.message || error.response?.data});
            console.error("Issue creation failed: ", error.response?.data || error.message);
        }
    };
};

export const updateIssueStatus = ({id, status}) => {
    return async (dispatch) => {
        dispatch({type: actionTypes.UPDATE_ISSUE_STATUS_REQUEST});
        try {
            const response = await api.put(`/api/issue/${id}/?status=${status}`);
            dispatch({type: actionTypes.UPDATE_ISSUE_STATUS_SUCCESS, issues: response.data});
            console.log("update issue status success ", response.data);
        } catch (error) {
            dispatch({type: actionTypes.UPDATE_ISSUE_STATUS_FAILURE, error: error.message || error.response?.data});
            console.error("Update issue status with " + id + " id failed: ", error.message || error.response?.data);
        }
    }
};
export const deleteIssue = (id) => {
    return async (dispatch) => {
        dispatch({type: actionTypes.DELETE_ISSUE_REQUEST});
        try {
            const response = await api.delete(`/api/issue/${id}`);
            dispatch({type: actionTypes.DELETE_ISSUE_SUCCESS, issueId: id});
            console.log("Issue deleted successfully: ", response.data);
            dispatch(fetchIssuesByProjectId(id));
        } catch (error) {
            dispatch({type: actionTypes.DELETE_ISSUE_FAILURE, error: error.message || error.response?.data});
            console.error("Issue deletion failed: ", error.response?.data || error.message);
        }
    };
};

export const assignedUserToIssue = ({issueId, userId}) => {
    return async (dispatch) => {
        dispatch({type: actionTypes.ASSIGNED_ISSUE_TO_USER_REQUEST});
        try {
            const response = await api.put(`/api/issue/${issueId}/assignee/${userId}`);
            dispatch({type: actionTypes.ASSIGNED_ISSUE_TO_USER_SUCCESS, issue: response.data});
            console.log("issue assign to user success ", response.data);
        } catch (error) {
            dispatch({type: actionTypes.ASSIGNED_ISSUE_TO_USER_FAILURE, error: error.message || error.response?.data});
            console.error("issue assign to assignee with " + userId + " id failed: ", error.message || error.response?.data);
        }
    }
};



