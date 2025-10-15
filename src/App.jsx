import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landingpage } from "./Components/Landingpage";
import { ProductSelection } from "./Components/ProductSelection";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/product-selection" element={<ProductSelection />} />
      </Routes>
    </Router>
  );
}

export default App;
