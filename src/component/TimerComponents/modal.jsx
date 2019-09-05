import React, {Component} from "react";

class Modal extends Component {
render() {
    let dialog = (  <div className={"modalBox"}>
            <div id={"modalText"}>{this.props.children} </div>
        
            <button type={"modalBtn"} className={"modalBtn"} id={"closeModal"}>Fermer</button>
            <button type={"button"} className={"modalBtn"} id={"pauseTimer"}>Lancer 5 minutes de pause</button>
        </div>);
       
    return (
      <div>
      {dialog}
      </div>
        
    )
}
}

export default Dialog;