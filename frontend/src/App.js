import React from "react";
import { createGlobalStyle } from "styled-components";

import Routes from "./routes";

const GlobalStyle = createGlobalStyle`
  body {
    background: #f0f0f5;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea {
    font-size: 18px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
