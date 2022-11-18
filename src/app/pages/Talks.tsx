import { useEffect } from "react";
import { Box } from "@mui/material"
import { useLanguageContext } from "../context";
import { RecordPlayer, TextTranslate } from "../components"
import { useVlibrasInteractive } from "../hooks/UseVlibrasInteractive";


export const Talks = () => {

    const { mode } = useLanguageContext();

    const { openWrapper } = useVlibrasInteractive();

    useEffect(() => {
        openWrapper();
    }, []);


    return (
        <Box sx={
            {
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                flex: 1,
                flexDirection: 'column',
                padding: 2
            }}>
            {mode === 'Fala' && (
                <RecordPlayer />
            )}

            {mode === 'Texto' && (
                <TextTranslate />
            )}
        </Box>
    )
}