import React from "react";
import "./listings.css";
import menu from "./Assets/menu.jpeg";
import LashServicesTable from "./services.js";

function Listings() {
  return (
    <div className="container-wrapper">
      <h1 className="title">Price List</h1>
      <div className="menu-container">
        <img
          src={menu}
          style={{ width: "80%" }}
          alt="Menu"
          className="menu-image"
        />
      </div>
      <div className="canva-embed">
        <iframe
          loading="lazy"
          className="canva-iframe"
          src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGPB0sTBNc&#x2F;-iY2865bmw103Cbz2nyfAg&#x2F;view?embed" 
          title="Car Listings"
          allowFullScreen
          allow="fullscreen"
        ></iframe>
      </div>
      <LashServicesTable />
    </div>
  );
}

export default Listings;