import React from "react";
import "./CArdRow.css";

const CardRow = ({ widgets }) => {
  return (
    <div className="card-container">
      {widgets.map((widget) => (
        <div key={widget.id} className="card">
          <h3 className="card-heading">{widget.heading}</h3>
          <p>{widget.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CardRow;
