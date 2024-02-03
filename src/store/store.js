// toolkit function
import { configureStore } from "@reduxjs/toolkit";

// import logger from "redux-logger";

// wrapper
import { createWrapper } from "next-redux-wrapper";

// saga library
import createSagaMiddleware from "@redux-saga/core";
import { all } from "redux-saga/effects";

// generator functions
// slices
import { themeSlice } from "./slices/themeSlice";
import { generalSlice } from "./slices/generalSlice";

const devMode = process.env.NODE_ENV === "development";

function* rootSaga() {
  yield all([
    // ...loginSagas,
  ]);
}
// creating saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (devMode) {
  // middleware.push(logger);
}

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      [themeSlice.name]: themeSlice.reducer,
      [generalSlice.name]: generalSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      // WARNING: this means that _none_ of the default middleware are added!
      return middleware;
      // or for TS users, use:
      // return new Tuple(myMiddleware)
    },
    devTools: devMode,
  });
  // sagaMiddleware.run(rootSaga);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  store.sagaTask.toPromise();
  return store;
};

export const wrapper = createWrapper(makeStore);
