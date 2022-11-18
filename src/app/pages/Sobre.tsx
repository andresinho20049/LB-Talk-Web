import { useEffect } from "react";
import { Motivacao, Proposta } from "../components";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useVlibrasInteractive } from "../hooks/UseVlibrasInteractive";

export const Sobre = () => {

    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const { closeWrapper } = useVlibrasInteractive();

    useEffect(() => {
        closeWrapper();
    }, []);

    return (
        <Box sx={
            {
                display: 'flex',
                flexDirection: smDown ? 'column' : 'row',
                justifyContent: 'center',
                alignItems: 'stretch',
                padding: 2,
                flex: 1,
                gap: 2
            }}>
            <Motivacao />
            <Proposta />
        </Box>
    )
}