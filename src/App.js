import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import GearShop from "./components/GearShop/GearShop";

function App() {
  return (
    <div className="App">
      <Router >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/gearshop" element={<GearShop />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
