import { ADD_FILTERS, REMOVE_FILTERS, CLEAR_FILTERS } from "./filtersConst";

export const addFilters = (filter) => ({
  type: ADD_FILTERS,
  filter,
});

export const removeFilters = (filter) => ({
  type: REMOVE_FILTERS,
  filter,
});

export const clearFilters = {
  type: CLEAR_FILTERS,
};
