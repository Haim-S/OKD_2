import { createSlice } from "@reduxjs/toolkit";


const accessibilitySlice = createSlice({
    name: "accessibility",
    initialState:{
        isHighContrast: false,
        isNegativeContrast: false,
        bodyColor: "white",
        textColor: "black",
        bodyColorNavbar: "#D0ccc4",
        textColorNavbar: "#4A4A4A",
        bodyColorFooter: "#4A4A4A",
        textColorFooter: "white"
    },
    reducers:{
        changeToHighContrast: (state) => {
            state.isHighContrast = !state.isHighContrast;
            state.bodyColor = "black";
            state.textColor = "blue";
            state.textColorFooter = "blue";
            state.bodyColorFooter = "black";
            state.bodyColorNavbar = "black";
            state.textColorNavbar = "blue";
        },
        changeToNegativeContrast: (state) => {
            state.isNegativeContrast = !state.isNegativeContrast;
            state.bodyColor = "black";
            state.textColor = "yellow";
            state.textColorFooter = "yellow";
            state.bodyColorFooter = "black";
            state.bodyColorNavbar = "black";
            state.textColorNavbar = "yellow";
        },
        refresh: (state) => {
            state. isHighContrast = true,
            state.isNegativeContrast= true,
            state.bodyColor= "white";
            state.textColor= "black";
            state.bodyColorNavbar=  "#D0ccc4";
            state.textColorNavbar= "#4A4A4A";
            state.bodyColorFooter= "#4A4A4A";
            state.textColorFooter= "white";
        }
    }
});

export const {changeToHighContrast, changeToNegativeContrast, refresh} = accessibilitySlice.actions;
export default accessibilitySlice.reducer;