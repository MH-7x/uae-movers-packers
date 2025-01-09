import React from "react";
import "./loader.css";
function Loader() {
  return (
    <div className="fixed top-0 left-0 h-full w-full bg-white flex items-center justify-center z-[999]">
      <span className="loader"></span>
    </div>
  );
}

export default Loader;
