import { MenuItem, Typography } from "@mui/material"
import { ReactNode, useCallback } from "react"
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom"


interface IMenuItemAppBar {
    to: string
    label: string
    onClick?: () => void
}

export const MenuItemAppBar = ({ to, label, onClick }: IMenuItemAppBar) => {
    const navigate = useNavigate();

    const resolverdPath = useResolvedPath(to);
    const match = useMatch({ path: resolverdPath.pathname, end: false });

    const handleClick = useCallback(() => {
        navigate(to)
        onClick?.();
    }, [to]);

    return (
        <MenuItem onClick={handleClick}>
        <Typography textAlign="center">{label}</Typography>
      </MenuItem>
    )


}