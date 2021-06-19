import { Provider as ReduxProvider } from "react-redux";
import store from "./store";
import ModalFunction from "./shared/ModalFunction";
import "./App.css";
import SimpleModalFunction from "./components/ModalFunctionDemo/ModalFunctionDemoContainer";

function App() {
  return (
    <ReduxProvider store={store}>
      <ModalFunction />
      <SimpleModalFunction />
    </ReduxProvider>
  );
}

export default App;
