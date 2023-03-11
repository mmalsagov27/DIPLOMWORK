import {configureStore} from "@reduxjs/toolkit" 
import postsReducer from "../features/postsSlice" 
import flagsReducer from "../features/flagsSlice" 
 
 
export const store = configureStore({ 
    reducer:{ 
        posts:postsReducer, 
        flags:flagsReducer 
    } 
}) 
 
export default store;