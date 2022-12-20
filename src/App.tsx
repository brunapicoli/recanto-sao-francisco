import React from "react";
import { AppRoutes } from "./routes/AppRoutes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <AppRoutes />
    </React.StrictMode>
  );
}

export default App;
