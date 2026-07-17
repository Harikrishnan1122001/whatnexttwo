import React from 'react';
import useReveal from './hooks/useReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Services from './components/Services';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Countdown from './components/Countdown';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const containerRef = useReveal();

  return (
    <div className="app" ref={containerRef}>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Services />
        <Timeline />
        <Gallery />
        <Testimonials />
        <Countdown />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
