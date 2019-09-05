import React, {Component} from "react";
import ReactDOM from "react-dom";

function Modal (props) {
    if (props.show) {

    
    return ReactDOM.createPortal(
    <div id={"modal"}>
        {"Have a break, Have a Kit Kat !!"}
        <button type={"modalBtn"} className={"modalBtn"} id={"closeModal"}>Fermer</button>
        <button type={"modalBtn"} className={"modalBtn"} id={"pauseTimer"}>Lancer 5 minutes de pause</button>

    
    </div>, document.body)
    }
    return null;
}


export default Modal;