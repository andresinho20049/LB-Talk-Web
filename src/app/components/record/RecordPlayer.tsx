import MicIcon from '@mui/icons-material/Mic';
import StopIcon from '@mui/icons-material/Stop';
import { Box, IconButton, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useReactMediaRecorder } from "react-media-recorder";

export const RecordPlayer = () => {

    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const widthV = smDown ? 200 : 300;
    const heightV = smDown ? 36 : 54;

    const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({});
    const isRecord: boolean = status === 'recording';

    return (
        <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: widthV + 50, padding: 1, borderRadius: 5 }} elevation={4}>
            {!isRecord &&
                <>
                    <audio style={{width: widthV, height: heightV}} src={mediaBlobUrl} controls />
                    <IconButton color="primary" aria-label="Record" onClick={startRecording}>
                        <MicIcon />
                    </IconButton>
                </>
            }

            {!!isRecord &&
                <>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: widthV, height: heightV }}>
                        <Typography sx={{color: 'primary.main'}}>
                            {status}
                        </Typography>
                    </Box>
                    <IconButton color="primary" aria-label="Stop" onClick={stopRecording}>
                        <StopIcon />
                    </IconButton>
                </>
            }
        </Paper>
    )

}