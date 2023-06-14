import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ApiBase from "./apiBase";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "app-name",
  version: 1,
  // where you want to persist your data
  storage: storage,
  // reducers that should be persisted
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// make store
export const store = configureStore({
  reducer: persistedReducer,
  // set middleware for api and other middleware
  middleware: (gtm) =>
    gtm({
      serializableCheck: false,
    }).concat(ApiBase.middleware),
  devTools: false,
});

export const persistor = persistStore(store);
