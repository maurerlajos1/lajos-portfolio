import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n';
import { Globe, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { t, toggleLanguage } = useLanguage();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `transition-all duration-200 pb-1 border-b-2 ${
      isActive ? 'text-white font-semibold border-accent' : 'text-gray-400 font-normal border-transparent hover:text-white'
    }`;
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0f]/85 backdrop-blur-md border-b border-white/10 print:hidden">
      <div className="flex justify-between items-center py-4 px-5 md:py-6 md:px-12">
        <Link to="/" className="font-bold text-lg tracking-widest text-white relative z-50">
          LAJOS<span className="text-accent">.</span>MAURER
        </Link>
        
        {/* Mobile Toggle Button */}
        <button className="flex md:hidden text-white relative z-50 items-center" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className={getLinkClass('/')}>{t('navHome') || 'Home'}</Link>
          <Link to="/work" className={getLinkClass('/work')}>{t('navWork') || 'Case Studies'}</Link>
          <Link to="/methodology" className={getLinkClass('/methodology')}>{t('navMethodology') || 'Methodology'}</Link>
          <Link to="/vault" className={getLinkClass('/vault')}>{t('navVault') || 'The Vault'}</Link>
          <Link to="/blog" className={getLinkClass('/blog')}>{t('navBlog') || 'Blog'}</Link>
          <Link to="/about" className={getLinkClass('/about')}>{t('navAbout') || 'About'}</Link>
          <Link to="/resume" className={getLinkClass('/resume')}>{t('navResume') || 'Resume'}</Link>
          <button className="bg-white/5 border border-white/10 text-white py-2 px-4 rounded-full flex items-center gap-2 text-sm font-semibold transition-all hover:bg-white/10 hover:border-white/20" onClick={toggleLanguage}>
            <Globe size={16} className="text-accent" /> {t('langToggle')}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="flex flex-col gap-5 absolute top-full left-0 right-0 h-screen bg-[#0a0a0f]/98 backdrop-blur-lg pt-8 px-6 border-t border-white/10 md:hidden">
          <Link to="/" className="text-white text-xl block border-b border-white/10 pb-3" onClick={() => setIsOpen(false)}>{t('navHome') || 'Home'}</Link>
          <Link to="/work" className="text-white text-xl block border-b border-white/10 pb-3" onClick={() => setIsOpen(false)}>{t('navWork') || 'Case Studies'}</Link>
          <Link to="/methodology" className="text-white text-xl block border-b border-white/10 pb-3" onClick={() => setIsOpen(false)}>{t('navMethodology') || 'Methodology'}</Link>
          <Link to="/vault" className="text-white text-xl block border-b border-white/10 pb-3" onClick={() => setIsOpen(false)}>{t('navVault') || 'The Vault'}</Link>
          <Link to="/blog" className="text-white text-xl block border-b border-white/10 pb-3" onClick={() => setIsOpen(false)}>{t('navBlog') || 'Blog'}</Link>
          <Link to="/about" className="text-white text-xl block border-b border-white/10 pb-3" onClick={() => setIsOpen(false)}>{t('navAbout') || 'About'}</Link>
          <Link to="/resume" className="text-white text-xl block border-b border-white/10 pb-3" onClick={() => setIsOpen(false)}>{t('navResume') || 'Resume'}</Link>
          <button className="bg-white/5 border border-white/10 text-white p-4 rounded-xl flex items-center justify-center gap-2 text-lg font-semibold mt-3" onClick={() => { toggleLanguage(); setIsOpen(false); }}>
            <Globe size={20} className="text-accent" /> {t('langToggle')}
          </button>
        </div>
      )}
    </nav>
  );
}
