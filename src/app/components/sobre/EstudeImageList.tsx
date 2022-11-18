import { ImageList, ImageListItem } from "@mui/material";

export const EstudeImageList = () => {
    return (
        <ImageList
            variant="woven"
            cols={2}
        >
            {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img src={item.img} alt={item.title} loading='lazy' />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: './img/I-Love-L.png',
        title: 'Eu Amo Libras',
        rows: 2,
        cols: 2,
    },
    {
        img: './img/alfabeto-libras-transparent.png',
        title: 'Alfabeto',
    },
    {
        img: './img/numeros-libras-transparent.png',
        title: 'Numeros',
    }
];