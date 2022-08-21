import * as t from "../Types";
import axios from "axios";

// http://localhost:5000/
const url = "post/";

// get all doc
export const get_all = () => async (dispatch) => {
  try {
    await axios.get(url).then((response) => {
      dispatch({
        type: t.GET_ALL_POSTS,
        payload: response.data,
      });
    });
  } catch (error) {
    dispatch({
      type: t.Error,
      payload: error,
    });
  }
};

// get blockchain
export const get_blockchain = () => async (dispatch) => {
  try {
    await axios.get(`${url}blockchain`).then((response) => {
      dispatch({
        type: t.GET_BLOCKCHAIN,
        payload: response.data,
      });
    });
  } catch (error) {
    dispatch({
      type: t.Error,
      payload: error,
    });
  }
};

// get dev
export const get_dev = () => async (dispatch) => {
  try {
    await axios.get(`${url}dev`).then((response) => {
      dispatch({
        type: t.GET_DEV,
        payload: response.data,
      });
    });
  } catch (error) {
    dispatch({
      type: t.Error,
      payload: error,
    });
  }
};

// get FINANACE
export const get_finanace = () => async (dispatch) => {
  try {
    await axios.get(`${url}finance`).then((response) => {
      dispatch({
        type: t.GET_FINANCE,
        payload: response.data,
      });
    });
  } catch (error) {
    dispatch({
      type: t.Error,
      payload: error,
    });
  }
};

// get tech
export const get_tech = () => async (dispatch) => {
  try {
    await axios.get(`${url}tech`).then((response) => {
      dispatch({
        type: t.GET_TECH,
        payload: response.data,
      });
    });
  } catch (error) {
    dispatch({
      type: t.Error,
      payload: error,
    });
  }
};

// get  One post
export const get_one = (id) => async (dispatch, id) => {
  try {
    await axios.get(`${url}article/${id}`).then((response) => {
      dispatch({
        type: t.GET_OnePost,
        payload: response.data,
      });
      console.log(response.data);
    });
  } catch (error) {
    dispatch({
      type: t.Error,
      payload: error,
    });
  }
};
