import React, {useState} from "react";
function Minus() {
    const [countMin, setCountMin] = useState(25);
    const [countSec, setCountSec] = useState(60);
    return (
        <div>
            <button type={"button"} onClick={() => setCountSec(countSec - 1)}>
                {"Cliquez pour diminuer les secondes"}
            </button>
            <button type={"button"} onClick={() => setCountMin(countMin - 1)}>
                {"Cliquez pour diminuer les minutes"}
            </button>
        </div>
    );
}
export default Minus;
