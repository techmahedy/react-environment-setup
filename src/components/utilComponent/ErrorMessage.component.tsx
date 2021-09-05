import { ErrorMessage, FormikProvider } from "formik";
import React from "react";
interface IFErrorMessageShow {
  formik?: any;
  name: any;
}
const ErrorMessageShow = ({ formik, name }: IFErrorMessageShow) => {
  console.log("FORMIK", formik.errors);
  return (
    <FormikProvider value={formik}>
      <ErrorMessage name={name}>
        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
      </ErrorMessage>
    </FormikProvider>
  );
};

export default ErrorMessageShow;
