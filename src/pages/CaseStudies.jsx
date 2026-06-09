import React from 'react';
import { useLanguage } from '../i18n';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Users, BarChart, ArrowRight, Activity } from 'lucide-react';

export default function CaseStudies() {
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
          <h1>{t('caseStudiesTitle')}</h1>
          <p className="text-lg text-gray-400">
            {t('caseStudiesSub')}
          </p>
        </header>

        {/* Global Career Metrics */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-6 mb-16">
          <div className="glass-panel p-8 text-center">
            <Target size={32} className="text-blue-500 mx-auto mb-4" />
            <h4 className="mb-2 text-gray-400 text-base uppercase tracking-widest">{t('caseMetricCampaigns') || 'Campaigns'}</h4>
            <p className="text-3xl font-bold">{t('caseMetricCampaignsVal') || '100+ Successful'}</p>
          </div>
          <div className="glass-panel p-8 text-center">
            <BarChart size={32} className="text-emerald-500 mx-auto mb-4" />
            <h4 className="mb-2 text-gray-400 text-base uppercase tracking-widest">{t('caseMetricSpend') || 'Managed Spend'}</h4>
            <p className="text-3xl font-bold">{t('caseMetricSpendVal') || '$500,000+'}</p>
          </div>
          <div className="glass-panel p-8 text-center">
            <Activity size={32} className="text-amber-500 mx-auto mb-4" />
            <h4 className="mb-2 text-gray-400 text-base uppercase tracking-widest">{t('caseMetricAvgBudget') || 'Avg Monthly Budget'}</h4>
            <p className="text-3xl font-bold">{t('caseMetricAvgBudgetVal') || '$20,000+'}</p>
          </div>
          <div className="glass-panel p-8 text-center">
            <Users size={32} className="text-purple-500 mx-auto mb-4" />
            <h4 className="mb-2 text-gray-400 text-base uppercase tracking-widest">{t('caseMetricProjects') || 'Projects'}</h4>
            <p className="text-3xl font-bold">{t('caseMetricProjectsVal') || '70+ Completed'}</p>
          </div>
        </div>

        {/* Case Study 1: Bproduction */}
        <div className="glass-panel mb-12 p-10">
          <div className="flex justify-between items-start flex-wrap gap-4 mb-6">
            <div>
              <h2 className="text-3xl mb-2">Bproduction <span className="text-blue-500">{t('caseAgency') || 'Agency'}</span></h2>
              <p className="text-gray-400 text-lg">{t('roleOnlineMarketing')}</p>
            </div>
          </div>
          
          <h3 className="text-xl mb-4">{t('caseApproachTitle')}</h3>
          <ul className="text-gray-400 leading-relaxed pl-5 list-disc marker:text-blue-500">
            <li className="mb-3">{t('caseBprodL1')}</li>
            <li className="mb-3">{t('caseBprodL2')}</li>
            <li className="mb-3">{t('caseBprodL3')}</li>
            <li className="mb-3">{t('caseBprodL4')}</li>
          </ul>
        </div>

        {/* Case Study 2: Click Brains */}
        <div className="glass-panel mb-16 p-10">
          <div className="flex justify-between items-start flex-wrap gap-4 mb-6">
            <div>
              <h2 className="text-3xl mb-2">Click Brains</h2>
              <p className="text-gray-400 text-lg">{t('rolePpcManager')}</p>
            </div>
            <div className="bg-emerald-500/10 text-emerald-500 py-2 px-4 rounded-full font-bold">
              {t('caseClickTag') || 'Conversion Optimized'}
            </div>
          </div>
          
          <h3 className="text-xl mb-4">{t('caseApproachTitle')}</h3>
          <ul className="text-gray-400 leading-relaxed pl-5 list-disc marker:text-emerald-500">
            <li className="mb-3">{t('caseClickL1')}</li>
            <li className="mb-3">{t('caseClickL2')}</li>
            <li className="mb-3">{t('caseClickL3')}</li>
          </ul>
        </div>

        {/* Circular Loop CTA: Leads to Methodology page */}
        <div className="glass-panel p-8 md:p-12 text-center bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.12)_0%,rgba(0,0,0,0)_100%)] border border-white/10">
          <h3 className="text-3xl mb-4">
            {t('caseLoopTitle') || 'The Methodology Behind The Metrics'}
          </h3>
          <p className="text-gray-400 text-lg max-w-[650px] mx-auto mb-8 leading-relaxed">
            {t('caseLoopDesc') || 'Read about the specific heuristic audit processes, behavioral models, and technical measurement systems that drive these metrics.'}
          </p>
          <Link to="/methodology" className="btn-primary inline-flex">
            <span>{t('caseLoopBtn') || 'Explore Methodology'}</span>
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </motion.div>
  );
}
