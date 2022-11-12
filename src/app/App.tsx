import { darkScrollbar, GlobalStyles } from "@mui/material";
import { Layout } from "./components";
import { AppThemeProvider } from "./context";
import { Rotas } from "./routes/Rotas";


const App = () => {
  return (
    <AppThemeProvider>
      <GlobalStyles styles={{ ...darkScrollbar() }} />
      <Layout>
        <Rotas />
      </Layout>
    </AppThemeProvider>
  );
}

export default App;
