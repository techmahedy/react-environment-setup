import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import LoginCard from "../components/LoginCard.component";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { connect, useDispatch, useSelector } from "react-redux";
import { languageChangeAction } from "../../../redux/localize/localize.action";
import { logoutAction } from "../redux/logout/logout.actions";
import { store } from "../../../config/redux/store";

const LoginPage = (landingPageStateData) => {
  const dispatch = useDispatch();
  const lang = localStorage.getItem("lang");
  useEffect(() => {
    dispatch(languageChangeAction(lang));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const history = useHistory();

  const { t } = useTranslation();
  const localizeStateData = useSelector((state: any) => state.localizeState);

  const logoClicked = () => {
    store.dispatch(logoutAction());
    history.push("/");
  };
  return (
    <>
      <div className="login-page">
        <div className="login-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-8 right-item login-col">
                <div className="card">
                  <div className="card-body login-card-body">
                    <div className="login-card-img">
                      <Link className="navbar-brand" to="#">
                        <img
                          src="image/logo.png"
                          alt="image-logo-login"
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
                    <LoginCard />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 bottom-item" id="footer">
                <div className="login-footer">
                  <div className="footer-copyright">
                    <p>{t(localizeStateData?.data?.commonFooter?.copyRightAreRes)}</p>
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
const mapStateToProps = (state: any) => {
  return {
    landingPageStateData: state?.landingPageState,
  };
};
export default connect(mapStateToProps)(LoginPage);
// export default LoginPage;
