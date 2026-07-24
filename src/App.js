import React, { useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import Partnership from "./components/Partnership";
import Footer from "./components/Footer";
import ScrollDial from "./components/ScrollDial";
import "./App.css";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />
      <div className={`site ${loaded ? "site--visible" : ""}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Products />
          <WhyChooseUs />
          <Partnership />
        </main>
        <Footer />
        <ScrollDial />
      </div>
    </>
  );
}
