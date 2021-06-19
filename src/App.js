import { Provider as ReduxProvider } from "react-redux";
import store from "./store";
import ModalFunction from "./shared/ModalFunction";
import "./App.css";
import Simple from "./components/ModalFunction/SimpleContainer";

function App() {
  return (
    <ReduxProvider store={store}>
      <ModalFunction />
      <Simple />
    </ReduxProvider>
  );
}

export default App;
