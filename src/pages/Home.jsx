import React from 'react';
import { useLanguage } from '../i18n';
import ForecasterTool from '../ForecasterTool';
import { Globe, ShieldCheck, TrendingUp, BrainCircuit, Activity, AlertTriangle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function Home() {
  const { t } = useLanguage();

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const scrollToForecaster = () => {
    document.getElementById('forecaster')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={{ duration: 0.4 }}>
      <SEO title={t('navHome') || 'Home'} description={t('heroSubtitle')} />
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 pb-10">
        
        {/* Hero Section */}
        <header className="mt-[100px] mb-[60px] md:mt-[40px] text-center">
          <div className="inline-block bg-blue-500/10 text-blue-500 py-2 px-4 rounded-full text-sm font-bold mb-6 tracking-widest">
            {t('heroPreTitle')}
          </div>
          <h1>
            {t('heroTitle')}
          </h1>
          <p className="text-[1rem] md:text-[1.35rem] text-gray-400 max-w-[800px] mx-auto mb-10 whitespace-pre-wrap leading-relaxed">
            {t('heroSubtitle')}
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 flex-wrap">
            <Link to="/vault" className="btn-primary w-full md:w-auto max-w-[320px]">
              <span>{t('heroCtaVault')}</span>
              <ArrowRight size={18} />
            </Link>
            <button onClick={scrollToForecaster} className="btn-secondary w-full md:w-auto max-w-[320px]">
              {t('secondaryCta')}
            </button>
          </div>
        </header>

        {/* Social Proof Bar */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 flex-wrap py-6 md:py-8 border-y border-white/10 mb-[80px] opacity-80 text-center">
          <div className="flex items-center gap-3 text-gray-400"><TrendingUp size={24} className="text-blue-500"/> <span>{t('proof1')}</span></div>
          <div className="flex items-center gap-3 text-gray-400"><Globe size={24} className="text-purple-500"/> <span>{t('proof2')}</span></div>
          <div className="flex items-center gap-3 text-gray-400"><ShieldCheck size={24} className="text-emerald-500"/> <span>{t('proof3')}</span></div>
        </div>

        {/* Problem & Focus (Agitation) */}
        <section className="flex flex-col md:flex-row items-center gap-12 flex-wrap mb-[60px] md:mb-[100px] text-center md:text-left">
          <div className="flex-1 basis-[300px] min-w-0">
            <AlertTriangle className="text-red-500 mb-4 mx-auto md:mx-0" size={36} />
            <h2>{t('problemTitle')}</h2>
            <p className="whitespace-pre-wrap">
              {t('problemText')}
            </p>
          </div>
          <div className="flex-1 basis-[250px] min-w-0 max-w-full mx-auto">
            <div className="w-full max-w-[280px] aspect-square mx-auto rounded-full bg-white/10 border-2 border-[#0a0a0f] overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.15)]">
               <img src="/profile_pic.jpeg" alt="Lajos Maurer" loading="lazy" className="w-full h-full object-cover grayscale-[20%]" />
            </div>
          </div>
        </section>

        {/* Core Principles (Methodology) */}
        <section className="mb-[60px] md:mb-[100px]">
          <div className="text-center mb-12">
            <h2 className="text-gradient">{t('solutionTitle')}</h2>
          </div>
          
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-6">
            <div className="glass-panel border-t-blue-500 text-center">
              <Activity className="text-blue-500 mb-4 mx-auto" size={32} />
              <h3>{t('meth1Title')}</h3>
              <p className="whitespace-pre-wrap">{t('meth1Desc')}</p>
            </div>
            <div className="glass-panel border-t-purple-500 text-center">
              <BrainCircuit className="text-purple-500 mb-4 mx-auto" size={32} />
              <h3>{t('meth2Title')}</h3>
              <p className="whitespace-pre-wrap">{t('meth2Desc')}</p>
            </div>
          </div>
        </section>

        {/* Professional Philosophy (Intro to tool) */}
        <section className="glass-panel mb-10 text-center">
          <BrainCircuit className="text-accent mx-auto mb-6" size={48} />
          <h2>{t('anxietyTitle')}</h2>
          <p className="max-w-[700px] mx-auto">
            {t('anxietyText')}
          </p>
        </section>

        {/* Interactive Tool */}
        <section id="forecaster" className="mb-[60px] md:mb-[100px] pt-10">
          <div className="text-center mb-10">
            <h2>{t('toolSectionTitle')}</h2>
            <p>{t('toolSectionIntro')}</p>
          </div>
          <ForecasterTool />
        </section>

        {/* Circular Loop CTA: Leads to Case Studies page */}
        <section className="glass-panel text-center mb-20 bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.12)_0%,rgba(139,92,246,0.04)_100%)]">
          <TrendingUp size={40} className="text-purple-500 mx-auto mb-4" />
          <h2>{t('homeLoopTitle')}</h2>
          <p className="max-w-[700px] mx-auto mb-8">
            {t('homeLoopDesc')}
          </p>
          <Link to="/work" className="btn-primary inline-flex">
            <span>{t('homeLoopBtn')}</span>
            <ArrowRight size={18} />
          </Link>
        </section>

      </div>
    </motion.div>
  );
}
