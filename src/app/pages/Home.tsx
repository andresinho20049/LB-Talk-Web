import { useEffect } from "react";
import { Box } from "@mui/material";
import { useAppThemeContext } from "../context";
import { useVlibrasInteractive } from "../hooks/UseVlibrasInteractive";

export const Home = () => {

    const {isDark} = useAppThemeContext();

    const { closeWrapper } = useVlibrasInteractive();

    useEffect(() => {
        closeWrapper();
    }, []);

    return (
        <Box sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <img
                src={isDark ? './img/background-dark.png' : './img/background-light.png'}
                alt='LB Talks'
                loading="lazy"
                width={'77%'}
            />
        </Box>
    )
}