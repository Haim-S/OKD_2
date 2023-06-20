import { combineReducers } from "@reduxjs/toolkit";
import translationsReducer from "./Slices/translationsSlice";
import accessibilityReducer from "./Slices/accessibilitySlice";

export const reducer = combineReducers({
    translations: translationsReducer,
    accessibility: accessibilityReducer
});