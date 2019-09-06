import React from "react";
import ReactDOM from "react-dom";

function Modal(props) {
    if (props.truc) {
        return ReactDOM.createPortal(
            <div id={"modal"}>
                {"Have a break, Have a Kit Kat !!"}
                <div id={"modalButttons"}>
                    <button
                        type={"button"}
                        className={"modalBtn"}
                        id={"closeModal"}>
                        {"Fermer"}
                    </button>
                    <button
                        type={"button"}
                        className={"modalBtn"}
                        id={"pauseTimer"}>
                        {"Lancer 5 minutes de pause"}
                    </button>
                </div>
            </div>,
            document.querySelector("main"),
        );
    }
    return null;
}

export default Modal;
