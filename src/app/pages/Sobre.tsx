import { Typography } from "@mui/material"
import { useEffect } from "react";
import { useLanguageContext } from "../context"
import { useVlibrasInteractive } from "../hooks/UseVlibrasInteractive";


export const Sobre = () => {

    const { closeWrapper } = useVlibrasInteractive();

    useEffect(() => {
        closeWrapper();
    }, []);

    const {language, subtitle} = useLanguageContext();

    return (
        <Typography>
            Idioma: {language} - Legenda: {subtitle}
        </Typography>
    )
}