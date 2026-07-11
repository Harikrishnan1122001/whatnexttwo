import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import HowItWorks from "./components/HowItWorks";
import WhyUs from "./components/WhyUs";
import Enquiry from "./components/Enquiry";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Courses />
      <HowItWorks />
      <WhyUs />
      <Enquiry />
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
