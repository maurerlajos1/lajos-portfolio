import React, { useState, useMemo } from 'react';
import { useLanguage } from '../i18n';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ExternalLink, 
  HelpCircle, 
  Database, 
  AlertCircle, 
  Sparkles, 
  ArrowRight,
  FileText, 
  Cpu, 
  FileSpreadsheet, 
  BookOpen, 
  Link as LinkIcon, 
  Globe, 
  Layers, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import vaultData from '../data/vaultData.json';

// Categorize utility based on keywords in subcategory & description
const getHighLevelCategory = (item) => {
  const text = (item.subcategory + " " + item.description + " " + item.category).toLowerCase();

  if (text.includes("a/b") || text.includes("abtest") || text.includes("statistic") || text.includes("experiment") || text.includes("testing") || text.includes("ab testing")) {
    return "ab";
  }
  if (text.includes("analytics") || text.includes("ga4") || text.includes("gtm") || text.includes("bigquery") || text.includes("tag manager") || text.includes("tracking") || text.includes("looker") || text.includes("report") || text.includes("attribution") || text.includes("ecommerce") || text.includes("eec")) {
    return "analytics";
  }
  if (text.includes("ux") || text.includes("cro") || text.includes("form") || text.includes("heuristic") || text.includes("eye tracking") || text.includes("mouse tracking") || text.includes("scrollmap") || text.includes("cognitive") || text.includes("fluency") || text.includes("readability") || text.includes("exit survey") || text.includes("feedback") || text.includes("usability") || text.includes("design") || text.includes("page")) {
    return "ux";
  }
  if (text.includes("persuasion") || text.includes("copy") || text.includes("message") || text.includes("uvp") || text.includes("headline") || text.includes("writing") || text.includes("neuromarketing") || text.includes("cialdini") || text.includes("story") || text.includes("proof") || text.includes("testimonial") || text.includes("psychology")) {
    return "copy";
  }
  if (text.includes("research") || text.includes("survey") || text.includes("interview") || text.includes("voc") || text.includes("customer") || text.includes("screener") || text.includes("persona") || text.includes("segment") || text.includes("hear") || text.includes("listening")) {
    return "research";
  }
  if (text.includes("ad ") || text.includes("ads") || text.includes("ppc") || text.includes("campaign") || text.includes("search") || text.includes("shopping") || text.includes("google ads") || text.includes("linkedin") || text.includes("facebook") || text.includes("tiktok") || text.includes("remarketing") || text.includes("traffic")) {
    return "ads";
  }
  if (text.includes("brand") || text.includes("strategy") || text.includes("pivot") || text.includes("positioning") || text.includes("community") || text.includes("market")) {
    return "brand";
  }
  return "brand"; // default grouping
};

// Detect resource type based on URL and description details
const getResourceType = (item) => {
  const url = item.url.toLowerCase();
  const desc = (item.description || '').toLowerCase();
  const subcat = (item.subcategory || '').toLowerCase();
  const cat = (item.category || '').toLowerCase();
  
  if (url.includes('.pdf') || desc.includes('slide') || desc.includes('deck') || desc.includes('presentation') || desc.includes('slides') || subcat.includes('slide') || subcat.includes('deck') || cat.includes('slide')) {
    return 'deck';
  }
  if (url.includes('chrome.google.com') || url.includes('chrome/webstore') || url.includes('/tools/') || desc.includes('extension') || desc.includes('kalkulátor') || desc.includes('calculator') || desc.includes('debugger') || desc.includes('tool') || desc.includes('szoftver') || desc.includes('software') || 
      url.includes('hotjar.com') || url.includes('vwo.com') || url.includes('crazyegg.com') || url.includes('mouseflow.com') || url.includes('drift.com') || url.includes('olark.com') || url.includes('qualaroo.com') || url.includes('ethn.io') || url.includes('inspectlet.com') || url.includes('ghostrec.com') || url.includes('sessioncam.com') || url.includes('respondent.io') || url.includes('zuko.io')) {
    return 'tool';
  }
  if (url.includes('docs.google.com') || url.includes('dropbox.com') || url.includes('.xlsx') || url.includes('.xls') || url.includes('.csv') || url.includes('.docx') || url.includes('.doc') || desc.includes('template') || desc.includes('sablon') || desc.includes('spreadsheet') || desc.includes('sheet') || desc.includes('táblázat') || desc.includes('checklist') || desc.includes('ellenőrző lista') || subcat.includes('calculator') || subcat.includes('template') || subcat.includes('sheet')) {
    return 'template';
  }
  if (url.includes('/blog/') || url.includes('/article/') || url.includes('/insights/') || url.includes('nngroup.com') || url.includes('smashingmagazine.com') || url.includes('uxmovement.com') || url.includes('forbes.com') || url.includes('techcrunch.com') || url.includes('kaushik.net') || desc.includes('blog') || desc.includes('article') || desc.includes('cikk') || desc.includes('útmutató') || desc.includes('guide')) {
    return 'article';
  }
  return 'other';
};

const getCleanDomain = (url) => {
  try {
    const hostname = new URL(url).hostname;
    return hostname.replace('www.', '');
  } catch (e) {
    return 'external link';
  }
};

const cleanDescription = (desc) => {
  if (!desc) return '';
  return desc
    .replace(/^\*\*Description:\*\*\s*/i, '')
    .replace(/^\*\*Leírás:\*\*\s*/i, '')
    .replace(/^Description:\s*/i, '')
    .replace(/^Leírás:\s*/i, '')
    .replace(/^\*\*Description\*\*\s*/i, '')
    .replace(/^\*\*Leírás\*\*\s*/i, '');
};

export default function Vault() {
  const { t, lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeType, setActiveType] = useState('all');
  const [visibleCount, setVisibleCount] = useState(24);
  const [expandedCategories, setExpandedCategories] = useState({});

  const categorizedData = useMemo(() => {
    return vaultData.map(item => ({ 
      ...item, 
      hlCat: getHighLevelCategory(item),
      hlType: getResourceType(item)
    }));
  }, []);

  const categories = [
    { id: 'all', labelKey: 'vaultCategoryAll', color: '#6b7280' },
    { id: 'ab', labelKey: 'vaultCategoryAB', color: '#ef4444' },
    { id: 'analytics', labelKey: 'vaultCategoryAnalytics', color: '#3b82f6' },
    { id: 'ux', labelKey: 'vaultCategoryUX', color: '#8b5cf6' },
    { id: 'copy', labelKey: 'vaultCategoryCopy', color: '#ec4899' },
    { id: 'research', labelKey: 'vaultCategoryResearch', color: '#10b981' },
    { id: 'ads', labelKey: 'vaultCategoryAds', color: '#f59e0b' },
    { id: 'brand', labelKey: 'vaultCategoryBranding', color: '#14b8a6' }
  ];

  const resourceTypes = [
    { id: 'all', labelKey: 'vaultTypeAll', icon: Layers },
    { id: 'article', labelKey: 'vaultTypeArticles', icon: BookOpen, labelTagKey: 'vaultLabelArticles' },
    { id: 'tool', labelKey: 'vaultTypeTools', icon: Cpu, labelTagKey: 'vaultLabelTools' },
    { id: 'deck', labelKey: 'vaultTypeDecks', icon: FileText, labelTagKey: 'vaultLabelDecks' },
    { id: 'template', labelKey: 'vaultTypeTemplates', icon: FileSpreadsheet, labelTagKey: 'vaultLabelTemplates' }
  ];

  const filteredResources = useMemo(() => {
    return categorizedData.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.hlCat === activeCategory;
      const matchesType = activeType === 'all' || item.hlType === activeType;
      const searchLower = searchQuery.toLowerCase();
      const subKey = lang === 'hu' ? (item.subcategory_hu || item.subcategory) : item.subcategory;
      const descKey = lang === 'hu' ? (item.description_hu || item.description) : item.description;
      const matchesSearch = subKey.toLowerCase().includes(searchLower) || (descKey && descKey.toLowerCase().includes(searchLower)) || item.url.toLowerCase().includes(searchLower);
      return matchesCategory && matchesType && matchesSearch;
    });
  }, [categorizedData, activeCategory, activeType, searchQuery, lang]);

  const groupedResources = useMemo(() => {
    const groups = {};
    filteredResources.forEach(item => {
      const cat = item.hlCat;
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(item);
    });
    return groups;
  }, [filteredResources]);

  React.useEffect(() => {
    setVisibleCount(24);
    setExpandedCategories({});
  }, [activeCategory, activeType, searchQuery]);

  const handleLoadMore = () => setVisibleCount(prev => prev + 24);
  const toggleCategory = (catId) => setExpandedCategories(prev => ({ 
    ...prev, 
    [catId]: prev[catId] === false ? true : false 
  }));

  const getCatColor = (hlCat) => {
    const found = categories.find(c => c.id === hlCat);
    return found ? found.color : '#3b82f6';
  };

  const pageVariants = { initial: { opacity: 0, y: 20 }, in: { opacity: 1, y: 0 }, out: { opacity: 0, y: -20 } };

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={{ duration: 0.4 }}>
      <div className="max-w-[1200px] mx-auto px-5 py-16 pb-24">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-500 py-2 px-4 rounded-full text-sm font-bold mb-6">
            <Database size={16} />
            {t('vaultPreTitle') || 'PROPRIETARY ENGINE'}
          </div>
          <h1>{t('vaultPageTitle')}</h1>
          <p className="text-lg text-gray-400 max-w-[800px] mx-auto">{t('vaultPageSub')}</p>
        </header>

        {/* Warning Badge */}
        <div className="flex items-center gap-3 bg-amber-500/5 border border-amber-500/15 py-4 px-6 rounded-xl mb-10 text-gray-400 text-[0.95rem]">
          <AlertCircle size={20} className="text-amber-500 shrink-0" />
          <span>{t('vaultNotice')}</span>
        </div>

        {/* Search & Filters */}
        <div className="glass-panel mb-12 p-8">
          {/* Search bar */}
          <div className="relative w-full mb-6">
            <Search size={20} className="text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={t('vaultSearchPlaceholder')}
              className="w-full bg-black/25 border border-white/10 py-4 pr-4 pl-12 rounded-xl text-white outline-none text-base transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-accent/30"
            />
          </div>

          {/* Categories tag block */}
          <div className="text-sm font-bold uppercase text-gray-400 tracking-[1px] mb-3">
            {lang === 'hu' ? 'Kategóriák' : 'Categories'}
          </div>
          <div className="flex flex-wrap gap-3 mb-6">
            {categories.map(cat => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    background: isActive ? cat.color : 'rgba(255,255,255,0.03)',
                    color: 'white',
                    border: '1px solid',
                    borderColor: isActive ? 'transparent' : 'var(--card-border)',
                    padding: '10px 20px',
                    borderRadius: '24px',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    boxShadow: isActive ? `0 4px 15px ${cat.color}40` : 'none'
                  }}
                  onMouseEnter={e => { if (!isActive) { e.currentTarget.style.borderColor = cat.color; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; } }}
                  onMouseLeave={e => { if (!isActive) { e.currentTarget.style.borderColor = 'var(--card-border)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; } }}
                >
                  {t(cat.labelKey)}
                </button>
              );
            })}
          </div>

          <div className="border-t border-white/10 my-5"></div>

          {/* Resource Types tag block */}
          <div className="text-sm font-bold uppercase text-gray-400 tracking-[1px] mb-3">
            {lang === 'hu' ? 'Forrás Típusok' : 'Resource Types'}
          </div>
          <div className="flex flex-wrap gap-3">
            {resourceTypes.map(type => {
              const isActive = activeType === type.id;
              const TypeIcon = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setActiveType(type.id)}
                  style={{
                    background: isActive ? 'var(--accent-color)' : 'rgba(255,255,255,0.03)',
                    color: 'white',
                    border: '1px solid',
                    borderColor: isActive ? 'transparent' : 'var(--card-border)',
                    padding: '10px 20px',
                    borderRadius: '24px',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s',
                    boxShadow: isActive ? '0 4px 15px rgba(59, 130, 246, 0.3)' : 'none'
                  }}
                  onMouseEnter={e => { if (!isActive) { e.currentTarget.style.borderColor = 'var(--accent-color)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; } }}
                  onMouseLeave={e => { if (!isActive) { e.currentTarget.style.borderColor = 'var(--card-border)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; } }}
                >
                  <TypeIcon size={16} />
                  <span>{t(type.labelKey)}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Count */}
        <div className="flex justify-between items-center mb-7 px-2">
          <span className="text-gray-400 text-[0.95rem]">
            {t('vaultFoundCount').replace('{count}', filteredResources.length)}
          </span>
        </div>

        {/* Resource Groups */}
        {Object.entries(groupedResources).map(([catId, items]) => {
          const isCatExpanded = expandedCategories[catId] !== false;
          const catColor = getCatColor(catId);
          const catLabel = t(categories.find(c => c.id === catId)?.labelKey) || catId;
          
          return (
            <section key={catId} className="mb-10 bg-white/5 border border-white/5 rounded-2xl p-6">
              <div 
                className={`flex items-center justify-between cursor-pointer transition-all duration-300 ${isCatExpanded ? 'pb-4 border-b border-white/5 mb-6' : ''}`}
                onClick={() => toggleCategory(catId)}
              >
                <div className="flex items-center gap-3">
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: catColor, boxShadow: `0 0 10px ${catColor}` }}></div>
                  <h2 className="text-white m-0 text-2xl font-bold">{catLabel}</h2>
                  <span className="text-[0.85rem] text-gray-400 bg-white/5 py-0.5 px-2 rounded-xl">
                    {items.length}
                  </span>
                </div>
                <button className="bg-transparent border-none text-gray-400 cursor-pointer flex items-center">
                  {isCatExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>

              {isCatExpanded && (
                <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-6">
                  {items.slice(0, visibleCount).map((item, idx) => {
                    const itemType = item.hlType;
                    const typeInfo = resourceTypes.find(t => t.id === itemType) || { labelTagKey: 'vaultLabelOther', icon: LinkIcon };
                    const TypeIcon = typeInfo.icon;
                    const domainName = getCleanDomain(item.url);
                    const displayDesc = cleanDescription(lang === 'hu' ? (item.description_hu || item.description) : item.description || 'Reference link without additional study notes.');
                    
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, delay: Math.min(idx * 0.02, 0.3) }}
                        className="glass-panel flex flex-col justify-between h-full relative overflow-hidden p-6 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300"
                        style={{
                          borderLeft: `4px solid ${catColor}`
                        }}
                      >
                        <div>
                          <div className="flex justify-between items-center mb-3 gap-2">
                            <span className="text-xs font-bold uppercase tracking-[0.5px] py-1 px-2 rounded" style={{ color: catColor, background: `${catColor}15` }}>
                              {lang === 'hu' ? (item.subcategory_hu || item.subcategory) : item.subcategory}
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs text-gray-400 bg-white/5 py-1 px-2 rounded">
                              <TypeIcon size={12} />
                              <span>{t(typeInfo.labelTagKey || 'vaultLabelOther')}</span>
                            </span>
                          </div>
                          <p className="text-gray-400 text-[0.92rem] leading-relaxed mb-5">
                            {displayDesc}
                          </p>
                        </div>
                        <div className="flex justify-between items-center mt-auto pt-3 border-t border-white/5">
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-white no-underline text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 rounded"
                            onMouseEnter={e => e.currentTarget.style.color = catColor}
                            onMouseLeave={e => e.currentTarget.style.color = 'white'}
                          >
                            <span>Open Resource</span>
                            <ExternalLink size={14} />
                          </a>
                          <span className="inline-flex items-center gap-1 text-xs text-white/30 font-mono">
                            <Globe size={10} />
                            {domainName}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </section>
          );
        })}

        {/* Load More */}
        {Object.values(groupedResources).some(arr => arr.length > visibleCount) && (
          <div className="flex justify-center mb-20">
            <button
              onClick={handleLoadMore}
              className="bg-white/5 border border-white/10 text-white py-4 px-12 rounded-full text-base font-semibold cursor-pointer transition-all hover:bg-white/10 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-accent/50"
            >
              {t('vaultLoadMore')}
            </button>
          </div>
        )}

        {/* No results */}
        {filteredResources.length === 0 && (
          <div className="text-center py-16 border border-dashed border-white/10 rounded-2xl mb-20">
            <HelpCircle size={48} className="text-gray-400 mx-auto mb-4 opacity-50 animate-pulse" />
            <h3 className="text-xl mb-2">{t('vaultNoResults')}</h3>
            <p className="text-gray-400">Try searching for alternate keywords or resetting filters.</p>
          </div>
        )}

        {/* CTA Loop */}
        <section className="glass-panel p-8 md:p-12 bg-[radial-gradient(circle_at_10%_20%,rgba(20,184,166,0.15)_0%,rgba(139,92,246,0.05)_100%)] border border-white/10 rounded-[24px] text-center hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300">
          <Sparkles size={32} className="text-teal-500 mx-auto mb-4" />
          <h2 className="text-4xl mb-4">{t('vaultLoopTitle') || 'Who is behind these frameworks?'}</h2>
          <p className="text-gray-400 text-lg max-w-[700px] mx-auto mb-8 leading-relaxed">
            {t('vaultLoopDesc') || 'Explore my career timeline, Google certifications, professional trainings, and technical tool stacks.'}
          </p>
          <Link to="/about" className="btn-primary inline-flex focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-[#0a0a0f]">
            <span>{t('vaultLoopBtn') || 'View About & Tech Stack'}</span>
            <ArrowRight size={18} />
          </Link>
        </section>

      </div>
    </motion.div>
  );
}
