import React from "react";
import "../stylesheets/ClearButton.css";

function ClearButton(props) {
  return (
    <div className="clear-button" onClick={props.addInput}>
      {props.children}
    </div>
  );
}

export default ClearButton;
