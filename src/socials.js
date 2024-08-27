import React from 'react';
import GoogleReviews from "./reviewCarousell";
import { ElfsightWidget } from "react-elfsight-widget";
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import "./socials.css";

function Socials() {
  return (
    <div className="flex-container">
      <div className="review-widget widgetControl">
        <GoogleReviews />
      </div>
      <ElfsightWidget widgetId="dbfb3784-ea13-4690-b66d-813e054b3388" />
      <ElfsightWidget widgetId="3c90e5ca-4a85-4877-938d-b56d810c157a" />
      <div className="whatsapp-widget widgetControl">
        <WhatsAppWidget
          phoneNumber="91525202"
          companyName="Li Ying from Arden Artistry"
          message="Hello! How can we help you?"
        />
      </div>
      {/* <iframe src='https://widgets.sociablekit.com/medium-publication-feed/iframe/25442466' style={{frameborder:'0',width:'95%',height:'1000px'}}></iframe> */}
    </div>
  );
}

export default Socials;