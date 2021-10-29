import {CssBaseline} from "@mui/material";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import AppProvider from "./context/appContext";

ReactDOM.render(
    <BrowserRouter>
        <CssBaseline />
        <AppProvider>
            <App />
        </AppProvider>
    </BrowserRouter>,
    document.getElementById("root")
);
