import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';
import ContactForm from './components/Contact';


function App() {
const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="App">
      <Nav
        contactSelected = {contactSelected}
        setContactSelected = {setContactSelected}
      ></Nav>
      <main>
      {!contactSelected ? (
          <>
          <Projects></Projects>
            <About></About>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
      </main>
    </div>
  );
}

export default App;
