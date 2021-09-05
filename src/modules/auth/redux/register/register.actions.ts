import AxiosWithOutAuthInstance from "../../../../config/api/withoutauth.axios";
import { store } from "../../../../config/redux/store";
import { snackBarAlert } from "../../../../redux/alert/alert.action";
import { RegisterTypes } from "./register.types";

export const registerAction = (formData: any) => async (dispatch: any) => {
  console.log(formData);
  dispatch({
    type: RegisterTypes.ACTION_START,
  });
  AxiosWithOutAuthInstance.post("/register", formData).subscribe(
    (res: any) => {
      dispatch({
        type: RegisterTypes.REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch({
        type: RegisterTypes.ACTION_END,
      });
      store.dispatch(
        snackBarAlert(
          res?.data?.message,
          "success",
          RegisterTypes.REGISTER_SUCCESS
        )
      );
    },
    (error: any) => {
      dispatch({
        type: RegisterTypes.REGISTER_FAILED,
        payload: error,
      });
      dispatch({
        type: RegisterTypes.ACTION_END,
      });
      store.dispatch(
        snackBarAlert(
          error?.response?.data?.error,
          "danger",
          RegisterTypes.REGISTER_FAILED
        )
      );
    }
  );
};

export const employeeRegisterAction = (formData: any) => async (dispatch: any) => {
  dispatch({
    type: RegisterTypes.ACTION_START,
  });
  AxiosWithOutAuthInstance.post("/employer/register", formData).subscribe(
    (res: any) => {
      dispatch({
        type: RegisterTypes.REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch({
        type: RegisterTypes.ACTION_END,
      });
      store.dispatch(
        snackBarAlert(
          res?.data?.message,
          "success",
          RegisterTypes.REGISTER_SUCCESS
        )
      );
    },
    (error: any) => {
      dispatch({
        type: RegisterTypes.REGISTER_FAILED,
        payload: error,
      });
      dispatch({
        type: RegisterTypes.ACTION_END,
      });
      store.dispatch(
        snackBarAlert(
          error?.response?.data?.error,
          "danger",
          RegisterTypes.REGISTER_FAILED
        )
      );
    }
  );
};

export const otpVerifyAction = (formData: any) => async (dispatch: any) => {
  dispatch({
    type: RegisterTypes.ACTION_START,
  });
  AxiosWithOutAuthInstance.post("/verify-otp", formData).subscribe(
    (res: any) => {
      dispatch({
        type: RegisterTypes.OTP_VERIFICATION_SUCCESS,
        payload: res.data,
      });
      dispatch({
        type: RegisterTypes.ACTION_END,
      });
      store.dispatch(
        snackBarAlert(
          res?.data?.message,
          "success",
          RegisterTypes.OTP_VERIFICATION_SUCCESS
        )
      );
    },
    (error: any) => {
      dispatch({
        type: RegisterTypes.OTP_VERIFICATION_FAILED,
        payload: null,
      });
      dispatch({
        type: RegisterTypes.ACTION_END,
      });
      store.dispatch(
        snackBarAlert(
          error?.response?.data?.error,
          "danger",
          RegisterTypes.OTP_VERIFICATION_FAILED
        )
      );
    }
  );
};
