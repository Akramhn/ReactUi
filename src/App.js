import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ListActualitites from './components/Actualitites/ListActualitites';
import Home from './components/Home';
import About from './components/About';
import Terms from './components/Terms';

import ActualiteDetails from './components/Actualitites/ActualiteDetails';
import { ActualitesProvider } from './components/Actualitites/ActualitesContext';

const App = () => {
  return (
    <ActualitesProvider> 
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/terms" element={<Terms />} />
              
             
              <Route path="/actualite" element={<ListActualitites />} />
              
        
              <Route path="/actualite/:id" element={<ActualiteDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ActualitesProvider>
  );
};

export default App;
