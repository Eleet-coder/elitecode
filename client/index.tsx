import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(<App />,document.getElementById('root'));

const rootElement: HTMLElement | null = document.getElementById("root");

if (!rootElement) throw new Error("Fail to get root element in index.ts");

const root: any = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
