import { Typography } from "@mui/material"
import { useLanguageContext } from "../context"


export const Sobre = () => {

    const {language, subtitle} = useLanguageContext();

    return (
        <Typography>
            Idioma: {language} - Legenda: {subtitle}
        </Typography>
    )
}