import { ReactNode } from "react";
import { Divider, Paper, Typography } from "@mui/material";

export interface IPaperSobreProps {
    title: string,
    subTitle: string,
    children: ReactNode
}

export const PaperSobre = ({title, subTitle, children} : IPaperSobreProps) => {
    return (
        
        <Paper
            elevation={4}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 5,
                maxWidth: 550,
                padding: 1,
                gap: 1
            }}>
            <Typography variant="h4">
                {title}
            </Typography>
            <Typography variant="h6">
                {subTitle}
            </Typography>
            <Divider />
            <Typography variant="body2" align="justify" overflow={'auto'}>
                {children}
            </Typography>

        </Paper>
    )
}