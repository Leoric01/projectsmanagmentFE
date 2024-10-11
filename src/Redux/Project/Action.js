import api from "@/config/Api"; // Use your API helper
import {
    CREATE_PROJECT_FAILURE,
    CREATE_PROJECT_REQUEST,
    CREATE_PROJECT_SUCCESS,
    FETCH_PROJECT_BY_ID_FAILURE,
    FETCH_PROJECT_BY_ID_REQUEST,
    FETCH_PROJECT_BY_ID_SUCCESS,
    FETCH_PROJECTS_FAILURE,
    FETCH_PROJECTS_REQUEST,
    FETCH_PROJECTS_SUCCESS,
    SEARCH_PROJECT_FAILURE,
    SEARCH_PROJECT_REQUEST,
    SEARCH_PROJECT_SUCCESS,
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
        console.error("Error fetching projects: ", err);
        dispatch({type: SEARCH_PROJECT_FAILURE, error: err.message});
    }
};
export const createProjects = (projectData) => async (dispatch) => {
    dispatch({type: CREATE_PROJECT_REQUEST});
    try {
        const {data} = await api.post('/api/projects', projectData);
        dispatch({type: CREATE_PROJECT_SUCCESS, project: data});
        console.log("search projects", data);
    } catch (err) {
        console.error("Error fetching projects: ", err);
        dispatch({type: CREATE_PROJECT_FAILURE, error: err.message});
    }
};
export const fetchProjectById = (id) => async (dispatch) => {
    dispatch({type: FETCH_PROJECT_BY_ID_REQUEST});
    try {
        const {data} = await api.get('/api/projects/' + id);
        dispatch({type: FETCH_PROJECT_BY_ID_SUCCESS, project: data});
        console.log("search projects", data);
    } catch (err) {
        console.error("Error fetching projects: ", err);
        dispatch({type: FETCH_PROJECT_BY_ID_FAILURE, error: err.message});
    }
};