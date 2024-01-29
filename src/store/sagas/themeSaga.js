import {
  call,
  put,
  takeEvery,
  takeLatest,
  race,
  delay,
} from "redux-saga/effects";

// actions
import { switchThemeRequest } from "../../slices/themeSlice";

// grouping and exporting all logout sagas
export const themeSagas = [
  takeLatest(switchThemeRequest.type, watchSwitchThemeRequest),
];

function* watchSwitchThemeRequest({ payload }) {
  console.log("Reach middleware");
  //
}
