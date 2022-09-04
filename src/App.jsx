import "./App.css";
import React from "react";
import Static from "./Pages/Static";
import Navigation from "./Components/Navigation";

function App() {
  return (
      <div className="app">
        <Static />
        <Navigation />
      </div>
  );
}

export default App;
