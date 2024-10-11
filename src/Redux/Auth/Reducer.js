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
    REGISTER_SUCCESS
} from "@/Redux/Auth/ActionType";

const initialState = {
    user: null,
    loading: false,
    error: null,
    jwt: null,
    projectSize: 0
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
        case GET_USERS_REQUEST:
            return {...state, loading: true, error: null};
        case LOGIN_SUCCESS:
            return {...state, loading: false, error: null, jwt: action.payload.jwt};
        case REGISTER_SUCCESS:
            return {...state, loading: false, error: null, jwt: null};
        case LOGIN_FAILURE:
        case REGISTER_FAILURE:
        case GET_USER_FAILURE:
            return {...state, loading: false, error: action.payload.error};
        case GET_USER_SUCCESS:
            return {...state, loading: true, user: action.payload.user};
        case LOGOUT:
            return initialState;

        default:
            return state;
    }
}
