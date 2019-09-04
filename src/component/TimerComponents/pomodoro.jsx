import React, {useState, useEffect} from "react";

export default () => {
    const [seconde, setSeconde] = useState(25 * 60);
    const [paused, setPaused] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                setSeconde(s => s - 1);
            }
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [paused]);

    const setPlus = () => {
        setSeconde(seconde + 60);
    };
    const setMoins = () => {
        setSeconde(seconde - 60);
    };
    const startTimer = () => {
        setPaused(false);
    };
    const pauseTimer = () => {
        setPaused(true);
    };
    const resetTimer = () => {
        setPaused(true);
        setSeconde(25 * 60);
    };
    return (
        <div>
            <div class={"timer"}>
                {`${Math.floor(seconde / 60)
                    .toString()
                    .padStart(2, "0")}:${`${seconde % 60}`
                    .toString()
                    .padStart(2, "0")}`}
            </div>
            <div className="bouton">
                {" "}
                <button id={"plusBtn"} type={"button"} onClick={setPlus}>
                    {"Plus"}
                </button>
                <button
                    id={"startStopBtn"}
                    type={"button"}
                    onClick={paused ? startTimer : pauseTimer}>
                    {paused ? "Start" : "Pause"}
                </button>
                <button id={"resetBtn"} type={"button"} onClick={resetTimer}>
                    {"Reset"}
                </button>
                <button id={"moinsBtn"} type={"button"} onClick={setMoins}>
                    {"Moins"}
                </button>
            </div>
        </div>
    );
};
