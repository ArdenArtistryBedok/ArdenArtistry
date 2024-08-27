import React from "react";
import "./contactinfo.css";
import reviewUs from "./Assets/reviewUs.png";

function ContactInfo() {
  return (
    <div className="container-wrapper contact">
      <h1>Contact Information</h1>
      <div className="body-style contactBody">
        <div className="sub-content subcontent">
          <p className="p-style">
            Phone: 9152 5202
            <br></br>
            <br></br>
            ardenartistry@gmail.com
            <br></br>
            <br></br>
            <b>
              Nearest Bus Stop: <br></br>84409 & 84401{" "}
            </b>
            <br></br>
            <br></br>
            137, 225w, 137, 225G
          </p>
        </div>

        <a href="https://www.google.com/maps/place/Arden+Artistry/@1.3337144,103.9269518,15z/data=!4m2!3m1!1s0x0:0xfd084e3d00c745cd?sa=X&ved=1t:2428&ictx=111">
          <div className="sub-content subcontent">
            <img src={reviewUs} className="review-img" alt="reviewUs" />
          </div>
        </a>
      </div>
      <h3 className="h3-style">Service Hours</h3>
      <p className="opening-time">
        <br></br>
        Monday to Friday : 11:00am to 9.00pm
        <br></br>
        Saturday: 11:00am to 3:00pm
        <br></br>
        Sunday : 11:00am to 9.00pm
        <br></br>
        Public Holidays : Closed <br />
      </p>
    </div>
  );
}

export default ContactInfo;
