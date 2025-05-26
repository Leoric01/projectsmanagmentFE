import * as types from "src/Redux/Issue/ActionType";

const initialState = {
  issues: [],
  loading: false,
  error: null,
  issueDetails: null,
};

export const issueReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DELETE_ISSUE_REQUEST:
    case types.CREATE_ISSUE_REQUEST:
    case types.UPDATE_ISSUE_STATUS_REQUEST:
    case types.FETCH_ISSUES_BY_PROJECT_ID_REQUEST:
    case types.ASSIGNED_ISSUE_TO_USER_REQUEST:
    case types.FETCH_ISSUE_BY_ID_REQUEST:
    case types.UPDATE_ISSUE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case types.FETCH_ISSUES_BY_PROJECT_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        issues: action.issues,
      };
    case types.FETCH_ISSUE_BY_ID_SUCCESS:
    case types.UPDATE_ISSUE_STATUS_SUCCESS:
    case types.UPDATE_ISSUE_SUCCESS:
      return {
        ...state,
        loading: false,
        issueDetails: action.issue,
      };
    case types.CREATE_ISSUE_SUCCESS:
      return {
        ...state,
        loading: false,
        issues: [...state.issues, action.issue],
      };
    case types.ASSIGNED_ISSUE_TO_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        issues: state.issues.map((issue) => (issue.id === action.issue.id ? action.issue : issue)),
      };
    case types.DELETE_ISSUE_SUCCESS:
      return {
        ...state,
        loading: false,
        issues: state.issues.filter((issue) => issue.id !== action.issue.id),
      };
    case types.DELETE_ISSUE_FAILURE:
    case types.CREATE_ISSUE_FAILURE:
    case types.UPDATE_ISSUE_STATUS_FAILURE:
    case types.FETCH_ISSUES_BY_PROJECT_ID_FAILURE:
    case types.ASSIGNED_ISSUE_TO_USER_FAILURE:
    case types.FETCH_ISSUE_BY_ID_FAILURE:
    case types.UPDATE_ISSUE_FAILURE:
      return {
        ...state,
      };

    default:
      return { ...state };
  }
};
