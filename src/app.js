import React from "react";
import ReactDOM from "react-dom";
import "./app.css";
import Time from "./time";
import Minus from "./minus";
import Plus from "./plus";
import Start from "./start";
import Reset from "./reset";

const App = () => (
    <div>
        <Time />
        <Plus />
        <Start />
        <Reset />
        <Minus />
    </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
