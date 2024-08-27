import React, { useEffect } from 'react';
import './quote.css';
import quoteImage from "./Assets/quote.png";

function Quote() {
  useEffect(() => {
    const img = new Image();
    img.src = quoteImage;
  }, []);

  return (
    <>
      <link rel="preload" as="image" href={quoteImage} />
      <div className="container-wrapper">
        <img src={quoteImage} className="quote-image" alt="quote" />
      </div>
    </>
  );
}

export default Quote;