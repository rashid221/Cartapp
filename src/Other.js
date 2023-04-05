import React from "react";
import ReactDOM from "react-dom";

const Other = () => {
  return ReactDOM.createPortal(
    <h1>Other root element</h1>,
    document.getElementById("other-root")
  );
};

export default Other;

