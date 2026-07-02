import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';

const Home = lazy(() => import('./pages/Home'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Methodology = lazy(() => import('./pages/Methodology'));
const About = lazy(() => import('./pages/About'));
const Vault = lazy(() => import('./pages/Vault'));
const Resume = lazy(() => import('./pages/Resume'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

function AppContent() {
  return (
    <>
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>
      
      <Navbar />
      
      <AnimatePresence mode="wait">
        <Suspense fallback={<main className="min-h-screen" aria-live="polite" />}>
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
        </Suspense>
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
