import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import GearShop from "./components/GearShop/GearShop";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/GearShop" element={<GearShop />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
