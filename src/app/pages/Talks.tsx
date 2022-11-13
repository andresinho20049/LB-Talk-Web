import { Box } from "@mui/material"
import { useEffect } from "react";
import { RecordPlayer } from "../components"
import { useVlibrasInteractive } from "../hooks/UseVlibrasInteractive";


export const Talks = () => {

    const { openWrapper } = useVlibrasInteractive();

    useEffect(() => {
        openWrapper();
    }, []);


    return (
        <Box sx={
            {display: 'flex', 
            justifyContent: 'flex-end', 
            alignItems: 'center', 
            flex: 1, 
            flexDirection: 'column',
            padding: 2
        }}> 
            <RecordPlayer />
        </Box>
    )
}