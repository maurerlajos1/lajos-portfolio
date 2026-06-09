import React from 'react';
import { useLanguage } from '../i18n';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, GraduationCap, Layout, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const { t } = useLanguage();

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const certifications = [
    "Google Ads Search Certification",
    "Google Analytics Individual Qualification",
    "CXL: Intro to Data and Analytics", "CXL: Statistics for A/B Testing",
    "CXL: Building a Strong Growth Process", "CXL: Creating a Conversion Research System"
  ];

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={{ duration: 0.4 }}>
      <div className="max-w-[1200px] mx-auto px-5 py-16 pb-24">
        
        <header className="mb-16 text-center">
          <h1>{t('navAbout') || 'About Me'}</h1>
          <p className="text-lg text-gray-400">
            {t('aboutSub') || 'The timeline, stack, and philosophy behind the results.'}
          </p>
        </header>

        {/* Story Section */}
        <div className="glass-panel p-8 md:p-8 md:p-12 mb-16 relative overflow-hidden group">
          <div className="flex flex-col md:flex-row gap-8 md:p-12 items-center">
            <div className="w-full max-w-[300px] shrink-0">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.15)] relative">
                <img src="/profile_pic.jpeg" alt="Lajos Maurer" loading="lazy" className="w-full h-full object-cover grayscale-[10%]" />
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-3xl mb-6">Lajos Maurer</h2>
              <h3 className="text-xl text-blue-500 mb-6">{t('rolePerformance')}</h3>
              
              <div className="text-gray-400 leading-relaxed flex flex-col gap-4">
                <p>{t('aboutStoryP1') || 'I started in this industry not as a marketer, but as an observer of human behavior. I noticed that companies were pouring thousands into traffic, but entirely ignoring the psychological experience of the user once they clicked.'}</p>
                <p>{t('aboutStoryP2') || 'Over the years, I developed a hybrid approach: part behavioral psychology, part rigorous data science. I don\'t believe in "best practices". I believe in server-side tracking, bulletproof attribution, and systematic A/B testing.'}</p>
                <p>{t('aboutStoryP3') || 'Today, I engineer growth engines for businesses that are ready to stop guessing and start measuring.'}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Tech Stack */}
          <div className="glass-panel p-8">
            <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
              <Layout className="text-blue-500" size={28} />
              <h3 className="text-2xl m-0">{t('aboutStackTitle') || 'The Tech Stack'}</h3>
            </div>
            
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="text-white mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> {t('stackAcquisition') || 'Paid Acquisition'}</h4>
                <p className="text-gray-400">Google Ads (Search, PMax, Display), Facebook Ads, LinkedIn Ads, TikTok Ads</p>
              </div>
              <div>
                <h4 className="text-white mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-purple-500"></span> {t('stackTracking') || 'Tracking & Analytics'}</h4>
                <p className="text-gray-400">Google Tag Manager (Client & Server-Side), Google Analytics 4, Looker Studio, Stape.io</p>
              </div>
              <div>
                <h4 className="text-white mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> {t('stackCro') || 'CRO & UX'}</h4>
                <p className="text-gray-400">VWO, Optimizely, Clarity, Hotjar, Figma, React / Tailwind (For rapid prototyping)</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="glass-panel p-8">
            <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
              <GraduationCap className="text-emerald-500" size={28} />
              <h3 className="text-2xl m-0">{t('aboutCertTitle') || 'Certifications & Training'}</h3>
            </div>
            
            <ul className="flex flex-col gap-4">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-400">
                  <span className="text-emerald-500 mt-1 shrink-0">✓</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Circular Loop CTA: Leads to Home */}
        <div className="glass-panel p-8 md:p-12 text-center bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1)_0%,rgba(0,0,0,0)_100%)]">
          <BookOpen size={40} className="text-emerald-500 mx-auto mb-4" />
          <h2 className="text-3xl mb-4">
            {t('aboutLoopTitle') || 'Ready to scale your systems?'}
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-[650px] mx-auto leading-relaxed">
            {t('aboutLoopDesc') || 'Explore the interactive forecaster on the homepage to see exactly what a 15% bump in conversion rate does to your bottom line.'}
          </p>
          <Link to="/" className="btn-primary inline-flex">
            <span>{t('aboutLoopBtn') || 'Back to Homepage'}</span>
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </motion.div>
  );
}
