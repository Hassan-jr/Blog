import * as t from "../Types";
import axios from "axios";

const url = "http://localhost:5000/post/";

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