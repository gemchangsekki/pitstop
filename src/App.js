import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import GearShop from "./components/GearShop/GearShop";
import PartsStore from "./components/PartsStore/PartsStore";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL} >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/gearshop" element={<GearShop />} />
          <Route path="/partsstore"element={<PartsStore/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
