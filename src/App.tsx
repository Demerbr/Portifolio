import { Apresentation } from "./components/apresentation";
import { Header } from "./components/Header";
import { RepositoryProvider } from "./hooks/useRepositorymd";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <RepositoryProvider>
   <Header />
   <Apresentation />
   <GlobalStyle />
    </RepositoryProvider>
  );
}

