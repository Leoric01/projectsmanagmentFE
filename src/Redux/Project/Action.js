import api from "@/config/Api"; // Use your API helper
import {
    ACCEPT_INVITATION_FAILURE,
    ACCEPT_INVITATION_REQUEST,
    ACCEPT_INVITATION_SUCCESS,
    CREATE_PROJECT_FAILURE,
    CREATE_PROJECT_REQUEST,
    CREATE_PROJECT_SUCCESS,
    DELETE_PROJECT_FAILURE,
    DELETE_PROJECT_REQUEST,
    DELETE_PROJECT_SUCCESS,
    FETCH_PROJECT_BY_ID_FAILURE,
    FETCH_PROJECT_BY_ID_REQUEST,
    FETCH_PROJECT_BY_ID_SUCCESS,
    FETCH_PROJECTS_FAILURE,
    FETCH_PROJECTS_REQUEST,
    FETCH_PROJECTS_SUCCESS,
    INVITE_TO_PROJECT_FAILURE,
    INVITE_TO_PROJECT_REQUEST,
    INVITE_TO_PROJECT_SUCCESS,
    SEARCH_PROJECT_FAILURE,
    SEARCH_PROJECT_REQUEST,
    SEARCH_PROJECT_SUCCESS
} from "./ActionTypes";

export const fetchProjects = ({category, tag}) => async (dispatch) => {
    dispatch({type: FETCH_PROJECTS_REQUEST});

    try {
        const {data} = await api.get('/api/projects/', {
            params: {category, tag}  // Pass query parameters
        });
        dispatch({type: FETCH_PROJECTS_SUCCESS, projects: data});
        console.log("all projects", data);
    } catch (err) {
        console.error("Error fetching projects: ", err);
        dispatch({type: FETCH_PROJECTS_FAILURE, error: err.message});
    }
};

export const searchProjects = (keyword) => async (dispatch) => {
    dispatch({type: SEARCH_PROJECT_REQUEST});

    try {
        const {data} = await api.get('/api/projects/search?keyword=' + keyword);
        dispatch({type: SEARCH_PROJECT_SUCCESS, projects: data});
        console.log("search projects", data);
    } catch (err) {
        console.error("Error search for projects: ", err);
        dispatch({type: SEARCH_PROJECT_FAILURE, error: err.message});
    }
};
export const createProjects = (projectData) => async (dispatch) => {
    dispatch({type: CREATE_PROJECT_REQUEST});
    try {
        const {data} = await api.post('/api/projects', projectData);
        dispatch({type: CREATE_PROJECT_SUCCESS, project: data});
        console.log("create projects", data);
    } catch (err) {
        console.error("Error creating projects: ", err);
        dispatch({type: CREATE_PROJECT_FAILURE, error: err.message});
    }
};
export const fetchProjectById = (id) => async (dispatch) => {
    dispatch({type: FETCH_PROJECT_BY_ID_REQUEST});
    try {
        const {data} = await api.get('/api/projects/' + id);
        dispatch({type: FETCH_PROJECT_BY_ID_SUCCESS, project: data});
        console.log("fetch project by id", data);
    } catch (err) {
        console.error("Error fetching projects: ", err);
        dispatch({type: FETCH_PROJECT_BY_ID_FAILURE, error: err.message});
    }
};
export const deleteProject = (projectId) => async (dispatch) => {
    dispatch({type: DELETE_PROJECT_REQUEST});
    try {
        const {data} = await api.delete('/api/projects/' + projectId);
        dispatch({type: DELETE_PROJECT_SUCCESS, projectId});
        console.log("Delete project with id " + projectId + " success");
    } catch (err) {
        console.error("Error deleting project: ", err);
        dispatch({type: DELETE_PROJECT_FAILURE, error: err.message});
    }
};

export const inviteToProject = ({email, projectId}) => async (dispatch) => {
    dispatch({type: INVITE_TO_PROJECT_REQUEST});
    try {
        const {data} = await api.post('/api/projects/invite', {email, projectId});
        dispatch({type: INVITE_TO_PROJECT_SUCCESS, payload: data});
        console.log("invite " + email + " to project with id " + projectId + " send successfully.", data);
    } catch (err) {
        console.error("Error inviting to project: ", err);
        dispatch({type: INVITE_TO_PROJECT_FAILURE, error: err.message});
    }
};

export const acceptInvitation = ({invitationToken, navigate}) => async (dispatch) => {
    dispatch({type: ACCEPT_INVITATION_REQUEST});
    try {
        const {data} = await api.get('/api/projects/accept_invitation', {
            params: {
                token: invitationToken
            }
        });
        dispatch({type: ACCEPT_INVITATION_SUCCESS, payload: data});
        navigate("/projects/" + data.projectId);
        console.log("accept invitation: ", data);
    } catch (err) {
        console.error("Error accepting invitation to project: ", err);
        dispatch({type: ACCEPT_INVITATION_FAILURE, error: err.message});
    }
};