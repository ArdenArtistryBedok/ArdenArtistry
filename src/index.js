import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./navbar";
// import DarkMode from "./darkmode";
// import ContactForm from "./form";
import FloatingSideButton from "./netmaid";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div>
      {/* <DarkMode /> */}
      <NavBar />
      <FloatingSideButton />
    </div>
  </>
);
