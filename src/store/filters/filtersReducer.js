import { ADD_FILTERS, REMOVE_FILTERS, CLEAR_FILTERS } from "./filtersConst";

export const filters = (state = [], action) => {
  switch (action.type) {
    case ADD_FILTERS: {
      if (state.includes(action.filter)) return state;
      return [...state, action.filter];
    }

    case REMOVE_FILTERS: {
      return state.filter((item) => item !== action.filter);
    }

    case CLEAR_FILTERS: {
      return [];
    }

    default: {
      return state;
    }
  }
};
