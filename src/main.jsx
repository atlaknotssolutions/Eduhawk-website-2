import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import store from "./store.js";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container #root was not found in the document.");
}

createRoot(container).render(
  <Provider store={store}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Provider>,
);
