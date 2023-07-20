import "./index.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@components/App";

createRoot( document.querySelectorAll( "body > div" )[ 0 ] ).render(
    <StrictMode>
        <App />
    </StrictMode>
);
