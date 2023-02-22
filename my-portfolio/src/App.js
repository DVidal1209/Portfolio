import logo from './logo.svg';
import React from "react";
import './App.css';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { useEffect } from 'react';

function Title() {
  useEffect(() => {
    document.title = 'Daniel Vidal Portfolio';
  }, []);
}

function App() {
  return (
    <main style= {{ backgroundColor: '#E9EBF8', minHeight: "100%" }}> 
      <Title />
      <Portfolio />
      <Footer />
    </main>
  );
}

export default App;
