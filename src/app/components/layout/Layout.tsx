import { ReactNode } from "react";
import { Alert, Box, Slide, SlideProps, Snackbar, Stack } from "@mui/material";
import { MenuAppBar } from "../menu-app-bar/MenuAppBar";
import { useSnackBarContext } from "../../context/SnackBarContext";

export interface ILayoutProps {
    children: ReactNode
}

const SnackBarApp = () => {

    const { isMsg, msg, isError, handleClose } = useSnackBarContext();

    return (
        <Snackbar
            open={isMsg}
            onClose={handleClose}
            autoHideDuration={5000}
            TransitionComponent={(props: SlideProps) => <Slide {...props} direction="up" />}
        >
            <Alert onClose={handleClose} severity={isError ? 'error': 'success'}>
                {msg}
            </Alert>
        </Snackbar>
    )
}

export const Layout = ({ children }: ILayoutProps) => {

    return (
        <Stack
            direction={'column'}
            justifyContent={'space-between'}
            alignItems={'center'}
            spacing={0}
            bgcolor={(theme) => theme.palette.background.default}
            height={'100vh'}
        >
            <MenuAppBar />
            {children}
            <SnackBarApp />
        </Stack>
    )
}