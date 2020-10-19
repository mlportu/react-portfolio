import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Resume from './components/Resume';


function App() {
const [contactSelected, setContactSelected] = useState(false);
const [resumeSelected, setResumeSelected] = useState(false);
  

  return (
    <div className="App">
      <Nav
        resumeSelected = {resumeSelected}
        setResumeSelected = {setResumeSelected}
        contactSelected = {contactSelected}
        setContactSelected = {setContactSelected}
      ></Nav>
      <main>
      {!contactSelected && !resumeSelected ? (
          <>
            <Gallery></Gallery>
            <About></About>
          </>
        ) : !contactSelected && resumeSelected ? (
          <Resume></Resume>
        ) : (
          <ContactForm></ContactForm>
        )}
      
      </main>
    </div>
  );
}

export default App;
