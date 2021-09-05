
import AxiosWithOutAuthInstance from "../../../../config/api/withoutauth.axios";
import { store } from "../../../../config/redux/store";
import { snackBarAlert } from "../../../../redux/alert/alert.action";
import { LoginTypes } from "./login.types";

export const loginAction = (formData: any) => async (dispatch: any) => {
  dispatch({
    type: LoginTypes.ACTION_START,
  });
  AxiosWithOutAuthInstance.post(`/login`, formData).subscribe(
    (res: any) => {
      localStorage.setItem("token", res.data.data.token);
      dispatch({
        type: LoginTypes.LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch({
        type: LoginTypes.ACTION_END,
      });
      store.dispatch(
        snackBarAlert(res?.data?.message, "success", LoginTypes.LOGIN_SUCCESS)
      );
    },
    (error: any) => {
      dispatch({
        type: LoginTypes.LOGIN_FAILED,
        payload: error,
      });
      dispatch({
        type: LoginTypes.ACTION_END,
      });
      store.dispatch(
        snackBarAlert(
          error?.response?.data?.error,
          "danger",
          LoginTypes.LOGIN_FAILED
        )
      );
    }
  );
};
