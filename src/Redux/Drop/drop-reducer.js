import DropActionTypes from "./drop-types";

const INITIAL_STATE = {
  hidden: true
};

const dropReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DropActionTypes.TOGGLE_DROP_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    default:
      return state;
  }
};

export default dropReducer;
