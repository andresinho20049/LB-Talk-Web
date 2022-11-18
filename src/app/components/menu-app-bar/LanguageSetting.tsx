import { ListItem, ListItemText, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { LanguageTypes, useLanguageContext } from "../../context";
import { MouseEvent, useCallback } from "react";

export const LanguageSetting = () => {

    const options: LanguageTypes[] = ['pt', 'en'];

    const { language, toggleLanguage } = useLanguageContext();

    const handleLanguage = useCallback((event: MouseEvent<HTMLElement>, value: LanguageTypes) => {
        toggleLanguage(value);
    }, []);

    return (
        <ListItem sx={{ flexDirection: 'column' }}>
            <ListItemText>
                <Typography variant="subtitle2">
                    Idioma
                </Typography>
            </ListItemText>
            <ToggleButtonGroup
                value={language}
                exclusive
                onChange={handleLanguage}
                size={'small'}
            >
                {
                    options.map((opt) => (
                        <ToggleButton key={opt} value={opt}>
                            <Typography variant="caption">
                                {opt}
                            </Typography>
                        </ToggleButton>
                    ))
                }
            </ToggleButtonGroup>
        </ListItem>
    )
}