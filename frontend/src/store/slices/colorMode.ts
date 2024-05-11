import { PaletteMode } from "@mui/material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Mode={
    mode:PaletteMode,
}


const initialState:Mode= {
mode:'light',
}



const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        toggle: (state, action: PayloadAction<Mode>) => {
            state.mode=action.payload.mode;

        },
 
    }
})

export const { toggle } =modeSlice.actions;

export default modeSlice.reducer;
