import React from "react";
import PanelManager from "./components/PanelManager";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <MainLayout />
      <PanelManager />
    </div>
  );
}

export default App;
