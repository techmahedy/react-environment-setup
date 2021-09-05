import { PermissionTypes } from "./permission.types";
const INITIAL_STATE = {
  data: "",
  error: [],
  loading: false,
};

const permissionReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case PermissionTypes.PERMISSION_ACTION_START:
      return {
        ...state,
        loading: true,
      };
    case PermissionTypes.PERMISSION_GET_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case PermissionTypes.PERMISSION_GET_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case PermissionTypes.PERMISSION_ACTION_END:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
export default permissionReducer;
