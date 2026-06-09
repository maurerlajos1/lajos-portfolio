import React from 'react';
import { useLanguage } from '../i18n';
import { motion } from 'framer-motion';
import { Printer, Mail, MapPin, Globe, Phone, ExternalLink, Download } from 'lucide-react';

export default function Resume() {
  const { t, lang } = useLanguage();

  const handlePrint = () => {
    window.print();
  };

  const certifications = [
    "Google Ads Search Certification",
    "Google Ads Display Certification",
    "Google Ads Video Certification",
    "Shopping Ads Certification",
    "Google Analytics Individual Qualification",
    "CXL: Intro to Data and Analytics",
    "CXL: Statistics for A/B Testing",
    "CXL: Intermediate Google Analytics",
    "CXL: Building a Strong Growth Process",
    "CXL: Forecasting and Analytics for Marketers",
    "CXL: Creating a Conversion Research System",
    "Grow Hungary with Google: Analytics Training"
  ];

  const metrics = [
    { label: t('caseMetricSpend'), value: t('caseMetricSpendVal') },
    { label: t('caseMetricCampaigns'), value: t('caseMetricCampaignsVal') },
    { label: t('caseMetricProjects'), value: t('caseMetricProjectsVal') }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="resume-container pb-24">
      {/* Action Buttons (Hidden on Print) */}
      <div className="max-w-[850px] mx-auto px-5 pt-8 print:hidden flex justify-end gap-4">
        <button 
          onClick={handlePrint}
          className="btn-secondary flex items-center gap-2 bg-white/5 hover:bg-white/10"
        >
          <Printer size={18} />
          <span>{t('resumePrint') || 'Print'}</span>
        </button>
        
        <a 
          href={lang === 'hu' ? "/Lajos_Maurer_CV_HU.pdf" : "/Lajos_Maurer_CV.pdf"} 
          download={lang === 'hu' ? "Lajos_Maurer_CV_HU.pdf" : "Lajos_Maurer_CV.pdf"}
          className="btn-primary flex items-center gap-2"
        >
          <Download size={18} />
          <span>{t('resumeDownload') || 'Download PDF'}</span>
        </a>
      </div>

      <div className="max-w-[850px] mx-auto px-5 py-8">
        <div className="resume-paper p-8 md:p-12 glass-panel print:p-0 print:border-none print:shadow-none print:bg-transparent">
          
          {/* Header */}
          <header className="border-b border-white/10 print:border-black/20 pb-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 print:text-black">Lajos Maurer</h1>
            <h2 className="text-xl md:text-2xl text-blue-500 print:text-gray-600 mb-6 font-medium">
              {t('rolePerformance')}
            </h2>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1.5"><MapPin size={16} /> Hatvan, Hungary</span>
              <span className="flex items-center gap-1.5 hover:text-white transition-colors text-inherit">
                <Phone size={16} /> <a href="tel:+36302685650" className="no-underline text-inherit">+36 30 268 5650</a>
              </span>
              <span className="flex items-center gap-1.5 hover:text-white transition-colors text-inherit">
                <Mail size={16} /> <a href={`mailto:${t('contactEmail')}`} className="no-underline text-inherit">{t('contactEmail')}</a>
              </span>
              <span className="flex items-center gap-1.5 hover:text-white transition-colors text-inherit">
                <Globe size={16} /> <a href="https://linkedin.com/in/maurer-lajos-a46300126/" target="_blank" rel="noopener noreferrer" className="no-underline text-inherit">linkedin.com/in/maurer-lajos-a46300126/</a>
              </span>
              <span className="flex items-center gap-1.5 hover:text-white transition-colors text-inherit">
                <ExternalLink size={16} /> <a href="https://maurerlajos.com" target="_blank" rel="noopener noreferrer" className="no-underline text-inherit">maurerlajos.com</a>
              </span>
            </div>
          </header>

          {/* Professional Profile */}
          <section className="mb-10">
            <h3 className="text-xl uppercase tracking-wider font-bold mb-4 print:text-black">{t('resumeProfileTitle')}</h3>
            <p className="text-gray-300 print:text-gray-800 leading-relaxed text-[1.05rem]">
              {t('resumePositioning')}
            </p>
          </section>

          {/* Core Competencies */}
          <section className="mb-10">
            <h3 className="text-xl uppercase tracking-wider font-bold mb-4 print:text-black">{t('resumeCoreSkills')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
              <div className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">▸</span>
                <span className="text-gray-300 print:text-gray-800">{t('skillCRO')}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">▸</span>
                <span className="text-gray-300 print:text-gray-800">{t('skillResearch')}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">▸</span>
                <span className="text-gray-300 print:text-gray-800">{t('skillTracking')}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">▸</span>
                <span className="text-gray-300 print:text-gray-800">{t('skillPPC')}</span>
              </div>
            </div>
          </section>

          {/* Tools & Technical Skills */}
          <section className="mb-10">
            <h3 className="text-xl uppercase tracking-wider font-bold mb-4 print:text-black">{t('resumeTechTitle')}</h3>
            <ul className="text-gray-300 print:text-gray-800 list-disc list-inside space-y-2 text-sm">
              <li><span className="font-semibold text-gray-200 print:text-black">Analytics & Tracking:</span> GA4, Google Tag Manager, Server-side & Client-side GTM, Looker Studio, Power BI, Conversion Tracking</li>
              <li><span className="font-semibold text-gray-200 print:text-black">Platforms & Software:</span> WordPress, WooCommerce, Shoprenter, Unas, Ahrefs, Mailchimp, HubSpot, Salesforce, Canva</li>
              <li><span className="font-semibold text-gray-200 print:text-black">Web & Automation:</span> HTML, CSS, JavaScript, Python, SQL</li>
            </ul>
          </section>

          {/* Professional Experience */}
          <section className="mb-10">
            <h3 className="text-xl uppercase tracking-wider font-bold mb-6 print:text-black">{t('resumeExperience')}</h3>
            
            {/* Freelance */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h4 className="text-lg font-bold print:text-black">Freelance</h4>
                <span className="text-blue-500 print:text-gray-600 font-mono text-sm">{t('roleFreelance').match(/\(([^)]+)\)/)?.[1] || 'Aug 2025 - Present'}</span>
              </div>
              <div className="text-gray-400 print:text-gray-600 text-sm mb-4 uppercase tracking-wide">
                {t('roleFreelance').split(' (')[0]}
              </div>
              <ul className="text-gray-300 print:text-gray-800 pl-5 list-disc marker:text-gray-600 space-y-2">
                <li>{t('caseFreeL1')}</li>
                <li>{t('caseFreeL2')}</li>
              </ul>
            </div>

            {/* Click Brains */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h4 className="text-lg font-bold print:text-black">Click Brains</h4>
                <span className="text-blue-500 print:text-gray-600 font-mono text-sm">{t('rolePpcManager').match(/\(([^)]+)\)/)?.[1] || '2024 - 2025'}</span>
              </div>
              <div className="text-gray-400 print:text-gray-600 text-sm mb-4 uppercase tracking-wide">
                {t('rolePpcManager').split(' (')[0]}
              </div>
              <ul className="text-gray-300 print:text-gray-800 pl-5 list-disc marker:text-gray-600 space-y-2">
                <li>{t('caseClickL1')}</li>
                <li>{t('caseClickL2')}</li>
                <li>{t('caseClickL3')}</li>
              </ul>
            </div>

            {/* Bproduction */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h4 className="text-lg font-bold print:text-black">Bproduction Agency</h4>
                <span className="text-blue-500 print:text-gray-600 font-mono text-sm">{t('roleOnlineMarketing').match(/\(([^)]+)\)/)?.[1] || '2020 - 2024'}</span>
              </div>
              <div className="text-gray-400 print:text-gray-600 text-sm mb-4 uppercase tracking-wide">
                {t('roleOnlineMarketing').split(' (')[0]}
              </div>
              <ul className="text-gray-300 print:text-gray-800 pl-5 list-disc marker:text-gray-600 space-y-2">
                <li>{t('caseBprodL1')}</li>
                <li>{t('caseBprodL2')}</li>
                <li>{t('caseBprodL3')}</li>
                <li>{t('caseBprodL4')}</li>
              </ul>
            </div>
          </section>

          {/* Metrics Highlights */}
          <section className="mb-10">
            <h3 className="text-xl uppercase tracking-wider font-bold mb-4 print:text-black">{t('resumeMetrics')}</h3>
            <div className="flex flex-wrap gap-4">
              {metrics.map((m, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 print:bg-gray-100 print:border-gray-300 px-4 py-2 rounded-lg flex gap-2 items-baseline">
                  <span className="font-bold print:text-black">{m.value}</span>
                  <span className="text-sm text-gray-400 print:text-gray-600 uppercase tracking-wide">{m.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Education & Certs */}
          <section>
            <h3 className="text-xl uppercase tracking-wider font-bold mb-4 print:text-black">{t('resumeEducation')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-gray-500 print:text-gray-400 mt-1.5 text-xs">■</span>
                  <span className="text-gray-300 print:text-gray-800 text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mt-10">
            <h3 className="text-xl uppercase tracking-wider font-bold mb-4 print:text-black">Education</h3>
            <div className="flex flex-col gap-4">
              <div className="text-gray-300 print:text-gray-800">
                <span className="text-gray-500 print:text-gray-400 mr-2">■</span>
                {t('edu1')}
              </div>
              <div className="text-gray-300 print:text-gray-800">
                <span className="text-gray-500 print:text-gray-400 mr-2">■</span>
                {t('edu2')}
              </div>
            </div>
          </section>

        </div>
      </div>
    </motion.div>
  );
}
