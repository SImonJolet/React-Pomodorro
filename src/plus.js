import React, {useState} from "react";
function Plus() {
    const [countMin, setCountMin] = useState();
    const [countSec, setCountSec] = useState();
    return (
        <div>
            <button type={"button"} onClick={() => setCountSec(countSec + 1)}>
                {"Cliquez pour diminuer les secondes"}
            </button>
            <button type={"button"} onClick={() => setCountMin(countMin + 1)}>
                {"Cliquez pour diminuer les minutes"}
            </button>
        </div>
    );
}
export default Plus;
