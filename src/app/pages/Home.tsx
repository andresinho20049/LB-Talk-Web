import { Box, Typography } from "@mui/material";
import { RecordPlayer } from "../components";

export const Home = () => {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1}}>
            {/* <Typography>Home</Typography> */}
            <RecordPlayer />
        </Box>
    )
}