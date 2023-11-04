import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage
import { RefetchReducer } from "./features/refetch";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  // add another reducers bro!!!
  RefetchReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
