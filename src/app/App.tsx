import { darkScrollbar, GlobalStyles } from "@mui/material";
import { AppThemeProvider, LanguagemProvider } from "./context";
import { Rotas } from "./routes/Rotas";


const App = () => {
  return (
    <AppThemeProvider>
      <LanguagemProvider>
        <GlobalStyles styles={{ ...darkScrollbar() }} />
        <Rotas />
      </LanguagemProvider>
    </AppThemeProvider>
  );
}

export default App;
