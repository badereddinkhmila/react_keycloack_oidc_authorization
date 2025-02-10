import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from './feature/auth.slice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {authSlice},
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(sagaMiddleware),
});

export default store;
