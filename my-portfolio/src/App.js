import logo from './logo.svg';
import React from "react";
import './App.css';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <main style= {{ backgroundColor: '#E9EBF8', minHeight: "100%" }}>
      <Portfolio />
      <Footer />
    </main>
  );
}

export default App;
