import * as types from "./actionType";

const initialState = {
    messages: [],
    loading: false,
    error: null,
    chat: null
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_CHAT_MESSAGES_REQUEST:
        case types.SEND_MESSAGE_REQUEST:
        case types.FETCH_MESSAGES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }

        case types.FETCH_MESSAGES_SUCCESS:
        case types.FETCH_CHAT_MESSAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                messages: action.messages
            }
        case types.SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                messages: [...state.messages, action.message],
            }
        case types.FETCH_CHAT_BY_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                chat: action.chat,
            }
        case types.FETCH_CHAT_MESSAGES_FAILURE:
        case types.SEND_MESSAGE_FAILURE:
        case types.FETCH_MESSAGES_FAILURE:
        case types.FETCH_CHAT_BY_PROJECT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return {...state};
    }
}
