import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../features/Users/userSlice";
import ApiBase from "./apiBase";

const rootReducer = combineReducers({
  // reducers for all endpoints are generated automatically
  [ApiBase.reducerPath]: ApiBase.reducer,
  // reducers for other slices
  user: userReducer,
});

export default rootReducer;
