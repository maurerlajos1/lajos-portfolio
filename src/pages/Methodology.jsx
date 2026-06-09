import React from 'react';
import { useLanguage } from '../i18n';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Activity, BrainCircuit, Database, Sparkles, ArrowRight } from 'lucide-react';

export default function Methodology() {
  const { t } = useLanguage();

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={{ duration: 0.4 }}>
      <div className="max-w-[1200px] mx-auto px-5 py-16 pb-24">
        
        <header className="mb-16 text-center">
          <h1>{t('methPageTitle')}</h1>
          <p className="text-lg text-gray-400 max-w-[800px] mx-auto">
            {t('methPageSub')}
          </p>
        </header>

        <div className="flex flex-col gap-8 md:p-12 mb-20">
          
          <div className="glass-panel p-10 flex gap-8 flex-wrap">
            <div className="flex-none w-16">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                <Activity className="text-blue-500" size={32} />
              </div>
            </div>
            <div className="flex-1 basis-[200px] min-w-0">
              <h2 className="text-3xl mb-4">{t('methSection1Title') || '1. Heuristic & Qualitative Research (ResearchXL)'}</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {t('methSection1Desc')}
              </p>
            </div>
          </div>

          <div className="glass-panel p-10 flex gap-8 flex-wrap">
            <div className="flex-none w-16">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                <BrainCircuit className="text-purple-500" size={32} />
              </div>
            </div>
            <div className="flex-1 basis-[200px] min-w-0">
              <h2 className="text-3xl mb-4">{t('methSection2Title') || '2. Behavioral Psychology applied to UX'}</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {t('methSection2Desc')}
              </p>
            </div>
          </div>

          <div className="glass-panel p-10 flex gap-8 flex-wrap">
            <div className="flex-none w-16">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                <Database className="text-emerald-500" size={32} />
              </div>
            </div>
            <div className="flex-1 basis-[200px] min-w-0">
              <h2 className="text-3xl mb-4">{t('methSection3Title') || '3. Full-Funnel Attribution & Reporting'}</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {t('methSection3Desc')}
              </p>
            </div>
          </div>

        </div>

        {/* Circular Loop CTA: Leads to Vault page */}
        <div className="glass-panel p-8 md:p-12 text-center bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.12)_0%,rgba(0,0,0,0)_100%)] border border-white/10">
          <Sparkles size={32} className="text-accent mx-auto mb-4" />
          <h3 className="text-3xl mb-4">
            {t('methLoopTitle') || 'Browse Public Calculators & Frameworks'}
          </h3>
          <p className="text-gray-400 text-lg mb-8 max-w-[650px] mx-auto leading-relaxed">
            {t('methLoopDesc') || 'Get access to my curated library of over 600 verified free templates, sheets, GTM scripts, and public marketing resources.'}
          </p>
          <Link to="/vault" className="btn-primary inline-flex">
            <span>{t('methCtaVaultBtn')}</span>
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </motion.div>
  );
}
