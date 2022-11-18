import { ChangeEvent, useCallback, useState } from "react";
import { Box, Button, Divider, Paper, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useVlibrasInteractive } from "../../hooks/UseVlibrasInteractive";
import { useDobounce } from "../../hooks/UseDebounce";
import { useLanguageContext } from "../../context";


export const TextTranslate = () => {

    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const widthV: number = smDown ? 200 : 350;

    const [textInput, setTextInput] = useState<string>('');
    const { debounce } = useDobounce(1000, true);

    const { transcript, setTranscript } = useLanguageContext();

    const { readTranscript } = useVlibrasInteractive();


    const handleVLibras = useCallback((text: string) => {
        setTranscript(text);
        readTranscript(text);
    }, []);

    const handleInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTextInput(e.target.value);
        debounce(() => {
            handleVLibras(e.target.value);
        });
    }, []);

    return (

        <Paper
            elevation={4}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: widthV + 50,
                borderRadius: 5,
                padding: 1,
                gap: 1
            }}
        >
            <Box
                sx={{
                    display: !!transcript ? 'flex' : 'none',
                    flexDirection: 'column',
                    gap: 1
                }}
            >
                <Typography key={'span-transcript'} align='center' variant='h6'>
                    <Button onClick={() => handleVLibras(transcript)}>
                        {
                            //@ts-ignore
                            <vlibraswidget class="vw-text">{transcript}</vlibraswidget>
                        }
                    </Button>
                </Typography>
                <Divider />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    padding: 1
                }}
            >
                <TextField
                    value={textInput}
                    onChange={handleInput}
                    variant='filled'
                    placeholder="Escreva aqui"
                    fullWidth
                />
            </Box>

        </Paper>
    )
}