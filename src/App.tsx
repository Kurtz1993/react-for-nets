import React from "react";

import NavBar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <div className="app">
      <NavBar />
      <div className="container"></div>
    </div>
  );
};

export default App;
