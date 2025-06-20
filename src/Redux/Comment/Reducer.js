import * as types from "../Comment/ActionType";

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_COMMENT_REQUEST:
    case types.DELETE_COMMENT_REQUEST:
    case types.FETCH_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: [...state.comments, action.comment],
      };
    case types.DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: state.comments.filter((comment) => comment.id !== action.commentId),
      };
    case types.FETCH_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.comments,
      };
    case types.CREATE_COMMENT_FAILURE:
    case types.DELETE_COMMENT_FAILURE:
    case types.FETCH_COMMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return { ...state };
  }
};
