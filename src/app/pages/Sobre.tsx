import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useEffect } from "react";
import { Motivacao } from "../components/sobre/Motivacao";
import { Proposta } from "../components/sobre/Proposta";
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