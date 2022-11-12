import { ReactNode } from "react";
import { Box, Stack } from "@mui/material";
import { MenuAppBar } from "../menu-app-bar/MenuAppBar";

export interface ILayoutProps {
    children: ReactNode
}

export const Layout = ({children}: ILayoutProps) => {

    return (
        <Stack
            direction={'column'}
            justifyContent={'space-between'}
            alignItems={'center'}
            spacing={1}
        >
            <MenuAppBar />

            <Box flex={4} alignItems={'center'} justifyContent={'center'}>
                {children}
            </Box>
        </Stack>
    )
}