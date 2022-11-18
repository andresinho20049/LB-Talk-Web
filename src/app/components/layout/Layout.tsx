import { ReactNode } from "react";
import { Alert, Slide, SlideProps, Snackbar, Stack } from "@mui/material";
import { useSnackBarContext } from "../../context/SnackBarContext";
import { MenuAppBar } from "../menu-app-bar/MenuAppBar";

export interface ILayoutProps {
    children: ReactNode
}

const SnackBarApp = () => {

    const { isMsg, msg, severity, handleClose } = useSnackBarContext();

    return (
        <Snackbar
            open={isMsg}
            onClose={handleClose}
            autoHideDuration={5000}
            TransitionComponent={(props: SlideProps) => <Slide {...props} direction="up" />}
        >
            <Alert onClose={handleClose} severity={severity}>
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
            flex={1}
            bgcolor={(theme) => theme.palette.background.default}
            minHeight={'100vh'}
        >
            <MenuAppBar />
            {children}
            <SnackBarApp />
        </Stack>
    )
}