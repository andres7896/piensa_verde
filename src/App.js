import React from 'react';
import './App.css';
import Router from './services/router';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
        <Router />
      <Footer />
    </div>
  );
}

export default App;
