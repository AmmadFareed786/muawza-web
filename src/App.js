import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Home from "./pages/Home";
import AboutSection from "./pages/AboutSection";
import FeaturesSection from "./pages/FeaturesSection";
import DownloadSection from "./pages/DownloadSection";
import NearMe from "./pages/NearMe";
import PrivacyPolicy from "./pages/PrivacyPolicy"; // Add this page
import ScrollToTop from "./components/ScrollToTop";
function MainLanding() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <AboutSection />
        <FeaturesSection />
        <DownloadSection />
        <NearMe />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLanding />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
