import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import { useEffect } from "react";
import { useVlibrasInteractive } from "../hooks/UseVlibrasInteractive";

export const Home = () => {

    const { closeWrapper } = useVlibrasInteractive();

    useEffect(() => {
        closeWrapper();
    }, []);

    return (
        <Box sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <ImageList
            variant="masonry"
            cols={1}
        >
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img src={item.img} alt={item.title} loading='lazy' />
                </ImageListItem>
            ))}
        </ImageList>
        <Typography variant="h1" sx={{
            fontFamily: 'Geneva'
        }}>
            LB Talks
        </Typography>
        </Box>
    )
}

const itemData = [
    {
        img: './img/LIBRAS-Transparent.png',
        title: 'Eu Amo Libras',
    }
];