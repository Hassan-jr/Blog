import * as t from "../Types";

const Main = (
  state = {
    all: [],
    dev: [],
    block: [],
    tech: [],
    finance: [],
    onePost: {},
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
        loading: false,
      };

    // case blockchain
    case t.GET_BLOCKCHAIN:
      return {
        ...state,
        block: action.payload,
        loading: false,
      };

    // case dev
    case t.GET_DEV:
      return {
        ...state,
        dev: action.payload,
        loading: false,
      };

    // case FINANCE
    case t.GET_FINANCE:
      return {
        ...state,
        finance: action.payload,
        loading: false,
      };

    // case TECH
    case t.GET_TECH:
      return {
        ...state,
        tech: action.payload,
        loading: false,
      };

       // case One Post
    // case t.GET_OnePost:
    //   return {
    //     ...state,
    //     onePost: action.payload,
    //     loading: false,
    //   };

    // CASE ERROR
    case t.Error:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return { ...state };
  }
};

export default Main;
