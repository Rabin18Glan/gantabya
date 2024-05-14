import { PaletteColor, PaletteColorOptions } from "@mui/material";
import React from "react";

declare module '@mui/material/styles'{
    // interface Theme{
    //     status:{
    //         danger:string;
    //     }
    // }
    // interface ThemeOptions{
    //     status:{
    //         danger:React.CSSProperties['color']
    //     }
    // }

    interface Palette{
        backgroundColor?:PaletteColor
    }

    interface PaletteOptions{
backgroundColor?:PaletteColorOptions
    }
    interface SimplePaletteOptions{
        bgColor:PaletteColor
    }

}