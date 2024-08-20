import React from "react";
import "./Window.css";

export default function Window({ value }) {
  return (
    <div className="result-window">
      <input type="text" className="text-input" value={value} readOnly />
    </div>
  );
}
