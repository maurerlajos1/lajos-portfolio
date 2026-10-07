import { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    // Nav
    navHome: "Home",
    navWork: "Case Studies",
    navMethodology: "Methodology",
    navVault: "The Vault",
    navAbout: "About",
    navResume: "Resume",
    navBlog: "Blog",
    
    // Blog UI
    blogHeaderTitle: "Performance Insights",
    blogHeaderSubtitle: "Deep dives into Server-Side Tracking, Conversion Rate Optimization, and Advanced Paid Media Scaling.",
    readArticle: "Read Article",
    blogCtaTitle: "Want to see the systems behind this?",
    blogCtaDesc: "Read the case studies or download my CV for the full performance growth background.",
    blogCtaPrimary: "View Case Studies",
    blogCtaSecondary: "Download CV",
    backToBlog: "Back to Articles",
    postNotFound: "Post Not Found",
    authorTitle: "Lajos Maurer",
    authorDesc: "Performance Growth & CRO Specialist. Specializing in highly technical paid media scaling and data-driven revenue optimization.",
    authorLink: "Learn more about my background →",
    
    // Hero - UVP
    heroPreTitle: "Systematic Revenue Growth",
    heroTitle: "Traffic is cheap. Intent is expensive. I build the systems that turn casual clicks into measurable revenue.",
    heroSubtitle: "Most marketing budgets are burned on guesses. I don't care about vanity metrics. I care about server-side tracking, bulletproof attribution, and behavioral triggers that actually make people pull out their credit cards.\n\nNo black boxes. No guessing.",
    heroCtaVault: "View Case Studies",
    secondaryCta: "Download CV",

    // Social Proof Bar
    proof1: "$500,000+ Tracked & Scaled",
    proof2: "10+ Industries Optimized",
    proof3: "CXL/CRO Methodology",

    // Problem & Focus -> Replaced with "The Anxiety / Market Reality"
    problemTitle: "Brands are bleeding money. They celebrate impressions while losing customers at checkout.",
    problemText: "The modern agency model is broken. They sell you cheap clicks and report on 'brand awareness' while your CPA skyrockets. \n\nI approach growth clinically. If we can't measure it, we don't scale it. We fix the leaky buckets first. We establish absolute tracking hygiene, validate user motivations, and force the math to make sense.",

    // Core Principles
    solutionTitle: "Stop guessing. Start tracking.",
    meth1Title: "1. The Psychology (UX & CRO)",
    meth1Desc: "I watch where users get frustrated, abandon their carts, and leave. Then, I rewrite the copy and rebuild the layout until they stay. Friction is the enemy of revenue.",
    meth2Title: "2. The Math (Attribution)",
    meth2Desc: "Pixel data is dying. I implement server-side tracking so the algorithms actually find buyers, not just window-shoppers. Every ad dollar tied directly to business revenue.",

    // Interactive Tool (Reciprocity/Proof)
    toolSectionTitle: "Don't take my word for it. Play with the math.",
    toolSectionIntro: "See exactly how a microscopic 1% lift in conversion rate compounds your revenue. Slide the metrics and watch the forecast change.",
    toolTitle: "The Math Engine",
    toolIntro: "Adjust the levers below. Growth isn't an accident, it's an equation.",
    
    // Philosophy / Anxiety Reduction
    anxietyTitle: "My Philosophy",
    anxietyText: "I approach performance marketing as a mathematical system. Intuition is checked with data, campaigns are structured to return transparent attribution. No black boxes, no guessing.",
    
    // Home Loop
    homeLoopTitle: "I didn't just spend the budget. I tracked every cent of it.",
    homeLoopDesc: "Read the exact playbooks, heuristic audits, and server-side deployments I used to scale cross-channel campaigns.",
    homeLoopBtn: "View The Case Studies",

    // Case Studies Page
    caseStudiesTitle: "The Evidence.",
    caseStudiesSub: "Case studies and clinical breakdowns across E-commerce, SaaS, and B2B. Over $500,000 in managed spend, completely tracked and optimized.",
    caseAgency: "Agency",
    roleOnlineMarketing: "Online Marketing Specialist (2020 - 2024)",
    caseMetricAvgBudget: "Avg Monthly Budget",
    caseMetricAvgBudgetVal: "$20,000+",
    caseMetricCampaigns: "Campaigns",
    caseMetricCampaignsVal: "100+ Scaled",
    caseMetricSpend: "Managed Spend",
    caseMetricSpendVal: "$500,000+",
    caseMetricProjects: "Projects",
    caseMetricProjectsVal: "100+ Delivered",
    caseApproachTitle: "The Execution",
    caseBprodL1: "Structured cross-channel funnels that forced Google and Meta to acquire buyers, not just traffic.",
    caseBprodL2: "Ripped out broken analytics and deployed Server-Side GTM to stop data leakage.",
    caseBprodL3: "Built executive Looker Studio dashboards so founders finally understood their ROI.",
    caseBprodL4: "Executed relentless A/B testing to fix behavioral UX roadblocks.",
    rolePpcManager: "PPC Manager (2024 - 2025)",
    caseClickTag: "Conversion Architecture",
    caseClickL1: "Managed high-spend PPC accounts with zero tolerance for wasted budget.",
    caseClickL2: "Translated complex data into transparent, blunt reporting for stakeholders.",
    caseClickL3: "Optimized acquisition loops across Meta, TikTok, and Google Ads.",
    caseLoopTitle: "The Methodology Behind The Madness",
    caseLoopDesc: "Explore the specific psychological triggers, heuristic audits, and tracking pipelines that produced these numbers.",
    caseLoopBtn: "Explore My Methodology",

    // Methodology Page
    methPageTitle: "The Engine Room",
    methPageSub: "This is exactly how I break down funnels, validate human motivation, and build bulletproof tracking architecture.",
    methSection1Title: "Step 1: Heuristic Interrogation",
    methSection1Desc: "Optimization starts with a brutal audit. I tear down page layouts, measure cognitive load, and watch session replays to see exactly where your users are giving up. We fix the bleeding first.",
    methSection2Title: "Step 2: Behavioral Psychology",
    methSection2Desc: "Using BJ Fogg's Behavior Model, we don't just 'make the button red.' We amplify user motivation through sharp copywriting and drastically reduce the friction required to buy.",
    methSection3Title: "Step 3: Clinical Attribution",
    methSection3Desc: "Browsers block trackers. Pixels die. I deploy server-side Google Tag Manager and GA4 to ensure your revenue data survives and feeds the ad algorithms accurately.",
    methLoopTitle: "Take My Tools",
    methLoopDesc: "Browse the exact templates, A/B testing calculators, and GTM scripts I use. Over 600 resources, entirely free.",
    methCtaVaultBtn: "Open The Vault",

    // The Vault Page
    vaultPreTitle: "THE UNFAIR ADVANTAGE",
    vaultPageTitle: "The Marketing Vault",
    vaultPageSub: "This isn't a list of generic blog posts. This is the exact playbook. Over 600 hours of compiled CRO tactics, calculators, and GTM scripts I use to fix broken funnels. Steal them.",
    vaultSearchPlaceholder: "Search the database...",
    vaultCategoryAll: "All Resources",
    vaultCategoryAB: "A/B Testing & Stats",
    vaultCategoryAnalytics: "Analytics & GTM",
    vaultCategoryUX: "UX & CRO",
    vaultCategoryCopy: "Copywriting & Persuasion",
    vaultCategoryResearch: "User Research & VoC",
    vaultCategoryAds: "Paid Ads & PPC",
    vaultCategoryBranding: "Branding & Strategy",
    vaultFoundCount: "Found {count} weapons",
    vaultLoadMore: "Load More",
    vaultNoResults: "Nothing found. Try a different search.",
    vaultNotice: "Note: The actual templates and frameworks are in English, sourced from global industry standards.",
    vaultTypeAll: "All Types",
    vaultTypeArticles: "Articles & Breakdowns",
    vaultTypeTools: "Calculators & Tools",
    vaultTypeDecks: "Slide Decks & Playbooks",
    vaultTypeTemplates: "Sheets & Templates",
    vaultLabelArticles: "Article",
    vaultLabelTools: "Tool",
    vaultLabelDecks: "Deck",
    vaultLabelTemplates: "Template",
    vaultLabelOther: "Link",
    vaultLoopTitle: "Who compiled this?",
    vaultLoopDesc: "Look at the career history, certifications, and technical stack of the person who built this database.",
    vaultLoopBtn: "View My Tech Stack",

    // About Page
    aboutTitle: "The Architect",
    aboutSub: "The timeline, stack, and philosophy behind the results.",
    aboutTech: "Tech & Tools",
    aboutTimeline: "Career Timeline",
    aboutCertifications: "Clinical Certifications",
    aboutTraining: "Professional Indoctrination",
    aboutCtaTitle: "Let's Talk Numbers",
    aboutCtaDesc: "If you want to stop guessing and start tracking, let's look at your funnels. Reach out directly.",
    aboutStoryP1: "I started in this industry not as a marketer, but as an observer of human behavior. I noticed that companies were pouring thousands into traffic, but entirely ignoring the psychological experience of the user once they clicked.",
    aboutStoryP2: "Over the years, I developed a hybrid approach: part behavioral psychology, part rigorous data science. I don't believe in \"best practices\". I believe in server-side tracking, bulletproof attribution, and systematic A/B testing.",
    aboutStoryP3: "Today, I engineer growth engines for businesses that are ready to stop guessing and start measuring.",
    aboutStackTitle: "The Tech Stack",
    stackAcquisition: "Paid Acquisition",
    stackTracking: "Tracking & Analytics",
    stackCro: "CRO & UX",
    aboutCertTitle: "Certifications & Training",
    aboutLoopTitle: "Ready to scale your systems?",
    aboutLoopDesc: "Explore the interactive forecaster on the homepage to see exactly what a 15% bump in conversion rate does to your bottom line.",
    aboutLoopBtn: "Back to Homepage",

    // Resume Page
    resumeTitle: "Curriculum Vitae",
    resumePrint: "Print CV",
    resumeDownload: "Download PDF",
    rolePerformance: "Senior Performance Marketing & Growth Specialist",
    
    // AIDA Structure Keys
    resumeProfileTitle: "PROFESSIONAL PROFILE",
    resumeProfileSubtitle: "Performance Marketing & Acquisition Architect",
    resumeProfileDesc1: "",
    resumeProfileP1: "For over 6 years I've specialized in Paid Acquisition (Google Ads, Meta Ads, TikTok Ads), Conversion Rate Optimization (CRO), and advanced analytics (GA4, Server-Side GTM). At Bproduction Agency, Click Brains, and in my independent advisory practice, I don't just manage ad spend: I diagnose why campaigns break, why lead quality collapses while lead volume climbs, and where budget leaks due to tracking failures.",
    resumeProfileP2: "My methodology is rooted in rigorous diagnostic audits. Before adjusting bids or campaign structures, I conduct in-depth historical data analyses (CPM, CTR, CPC, CPA, ROAS). By deploying Server-Side tracking to eliminate browser signal loss (ITP, ad blockers) and feeding algorithmic bidding engines with verified business value (CRM offline conversions, qualified leads, closed sales), I ensure platforms bid for revenue rather than cheap, low-intent traffic.",
    
    resumeCoreCompetenciesTitle: "CORE COMPETENCIES & EXPERTISE",
    resumeCoreCompetenciesVal: "Google Ads (Search, Shopping, Performance Max, YouTube), Meta Ads (Advantage+, CAPI), TikTok Ads, lead generation, e-commerce scaling, marketplace & app growth, Target CPA / Target ROAS bid optimization, negative keyword architecture, and structured exclusions.",
    resumeTechArsenalTitle: "Conversion Rate Optimization & Growth",
    resumeTechArsenalVal: "CRO, A/B testing, landing page and checkout funnel optimization, heuristic audits, user behavior analysis (Hotjar, GA4), eliminating friction throughout the customer buying journey.",
    resumePlatformsTitle: "Analytics, Tracking & Data-Driven Reporting",
    resumePlatformsVal: "GA4, Google Tag Manager, Server-Side GTM (sGTM), Meta CAPI, Google Consent Mode v2, Enhanced Conversions, CRM offline conversion imports, Looker Studio executive dashboards, BigQuery, CPA / ROAS / POAS / LTV / CAC metrics.",
    
    resumeExperienceTitle: "PROFESSIONAL EXPERIENCE",
    roleFreelance: "Independent Consultant | Performance Marketing & Growth (Aug 2025 – Present)",
    caseFreeL1: "10x Lead Volume & Complete Tracking Overhaul (B2C Lead Gen): Took over an account spending ~$11,000/mo (4M HUF) with zero conversion tracking. Rebuilt the data and measurement infrastructure from scratch, realigned ad creatives with customer search intent, and executed SEO optimizations, scaling inbound lead volume 10x with 100% verified tracking coverage.",
    caseFreeL2: "Scaling ROAS from 6 to 10 via Server-Side Tracking (E-Commerce): Scaled a stagnant DTC baby & mama webshop in Shoprenter: deployed Server-Side GTM to stop client-side signal loss, overhauled product feed titles and custom labels, and ran dynamic creative rotation across Meta, TikTok, and PMax.",
    resumeRolePpcManager: "Click Brains | PPC Manager (2024 – 2025)",
    resumeCaseClickL1: "Managed high-budget, multi-channel PPC portfolios with zero tolerance for wasted spend: conducted recurring structural and search term audits to eliminate non-converting clicks.",
    resumeCaseClickL2: "Executed root-cause analysis on ROAS drops and conversion volatility: isolated variables (creative fatigue, audience saturation, technical tracking bugs, checkout friction) instead of blindly raising bids.",
    resumeCaseClickL3: "Upgraded incoming lead quality via offline conversion imports and precise negative keyword/audience exclusion rules.",
    resumeRoleOnlineMarketing: "Bproduction Agency | Online Marketing Specialist (2020 – 2024)",
    resumeCaseBprodL1: "Architected cross-channel acquisition structures based on high buyer intent and negative keyword defenses, preventing algorithms from draining budget on irrelevant traffic.",
    resumeCaseBprodL2: "Identified tracking anomalies and data discrepancies: deployed client-side and server-side GTM solutions to restore accurate multi-touch attribution.",
    resumeCaseBprodL3: "Developed executive Looker Studio dashboards, giving company leadership full visibility into real spend-to-revenue relationships without agency black-box reporting or vanity metrics.",
    resumeCaseBprodL4: "Executed systematic A/B testing on landing pages to eliminate behavioral friction (headlines, CTAs, form simplification, offer positioning).",
    
    resumeProofTitle: "PROOF OF PERFORMANCE",
    proofVal1: "$500,000+ Managed Ad Spend with strict profit-oriented governance: pre-scale audits, negative keyword defense, and continuous creative fatigue rotation.",
    proofVal2: "100+ Successfully Scaled Campaigns across DTC e-commerce, B2B lead generation, and SaaS verticals.",
    proofVal3: "100+ Audited and Delivered Projects: tracking rebuilds, funnel optimizations, custom BI dashboards, and comprehensive account audits.",
    proofVal4: "Proven Business Wins: 10x lead volume surge, ROAS scaled from 6 to 10, +2% checkout conversion lift, and custom automated PMax script architectures.",
    proofVal5: "Verifiable Track Record: Transparent case studies, methodologies, and interactive calculators available live at maurerlajos.com.",
    
    resumeEduTitle: "EDUCATION & CREDENTIALS",
    edu1: "Google Ads & Analytics Certifications: Google Ads Search, Shopping, Measurement (GA4), and Display credentials.",
    edu2: "CXL Institute Credentials: Conversion Rate Optimization (CRO), A/B Testing Masterclass, Conversion Research & UX Research.",
    edu3: "University of Szeged (2016): Business Information Systems (Foundations in data analysis, database management, and information systems).",
    
    resumeLetConnectTitle: "LET'S CONNECT & ACCOUNT AUDIT",
    resumeLetConnectText: "A CV shows what a candidate claims to have achieved. An interview demonstrates how well they articulate it. A practical account audit or technical test proves how they actually diagnose and solve problems in reality. Skip the guesswork: send me a historical metric snapshot, a sample dashboard with an intentional discrepancy, or an account facing a ROAS plateau. I'll isolate the bottlenecks and explain in plain business language what I would modify first, and why.",
    resumeLetConnectCta: "Reach out directly at maurerlajos1@gmail.com or call +36 30 268 5650 to schedule a conversation or live audit.",

    // Expanded competency & experience keys (shared with HU)
    resumeProfileP3: "Open to live account audits, practical hiring tests, and diagnostic dashboard evaluations.",
    resumeProfileP4: "",
    resumeCompetency1Title: "Paid Acquisition & Performance Marketing",
    resumeCompetency2Title: "Google Ads & E-Commerce Focus",
    resumeCompetency2Val: "Google Merchant Center feed optimization, search intent mapping, brand/non-brand segmentation, Target CPA/ROAS bidding, Value-Based Bidding, custom Google Ads Scripts to filter underperforming inventory.",
    resumeCompetency3Title: "Conversion Rate Optimization & Growth",
    resumeCompetency3Val: "CRO, A/B testing, landing page and checkout funnel optimization, heuristic audits, user behavior analysis (Hotjar, GA4), eliminating friction throughout the customer buying journey.",
    resumeCompetency4Title: "CRM & Marketing Automation",
    resumeCompetency4Val: "HubSpot, Salesforce, lead scoring, CRM-driven feedback loops, customer acquisition funnel efficiency analysis.",
    resumeCompetency7Title: "Technical & Creative Tools",
    resumeCompetency7Val: "Python, SQL, Google Ads Scripts, HTML/CSS/JavaScript fundamentals, WordPress, WooCommerce, Canva, AI-assisted creative production.",
    resumeCompetency8Title: "Industry Experience",
    resumeCompetency8Val: "DTC E-Commerce (retail, baby & mama, fashion, beauty), B2B lead generation, SaaS & subscription models, education, real estate, and local home services.",
    caseFreeL3: "+2% Checkout Conversion Rate Lift (CRO): Analyzed user friction across a complex 10-step checkout flow for a beauty supply brand using GA4 and Hotjar. Delivered streamlined wireframes to developers, injected trust and reassurance elements, and integrated user-demanded shipping options, directly increasing checkout completion by +2%.",
    caseFreeL4: "Performance Max Automation & Script Engineering (SaaS): Designed full-funnel acquisition strategy and GTM measurement for an online math tutoring subscription platform. Engineered custom Google Ads Scripts to automatically flag and exclude 'zombie' (budget-draining, non-converting) assets in Performance Max campaigns.",
    caseFreeL5: "Closed-Loop Lead Quality Optimization (CRM Integration): Restructured acquisition funnels where high lead volume masked poor lead quality. Reconnected CRM offline conversion milestones (HubSpot, Salesforce) into Google and Meta bidding algorithms, shifting machine learning toward closed deal revenue rather than raw form fills.",
    resumeCaseClickL4: "Translated complex multi-channel performance data into C-level Looker Studio dashboards, illustrating direct relationships between ad spend, CAC, LTV, and net profit margins.",
    resumeCaseClickL5: "Dynamically reallocated budgets across Google Ads, Meta, and TikTok based on true incremental CPA and contribution margin.",
    resumeCaseBprodL5: "Optimized Google Merchant Center product feeds: restructured feed data, enhanced product attributes, and structured profit-focused Shopping campaigns.",
    resumeCaseBprodL6: "",
    resumeCaseBprodL7: "",
    resumeCaseBprodL8: "",
    
    contactEmail: "maurerlajos1@gmail.com",

    // Footer
    footerCredits: "Performance architect. I fix leaky funnels and force marketing to make mathematical sense.",
    footerContactTitle: "Direct Line",
    footerSocialTitle: "The Network",
    footerRights: "All rights reserved.",
    footerPreach: "Traffic is cheap. Intent is expensive.",

    // Tool UI
    metricTraffic: "Monthly Traffic",
    metricCVR: "Conversion Rate (%)",
    metricAOV: "Avg Order Value ($)",
    metricSpend: "Ad Spend ($)",
    resultRevenue: "Proj. Revenue",
    resultROAS: "ROAS",
    resultCPA: "CPA",
    
    langToggle: "Magyar",
  },
  hu: {
    // Nav
    navHome: "Főoldal",
    navWork: "Esettanulmányok",
    navMethodology: "Módszertan",
    navVault: "Tudástár",
    navAbout: "Rólam",
    navResume: "Önéletrajz",
    navBlog: "Blog",

    // Blog UI
    blogHeaderTitle: "Teljesítmény-fókuszú Elemzések",
    blogHeaderSubtitle: "Szakmai mélyfúrások a Server-Side Tracking, CRO, és a fejlett Paid Media hirdetések világába.",
    readArticle: "Cikk Olvasása",
    blogCtaTitle: "Nézd meg a rendszert a háttérben",
    blogCtaDesc: "Olvasd el az esettanulmányokat, vagy töltsd le az önéletrajzomat a teljes performance growth háttérhez.",
    blogCtaPrimary: "Esettanulmányok",
    blogCtaSecondary: "CV letöltése",
    backToBlog: "Vissza a cikkekhez",
    postNotFound: "A cikk nem található",
    authorTitle: "Lajos Maurer",
    authorDesc: "Teljesítmény-fókuszú Növekedési & CRO Szakértő. Erősen technikai fókuszú fizetett média skálázásra és adatvezérelt bevételoptimalizálásra specializálódott.",
    authorLink: "Tudj meg többet a szakmai hátteremről →",
    
    // Hero - UVP
    heroPreTitle: "Szisztematikus Növekedés",
    heroTitle: "A forgalom olcsó. A vásárlási szándék (intent) drága. Olyan mérési és pszichológiai rendszereket építek, amik a céltalan kattintókból fizető vásárlókat konvertálnak.",
    heroSubtitle: "A marketing büdzsék nagy része vakrepülésre megy el. Engem nem érdekelnek a lájk-hegyek és a hiúsági metrikák (vanity metrics). Ami érdekel: golyóálló szerver-oldali (server-side) mérések, tiszta attribúció, és azok a pszichológiai triggerek, amiktől az emberek tényleg előveszik a bankkártyájukat.\n\nNincs ügynökségi fekete doboz. Nincs vakmerő tippelgetés.",
    heroCtaVault: "Esettanulmányok",
    secondaryCta: "CV letöltése",

    // Social Proof Bar
    proof1: "100 Millió+ Ft Kezelt Költés",
    proof2: "10+ Optimalizált Iparág",
    proof3: "CXL/CRO Módszertan",

    // Problem & Focus
    problemTitle: "A cégek égetik a pénzt. Ünneplik a 'megtekintéseket', miközben sorra veszítik el a vevőket a kasszánál.",
    problemText: "A klasszikus ügynökségi modell halott. Olcsó kattintásokat adnak el neked, és hangzatos márkaismertségi (brand awareness) riportokat küldenek, miközben az akvizíciós költségeid (CAC) az egekben vannak.\n\nÉn klinikusan közelítek a növekedéshez. Amit nem tudunk hajszálpontosan mérni, azt nem is skálázzuk. Először mindig a lyukas értékesítési tölcsért (funnel) foltozzuk be: rendbe tesszük az adathigiéniát, feltérképezzük a valódi motivációkat, és addig tekerjük a matekot, amíg a megtérülés (ROAS) egyértelműen pozitív nem lesz.",

    // Core Principles
    solutionTitle: "Hagyd abba a találgatást. Kezdj el mérni.",
    meth1Title: "1. A Pszichológia (UX & CRO)",
    meth1Desc: "Látom, hol akadnak el a látogatóid, hol hagyják el a kosarat (cart abandonment), és pontosan miért kattintanak el. Aztán addig írom át a szövegeket (copywriting) és faragom újra az oldalt, amíg végig nem mennek a folyamaton. A felhasználói súrlódás (friction) a bevétel legnagyobb ellensége.",
    meth2Title: "2. A Matematika (Attribúció)",
    meth2Desc: "A hagyományos pixelek haldoklanak. Server-side (szerver-oldali) méréseket építek, hogy az algoritmusok tényleges vásárlókat találjanak, ne csak nézelődőket. Minden elköltött hirdetési forintot feketén-fehéren az üzleti bevételhez (revenue) kötök.",

    // Interactive Tool (Reciprocity/Proof)
    toolSectionTitle: "Ne higgy nekem. Játssz a matekkal.",
    toolSectionIntro: "Nézd meg, hogyan többszörözi meg a bevételedet egy mikroszkopikus, 1%-os konverziójavulás. Húzd el a csúszkákat és figyeld a változást.",
    toolTitle: "Növekedési Kalkulátor",
    toolIntro: "Állítsd be a változókat. A növekedés nem véletlen, ez egy egyenlet.",
    
    // Philosophy / Anxiety Reduction
    anxietyTitle: "A Hitvallásom",
    anxietyText: "A teljesítménymarketing (performance marketing) számomra egy matematikai rendszer. A 'megérzéseket' adatokkal zúzom szét, a kampányokat pedig úgy építem fel, hogy kristálytiszta legyen, miből lesz a bevétel. Nincsenek ügynökségi fekete dobozok, és nincs tippelgetés.",
    
    // Home Loop
    homeLoopTitle: "Nem csak elköltöttem a büdzsét. Minden egyes forintját lekövettem.",
    homeLoopDesc: "Nézd meg azokat a konkrét taktikákat, heurisztikus auditokat és szerver-oldali megoldásokat, amikkel ezeket a kampányokat skáláztam.",
    homeLoopBtn: "Esettanulmányok Megtekintése",

    // Case Studies Page
    caseStudiesTitle: "A Bizonyíték.",
    caseStudiesSub: "Esettanulmányok és klinikai szintű elemzések E-commerce, SaaS és B2B piacokon. Több mint 100 millió Ft kezelt hirdetési keret – végponttól végpontig mérve és optimalizálva.",
    caseAgency: "Ügynökség",
    roleOnlineMarketing: "Online Marketing Specialista (2020 - 2024)",
    caseMetricAvgBudget: "Átlagos Havi Büdzsé",
    caseMetricAvgBudgetVal: "7 Millió+ Ft",
    caseMetricCampaigns: "Kampányok",
    caseMetricCampaignsVal: "100+ Skálázva",
    caseMetricSpend: "Kezelt Költségvetés",
    caseMetricSpendVal: "100 Millió+ Ft",
    caseMetricProjects: "Projektek",
    caseMetricProjectsVal: "100+ Leszállítva",
    caseApproachTitle: "A Végrehajtás",
    caseBprodL1: "Olyan cross-channel tölcséreket építettem, amik rákényszerítették a Google és a Meta algoritmusait, hogy tényleges vásárlókat szállítsanak, ne csak üres forgalmat.",
    caseBprodL2: "Kigyomláltam a hibás analitikát, és Server-Side GTM-et állítottam be az adatszivárgás megállítására.",
    caseBprodL3: "Vezetői Looker Studio dashboardokat építettem, hogy az alapítók végre értsék a megtérülésüket.",
    caseBprodL4: "Kíméletlen A/B teszteléseket hajtottam végre a viselkedési UX akadályok elhárítására.",
    rolePpcManager: "PPC Manager (2024 - 2025)",
    caseClickTag: "Konverziós Architektúra",
    caseClickL1: "Nagy költésű PPC fiókokat kezeltem – nulla toleranciával az elpazarolt büdzsék irányába.",
    caseClickL2: "A komplex adathalmazokat transzparens, lényegretörő riportokká fordítottam le az ügyfeleknek.",
    caseClickL3: "Akvizíciós folyamatokat optimalizáltam Meta, TikTok és Google Ads rendszerekben.",
    caseLoopTitle: "A Rendszer Az Eredmények Mögött",
    caseLoopDesc: "Fedezd fel a specifikus pszichológiai triggereket, heurisztikus auditokat és mérési rendszereket, amik ezeket a számokat produkálták.",
    caseLoopBtn: "Módszertan Felfedezése",

    // Methodology Page
    methPageTitle: "A Motorház",
    methPageSub: "Így szedem darabjaira a tölcséreket, validálom a vásárlói motivációt, és építek golyóálló mérési architektúrát.",
    methSection1Title: "1. Lépés: Heurisztikus Vallatás",
    methSection1Desc: "Az optimalizálás egy kíméletlen audittal kezdődik. Darabokra szedem az oldal felépítését, vizsgálom a kognitív terhelést, és session felvételeket nézek, hogy pontosan lássam, hol adják fel a látogatók. Mindig a vérzés elállításával kezdjük.",
    methSection2Title: "2. Lépés: Viselkedéspszichológia",
    methSection2Desc: "BJ Fogg viselkedési modelljére építve itt nem arról van szó, hogy 'színezzük át a gombot pirosra'. Tűpontos szövegírással felpumpáljuk a felhasználói motivációt, és drasztikusan lecsökkentjük a vásárlás útjában álló súrlódásokat.",
    methSection3Title: "3. Lépés: Klinikai Attribúció",
    methSection3Desc: "A böngészők sorra blokkolják a trackereket. A hagyományos pixelek halottak. Server-side (szerver-oldali) GTM-et és GA4-et telepítek, hogy a bevételi adataid túléljék a blokkolókat, és a megfelelő adatokkal etessék az algoritmusokat.",
    methLoopTitle: "Vidd Az Eszközeim",
    methLoopDesc: "Böngészd a pontos sablonokat, A/B teszt kalkulátorokat és GTM szkripteket, amiket használok. Több mint 600 forrás, teljesen ingyen.",
    methCtaVaultBtn: "Tudástár Kinyitása",

    // The Vault Page
    vaultPreTitle: "A TISZTESSÉGTELEN ELŐNY",
    vaultPageTitle: "A Marketing Tudástár",
    vaultPageSub: "Ez nem egy újabb lista unalmas blogcikkekről. Ez maga a 'playbook'. Több mint 600 órányi gondosan összegyűjtött CRO taktika, kalkulátor és GTM szkript, amiket nap mint nap használok a hibás tölcsérek javítására. Vidd, és használd őket.",
    vaultSearchPlaceholder: "Keresés az adatbázisban...",
    vaultCategoryAll: "Összes forrás",
    vaultCategoryAB: "A/B tesztelés & Stat",
    vaultCategoryAnalytics: "Analitika & Tracking",
    vaultCategoryUX: "UX & Konverzió",
    vaultCategoryCopy: "Szövegírás & Meggyőzés",
    vaultCategoryResearch: "Kutatás & VoC",
    vaultCategoryAds: "Fizetett hirdetések",
    vaultCategoryBranding: "Márka & Stratégia",
    vaultFoundCount: "{count} forrás találva",
    vaultLoadMore: "Továbbiak betöltése",
    vaultNoResults: "Nincs találat. Próbálj más kifejezést.",
    vaultNotice: "Megjegyzés: A sablonok és keretrendszerek nagy része angol nyelvű, mivel a legfrissebb nemzetközi iparági standardokra épülnek.",
    vaultTypeAll: "Összes típus",
    vaultTypeArticles: "Cikkek és Elemzések",
    vaultTypeTools: "Kalkulátorok és Eszközök",
    vaultTypeDecks: "Prezentációk",
    vaultTypeTemplates: "Táblázatok és Sablonok",
    vaultLabelArticles: "Cikk",
    vaultLabelTools: "Eszköz",
    vaultLabelDecks: "Prezentáció",
    vaultLabelTemplates: "Sablon",
    vaultLabelOther: "Link",
    vaultLoopTitle: "Ki állította ezt össze?",
    vaultLoopDesc: "Nézd meg a karrierutamat, a minősítéseimet és annak az embernek a technikai stack-jét, aki ezt az adatbázist építette.",
    vaultLoopBtn: "Rólam & Tech Stack",

    // About Page
    aboutTitle: "A Rendszerépítő",
    aboutSub: "Az eredmények mögötti idővonal, technológia és filozófia.",
    aboutTech: "Technológiai Stack",
    aboutTimeline: "Karrierút",
    aboutCertifications: "Klinikai Minősítések",
    aboutTraining: "Szakmai Indoktrináció",
    aboutCtaTitle: "Beszéljünk Számokról",
    aboutCtaDesc: "Ha eleged van a találgatásból, és végre mérhető eredményeket akarsz, nézzük meg a tölcséreidet. Keress bátran e-mailen vagy LinkedInen.",
    aboutStoryP1: "Nem hagyományos marketingesként kezdtem az iparágban, hanem a hirdetési rendszerek és az emberi viselkedés elemzőjeként. Észrevettem, hogy a cégek milliókat égetnek el forgalomterelésre, de teljesen figyelmen kívül hagyják a felhasználó pszichológiai élményét, miután az kattintott.",
    aboutStoryP2: "Az évek során egy hibrid megközelítést alakítottam ki: részben viselkedéspszichológia, részben szigorú adattudomány. Nem hiszek a \"best practice\"-ekben. A szerver-oldali mérésekben, a golyóálló attribúcióban és a szisztematikus A/B tesztelésben hiszek.",
    aboutStoryP3: "Ma olyan növekedési motorokat építek vállalatoknak, amelyek készek abbahagyni a találgatást és elkezdeni a pontos mérést.",
    aboutStackTitle: "A Technológiai Stack",
    stackAcquisition: "Fizetett Akvizíció",
    stackTracking: "Mérés és Analitika",
    stackCro: "CRO és UX",
    aboutCertTitle: "Minősítések és Képzések",
    aboutLoopTitle: "Készen állsz a rendszereid skálázására?",
    aboutLoopDesc: "Térj vissza a főoldalra, és próbáld ki az interaktív növekedés-előrejelzőt. Nézd meg, mit jelent a bevételedben egy apró, 15%-os konverziójavulás.",
    aboutLoopBtn: "Vissza a Főoldalra",

    // Resume Page
    resumeTitle: "Önéletrajz",
    resumePrint: "Nyomtatás",
    resumeDownload: "PDF Letöltése",
    rolePerformance: "Performance & Growth Marketing Manager",

    // Professional profile – traditional HU style
    resumeProfileTitle: "SZAKMAI PROFIL",
    resumeProfileSubtitle: "Performance Marketing & Akvizíciós Rendszerépítő",
    resumeProfileDesc1: "",
    resumeProfileP1: "Több mint 6 éve optimalizálok fizetett akvizíciós rendszereket (Google Ads, Meta Ads, TikTok Ads), konverziós folyamatokat (CRO) és szerver-oldali analitikát (GA4, Server-Side GTM). Ügynökségi (Bproduction Agency, Click Brains) és tanácsadói munkáim során nem kereteket égetek, hanem a megtérülés mögötti összefüggéseket teszem rendbe: kiderítem, miért akad el egy skálázás, miért esik a leadek minősége a darabszám növekedésével párhuzamosan, és hol szivárog el a büdzsé a mérési hibák miatt.",
    resumeProfileP2: "A munkám lényege a diagnosztika: a kampánybeállítások módosítása előtt historikus adatok (CPM, CTR, CPC, CPA, ROAS) mélyelemzését végzem el. Server-Side mérésekkel kiküszöbölöm a böngészős adatvesztést (ITP, adblockerek), és a platformok algoritmusait valós üzleti értékre (offline konverziók, minősített leadek, vásárlások) licitáltatom, nem olcsó, céltalan forgalomra.",
    resumeProfileP3: "Nyitott vagyok éles fiókauditokra, gyakorlati felvételi próbamunkákra és valós analitikai problémák élő elemzésére.",
    resumeProfileP4: "",

    resumeCoreCompetenciesTitle: "SZAKTUDÁS & KOMPETENCIÁK",
    resumeCompetency1Title: "Performance marketing & fizetett akvizíció",
    resumeCoreCompetenciesVal: "Google Ads (Search, Shopping, Performance Max, YouTube), Meta Ads (Advantage+, CAPI), TikTok Ads, lead generation, e-commerce skálázás, marketplace & app növekedés, CPA / ROAS alapú licitoptimalizálás, strukturált kizárási és negatív kulcsszó stratégiák.",
    resumeCompetency2Title: "Google Ads & E-commerce fókusz",
    resumeCompetency2Val: "Google Merchant Center termékfeed optimalizálás, keresési szándék alapú kampánytervezés, brand / non-brand szétválasztás, Target CPA / Target ROAS licitálás, Value-Based Bidding, egyedi Google Ads szkriptek nem teljesítő elemek kizárására.",
    resumeTechArsenalTitle: "Konverzióoptimalizálás & Growth",
    resumeTechArsenalVal: "CRO, A/B tesztelés, landing page és fizetési folyamat (checkout) optimalizálás, heurisztikus auditok, felhasználói viselkedéselemzés (Hotjar, GA4), súrlódások (friction) felszámolása a vásárlói úton.",
    resumePlatformsTitle: "Analitika, tracking & adatvezérelt riportolás",
    resumePlatformsVal: "GA4, Google Tag Manager, Server-Side GTM (sGTM), Meta CAPI, Consent Mode v2, enhanced conversions, offline konverziók importálása CRM-ből, Looker Studio dashboardok, BigQuery, CPA / ROAS / POAS / LTV / CAC metrikák.",
    resumeCompetency4Title: "CRM & marketing automatizáció",
    resumeCompetency4Val: "HubSpot, Salesforce, lead scoring, CRM-alapú kampányvisszacsatolás, ügyfélszerzési folyamatok hatékonyságelemzése.",
    resumeCompetency7Title: "Technikai & adateszközök",
    resumeCompetency7Val: "Python, SQL, Google Ads Scriptek, HTML/CSS/JavaScript alapok, WordPress, WooCommerce, Canva, AI-vezérelt kreatívgyártás.",
    resumeCompetency8Title: "Iparági tapasztalat",
    resumeCompetency8Val: "E-commerce (retail, baba-mama, divat, szépségápolás), B2B lead generation, SaaS / előfizetéses rendszerek, oktatás, ingatlan és helyi szolgáltatások.",

    resumeExperienceTitle: "SZAKMAI TAPASZTALAT",
    roleFreelance: "Független Tanácsadó | Performance Marketing & Növekedés (2025. augusztus – Jelenleg)",
    caseFreeL1: "10x-es Lead Növekedés & Teljes Tracking Újraépítés (B2C Lead Gen): Havi 4 millió Ft hirdetési büdzséjű fiók átvétele mérési infrastruktúra nélkül. A mérési rendszer alapoktól való felépítése, a kreatívok szándékalapú átdolgozása és keresőoptimalizálás révén a bejövő leadek száma a tízszeresére (10x) nőtt, 100%-os mérési lefedettség mellett.",
    caseFreeL2: "ROAS Skálázás 6-ról 10-re (E-Commerce): Stagnáló webáruház felpörgetése Shoprenter környezetben: Server-Side GTM implementálása a böngészős adatvesztés megállítására, termékfeed optimalizálás a Shopping forgalom maximalizálására, valamint dinamikus videós kreatívok futtatása Meta, TikTok és PMax platformokon.",
    caseFreeL3: "+2% Konverziós Arány Növekedés a Pénztárban (CRO): Szépségipari webáruház túlbonyolított, 10 lépcsős checkout folyamatának elemzése GA4 és Hotjar adatokkal; a lemorzsolódási pontok megszüntetése újratervezett wireframe-ekkel és bizalomerősítő elemekkel, ami közvetlen +2% kosárelhagyás-csökkenést eredményezett.",
    caseFreeL4: "Performance Max Automatizáció & Script Fejlesztés (SaaS): Előfizetéses oktatási platform teljes mérési és akvizíciós architektúrájának kialakítása; egyedi Google Ads szkript fejlesztése a PMax kampányokban a büdzsét égető, alulteljesítő ('zombi') elemek automatikus kiszűrésére.",
    caseFreeL5: "Minőségi Lead Akvizíció CRM Integrációval: Kampányok szerkezeti újratervezése, ahol a magas leadszám értéktelen érdeklődőket takart. Offline konverziós adatok (HubSpot, Salesforce) visszakötése a Google és Meta rendszereibe, elérve, hogy az algoritmusok lezárt üzleti értékre licitáljanak az űrlapkitöltések száma helyett.",
    resumeRolePpcManager: "Click Brains | PPC Manager (2024 – 2025)",
    resumeCaseClickL1: "Nagy költségvetésű, többcsatornás fiókok kezelése zéró toleranciával a költségpazarlás iránt: rendszeres struktúra- és keresési kifejezés auditok a meddő kattintások kiszűrésére.",
    resumeCaseClickL2: "ROAS-visszaesések és konverziós kilengések gyökérokelemzése: licitemelgetés helyett a változók precíz szétválasztása (kreatívfáradás, közönségkimerülés, tracking hiba vagy konverziós súrlódás).",
    resumeCaseClickL3: "A beérkező leadek minőségének javítása offline konverziós visszacsatolással és precíz kizárási logikákkal.",
    resumeCaseClickL4: "Összetett többcsatornás kampányeredmények lefordítása döntéshozói Looker Studio riportokká: átlátható összefüggések a büdzsé, a CAC, az LTV és a nettó árrés között.",
    resumeCaseClickL5: "Költségkeret dinamikus átcsoportosítása Google Ads, Meta és TikTok között a csatornák valós CPA és margin hozzájárulása alapján.",
    resumeRoleOnlineMarketing: "Bproduction Agency | Online Marketing Specialist (2020 – 2024)",
    resumeCaseBprodL1: "Keresztcsatornás akvizíciós architektúrák felépítése vásárlási szándék és negatív kulcsszó-hálózatok mentén, megakadályozva, hogy az algoritmusok irreleváns forgalomra égessék a büdzsét.",
    resumeCaseBprodL2: "Mérési anomáliák és adatvesztések felderítése: kliens- és szerveroldali GTM megoldások bevezetése a tiszta többcsatornás attribúció érdekében.",
    resumeCaseBprodL3: "Vezetői Looker Studio dashboardok készítése, megmutatva a cégvezetőknek a valós költség-bevétel összefüggéseket ügynökségi fekete doboz és hiúsági metrikák nélkül.",
    resumeCaseBprodL4: "Szisztematikus A/B tesztelés a landing page-ek konverziós akadályainak felszámolására (főcímek, CTA-k, űrlapok egyszerűsítése, ajánlatok pozicionálása).",
    resumeCaseBprodL5: "Google Merchant Center termékfeed optimalizálás: feed struktúra, termékadatok javítása és profitfókuszú Shopping kampányok felépítése.",
    resumeCaseBprodL6: "",
    resumeCaseBprodL7: "",
    resumeCaseBprodL8: "",

    resumeProofTitle: "BIZONYÍTOTT EREDMÉNYEK",
    proofVal1: "100 Millió+ Ft kezelt hirdetési keret szigorú profitorientált kontrollal: előzetes audit, negatív kulcsszó védelem és folyamatos kreatív rotáció minden fiókban.",
    proofVal2: "100+ sikeresen skálázott kampány e-commerce, B2B lead generation és SaaS szektorban.",
    proofVal3: "100+ auditált és megvalósított projekt: tracking újraépítések, konverziós tölcsér javítások, egyedi dashboardok és fiókauditok.",
    proofVal4: "Mérhető üzleti sikerek: 10x-es lead növekedés, ROAS 6 ➡️ 10 skálázás, +2% checkout konverziós ugrás, egyedi PMax kizáró szkriptek.",
    proofVal5: "Auditálható, élő esettanulmányok: Részletes adatok, módszertani leírások és interaktív kalkulátorok a maurerlajos.com oldalon.",

    resumeEduTitle: "TANULMÁNYOK ÉS MINŐSÍTÉSEK",
    edu1: "Google Ads & Analytics: Google Ads Search, Shopping, Measurement (GA4) és Display minősítések.",
    edu2: "CXL Institute Képzések: Conversion Rate Optimization (CRO), A/B Testing Masterclass, Conversion Research & UX Research.",
    edu3: "Szegedi Tudományegyetem: Gazdaságinformatikus képzés, 2016 (adatelemzési és informatikai alapok).",

    resumeLetConnectTitle: "KAPCSOLAT & SZAKMAI PRÓBAMUNKA",
    resumeLetConnectText: "Az önéletrajz azt mutatja meg, mit állít magáról a szakember. Az interjú azt, hogyan tud beszélni róla. A valós szakmai hozzáadott érték viszont egy gyakorlati próbamunkán vagy fiókauditon mutatkozik meg. A kiválasztási folyamat során kifejezetten nyitott vagyok gyakorlati tesztfeladatra: szívesen elemzek egy anonimizált historikus adatsort, egy mintariportot vagy egy stagnáló kampányfiókot, bemutatva, hogyan diagnosztizálom a problémákat és mihez nyúlnék hozzá először.",
    resumeLetConnectCta: "",
    
    contactEmail: "maurerlajos1@gmail.com",

    // Footer
    footerCredits: "Teljesítmény-architekt. Befoltozom a lyukas tölcséreket, és rákényszerítem a marketingedet, hogy matematikai értelemben is működjön.",
    footerContactTitle: "Közvetlen Vonal",
    footerSocialTitle: "A Hálózat",
    footerRights: "Minden jog fenntartva.",
    footerPreach: "A forgalom olcsó. A vásárlási szándék drága.",

    // Tool UI
    metricTraffic: "Havi Forgalom",
    metricCVR: "Konverziós Arány (%)",
    metricAOV: "Átlagos Rendelési Érték ($)",
    metricSpend: "Hirdetési Költség ($)",
    resultRevenue: "Várható Bevétel",
    resultROAS: "ROAS",
    resultCPA: "CPA",
    
    langToggle: "English",
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  
  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'hu' : 'en');
  };

  const t = (key) => { const val = translations[lang][key]; return val !== undefined ? val : key; };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
export { translations };
