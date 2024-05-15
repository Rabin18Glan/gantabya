import { PaletteMode } from "@mui/material";
import { amber, grey } from "@mui/material/colors";

const getDesignTokens = (mode: PaletteMode) => ({
  
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          background:{
            paper:grey[400],
               grey:grey[400],
               bgColor:grey[200],
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
          
        
          background: {
           bgColor:'black',
             
            
          },
      
        }),
  },
});


  
  export default getDesignTokens