import React, {useState, useEffect} from "react";

const [seconde, setSeconde] = useState(25 * 60);
const [paused, setPaused] = useState(true);

useEffect(() => {
    const interval = setInterval(() => {
        console.log(`${Date.now()} - paused: ${paused}`);
        if (!paused) {
            setSeconde(s => s - 1);
        }
    }, 1000);
    return () => {
        clearInterval(interval);
    };
}, [paused]);

function startTimer() {
    setPaused(false);
}
function pauseTimer() {
    setPaused(true);
}
function resetTimer() {
    setPaused(true);
    setSeconde(25 * 60);
}
return (
    <div>
        {`${Math.floor(seconde / 60)
            .toString()
            .padStart(2, "0")}:${`${seconde % 60}`
            .toString()
            .padStart(2, "0")}`}
        <button type={"button"} onClick={paused ? startTimer : pauseTimer}>
            {paused ? "Start" : "Pause"}
        </button>
        <button type={"button"} onClick={resetTimer}>
            {"Reset"}
        </button>
    </div>
);
