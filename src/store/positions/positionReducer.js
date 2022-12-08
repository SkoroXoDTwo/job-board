import { ADD_POSITIONS } from "./positionsConst";

export const positions = (state = [], action) => {
  switch (action.type) {
    case ADD_POSITIONS: {
      return action.positions;
    }

    default: {
      return state;
    }
  }
};
