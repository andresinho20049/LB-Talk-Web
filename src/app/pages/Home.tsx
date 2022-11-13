import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useVlibrasInteractive } from "../hooks/UseVlibrasInteractive";

export const Home = () => {

    const { closeWrapper } = useVlibrasInteractive();

    useEffect(() => {
        closeWrapper();
    }, []);

    return (
        <Box sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', flex: 1, flexDirection: 'column'}}>
            <Typography>Home</Typography>
        </Box>
    )
}