import LocalizeTypes from "./localize.types";
const INITIAL_STATE = {
  //loading: false,
  data: "",
  error: "",
};
const LocalizeReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case LocalizeTypes.CHANGE_START:
      return {
        ...state,
        loading: true,
      };
    case LocalizeTypes.CHANGE_LANG:
      return {
        ...state,
        data: action.payload,
      };
    case LocalizeTypes.CHANGE_END:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
export default LocalizeReducer;
