import { useMemo, useRef, useCallback } from 'react';
import { Box, Divider, IconButton, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useVlibrasInteractive } from '../../hooks/UseVlibrasInteractive';
import { useSpeechToText } from '../../hooks/UseSpeechToText';
import { useLanguageContext } from '../../context';
import { useRecord } from '../../hooks/UseRecord';
import StopIcon from '@mui/icons-material/Stop';
import MicIcon from '@mui/icons-material/Mic';

export const RecordPlayer = () => {

    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const widthV: number = smDown ? 200 : 350;
    const heightV: number = smDown ? 36 : 64;

    const { transcript } = useLanguageContext();
    const { audioFile, audioUrl, isRecording, startRecord, stopRecord } = useRecord();
    const { readTranscript } = useVlibrasInteractive();

    const transcriptRef = useRef<HTMLSpanElement>(null);

    const { handleSpeechToText } = useSpeechToText();

    const handleClose = useCallback(() => {
        stopRecord();
    }, [])

    useMemo(() => {

        if (!!audioFile)
            handleSpeechToText(audioFile);

    }, [audioFile]);

    useMemo(() => {
        if(!!transcript)
            readTranscript(transcript);

    }, [transcript]);

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
                <Typography key={'span-transcript'} ref={transcriptRef} align='center' variant='h6'>
                    {
                        //@ts-ignore
                        <vlibraswidget class="vw-text">{transcript}</vlibraswidget>
                    }
                </Typography>
                <Divider />
            </Box>

            <Box
                sx={{
                    display: isRecording ? 'flex' : 'none',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: widthV, height: heightV }}>
                    <Typography sx={{ color: 'primary.main' }}>
                        Recording
                    </Typography>
                </Box>
                <IconButton color="primary" aria-label="Stop" onClick={handleClose}>
                    <StopIcon />
                </IconButton>
            </Box>

            <Box
                sx={{
                    display: !isRecording ? 'flex' : 'none',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}
            >
                <audio style={{ width: widthV, height: heightV }} src={audioUrl} controls />
                <IconButton color="primary" aria-label="Record" onClick={startRecord}>
                    <MicIcon />
                </IconButton>
            </Box>

        </Paper>
    )

}