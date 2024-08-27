import React from "react";
import "./gridContainer.css";
import grid1 from "./Assets/GridAssets/Grid1.mp4";
import grid2 from "./Assets/GridAssets/Grid2.mp4";
// import grid3 from "./Assets/GridAssets/Grid3.mp4";
// import grid4 from "./Assets/GridAssets/Grid4.mp4";
// import grid5 from "./Assets/GridAssets/Grid5.mp4";
// import grid6 from "./Assets/GridAssets/Grid6.mp4";
// import grid7 from "./Assets/GridAssets/Grid7.mp4";
// import grid8 from "./Assets/GridAssets/Grid8.mp4";

function GridContainer() {
  const renderVideo = (src, isLazy = false) => (
    <div className="grid-container">
      <video
        src={src}
        className="grid-video"
        alt="Placeholder Video"
        muted
        autoPlay
        playsInline
        loop
        loading={isLazy ? "lazy" : undefined}
      />
    </div>
  );

  return (
    <div className="flex-wrapper">
      <div className="grid-wrapper">
        {renderVideo(grid1)}
        {renderVideo(grid2)}
      </div>
    </div>
  );
}

export default GridContainer;
