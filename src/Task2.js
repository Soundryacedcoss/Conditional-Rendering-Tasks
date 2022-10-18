import React from "react";

export default function Colorchange(props) {
  var color = props.number;

  return (
    <div>
      {color % 2 === 0 ? (
        <div
          className="Colorchangediv"
          style={{ backgroundColor: "red" }}
        ></div>
      ) : (
        <div
          className="Colorchangediv"
          style={{ backgroundColor: "blue" }}
        ></div>
      )}
    </div>
  );
}
