import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './i18n';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import Methodology from './pages/Methodology';
import About from './pages/About';
import Vault from './pages/Vault';
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { AnimatePresence } from 'framer-motion';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const routeTitles = {
      '/': 'Lajos Maurer | Performance Growth & CRO Specialist',
      '/work': 'Case Studies & Growth Metrics | Lajos Maurer',
      '/methodology': 'Methodology & Behavioral Psychology | Lajos Maurer',
      '/about': 'Career Timeline & Tech Stack | Lajos Maurer',
      '/vault': 'Growth Vault & Marketing Resources | Lajos Maurer',
      '/resume': 'Curriculum Vitae | Lajos Maurer',
      '/blog': 'Performance Insights Blog | Lajos Maurer'
    };
    document.title = routeTitles[location.pathname] || 'Lajos Maurer | Growth Specialist';
  }, [location]);

  return (
    <>
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>
      
      <Navbar />
      
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<CaseStudies />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/about" element={<About />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </AnimatePresence>
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </Router>
  );
}
