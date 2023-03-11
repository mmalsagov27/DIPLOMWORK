import { createSlice } from "@reduxjs/toolkit"; 
 
 
const initialState = [ 
    'https://flagcdn.com/w320/pe.png', 
    'https://flagcdn.com/w320/kz.png', 
    'https://flagcdn.com/w320/us.png' 
] 
 
 
const flagsSlice = createSlice({ 
    name: "flags", 
    initialState: initialState, 
     
     
 
}) 
 
 
 
 
export default flagsSlice.reducer;