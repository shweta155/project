import React from "react";
import "./StyledCard.css";

const StyledCards = () => {
  return (
    <>
      <h3>Registry Scan</h3>
      <div className="card-container">
        <div className="card">
          <h3 className="card-heading">Image Risk Assesment</h3>
          <p className="card-total">Total Fields: 2</p>
          <div className="range-line">
            <div className="range-segment green"></div>
            <div className="range-segment red"></div>
          </div>
          <div className="legend">
            <span className="legend-item">
              <span className="legend-color green"></span> Connected
            </span>
            <span className="legend-item">
              <span className="legend-color red"></span> Unconnected
            </span>
          </div>
        </div>

        <div className="card">
          <h3 className="card-heading">Image Security isusses</h3>
          <p className="card-total">Total Fields: 5</p>
          <div className="range-line">
            <div className="range-segment blue"></div>
            <div className="range-segment yellow"></div>
            <div className="range-segment green"></div>
            <div className="range-segment orange"></div>
            <div className="range-segment red"></div>
          </div>
          <div className="legend">
            <span className="legend-item">
              <span className="legend-color blue"></span> Critical
            </span>
            <span className="legend-item">
              <span className="legend-color yellow"></span> High
            </span>
            <span className="legend-item">
              <span className="legend-color green"></span> Low
            </span>
            <span className="legend-item">
              <span className="legend-color orange"></span> Normal
            </span>
          </div>
        </div>
        {/* <div className="card">
          <div className="widget add-widget-card">
            <div className="add-widget-card-content">
              <button className="add-widget-button">+ Add Widget</button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default StyledCards;
