import { FILTERS, ACTIONS_TYPES as ACTIONS } from '../consts/consts';

const initialState = FILTERS.TODO;

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.FILTER:
      return action.payload;

    default:
      return state;
  }
}
