import React, {useState, useEffect} from "react";
import Modal from "./modal.jsx"
export default () => {
    const [seconde, setSeconde] = useState(5);
    const [paused, setPaused] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                setSeconde(s => {
                    if (s <= 0) {
                        setPaused(true);
                        setSeconde(5*60);
                        clearInterval(interval);
                        return s;
                       
                    }
                    return s - 1;
                });
            };
            
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [paused]);

    const setPlus = () => {
        if (paused) {
            setSeconde(seconde + 60);
        }
        
    };
    const setMoins = () => {
        if (seconde >60 && paused) {
            setSeconde(seconde - 60);
        }
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
        <div className={"flexContent"}>
            <div className={"timer"}>
                {`${Math.floor(seconde / 60)
                    .toString()
                    .padStart(2, "0")}:${`${seconde % 60}`
                    .toString()
                    .padStart(2, "0")}`}
            </div>
            <div className={"bouton"}>
                {" "}
                <button id={"plusBtn"} type={"button"} onClick={setPlus}>
                    {"Ajouter 1 minute"}
                </button>
                <button
                    id={"startStopBtn"}
                    type={"button"}
                    onClick={paused ? startTimer : pauseTimer}>
                    {paused ? "Démarrer" : "Pause"}
                </button>
                <button id={"resetBtn"} type={"button"} onClick={resetTimer}>
                    {"Re-démarrer à 25:00"}
                </button>
                <button id={"moinsBtn"} type={"button"} onClick={setMoins}>
                    {"Retirer 1 minute"}
                </button>
            </div>
        </div>
    );
};
