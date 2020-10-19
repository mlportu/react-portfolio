import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <main>
        <ContactForm></ContactForm>
        <Gallery></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
