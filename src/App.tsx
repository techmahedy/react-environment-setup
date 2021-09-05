import React, { lazy, Suspense, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Preloader from "./components/Preloader/preloader.components";
import PrivateRoute from "./customRoutes/private.route";
// import NotFoundPage from "./pages/NotFound/NotFoundPage";

const NotFoundPage = lazy(() => import("./pages/NotFound/NotFoundPage"));

const App = ({ registerStateData, forgetPasswordStateData }: any) => {
 
  return (
    <Suspense fallback={<Preloader />}>
      <Router>
        <Switch>
          <Route exact={true} path="/" component={NotFoundPage} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
