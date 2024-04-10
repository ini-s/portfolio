import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles/App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <HomePage />
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
