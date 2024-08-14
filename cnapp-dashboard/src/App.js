import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CardRow from "./components/CardRow";
import Dashboard from "./components/Dashboard";
import StyledCards from "./components/StyleCard";
import SimpleCard from "./components/SimpleCard";
function App() {
  const [widgets, setWidgets] = useState([]);

  const handleAddWidget = (category) => {
    const newWidget = {
      id: widgets.length + 1,
      heading: category,
      content: `This is a widget for ${category}.`,
    };
    setWidgets([...widgets, newWidget]);
  };

  return (
    <div className="App">
      <Navbar onAddWidget={handleAddWidget} />
      <CardRow widgets={widgets} />
      <Dashboard />
      <SimpleCard />
      <StyledCards />
    </div>
  );
}

export default App;
