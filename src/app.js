import React from "react";
import ReactDOM from "react-dom";
import "./app.css";
const App = () => (
    <div>
        <h1>{"Hello darkness my old friend"}</h1>
    </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
