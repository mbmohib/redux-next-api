import * as types from './types';
import axios from 'axios';

// INITIALIZES CLOCK ON SERVER
export const serverRenderClock = () => (dispatch) =>
  dispatch({
    type: types.TICK,
    payload: { light: false, ts: Date.now() },
  });

// INITIALIZES CLOCK ON CLIENT
export const startClock = () => (dispatch) =>
  setInterval(() => {
    dispatch({ type: types.TICK, payload: { light: true, ts: Date.now() } });
  }, 1000);

// INCREMENT COUNTER BY 1
export const incrementCount = () => ({ type: types.INCREMENT });

// DECREMENT COUNTER BY 1
export const decrementCount = () => ({ type: types.DECREMENT });

// RESET COUNTER
export const resetCount = () => ({ type: types.RESET });

export const getPosts = () => async (dispatch) => {
  const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');

  dispatch({
    type: types.GET_POSTS_DONE,
    payload: posts.data,
  });
};

export const getComments = () => async (dispatch) => {
  const comments = await axios.get(
    'https://jsonplaceholder.typicode.com/comments'
  );

  dispatch({
    type: types.GET_COMMENTS_DONE,
    payload: comments.data,
  });
};
