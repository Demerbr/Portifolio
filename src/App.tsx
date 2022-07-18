import { Apresentation } from "./components/apresentation";
import { Header } from "./components/Header";
import { RepositoryProvider } from "./hooks/useRepository";
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

