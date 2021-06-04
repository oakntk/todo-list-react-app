import React from "react";

export default function numberFill({ text, onDelete }) {
  return (
    <div>
      <div
        style={{
          fontSize: 20,
          background: "white",
          color: "black",
          alignItems: "center",
        }}
      >
        {text}
      </div>
      <button onClick={onDelete}>delete</button>
    </div>
  );
}