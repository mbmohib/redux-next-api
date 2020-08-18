import { combineReducers } from "redux";
import * as types from "./types";

// COUNTER REDUCER
const counterReducer = (state = 0, { type }) => {
  switch (type) {
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      return state - 1;
    case types.RESET:
      return 0;
    default:
      return state;
  }
};

// INITIAL TIMER STATE
const initialTimerState = {
  lastUpdate: 0,
  light: false
};

// TIMER REDUCER
const timerReducer = (state = initialTimerState, { type, payload }) => {
  switch (type) {
    case types.TICK:
      return {
        lastUpdate: payload.ts,
        light: !!payload.light
      };
    default:
      return state;
  }
};

// INITIAL TIMER STATE
const initialDataState = {
  posts: [],
  comments: []
};

// TIMER REDUCER
const dataReducer = (state = initialDataState, { type, payload }) => {
  switch (type) {
    case types.GET_POSTS_DONE:
      return {
        ...state,
        posts: payload
      };
    case types.GET_COMMENTS_DONE:
      return {
        ...state,
        comments: payload
      };
    default:
      return state;
  }
};

// COMBINED REDUCERS
const reducers = {
  counter: counterReducer,
  timer: timerReducer,
  data: dataReducer
};

export default combineReducers(reducers);
