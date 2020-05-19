import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Slogan from './components/slogan/Slogan';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='portfolio'>
        < Header />
        < Main />
        < Skills />
        < Projects />
        < Slogan />
        < Contacts />
        < Footer />
      </div>
    </div>
  );
}

export default App;
