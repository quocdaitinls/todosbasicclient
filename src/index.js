import {CssBaseline} from "@mui/material";
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import App from "./App";
import AppProvider from "./context/appContext";

ReactDOM.render(
    <HashRouter>
        <CssBaseline />
        <AppProvider>
            <App />
        </AppProvider>
    </HashRouter>,
    document.getElementById("root")
);
