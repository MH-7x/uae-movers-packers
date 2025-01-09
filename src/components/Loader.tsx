import React from "react";
import "./loader.css";
function Loader() {
  return (
    <div className="h-screen w-full bg-white flex items-center justify-center z-[999]">
      <span className="loader"></span>
    </div>
  );
}

export default Loader;
