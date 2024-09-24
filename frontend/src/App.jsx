import React from 'react';
import Navbar from './components/Navbar';
import PreviousTasks from './components/PreviousTasks';
import PersonalProjects from './components/PersonalProjects';
import Footer from './components/Footer'
import Hero from './components/Hero';


const App = () => {
  return (
    <div className="App">
     <Navbar name='Amaan Shaikh'/>
     <Hero name='Amaan Shaikh'/>
      <PreviousTasks />
      <PersonalProjects />
      <Footer name='Amaan Shaikh' />
    </div>
  );
};

export default App;
