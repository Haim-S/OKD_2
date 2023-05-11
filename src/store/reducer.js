import { combineReducers } from "@reduxjs/toolkit";
import translationsReducer from "./Slices/translationsSlice";

export const reducer = combineReducers({
    translations: translationsReducer
});