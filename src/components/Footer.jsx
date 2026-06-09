import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="glass-panel flex flex-col gap-8 border-t border-white/10 mt-20 mb-10">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-8">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <img src="/profile_pic.jpeg" alt="Lajos Maurer" className="w-16 h-16 rounded-full border-2 border-accent object-cover grayscale-[20%]" />
            <h3 className="tracking-[2px] m-0">
              LAJOS<span className="text-accent">.</span>MAURER
            </h3>
          </div>
          <p className="max-w-[400px]">
            {t('footerCredits')}
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold uppercase text-white tracking-[1px]">
            {t('footerContactTitle')}
          </h4>
          <div className="flex items-center gap-3 text-gray-400">
            <Mail size={18} className="text-accent" />
            <a href="mailto:maurerlajos1@gmail.com" className="text-inherit no-underline">maurerlajos1@gmail.com</a>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <Phone size={18} className="text-accent" />
            <a href="tel:+36302685650" className="text-inherit no-underline">+36 30 268 5650</a>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <MapPin size={18} className="text-accent" />
            <span>Hatvan, Hungary</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold uppercase text-white tracking-[1px]">
            {t('footerSocialTitle')}
          </h4>
          <a 
            href="https://www.linkedin.com/in/maurer-lajos-a46300126/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-400 no-underline"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="var(--color-accent)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 flex justify-between items-center flex-wrap gap-4 text-sm text-gray-400">
        <span>© 2026 Lajos Maurer. {t('footerRights')}</span>
        <span>{t('footerPreach')}</span>
      </div>
    </footer>
  );
}
