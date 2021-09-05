import { Field, Form, Formik, FormikProvider, useFormik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import { connect, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import Loading from "../../../components/Loading/Loading.component";
import SnackBarAlert from "../../../components/snack-bar/SnackBarAlert";
import ErrorMessageShow from "../../../components/utilComponent/ErrorMessage.component";
import { registerAction } from "../redux/register/register.actions";
import { RegisterTypes } from "../redux/register/register.types";
import { REGEX } from "../../../utils/helpers/regex";

const RegisterCard = ({ registerAction, registerStateData }: any) => {
  const { t } = useTranslation();
  const localizeStateData = useSelector((state: any) => state.localizeState);
  const history = useHistory();
  if (registerStateData?.data?.isSuccess === true) {
    history.push("/verify-otp");
  }
  const initialValues = {
    full_name: "",
    user_name: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  };
  const onSubmit = (values: any) => {
    delete values?.confirm_password;
    registerAction(values);
  };
  const validationSchema = Yup.object().shape({
    full_name: Yup.string()
      .min(6, "Full Name must be at least 6 characters")
      .max(20, "Full Name must be at most 20 characters")
      .required("Enter full name"),
    user_name: Yup.string().required("Enter username"),
    phone_number: Yup.string()
      .matches(REGEX.BD_NUMBER_REGEX, "Phone Number is not valid")
      .required("Enter phone number"),
    email: Yup.string()
      .matches(REGEX.EMAIL_REGEX, "Email is not valid")
      .required("Enter email address"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Enter password"),
    confirm_password: Yup.string()
      .when("password", {
        is: (val: any) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Both password need to be the same"
        ),
      })
      .required("Enter confirm password"),
  });
  const formik = useFormik({ initialValues, onSubmit, validationSchema });

  return (
    <FormikProvider value={formik}>
      <>
        {registerStateData?.loading ? (
          <Loading />
        ) : (
          <div className="register-card-content">
            <SnackBarAlert actionTypes={[RegisterTypes.REGISTER_FAILED]} />

            <h3>
              <span>{t(localizeStateData?.data?.commonItem?.register)}</span>{" "}
              {t(localizeStateData?.data?.registerComponent?.yourAccount)}
            </h3>
            <Form>
              <div className="input-group mb-3">
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user"></span>
                  </div>
                </div>
                <Field
                  type="text"
                  className="form-control"
                  name="full_name"
                  placeholder="Full Name"
                  required
                />
              </div>
              <ErrorMessageShow formik={formik} name="full_name" />

              <div className="input-group mb-3">
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
                <Field
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  required
                />
              </div>
              <ErrorMessageShow formik={formik} name="email" />

              <div className="input-group mb-3">
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-mobile-alt" />
                  </div>
                </div>
                <Field
                  type="text"
                  name="phone_number"
                  className="form-control"
                  placeholder="Mobile Number"
                  required
                />
              </div>
              <ErrorMessageShow formik={formik} name="phone_number" />
              <div className="input-group mb-3">
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user"></span>
                  </div>
                </div>
                <Field
                  type="text"
                  className="form-control"
                  name="user_name"
                  placeholder="User Name"
                  required
                />
              </div>
              <ErrorMessageShow formik={formik} name="user_name" />
              <div className="input-group mb-3">
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
                <Field
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <ErrorMessageShow formik={formik} name="password" />

              <div className="input-group mb-3">
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
                <Field
                  type="password"
                  className="form-control"
                  name="confirm_password"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <ErrorMessageShow formik={formik} name="confirm_password" />

              <div className="mb-1 login-submit register">
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-custom-hover"
                >
                  {t(localizeStateData?.data?.commonItem?.registerCap)}
                </button>
              </div>
            </Form>
            <h3 className="login-signup">
              {t(
                localizeStateData?.data?.registerComponent?.alreadyHaveAccount
              )}
              <span className="login-signup-link">
                <Link to="/login">
                  {t(localizeStateData?.data?.commonItem?.login)}
                </Link>
              </span>
            </h3>
          </div>
        )}
      </>
    </FormikProvider>
  );
};
const mapStateToProps = (state: any) => {
  return {
    registerStateData: state?.registerState,
  };
};
export default connect(mapStateToProps, { registerAction })(RegisterCard);
