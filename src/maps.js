import React from "react";
import "./Maps.css";

function Maps() {
  return (
    <div>
      <div className="maps">
        <h1>Locate Us!</h1>
        <b>
          <p>Blk 530 Bedok North Street 3, Singapore 460530</p>
        </b>
        <div className="GridMaps">
          <div className="grid1maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.949697172106!2d103.9269518!3d1.3337144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3d3abe6b9ee9%3A0xfd084e3d00c745cd!2sArden%20Artistry!5e0!3m2!1sen!2ssg!4v1724738471163!5m2!1sen!2ssg"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map 1"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maps;
