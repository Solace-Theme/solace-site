import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Ports from "../components/Ports";

function App() {
  return (
    <main className="min-h-screen overflow-hidden font-sans text-solace-text">
      <Header />
      <Hero />
      <Ports />
      <Footer />
    </main>
  );
}

export default App;
