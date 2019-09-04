import React, {useState} from "react";
function Timer() {
    const [sec, setSec] = useState(25 * 60);
    return (
        <div>
            <button type={"button"} onClick={() => setSec(sec - 1)}>
                {"Cliquez pour diminuer les secondes"}
            </button>

            <h2>{sec}</h2>
        </div>
    );
}
export default Timer;
