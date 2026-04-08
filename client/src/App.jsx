import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import EquipmentAndMachinery from "./pages/EquipmentAndMachinery";
import BuildingMaterials from "./pages/BuildingMaterials";
import Construction from "./pages/Construction";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/equipment" element={<EquipmentAndMachinery />} />
        <Route path="/materials" element={<BuildingMaterials />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
