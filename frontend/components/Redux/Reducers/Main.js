import * as t from "../Types";

const Main = (
  state = {
    all: [],
    dev: [],
    block: [],
    tech: [],
    finance: [],
    health: [],
    loading: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case t.GET_ALL_POSTS:
      return {
        ...state,
        all: [ "its woriking"],
      };

    default:
      return { ...state };
  }
};

export default Main;
