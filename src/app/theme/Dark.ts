import { createTheme } from "@mui/material";
import { green, grey, lightBlue, purple, red, yellow } from "@mui/material/colors";


export const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: lightBlue.A400,
            contrastText: '#fff'
        },
        secondary: {
            main: purple[400],
            contrastText: '#fff'
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
            default: '#202124',
            paper: '#303134'
        },
        action: {
            active: grey[50]
        }
    },
    typography: {
        allVariants: {
            color: "#fff"
        }
    }
});