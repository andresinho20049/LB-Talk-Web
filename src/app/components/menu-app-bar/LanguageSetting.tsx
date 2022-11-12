import { FormControlLabel, FormGroup, ListItem, ListItemText, Switch, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { MouseEvent, useCallback } from "react";
import { languageValues, useLanguageContext } from "../../context";

interface ILanguageSettingProps {
    isLanguage?: boolean;
}

export const LanguageSetting = ({ isLanguage = false }: ILanguageSettingProps) => {

    const options: languageValues[] = ['pt', 'en'];

    const { language, subtitle, toggleLanguage, toggleSubtitle } = useLanguageContext();

    const handleLanguage = useCallback((event: MouseEvent<HTMLElement>, value: languageValues) => {
        toggleLanguage(value);
    }, [language])

    const handleSubtitle = useCallback((event: MouseEvent<HTMLElement>, value: languageValues) => {
        toggleSubtitle(value);
    }, [subtitle])

    if (isLanguage)
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

    return (
        <ListItem sx={{ flexDirection: 'column' }}>
            <ListItemText>
                <Typography variant="subtitle2">
                    Legenda
                </Typography>
            </ListItemText>
            <ToggleButtonGroup
                value={subtitle}
                exclusive
                onChange={handleSubtitle}
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