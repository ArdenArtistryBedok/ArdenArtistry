import React from "react";
import videosource from "./Assets/HorizontalVideo.mp4";
import videosource2 from "./Assets/HorizontalVideo2.mp4";
import "./horizontalbanner.css"; // Import the CSS file

function HorizontalBanner() {
  return (
    <div className="totalContainerClass">
      <div className="flexWrapper">
        <div className="gridContainer">
          <div className="container1">
            <video
              className="videoStyle HorizontalVideo"
              loading="lazy"
              autoPlay
              muted
              playsInline
              loop
            >
              <source src={videosource} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="container2">
            <p className="textAlightLeft2 TextContent">
              At Arden, we prioritize the health and well-being of our clients
              by using hypoallergenic, low-fume glue and cruelty-free products
              free from harsh chemicals.<br></br> This makes our services ideal
              for those with sensitive skin and those who prefer vegan-friendly
              options, and your lashes are crafted from premium nano-fiber sourced
              from Korea, designed to provide ultimate comfort.<br></br> Light
              as a feather, they feel just like your own natural lashes,
              ensuring a seamless and comfortable experience.
            </p>
          </div>
        </div>
      </div>
      <div className="flexWrapper">
        <div className="gridContainer2">
          <div className="container2">
            <p className="textAlightLeft3 TextContent">
              Using hypoallergenic low fume glue and non-toxic or harsh chemical
              cruelty-free products so that it's more sensitive skin or vegan
              friendly.
              <br></br>Lashes used here are made of excellent quality nano-fiber
              from Korea that emphasize on comfort and light as if wearing your
              own.
            </p>
          </div>

          <div className="container1">
            <video
              className="videoStyle HorizontalVideo"
              autoPlay
              muted
              loading="lazy"
              playsInline
              loop
            >
              <source src={videosource2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalBanner;
