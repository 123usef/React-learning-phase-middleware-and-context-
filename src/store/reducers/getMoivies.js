const INITIAL_VALUE = {
  mv: [],
};

export default function moviesReducer(state = INITIAL_VALUE, action) {
  switch (action.type) {
    case "GET_MOVIES_LIST":
      return {
        ...state,
        list : action.payload,
      };
    default:
      return state;
  }
}
