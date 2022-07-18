import React from "react";
import { useNavigate } from "react-router-dom";

function Backdrop() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className={`contact-container flex-grow z-50 h-screen filter backdrop-blur-lg backdrop-opacity-60 hidden md:inline-flex`}
    ></div>
  );
}

export default Backdrop;
