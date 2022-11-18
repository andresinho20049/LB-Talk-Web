import { AppThemeProvider, LanguagemProvider, SnackBarProvider } from "./context";
import { darkScrollbar, GlobalStyles } from "@mui/material";
import { Rotas } from "./routes/Rotas";


const App = () => {
  return (
    <AppThemeProvider>
      <SnackBarProvider>
        <LanguagemProvider>
          <GlobalStyles styles={{ ...darkScrollbar() }} />
          <Rotas />
        </LanguagemProvider>
      </SnackBarProvider>
    </AppThemeProvider>
  );
}

export default App;
