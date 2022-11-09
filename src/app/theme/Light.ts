import { createTheme } from "@mui/material";
import { green, grey, lightBlue, purple, red, yellow } from "@mui/material/colors";


export const LightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: lightBlue.A400,
            contrastText: 'black'
        },
        secondary: {
            main: purple[400],
            contrastText: 'black'
        },
        error: {
            main: red[600]
        },
        warning: {
            main: yellow[600]
        },
        info: {
            main: lightBlue[300]
        },
        success: {
            main: green[700]
        },
        background: {
            default: grey[200],
            paper: grey[50]
        },
        action: {
            active: grey[900]
        }
    },
    typography: {
        allVariants: {
            // fontFamily: "sans-serif",
            // fontWeight: 'lighter',
            color: "#222"
        }
    }
});