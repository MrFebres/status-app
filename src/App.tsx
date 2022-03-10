import { ApiContextProvider } from "./context";
import Main from "./main";

const App = () => {
  return (
    <ApiContextProvider>
      <Main />
    </ApiContextProvider>
  );
}

export default App;
