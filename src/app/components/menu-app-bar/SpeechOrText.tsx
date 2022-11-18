import { MouseEvent, useCallback } from "react";
import { ListItem, ListItemText, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { ModeTranscriptTypes, useLanguageContext } from "../../context";

export const SpeechOrText = () => {

    const options: ModeTranscriptTypes[] = ['Fala', 'Texto'];

    const { mode, toggleMode } = useLanguageContext();

    const handleMode = useCallback((event: MouseEvent<HTMLElement>, value: ModeTranscriptTypes) => {
        toggleMode(value);
    }, []);

    return (
        <ListItem sx={{ flexDirection: 'column' }}>
            <ListItemText>
                <Typography variant="subtitle2">
                    Modo
                </Typography>
            </ListItemText>
            <ToggleButtonGroup
                value={mode}
                exclusive
                onChange={handleMode}
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