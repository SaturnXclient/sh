import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import ChildrenPage from './pages/ChildrenPage';
import CollectionsPage from './pages/CollectionsPage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/children" element={<ChildrenPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
      </Routes>
    </div>
  );
}

export default App;