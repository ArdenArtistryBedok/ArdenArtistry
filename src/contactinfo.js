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
            Phone: 91525202 <br></br> <br></br> ardenartistry@gmail.com{" "}
            <br></br> <br></br>{" "}
            <b>
              {" "}
              Nearest Bus Stop: <br></br>84409 & 84401{" "}
            </b>{" "}
            <br></br> <br></br> 137, 225w, 137, 225G{" "}
          </p>
        </div>

          <div className="sub-content subcontent">
            <img src={reviewUs} className="review-img" alt="reviewUs" />
          </div>
      </div>
      <h3 className="h3-style">Service Hours</h3>
      <p className="opening-time">
          {" "}
          Sunday: 11:30am - 8:30pm <br></br> Monday: 11:30am - 8:00pm <br></br>{" "}
          Tuesday: 11:30am - 8:00pm <br></br> Wednesday: 11:30am - 8:00pm{" "}
          <br></br> Thursday 11:00am - 8:00pm <br></br> Friday 11:30am - 8:00pm{" "}
          <br></br> Saturday: 11:30am - 2:00pm{" "}
      </p>
    </div>
  );
}

export default ContactInfo;
