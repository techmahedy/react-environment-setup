import localizeTypes from "../localize/localize.types";
export const languageChangeAction = (language: any) => async (
  dispatch: any
) => {
  dispatch({
    type: localizeTypes.CHANGE_START,
  });
  fetch(`/data/${language}.json`)
    .then((resp) => resp.json())
    .then((data) => {
      dispatch({
        type: localizeTypes.CHANGE_LANG,
        payload: data,
      });
      dispatch({
        type: localizeTypes.CHANGE_END,
      });
    });
};
