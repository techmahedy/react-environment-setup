import React from "react";
import { useHistory } from "react-router-dom";
import RegisterCard from "../components/RegisterCard.component";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { logoutAction } from "../redux/logout/logout.actions";
import { store } from "../../../config/redux/store";
const RegisterPage = () => {
  const { t } = useTranslation();
  const localizeStateData = useSelector((state: any) => state.localizeState);
  const history = useHistory();
  const logoClicked = () => {
    store.dispatch(logoutAction());
    history.push("/");
  };
  return (
    <>
      <div className="login-page user-register-page">
        <div className="login-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-8 right-item register-col">
                <div className="card">
                  <div className="card-body login-card-body">
                    <div className="login-card-img">
                      <Link className="navbar-brand" to="#">
                        <img
                          src="image/logo.png"
                          alt="image-logo-register"
                          onClick={logoClicked}
                        />
                      </Link>
                    </div>
                    <h2>
                      {t(
                        localizeStateData?.data?.commonItem?.projectTitleCapital
                      )}
                    </h2>
                    <p>
                      {t(
                        localizeStateData?.data?.commonItem?.applicationVersion
                      )}
                    </p>
                    <RegisterCard />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 bottom-item" id="footer">
                <div className="login-footer">
                  <div className="footer-copyright">
                    <p>{t(localizeStateData?.data?.commonFooter?.copyRightAreRes)}</p>
                    {/* <p>
                      {t(localizeStateData?.data?.common_footer?.copyRight)}{" "}
                      <span>
                        {t(localizeStateData?.data?.commonItem?.brac)}{" "}
                        {t(
                          localizeStateData?.data?.commonItem
                            ?.projectTitleRunning
                        )}
                      </span>{" "}
                      {t(localizeStateData?.data?.commonItem?.limited)}
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RegisterPage;
