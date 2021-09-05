import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import { connect, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import Loading from "../../../components/Loading/Loading.component";
import SnackBarAlert from "../../../components/snack-bar/SnackBarAlert";
import { ROLE_TYPE } from "../../../enum";
import { RegisterTypes } from "../redux/register/register.types";
import { loginAction } from "../redux/login/login.actions";
import { LoginTypes } from "../redux/login/login.types";
import ErrorMessageShow from "../../../components/utilComponent/ErrorMessage.component";

const LoginCard = ({
  loginAction,
  loginStateData,
  landingPageStateData,
}: any) => {
  const history = useHistory();
  const { t } = useTranslation();
  const localizeStateData = useSelector((state: any) => state.localizeState);

  //! Design Code Start
  const script = document.createElement("script");
  script.src = "/js/alertDisapear.js";
  script.async = true;
  document.body.appendChild(script);
  //! Design Code End

  if (loginStateData?.data?.isSuccess === true) {
    if (loginStateData?.data?.data?.role_type === ROLE_TYPE.ADMIN) {
      history.push("/admin/dashboard");
    } else if (
      loginStateData?.data?.data?.role_type === ROLE_TYPE.PARTICIPANT
    ) {
      history.push("/participant/dashboard");
    } else if (loginStateData?.data?.data?.role_type === ROLE_TYPE.TRAINER) {
      history.push("/trainer/dashboard");
    } else if (loginStateData?.data?.data?.role_type === ROLE_TYPE.LOGISTIC) {
      history.push("/logistic/dashboard");
    } else if (loginStateData?.data?.data?.role_type === ROLE_TYPE.EMPLOYER) {
      history.push("/employer/dashboard");
    }
  }

  const validationSchema = Yup.object().shape({
    user_name: Yup.string().required("Enter username or PIN"),
    password: Yup.string().required("Enter password"),
  });

  const initialValues = {
    user_name: "",
    password: "",
  };

  const onSubmit = (values: any) => {
    loginAction(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {loginStateData?.loading ? (
        <Loading />
      ) : (
        <div className="login-card-content">
          {/* {loginStateData?.error ? (<Error message='Login Failed' state={loginStateData} />) : null} */}
          <SnackBarAlert
            actionTypes={[
              LoginTypes.LOGIN_FAILED,
              RegisterTypes.OTP_VERIFICATION_SUCCESS,
              RegisterTypes.REGISTER_SUCCESS,
            ]}
          />

          <h3>
            <span>{t(localizeStateData?.data?.commonItem?.login)}</span>{" "}
            {t(localizeStateData?.data?.loginComponent?.toContinue)}
          </h3>
          <Form>
            <div className="input-group mb-3">
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope"></span>
                </div>
              </div>
              <Field
                type="text"
                className="form-control"
                name="user_name"
                placeholder="Username / PIN"
              />
            </div>
            <ErrorMessage name="user_name">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>
            <div className="input-group mb-3">
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
              <Field
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <ErrorMessage name="password">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>
            <div className="row">
              <div className="col-12 forgot-password">
                <Link to="/forget-password">
                  {t(localizeStateData?.data?.loginComponent?.forgetPassword)}
                </Link>
              </div>
            </div>
            <div className="mb-1 login-submit">
              <button type="submit" className="btn btn-primary btn-block">
                {t(localizeStateData?.data?.commonItem?.login)}
              </button>
            </div>
          </Form>
          <h3 className="login-signup">
            {t(localizeStateData?.data?.loginComponent?.dontHaveAccount)}
            <span className="login-signup-link">
              <Link to="/register">
                {t(localizeStateData?.data?.commonItem?.signUp)}
              </Link>
            </span>
          </h3>
        </div>
      )}
    </Formik>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loginStateData: state?.loginState,
    landingPageStateData: state?.landingPageState,
  };
};

export default connect(mapStateToProps, { loginAction })(LoginCard);
