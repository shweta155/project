import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [widgets, setWidgets] = useState([
    {
      id: 1,
      title: "Cloud Accounts",
      fields: [
        { name: "Connected (2)", value: 2, color: "#4caf50" },
        { name: "Unconnected (2)", value: 2, color: "#f44336" },
      ],
    },
    {
      id: 2,
      title: "Cloud Acoount Risk Assesment",
      fields: [
        { name: "Failed (1689)", value: 1689, color: "#4caf50" },
        { name: "Warning (681)", value: 681, color: "#f44336" },
        { name: "Not Availabe (36)", value: 36, color: "#ffeb3b" },
        { name: "Passed (7253)", value: 7253, color: "#2196f3" },
      ],
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddWidget = () => {
    setShowAddForm(true);
  };

  const handleSaveWidget = (title, fields) => {
    const fieldArray = fields.split(",").map((field, index) => ({
      name: `Field ${index + 1}`,
      value: parseInt(field),
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // random color
    }));
    setWidgets([
      ...widgets,
      { id: widgets.length + 1, title, fields: fieldArray },
    ]);
    setShowAddForm(false);
  };

  const handleCancel = () => {
    setShowAddForm(false);
  };

  const calculateDashArray = (widget) => {
    const total = widget.fields.reduce((acc, field) => acc + field.value, 0);
    return widget.fields.map((field) => (field.value / total) * 100);
  };

  const renderWidgetContent = (widget) => {
    const total = widget.fields.reduce((acc, field) => acc + field.value, 0);
    const dashArray = calculateDashArray(widget);

    let cumulativePercentage = 0;

    return (
      <div className="widget-content">
        <div className="circle-range">
          <svg viewBox="0 0 36 36" className="circle">
            {widget.fields.map((field, index) => {
              const dashOffset = 100 - cumulativePercentage;
              cumulativePercentage += dashArray[index];
              return (
                <circle
                  key={index}
                  className="circle-segment"
                  stroke={field.color}
                  strokeDasharray={`${dashArray[index]} ${
                    100 - dashArray[index]
                  }`}
                  strokeDashoffset={dashOffset}
                  cx="18"
                  cy="18"
                  r="15.91549431"
                  fill="transparent"
                  strokeWidth="2"
                />
              );
            })}
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="8"
              fill="#000"
            >
              {total}
            </text>
          </svg>
        </div>
        <div className="legend">
          {widget.fields.map((field, index) => (
            <div key={index} className="legend-item">
              <span
                className="color-box"
                style={{ backgroundColor: field.color }}
              ></span>
              <span>{field.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="dashboard">
      <h3>CSPM Executive Dashboard</h3>
      <div className="widgets">
        {widgets.map((widget) => (
          <div key={widget.id} className="widget">
            <h3>{widget.title}</h3>
            {renderWidgetContent(widget)}
          </div>
        ))}
        <div className="widget add-widget-card">
          <div className="add-widget-card-content">
            <button className="add-widget-button" onClick={handleAddWidget}>
              + Add Widget
            </button>
          </div>
        </div>
      </div>
      {showAddForm && (
        <div className="add-widget-form">
          <input type="text" placeholder="Widget Title" id="widgetTitle" />
          <input
            type="text"
            placeholder="Fields (comma-separated)"
            id="widgetFields"
          />
          <div className="form-buttons">
            <button
              className="save-widget-button"
              onClick={() =>
                handleSaveWidget(
                  document.getElementById("widgetTitle").value,
                  document.getElementById("widgetFields").value
                )
              }
            >
              Save
            </button>
            <button className="cancel-widget-button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
