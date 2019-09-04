import React from "react";
import ReactDOM from "react-dom";
import Pomodoro from "./component/TimerComponents/pomodoro";

import "./app.css";

function App() {
    return (
        <div className={"App"}>
            <Pomodoro />
        </div>
    );
}

const rootElement = document.querySelector("#root");
ReactDOM.render(<App />, rootElement);
