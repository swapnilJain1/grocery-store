import React, { useState } from "react";
import Header from "./component/Header";
import Body from "./component/Body";
import Form from "./component/Form";
import Footer from "./component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/Contact";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <BrowserRouter>
        <Header onSearchChange={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Body searchQuery={searchQuery} />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
