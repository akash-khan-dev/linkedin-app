import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import firebaseConfig from "./Dbconnection/FirebaseConfig.js";
import { Provider } from "react-redux";
import { Store } from "./Feature/Store/Store.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={Store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
