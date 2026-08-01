// @ts-nocheck
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Templates from "./pages/Templates";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TemplateDetail from "./pages/TemplateDetail";
import Demo from "./pages/Demo";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/templates/:id" element={<TemplateDetail />} />
        <Route path="/demo/:id" element={<Demo />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;