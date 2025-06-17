import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gospel from './pages/Gospel';
import Identity from './pages/Identity';
import Mission from './pages/Mission';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

function App() {
  const backgroundStyle = {
    backgroundImage: "url('/lion.png')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    backgroundSize: 'contain',
    backgroundColor: '#000',
    minHeight: '100vh',
    position: 'relative',
    color: 'white',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
     // transparent black overlay
    zIndex: 0,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
  };

  return (
    <Router>
      <Navbar />
      <div style={backgroundStyle}>
        <div style={overlayStyle}></div>
        <div style={contentStyle}>
          <div className="container py-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gospel" element={<Gospel />} />
              <Route path="/identity" element={<Identity />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
