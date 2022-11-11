import { darkScrollbar, GlobalStyles } from "@mui/material";
import { AppThemeProvider } from "./context";
import { Rotas } from "./routes/Rotas";


const App = () => {
  return (
    <AppThemeProvider>
      <GlobalStyles styles={{...darkScrollbar()}} />
      <Rotas />
    </AppThemeProvider>
  );
}

export default App;
