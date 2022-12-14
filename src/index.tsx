import React from "react";
import "./index.scss";
import "./Fonts/Fonts.scss";
import "./Utils/Colors/Colors.scss";
import ReactDOM from "react-dom/client";
import App from "./App/App";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
