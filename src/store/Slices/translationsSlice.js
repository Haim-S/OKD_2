import {createSlice} from "@reduxjs/toolkit";
import {PAGES_PATH, CATEGORIES_PATH} from "../../constant/english/PATH_EN";
import {CONTACT_TEXT,INPUT_CONTACT, FOOTER_TEXT} from "../../constant/english/TEXT_EN";
import {PAGES_PATH_HE, CATEGORIES_PATH_HE} from "../../constant/hebrew/PATH_HE";
import {CONTACT_TEXT_HE,INPUT_CONTACT_HE, FOOTER_TEXT_HE} from "../../constant/hebrew/TEXT_HE";






const translatSlice = createSlice({
    name: "translations",
    initialState:{
        isHebrew: false,
        LINKS_PAGES: PAGES_PATH,
        LINKS_CATEGORIES: CATEGORIES_PATH,
        FOOTER_TEXT: FOOTER_TEXT,
        PageABOUT_TEXT: [],
        PageCONTACT_TEXT: CONTACT_TEXT,
        pageCONTACT_INPUT: INPUT_CONTACT,
    },
    reducers: {
        changeLanguage: (state) => {
            state.isHebrew = !state.isHebrew;
            console.log( state.isHebrew);
            if(state.isHebrew){
                state.LINKS_PAGES = PAGES_PATH_HE;
                state.LINKS_CATEGORIES = CATEGORIES_PATH_HE;
                state.FOOTER_TEXT = FOOTER_TEXT_HE;
                state.PageCONTACT_TEXT = CONTACT_TEXT_HE;
                state.pageCONTACT_INPUT = INPUT_CONTACT_HE;
            }else{
                state.LINKS_PAGES= PAGES_PATH;
                state.LINKS_CATEGORIES= CATEGORIES_PATH;
                state.FOOTER_TEXT= FOOTER_TEXT;
                state.PageCONTACT_TEXT= CONTACT_TEXT;
                state.pageCONTACT_INPUT= INPUT_CONTACT ;
            }
        }
    }

})

export const {changeLanguage} = translatSlice.actions;
export default translatSlice.reducer;