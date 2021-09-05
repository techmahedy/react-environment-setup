import { AxiosAuthInstance } from "../../config/api/auth.axios";
import { PermissionTypes } from "./permission.types";

export const permissionGetAction = () => async (dispatch: any) => {
  dispatch({
    type: PermissionTypes.PERMISSION_ACTION_START,
  });
  AxiosAuthInstance.get("/permission").then(
    (res: any) => {
      dispatch({
        type: PermissionTypes.PERMISSION_GET_SUCCESS,
        payload: res?.data,
      });
      dispatch({
        type: PermissionTypes.PERMISSION_ACTION_END,
      });
    },
    (error: any) => {
      dispatch({
        type: PermissionTypes.PERMISSION_GET_FAILED,
        payload: error,
      });
      dispatch({
        type: PermissionTypes.PERMISSION_ACTION_END,
      });
    }
  );
};

export const permissionGetByRoleTypeAction = (id: any) => async (dispatch: any) => {
  dispatch({
    type: PermissionTypes.PERMISSION_ACTION_START,
  });
  AxiosAuthInstance.get(`/permission/${id}`).then(
    (res: any) => {
      dispatch({
        type: PermissionTypes.PERMISSION_GET_SUCCESS,
        payload: res?.data,
      });
      dispatch({
        type: PermissionTypes.PERMISSION_ACTION_END,
      });
    },
    (error: any) => {
      dispatch({
        type: PermissionTypes.PERMISSION_GET_FAILED,
        payload: error,
      });
      dispatch({
        type: PermissionTypes.PERMISSION_ACTION_END,
      });
    }
  );
};
