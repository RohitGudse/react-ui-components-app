import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import ContactForm from "./components/ContactForm";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <SearchBar />
      <Sidebar />
      <ProductList />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;