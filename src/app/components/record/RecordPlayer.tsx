import MicIcon from '@mui/icons-material/Mic';
import StopIcon from '@mui/icons-material/Stop';
import { Box, Divider, IconButton, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useReactMediaRecorder } from "react-media-recorder";
import { useLanguageContext } from '../../context';

export const RecordPlayer = () => {

    const { transcript } = useLanguageContext();

    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const widthV = smDown ? 200 : 300;
    const heightV = smDown ? 36 : 54;

    const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({});
    const isRecord: boolean = status === 'recording';

    const playerElement = isRecord
        ? <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: widthV, height: heightV }}>
                <Typography sx={{ color: 'primary.main' }}>
                    {status}
                </Typography>
            </Box>
            <IconButton color="primary" aria-label="Stop" onClick={stopRecording}>
                <StopIcon />
            </IconButton>
        </>
        : <>
            <audio style={{ width: widthV, height: heightV }} src={mediaBlobUrl} controls />
            <IconButton color="primary" aria-label="Record" onClick={startRecording}>
                <MicIcon />
            </IconButton>
        </>


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
                <Typography align='center' variant='caption'>
                    {transcript}
                </Typography>
                <Divider />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                }}
            >
                {playerElement}
            </Box>

        </Paper>
    )

}