import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./challenges.css";

import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Switch } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Switch>
                <App />
            </Switch>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
