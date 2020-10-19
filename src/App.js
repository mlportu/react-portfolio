import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';


function App() {
const [contactSelected, setContactSelected] = useState(false);
const[pages] = useState([
  {name: "Projects"},
  {name: "Resume"}
  ]);

  const[currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="App">
      <Nav
        pages = {pages}
        currentPage = {currentPage}
        setCurrentPage = {setCurrentPage}
        contactSelected = {contactSelected}
        setContactSelected = {setContactSelected}
      ></Nav>
      <main>
      {!contactSelected ? (
          <>
            <Gallery></Gallery>
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
