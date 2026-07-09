import { useLanguage } from '../i18n';
import { motion } from 'framer-motion';
import { Printer, Mail, MapPin, Globe, Phone, ExternalLink, Download } from 'lucide-react';
import SEO from '../components/SEO';

export default function Resume() {
  const { t, lang } = useLanguage();
  const freelanceRole = t('roleFreelance');
  const ppcRole = t('resumeRolePpcManager');
  const onlineMarketingRole = t('resumeRoleOnlineMarketing');

  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="resume-container pb-24">
      <SEO title={t('navResume') || 'Resume'} description={t('resumePositioning')} url="https://maurerlajos.com/resume" />
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
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 print:text-black">Lajos Maurer</h1>
                <h2 className="text-xl md:text-2xl text-blue-500 print:text-gray-600 mb-6 font-medium">
                  {t('rolePerformance')}
                </h2>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1.5"><MapPin size={16} /> Hungary</span>
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
              </div>
              <img
                src="/profile_pic.jpeg"
                alt="Lajos Maurer"
                className="w-28 h-28 rounded-full object-cover object-top flex-shrink-0 border-2 border-white/20 print:border-gray-300"
              />
            </div>
          </header>


          {/* Professional Profile */}
          <section className="mb-10">
            <h3 className="text-xl uppercase tracking-wider font-bold mb-4 print:text-black">{t('resumeProfileTitle')}</h3>
            <div className="text-gray-300 print:text-black leading-relaxed text-[1.05rem] space-y-4">
              {t('resumeProfileSubtitle') && <p className="font-bold text-white print:text-black text-lg">{t('resumeProfileSubtitle')}</p>}
              {t('resumeProfileDesc1') && <p className="font-medium text-gray-200 print:text-black">{t('resumeProfileDesc1')}</p>}
              <p className="print:text-black">{t('resumeProfileP1')}</p>
              <p className="print:text-black">{t('resumeProfileP2')}</p>
              {t('resumeProfileP3') && <p className="print:text-black">{t('resumeProfileP3')}</p>}
              {t('resumeProfileP4') && <p className="print:text-black">{t('resumeProfileP4')}</p>}
            </div>
          </section>

          {/* Core Competencies */}
          <section className="mb-10">
            <h3 className="text-xl uppercase tracking-wider font-bold mb-4 print:text-black">{t('resumeCoreCompetenciesTitle')}</h3>
            <ul className="text-gray-300 print:text-black list-disc pl-5 marker:text-gray-500 space-y-2 text-[1.05rem]">
              <li><span className="font-bold text-gray-200 print:text-black">{t('resumeCompetency1Title')}:</span> {t('resumeCoreCompetenciesVal')}</li>
              {t('resumeCompetency2Title') && <li><span className="font-bold text-gray-200 print:text-black">{t('resumeCompetency2Title')}:</span> {t('resumeCompetency2Val')}</li>}
              {t('resumeCompetency3Title') && <li><span className="font-bold text-gray-200 print:text-black">{t('resumeCompetency3Title')}:</span> {t('resumeCompetency3Val')}</li>}
              <li><span className="font-bold text-gray-200 print:text-black">{t('resumeTechArsenalTitle')}:</span> {t('resumeTechArsenalVal')}</li>
              <li><span className="font-bold text-gray-200 print:text-black">{t('resumePlatformsTitle')}:</span> {t('resumePlatformsVal')}</li>
              {t('resumeCompetency4Title') && <li><span className="font-bold text-gray-200 print:text-black">{t('resumeCompetency4Title')}:</span> {t('resumeCompetency4Val')}</li>}
              {t('resumeCompetency7Title') && <li><span className="font-bold text-gray-200 print:text-black">{t('resumeCompetency7Title')}:</span> {t('resumeCompetency7Val')}</li>}
              {t('resumeCompetency8Title') && <li><span className="font-bold text-gray-200 print:text-black">{t('resumeCompetency8Title')}:</span> {t('resumeCompetency8Val')}</li>}
            </ul>
          </section>

          {/* Professional Experience */}
          <section className="mb-10">
            <h3 className="text-xl uppercase tracking-wider font-bold mb-6 print:text-black">{t('resumeExperienceTitle')}</h3>
            
            {/* Freelance */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h4 className="text-lg font-bold print:text-black">{freelanceRole.split(' | ')[0]}</h4>
                <span className="text-blue-500 print:text-gray-600 font-mono text-sm">{freelanceRole.match(/\(([^)]+)\)/)?.[1] || 'Aug 2025 - Present'}</span>
              </div>
              <div className="text-gray-400 print:text-gray-700 text-sm mb-4 uppercase tracking-wide">
                {freelanceRole.split(' | ')[1]?.split(' (')[0]}
              </div>
              <ul className="text-gray-300 print:text-black pl-5 list-disc marker:text-gray-500 space-y-2">
                <li>{t('caseFreeL1')}</li>
                <li>{t('caseFreeL2')}</li>
                {t('caseFreeL3') && <li>{t('caseFreeL3')}</li>}
                {t('caseFreeL4') && <li>{t('caseFreeL4')}</li>}
                {t('caseFreeL5') && <li>{t('caseFreeL5')}</li>}
              </ul>
            </div>

            {/* Click Brains */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h4 className="text-lg font-bold print:text-black">{ppcRole.split(' | ')[0]}</h4>
                <span className="text-blue-500 print:text-gray-600 font-mono text-sm">{ppcRole.match(/\(([^)]+)\)/)?.[1] || '2024 - 2025'}</span>
              </div>
              <div className="text-gray-400 print:text-gray-700 text-sm mb-4 uppercase tracking-wide">
                {ppcRole.split(' | ')[1]?.split(' (')[0]}
              </div>
              <ul className="text-gray-300 print:text-black pl-5 list-disc marker:text-gray-500 space-y-2">
                <li>{t('resumeCaseClickL1')}</li>
                <li>{t('resumeCaseClickL2')}</li>
                <li>{t('resumeCaseClickL3')}</li>
                {t('resumeCaseClickL4') && <li>{t('resumeCaseClickL4')}</li>}
                {t('resumeCaseClickL5') && <li>{t('resumeCaseClickL5')}</li>}
              </ul>
            </div>

            {/* Bproduction */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h4 className="text-lg font-bold print:text-black">{onlineMarketingRole.split(' | ')[0]}</h4>
                <span className="text-blue-500 print:text-gray-600 font-mono text-sm">{onlineMarketingRole.match(/\(([^)]+)\)/)?.[1] || '2020 - 2024'}</span>
              </div>
              <div className="text-gray-400 print:text-gray-700 text-sm mb-4 uppercase tracking-wide">
                {onlineMarketingRole.split(' | ')[1]?.split(' (')[0]}
              </div>
              <ul className="text-gray-300 print:text-black pl-5 list-disc marker:text-gray-500 space-y-2">
                <li>{t('resumeCaseBprodL1')}</li>
                <li>{t('resumeCaseBprodL2')}</li>
                <li>{t('resumeCaseBprodL3')}</li>
                <li>{t('resumeCaseBprodL4')}</li>
                {t('resumeCaseBprodL5') && <li>{t('resumeCaseBprodL5')}</li>}
                {t('resumeCaseBprodL6') && <li>{t('resumeCaseBprodL6')}</li>}
                {t('resumeCaseBprodL7') && <li>{t('resumeCaseBprodL7')}</li>}
                {t('resumeCaseBprodL8') && <li>{t('resumeCaseBprodL8')}</li>}
              </ul>
            </div>
          </section>

          {/* Proof of Performance */}
          <section className="mb-10">
            <h3 className="text-xl uppercase tracking-wider font-bold mb-4 print:text-black">{t('resumeProofTitle')}</h3>
            <ul className="text-gray-300 print:text-black list-disc pl-5 marker:text-gray-500 space-y-2 text-[1.05rem]">
              {lang === 'hu' ? (
                <>
                  {t('proofVal1') && <li>{t('proofVal1')}</li>}
                  {t('proofVal2') && <li>{t('proofVal2')}</li>}
                  {t('proofVal3') && <li>{t('proofVal3')}</li>}
                  {t('proofVal4') && <li>{t('proofVal4')}</li>}
                  {t('proofVal5') && <li>{t('proofVal5')}</li>}
                </>
              ) : (
                <>
                  <li><span className="font-bold text-gray-200 print:text-black">{t('proofVal1').split(' ')[0]}</span> {t('proofVal1').split(' ').slice(1).join(' ')}</li>
                  <li><span className="font-bold text-gray-200 print:text-black">{t('proofVal2').split(' ')[0]}</span> {t('proofVal2').split(' ').slice(1).join(' ')}</li>
                  <li><span className="font-bold text-gray-200 print:text-black">{t('proofVal3').split(' ')[0]}</span> {t('proofVal3').split(' ').slice(1).join(' ')}</li>
                </>
              )}
            </ul>
          </section>

          {/* Education & Credentials */}
          <section className="mb-10">
            <h3 className="text-xl uppercase tracking-wider font-bold mb-4 print:text-black">{t('resumeEduTitle')}</h3>
            <ul className="text-gray-300 print:text-black list-disc pl-5 marker:text-gray-500 space-y-2 text-[1.05rem]">
              <li>{t('edu1')}</li>
              <li>{t('edu2')}</li>
              <li>{t('edu3')}</li>
            </ul>
          </section>

          {/* Let's Connect */}
          <section className="pt-6 border-t border-white/10 print:border-black/20">
            <h3 className="text-xl uppercase tracking-wider font-bold mb-4 print:text-black">{t('resumeLetConnectTitle')}</h3>
            <p className="text-gray-300 print:text-black leading-relaxed text-[1.05rem] mb-4">
              {t('resumeLetConnectText')}
            </p>
            <p className="text-white print:text-black font-bold text-[1.05rem]">
              {lang === 'hu' ? (
                <>
                  <a href="mailto:maurerlajos1@gmail.com" className="text-blue-500 print:text-blue-700 hover:underline">maurerlajos1@gmail.com</a>
                  {' · '}
                  <a href="tel:+36302685650" className="text-blue-500 print:text-blue-700 hover:underline">+36 30 268 5650</a>
                  {' · '}
                  <a href="https://maurerlajos.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 print:text-blue-700 hover:underline">maurerlajos.com</a>
                </>
              ) : (
                <>
                  {'Email me today at '}
                  <a href={`mailto:${t('contactEmail')}`} className="text-blue-500 print:text-blue-700 hover:underline">{t('contactEmail')}</a>
                  {' or call '}
                  <a href="tel:+36302685650" className="text-blue-500 print:text-blue-700 hover:underline">+36 30 268 5650</a>
                  {' to schedule an interview.'}
                </>
              )}
            </p>
          </section>

        </div>
      </div>
    </motion.div>
  );
}
