import { IMapStyles } from "@/types/map.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IMapData{
 
    currentMapStyle:IMapStyles,
    

}
const initialState:IMapData= {
 
    currentMapStyle:{
        default:"b9cf393b-e1bb-4c6e-8328-d745e1d49cd6",
        name:"Default",
        image:"/maps/default.png"
    },
    // mapStyleType:MapStyleVariant.name.
    
}

const mapSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setMapStyle: (state, action: PayloadAction<IMapData>) => {
           state.currentMapStyle = action.payload.currentMapStyle;
        },

    }
})

export const {setMapStyle} = mapSlice.actions;

export default mapSlice.reducer;
