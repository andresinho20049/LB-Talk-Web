import { useCallback, useState } from "react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider } from "@mui/material";
import { EstudeImageList } from "./EstudeImageList";
import { PaperSobre } from "./PaperSobre";

export const Proposta = () => {

    const [openDialog, setOpenDialog] = useState<boolean>(false);

    const handleOpenDialog = useCallback(() => {
        setOpenDialog(true);
    }, []);

    const handleCloseDialog = useCallback(() => {
        setOpenDialog(false);
    }, []);

    return (
        <>
            <PaperSobre title="Comunidade e ensino" subTitle="Programa de ensino e apoiadores">
                Nossa proposta de melhoria visa uma inclusão maior tanto aos usuários com deficiência auditiva,
                mas também a pessoas interessadas em contribuir com o projeto, nosso programa de voluntários pretende aplicar meios de incluir e expandir a comunidade
                de apoiadores.
                <br />
                <br />
                O programa inicia com a premissa de apoiadores enviar vídeos realizando traduções de palavras em libras, essa contribuição irá alimentar modelos
                de IA do VLibras e melhorar a assertividade. O projeto traduz palavras conhecidas e soletra palavras desconhecidas e com essa simples contribuição,
                podemos ajudar e contribuir com o projeto e a comunidade.
                <br />
                <br />
                E para quem tem interesse em aprender libras temos também no nosso programa de expansão um guia de estudos, aumentando o numero de pessoas apaixonados
                por libras e expandindo nossa comunidade, e quem sabe criarmos uma cultura de inclusão e respeito.
                <Box sx={{
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'flex-end'
                }}>
                    <Button onClick={handleOpenDialog}>
                        Veja
                    </Button>
                </Box>
            </PaperSobre>

            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                aria-describedby="Estude libras Dialog"
            >
                <DialogTitle>{"Alfabeto e numeros em Libras"}</DialogTitle>
                <DialogContent sx={{
                    background: (theme) => theme.palette.mode === 'dark' ? '#888' : theme.palette.background.paper
                }}>
                    <DialogContentText id="alert-dialog-slide-description">
                        Assim como o modelo de IA, quando não souber falar alguma palavra, soletre! 
                        O importante é começar.
                    </DialogContentText>
                    <Divider />
                    <EstudeImageList />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Fechar</Button>
                </DialogActions>
            </Dialog>

        </>
    )
}