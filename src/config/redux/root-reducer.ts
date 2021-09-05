import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import loginReducer from "../../modules/auth/redux/login/login.reducer";
import alertReducer from "../../redux/alert/alert.reducer";
import LocalizeReducer from "../../redux/localize/localize.reducer";
import registerReducer from "../../modules/auth/redux/register/register.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "loginState",
    "registerState",
    'localizeState'
  ],
};

const appReducer = combineReducers({
  loginState: loginReducer,
  localizeState: LocalizeReducer,
});

const rootReducer = (state: any, action: any) => {
  if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'en')
  }
  if (action.type === "LOG_OUT") {
    storage.removeItem("persist:root");
    storage.removeItem("token");
    storage.removeItem("error");
    state = undefined;
  }
  return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
