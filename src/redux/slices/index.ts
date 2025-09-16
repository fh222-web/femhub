import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import userReducer from "./userSlice";
import loaderReducer from "./loaderSlice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["user"], // Only persist the user slice
};

const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
