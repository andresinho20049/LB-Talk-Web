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
            spacing={0}
            bgcolor={(theme) => theme.palette.background.default}
        >
            <MenuAppBar />
            {children}
        </Stack>
    )
}