import React from "react";
import Listings from "./listings";
import Maps from "./maps";
import "./Midsection.css";

function Midsection() {
  return (
    <div className="container-wrapper">
      <div className="grid-wrapper">
        <Listings />
        <Maps />
      </div>
    </div>
  );
}

export default Midsection;
