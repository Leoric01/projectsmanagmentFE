import * as actionTypes from "./ActionTypes"; // Import action types
import api from "@/config/Api";

export const getUserSubscription = (jwt) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.GET_USER_SUBSCRIPTION_REQUEST });
    try {
      const response = await api.get(`/api/subscription/user`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: actionTypes.GET_USER_SUBSCRIPTION_SUCCESS, payload: response.data });
      console.log("Fetched user subscription: ", response.data);
    } catch (error) {
      dispatch({
        type: actionTypes.GET_USER_SUBSCRIPTION_FAILURE,
        error: error.message || error.response?.data,
      });
      console.error("Fetching user subscription failed: ", error.response?.data || error.message);
    }
  };
};

export const upgradeSubscription = (planType) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.UPGRADE_SUBSCRIPTION_REQUEST });
    try {
      const response = await api.patch(`/api/subscription/upgrade`, { planType });
      dispatch({ type: actionTypes.UPGRADE_SUBSCRIPTION_SUCCESS, payload: response.data });
      console.log("Subscription upgraded: ", response.data);
    } catch (error) {
      dispatch({
        type: actionTypes.UPGRADE_SUBSCRIPTION_FAILURE,
        error: error.message || error.response?.data,
      });
      console.error("Upgrading subscription failed: ", error.response?.data || error.message);
    }
  };
};
