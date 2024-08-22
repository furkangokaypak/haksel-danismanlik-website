import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Hakkımızda from "./components/Hakkımızda";
import İletisim from "./components/İletisim";
import { Routes, Route } from "react-router-dom";
import Vizyonumuz from "./components/Vizyonumuz";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkımızda" element={<Hakkımızda />} />
          <Route path="/contact" element={<İletisim></İletisim>} />
          <Route path="/vision" element={<Vizyonumuz></Vizyonumuz>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
