import React from "react";
import "./contactinfo.css";
import reviewUs from "./Assets/reviewUs.png";

function ContactInfo() {
  return (
    <div className="container-wrapper contact">
      <h1>Contact Information</h1>
      <div className="body-style contactBody">
        <div className="sub-content subcontent">
          <p className="p-style">Phone: 96363537</p>

          <p className="p-style">
            Phone: 9152 5202 <br></br> <br></br> ardenartistry@gmail.com{" "}
            <br></br> <br></br>{" "}
            <b>
              {" "}
              Nearest Bus Stop: <br></br>84409 & 84401{" "}
            </b>{" "}
            <br></br> <br></br> 137, 225w, 137, 225G{" "}
          </p>
        </div>

        <a href="https://www.google.com/maps/place/Kuts+%26+Kurls/@1.3043651,103.9040224,15z/data=!4m2!3m1!1s0x0:0xb0d1729e18dea4c?sa=X&ved=1t:2428&ictx=111">
          <div className="sub-content subcontent">
            <img src={reviewUs} className="review-img" alt="reviewUs" />
          </div>
        </a>
      </div>
      <h3 className="h3-style">Service Hours</h3>
      <p className="opening-time">
        <p className="opening-time">
          {" "}
          Sunday: 11:30am - 8:30pm <br></br> Monday: 11:30am - 8:00pm <br></br>{" "}
          Tuesday: 11:30am - 8:00pm <br></br> Wednesday: 11:30am - 8:00pm{" "}
          <br></br> Thursday 11:00am - 8:00pm <br></br> Friday 11:30am - 8:00pm{" "}
          <br></br> Saturday: 11:30am - 2:00pm{" "}
        </p>
      </p>
    </div>
  );
}

export default ContactInfo;
