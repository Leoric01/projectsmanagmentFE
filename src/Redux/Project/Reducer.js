// noinspection EqualityComparisonWithCoercionJS

import {
    ACCEPT_INVITATION_REQUEST,
    CREATE_PROJECT_REQUEST,
    CREATE_PROJECT_SUCCESS,
    DELETE_PROJECT_REQUEST,
    DELETE_PROJECT_SUCCESS,
    FETCH_ALL_PROJECTS_FAILURE,
    FETCH_ALL_PROJECTS_REQUEST,
    FETCH_ALL_PROJECTS_SUCCESS,
    FETCH_PROJECT_BY_ID_REQUEST,
    FETCH_PROJECT_BY_ID_SUCCESS,
    FETCH_PROJECTS_REQUEST,
    FETCH_PROJECTS_SUCCESS,
    INVITE_TO_PROJECT_REQUEST,
    SEARCH_ALL_PROJECTS_WITH_KEYWORD_FAILURE,
    SEARCH_ALL_PROJECTS_WITH_KEYWORD_REQUEST,
    SEARCH_ALL_PROJECTS_WITH_KEYWORD_SUCCESS,
    SEARCH_PROJECT_REQUEST,
    SEARCH_PROJECT_SUCCESS
} from "./ActionTypes";

const initialState = {
    projects: [],
    loading: false,
    error: null,
    project: null,
    searchProjects: []
};

export const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROJECTS_REQUEST:
        case CREATE_PROJECT_REQUEST:
        case DELETE_PROJECT_REQUEST:
        case FETCH_PROJECT_BY_ID_REQUEST:
        case ACCEPT_INVITATION_REQUEST:
        case INVITE_TO_PROJECT_REQUEST:
        case SEARCH_PROJECT_REQUEST:
        case SEARCH_ALL_PROJECTS_WITH_KEYWORD_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_ALL_PROJECTS_REQUEST:
            return {...state, loading: true, error: null};
        case FETCH_ALL_PROJECTS_SUCCESS:
            return {...state, loading: false, projects: action.payload};
        case FETCH_ALL_PROJECTS_FAILURE:
            return {...state, loading: false, error: action.payload};
        case FETCH_PROJECTS_SUCCESS:
            return {
                ...state,
                loading: false,
                projects: action.projects,
                error: null
            };
        case SEARCH_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                searchProjects: action.payload,
                error: null
            };
        case SEARCH_ALL_PROJECTS_WITH_KEYWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                projects: action.payload,
                error: null
            };
        case CREATE_PROJECT_SUCCESS:
        case FETCH_PROJECT_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                project: action.payload,
                error: null
            };
        case DELETE_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                projects: state.projects.filter(
                    (project) => project.id !== action.projectId
                ),
                error: null
            };
        case SEARCH_ALL_PROJECTS_WITH_KEYWORD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
};
