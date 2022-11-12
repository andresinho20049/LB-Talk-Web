import { useCallback } from "react"
import { Button, MenuItem, Typography } from "@mui/material"
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom"


interface IMenuItemAppBar {
    to: string
    label: string
    onClick?: () => void
    isButton?: boolean
}

export const MenuItemAppBar = ({ to, label, onClick, isButton = false }: IMenuItemAppBar) => {
    const navigate = useNavigate();

    const resolverdPath = useResolvedPath(to);
    const match = useMatch({ path: resolverdPath.pathname, end: true });

    const handleClick = useCallback(() => {
        navigate(to)
        onClick?.();
    }, [to]);

    const btnReturn = isButton
        ? <Button
            onClick={handleClick}
            sx={{ my: 2, color: `${!!match ? 'secondary.main' : 'white'}`, display: 'block' }}
        >
            {label}
        </Button>
        : <MenuItem onClick={handleClick} selected={!!match}>
            <Typography textAlign="center">{label}</Typography>
        </MenuItem>

    return btnReturn;

}