import { RegisterTypes } from "./register.types";
const INITIAL_STATE = {
  data: "",
  error: [],
  loading: false,
};

const registerReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case RegisterTypes.ACTION_START:
      return {
        ...state,
        loading: true,
      };
    case RegisterTypes.REGISTER_SUCCESS:
      return {
        data: action.payload,
      };
    case RegisterTypes.REGISTER_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case RegisterTypes.OTP_VERIFICATION_SUCCESS:
      return {
        data: action.payload,
      };
    case RegisterTypes.OTP_VERIFICATION_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case RegisterTypes.ACTION_END:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
export default registerReducer;
