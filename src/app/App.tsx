import { darkScrollbar, GlobalStyles } from "@mui/material";
import { AppThemeProvider, LanguagemProvider } from "./context";
import { SnackBarProvider } from "./context/SnackBarContext";
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
