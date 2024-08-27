import React from "react";
import SplineElement from "./splineElement";
import "./splice.css";

function SpliceElement() {
  return (
    <div>
      <div className="container-wrapper">
        <div className="spline-container splineContainer">
          <div className="darkmodeContainer">
          </div>
          <SplineElement />
        </div>
      </div>
    </div>
  );
}

export default SpliceElement;