import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

function SplineElement() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate defer by loading the scene after the component mounts
    setIsLoaded(true);
  }, []);

  return (
    <>
      {isLoaded && (
    <Spline loading="lazy" scene="https://prod.spline.design/JTdbMQ7PErPK4Nm6/scene.splinecode" />

  )}
    </>
  );
}

export default SplineElement;
