import { createSlice } from "@reduxjs/toolkit";


const accessibilitySlice = createSlice({
    name: "accessibility",
    initialState:{
        isHighContrast: false,
        isNegativeContrast: false,
        bodyColor: "white",
        textColor: "black",
    },
    reducers:{
        changeToHighContrast: (state) => {
            state.isHighContrast = !state.isHighContrast;
            state.bodyColor = "black";
            state.textColor = "blue";
        },
        changeToNegativeContrast: (state) => {
            state.isNegativeContrast = !state.isNegativeContrast;
            state.bodyColor = "black";
            state.textColor = "yellow";
        },
        refresh: (state) => {
            state.bodyColor= "white";
            state.textColor= "black";
        }
    }
});

export const {changeToHighContrast, changeToNegativeContrast, refresh} = accessibilitySlice.actions;
export default accessibilitySlice.reducer;