import { PaletteMode } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";

const getDesignTokens = (mode: PaletteMode) => ({
  
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          background:{
            paper:grey[200],
               grey:grey[400]
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
        text: {
          primary: grey[100],
          secondary: grey[100],
        },
          // palette values for dark mode
          // primary: deepOrange,
          // divider: deepOrange[700],
          // background: {
          //   default: deepOrange[900],
          //   paper: deepOrange[900],
            
          // },
          // text: {
          //   primary: '#fff',
          //   secondary: grey[500],
          // },
        }),
  },
});


  
  export default getDesignTokens