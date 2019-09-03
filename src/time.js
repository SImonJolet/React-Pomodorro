import React from "react";
import ReactDOM from "react-dom";
import "./app.css";

const Timer = () => (
    <div>
        <h2>{"Setting the timer"} </h2>
    </div>
);

ReactDOM.render(<Timer />, document.querySelector("#root"));
