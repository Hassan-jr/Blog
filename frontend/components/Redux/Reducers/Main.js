import * as t from "../Types";

const Main = (
  state = {
    all: [],
    dev: [],
    block: [],
    tech: [],
    finance: [],
    health: [],
    loading: true,
    error: null,
  },
  action
) => {
  // switch cases
  switch (action.type) {

    // case all data
    case t.GET_ALL_POSTS:
      return {
        ...state,
        all: action.payload,
        loading: false
      };

    // case blockchain
    case t.GET_BLOCKCHAIN:
      return {
        ...state,
        block: action.payload,
        loading: false
      };

    default:
      return { ...state };
  }
};

export default Main;
