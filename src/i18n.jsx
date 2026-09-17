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
    rolePerformance: "Performance & Growth Manager",
    
    // AIDA Structure Keys
    resumeProfileTitle: "PROFESSIONAL PROFILE",
    resumeProfileSubtitle: "Full-Funnel Performance Marketer & Acquisition Architect",
    resumeProfileDesc1: "Numbers → User Intent → Funnel → Creative → Tracking → Net Profit.",
    resumeProfileP1: "For over 5 years I've specialized in Paid Acquisition (Google Ads, Meta, TikTok), CRO, and highly technical analytics (GA4, Server-Side GTM). At Bproduction Agency and Click Brains, I didn't just manage budgets: I diagnosed why campaigns break, why lead quality collapses while lead volume climbs, and why ROAS drops when nothing in Ads Manager has changed.",
    resumeProfileP2: "My methodology is open and verifiable. I audit historical metrics (CPM, CTR, CPC, CPA, ROAS) before touching any campaign. I fix signal loss with Server-Side GTM before scaling. I prevent platforms from buying cheap, low-intent traffic by feeding them accurate conversion signals, and I explain every decision in plain business language without agency jargon.",
    
    resumeCoreCompetenciesTitle: "CORE COMPETENCIES",
    resumeCoreCompetenciesVal: "Google Ads, Meta Ads, TikTok Ads, Search, Shopping, Performance Max, Display, YouTube Ads, Demand Gen, remarketing, lead generation, e-commerce campaigns, marketplace & app-growth campaigns, CPA / ROAS optimization, campaign structure & scaling.",
    resumeTechArsenalTitle: "Conversion Rate Optimization & Growth",
    resumeTechArsenalVal: "CRO, A/B testing, landing page optimization, funnel analysis, offer structure improvement, user behavior analysis, voice-of-customer research, creative testing, growth experiment design and evaluation.",
    resumePlatformsTitle: "Analytics, Tracking & Reporting",
    resumePlatformsVal: "GA4, Google Analytics 360, Google Tag Manager, Server-Side GTM, conversion tracking, enhanced conversions, offline conversion import, tracking audit, Looker Studio dashboards, BigQuery, Power BI, campaign reporting, business KPI analysis, CPA / ROAS / POAS / LTV / CAC performance evaluation.",
    
    resumeExperienceTitle: "PROFESSIONAL EXPERIENCE",
    roleFreelance: "Freelance | Performance Marketing Specialist (Aug 2025 – Present)",
    caseFreeL1: "Diagnosed and rebuilt broken acquisition loops for independent clients by conducting a full audit of historical CPM, CTR, CPC, and CPA before introducing campaign changes.",
    caseFreeL2: "Restructured campaigns where high lead volume masked low lead quality, integrating CRM offline conversion data (HubSpot, Salesforce) into Google and Meta bidding to prioritize deal value over raw form fills.",
    resumeRolePpcManager: "Click Brains | PPC Manager (2024 - 2025)",
    resumeCaseClickL1: "Managed high-spend PPC accounts across multiple industries; performed systematic performance audits to identify and eliminate wasteful spend before increasing budget.",
    resumeCaseClickL2: "Diagnosed ROAS drops and conversion rate fluctuations by isolating variables: creative fatigue, audience saturation, tracking issues, and landing page friction, addressing root causes rather than adjusting bids blindly.",
    resumeCaseClickL3: "Improved lead quality by implementing offline conversion imports and CRM feedback loops, shifting algorithmic optimization away from low-value form fills toward qualified prospects.",
    resumeRoleOnlineMarketing: "Bproduction Agency | Online Marketing Specialist (2020 - 2024)",
    resumeCaseBprodL1: "Structured cross-channel funnels that forced Google and Meta to acquire buyers rather than just traffic, auditing search intent signals, negative keyword coverage, and audience exclusion layers before scaling spend.",
    resumeCaseBprodL2: "Diagnosed attribution failures caused by browser-side tracking limitations, deploying Client-Side GTM and pushing for Server-Side implementation to stop data leakage and restore accurate conversion signals.",
    resumeCaseBprodL3: "Built executive Looker Studio dashboards so founders finally understood their real ROI, connecting ad spend directly to revenue impact without vanity metrics or agency black-box reporting.",
    resumeCaseBprodL4: "Executed systematic A/B testing to remove behavioral friction from landing pages (headlines, CTAs, form length, social proof placement, offer framing).",
    
    resumeProofTitle: "PROOF OF PERFORMANCE",
    proofVal1: "$500,000+ Managed Ad Spend with zero-waste philosophy: systematic audit before scale, negative keyword defense, and creative fatigue rotation.",
    proofVal2: "100+ Scaled Campaigns across e-commerce, lead gen, SaaS, local services, and marketplaces.",
    proofVal3: "100+ Delivered Projects including tracking rebuilds, funnel restructures, dashboard builds, and full-account audits.",
    proofVal4: "Multi-industry experience across agency and freelance environments.",
    proofVal5: "Verifiable track record backed by in-depth case studies and live methodology tools at maurerlajos.com.",
    
    resumeEduTitle: "EDUCATION & CREDENTIALS",
    edu1: "Google Ads Certifications – Search, Display, Video, Shopping, App campaigns, GA Individual Qualification.",
    edu2: "CXL Training – A/B Testing, Growth Process, Conversion Research, CRO and User Research.",
    edu3: "University of Szeged – Business Information Systems, 2016.",
    
    resumeLetConnectTitle: "LET'S CONNECT",
    resumeLetConnectText: "A CV can tell you what someone claims they've done. An interview can tell you how well they talk about it. A practical test shows how they actually think. Skip the guesswork: send me a historical metric snapshot, a sample dashboard with an intentional problem, or an account facing a ROAS plateau. I'll diagnose the issue, explain what I'd change first, and walk you through the math in plain business language.",
    resumeLetConnectCta: "Email me today at maurerlajos1@gmail.com or call +36 30 268 5650 to schedule an interview.",

    // Expanded competency & experience keys (shared with HU)
    resumeProfileP3: "Open to live account audits, practical hiring tests, and sample dashboard evaluations.",
    resumeProfileP4: "",
    resumeCompetency1Title: "Paid Acquisition & Performance Marketing",
    resumeCompetency2Title: "Programmatic & Auction-Based Media Buying",
    resumeCompetency2Val: "Google Display & Video 360 / DV360, Google Ads Display and YouTube campaigns, remarketing, audience-based targeting, auction-based media buying, programmatic approach, campaign performance analysis and optimization.",
    resumeCompetency3Title: "Google Ads & E-commerce Focus",
    resumeCompetency3Val: "Google Merchant Center, product feed-based campaigns, Shopping and Performance Max optimization, search intent-based campaign planning, brand / non-brand campaign structure, keyword research, negative keyword strategy, bidding strategies, budget optimization.",
    resumeCompetency4Title: "CRM, Marketing Automation & Business Systems",
    resumeCompetency4Val: "HubSpot, Salesforce, Mautic, lead management, CRM-based campaign tracking, marketing automation fundamentals, customer acquisition funnel analysis and optimization.",
    resumeCompetency7Title: "Technical & Creative Tools",
    resumeCompetency7Val: "WordPress, WooCommerce, Canva, AI-driven creative production, Python, SQL, HTML, CSS, JavaScript, basic web development and landing page creation skills.",
    resumeCompetency8Title: "Industry Experience",
    resumeCompetency8Val: "Performance marketing experience across e-commerce, marketplace / app-growth, B2B lead generation, SaaS / subscription, local services, education, wellness / beauty, real estate, and home services.",
    caseFreeL3: "Set up and audited measurement systems using GA4, Server-Side GTM, and enhanced conversions to restore algorithmic signal accuracy lost to browser-side tracking limitations.",
    caseFreeL4: "Built client-facing dashboards connecting ad spend directly to CAC, blended ROAS, and customer LTV; explained what to change first and why in plain business language.",
    caseFreeL5: "Developed ad copy, creative direction, and landing page messaging aligned to funnel stage and user intent.",
    resumeCaseClickL4: "Translated complex multi-channel campaign data into executive-level reports connecting spend, CAC, LTV, and net ROI, giving leadership clear visibility without agency jargon.",
    resumeCaseClickL5: "Optimized acquisition processes across Google Ads, Meta, and TikTok simultaneously, reallocating budget to highest-performing segments based on CPA and ROAS efficiency.",
    resumeCaseBprodL5: "Optimized landing pages and campaign messaging across funnel stages to improve conversion rates.",
    resumeCaseBprodL6: "Ran continuous testing cycles to support more efficient campaign development.",
    resumeCaseBprodL7: "Supported SEO projects: onsite SEO optimization, content calendar planning and keyword strategy.",
    resumeCaseBprodL8: "Google Merchant Center feed optimization: product feed structure, data quality improvement and Shopping campaign setup.",
    
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
    resumeProfileSubtitle: "Full-Funnel Performance Marketer & Akvizíciós Rendszerépítő",
    resumeProfileDesc1: "Számok → Vásárlói szándék → Tölcsér → Kreatív → Mérés → Valós üzleti profit.",
    resumeProfileP1: "Több mint 5 éve optimalizálok fizetett akvizíciós rendszereket (Google Ads, Meta, TikTok), konverziós tölcséreket (CRO) és szerver-oldali analitikát (GA4, Server-Side GTM). A Bproduction Agency-nél és a Click Brainsnél nem költségkereteket égettem, hanem a megtérülés mögötti összefüggéseket tettem rendbe: kiderítettem, miért akad el egy skálázás, miért esik a leadek minősége a darabszám növekedésével párhuzamosan, és hol szivárog el a büdzsé a mérési hibák miatt.",
    resumeProfileP2: "A munkám lényege nem a találgatás, hanem a diagnosztika. Mielőtt növelném a költést, részletesen auditálom a historikus adatokat (CPM, CTR, CPC, CPA, ROAS). Server-Side mérésekkel kiküszöbölöm az adatvesztést, és csak olyan minőségi konverziós jeleket engedek vissza az algoritmusoknak, amelyek tényleges vásárlókat hoznak, nem pedig olcsó, céltalan forgalmat. Döntéseimet nem ügynökségi szakzsargonnal fedem le, hanem tiszta üzleti nyelven támasztom alá.",
    resumeProfileP3: "Nyitott vagyok éles fiókauditokra, gyakorlati felvételi próbamunkákra és valós analitikai problémák élő elemzésére.",
    resumeProfileP4: "",

    resumeCoreCompetenciesTitle: "ALAPVETŐ KOMPETENCIÁK",
    resumeCompetency1Title: "Performance marketing és fizetett akvizíció",
    resumeCoreCompetenciesVal: "Google Ads, Meta Ads, TikTok Ads, Search kampányok, Shopping kampányok, Performance Max, Display, YouTube Ads, Demand Gen, remarketing, lead generation, e-commerce kampányok, marketplace és app-growth kampányok, CPA / ROAS alapú optimalizálás, kampánystruktúra-építés és skálázás.",
    resumeCompetency2Title: "Programmatic és aukcióalapú médiavásárlás",
    resumeCompetency2Val: "Google Display & Video 360 / DV360, Google Ads Display és YouTube kampányok, remarketing, közönség-alapú célzás, aukcióalapú médiavásárlás, programmatic szemlélet, kampányteljesítmény elemzés és optimalizálás.",
    resumeCompetency3Title: "Google Ads és e-commerce fókusz",
    resumeCompetency3Val: "Google Merchant Center, termékfeed-alapú kampányok, Shopping és Performance Max optimalizálás, keresési szándék alapú kampánytervezés, brand / non-brand kampánystruktúra, kulcsszókutatás, negatív kulcsszó stratégia, ajánlattételi stratégiák, költségkeret-optimalizálás.",
    resumeTechArsenalTitle: "Konverzióoptimalizálás és growth",
    resumeTechArsenalVal: "CRO, A/B tesztelés, landing page optimalizálás, funnel elemzés, ajánlatstruktúra fejlesztése, felhasználói viselkedés elemzése, voice-of-customer kutatás, kreatív tesztelés, growth kísérletek tervezése és értékelése.",
    resumePlatformsTitle: "Analitika, tracking és riportolás",
    resumePlatformsVal: "GA4, Google Analytics 360, Google Tag Manager, Server-Side GTM, conversion tracking, enhanced conversions, offline conversion import, tracking audit, Looker Studio dashboardok, BigQuery, Power BI, kampányriportok, üzleti KPI-ok elemzése, CPA / ROAS / POAS / LTV / CAC alapú teljesítményértékelés.",
    resumeCompetency4Title: "CRM, marketing automation és üzleti rendszerek",
    resumeCompetency4Val: "HubSpot, Salesforce, Mautic, lead management, CRM-alapú kampánykövetés, marketing automation alapok, ügyfélszerzési folyamatok elemzése és optimalizálása.",
    resumeCompetency7Title: "Technikai és kreatív eszközök",
    resumeCompetency7Val: "WordPress, WooCommerce, Canva, AI-alapú kreatív gyártás, Python, SQL, HTML, CSS, JavaScript, alapvető webfejlesztési és landing page készítési ismeretek.",
    resumeCompetency8Title: "Iparági tapasztalat",
    resumeCompetency8Val: "E-commerce, marketplace / app-growth, B2B lead generation, SaaS / subscription, local services, education, wellness / beauty, real estate és home services területeken szerzett performance marketing tapasztalat.",

    resumeExperienceTitle: "SZAKMAI TAPASZTALAT",
    roleFreelance: "Szabadúszó | Performance Marketing & Növekedési Tanácsadó (2025. augusztus – jelenleg)",
    caseFreeL1: "Független ügyfelek akvizíciós folyamatainak teljes körű auditja és újraépítése: a kampánybeállítások módosítása előtt a historikus költségek (CPM, CTR, CPC, CPA) mélyelemzése.",
    caseFreeL2: "Olyan kampányok szerkezeti újratervezése, ahol a magas leadszám valójában rossz minőségű érdeklődőket takart. CRM offline konverziós adatok (HubSpot, Salesforce) bekötése a Google és Meta rendszereibe, hogy a platformok valódi üzleti értékre és zárt üzletekre licitáljanak, ne csak űrlapkitöltésekre.",
    caseFreeL3: "Precíz mérési rendszerek implementálása (GA4, Server-Side GTM, Enhanced Conversions), visszaállítva a böngészős korlátozások (ITP, adblockerek) miatt elveszített vásárlási szignálokat.",
    caseFreeL4: "Vezetői szintű riporting rendszerek építése, amelyek a hirdetési költést közvetlenül az ügyfélszerzési költséghez (CAC), a megtérüléshez (blended ROAS) és az ügyfélértékhez (LTV) kapcsolják.",
    caseFreeL5: "Tölcsérfázisokhoz és keresési szándékhoz igazított hirdetésszövegek, kreatív koncepciók és landing page üzenetek fejlesztése.",
    resumeRolePpcManager: "Click Brains | PPC Manager (2024 – 2025)",
    resumeCaseClickL1: "Magas büdzséjű fiókok kezelése zéró toleranciával a pazarló költések iránt: rendszeres struktúra- és keresési kifejezés auditok a meddő kattintások kiszűrésére.",
    resumeCaseClickL2: "Hirtelen ROAS-visszaesések és konverziós kilengések gyökérok-elemzése: a licitek vak emelgetése helyett a változók szétválasztása (kreatívfáradás, közönségkimerülés, technikai tracking hiba vagy konverziós súrlódás).",
    resumeCaseClickL3: "A beérkező leadek minőségének javítása offline konverziós visszacsatolással és kizárási logikákkal.",
    resumeCaseClickL4: "Összetett többcsatornás kampányeredmények lefordítása döntéshozói riportokká: átlátható összefüggések a költés, a CAC, az LTV és a tiszta profit között.",
    resumeCaseClickL5: "Költségkeret dinamikus átcsoportosítása Google Ads, Meta és TikTok között a csatornák valós CPA és margin hozzájárulása alapján.",
    resumeRoleOnlineMarketing: "Bproduction Agency | Online Marketing Specialist (2020 – 2024)",
    resumeCaseBprodL1: "Keresztcsatornás tölcsérek felépítése vásárlási szándék és negatív kulcsszó-hálózatok mentén, megakadályozva, hogy az algoritmusok felesleges forgalomra égessék a büdzsét.",
    resumeCaseBprodL2: "Mérési anomáliák és adatvesztések felderítése: kliens- és szerver-oldali GTM megoldások bevezetése a tiszta attribúció érdekében.",
    resumeCaseBprodL3: "Vezetői Looker Studio dashboardok készítése, megmutatva az alapítóknak a valós költés-bevétel összefüggéseket, ügynökségi fekete doboz és hiúsági metrikák nélkül.",
    resumeCaseBprodL4: "Folyamatos, szisztematikus A/B tesztelés a landing page-ek konverziós akadályainak felszámolására (főcímek, CTA-k, űrlapok egyszerűsítése, ajánlatok pozicionálása).",
    resumeCaseBprodL5: "Landing page-ek és kampányüzenetek optimalizálása tölcsérfázisonként a konverziós arány javítása érdekében.",
    resumeCaseBprodL6: "Folyamatos tesztelési ciklusok a hatékonyabb kampányfejlesztés támogatására.",
    resumeCaseBprodL7: "SEO projektek támogatása: onsite SEO optimalizálás, tartalom naptár készítése és kulcsszóstratégia.",
    resumeCaseBprodL8: "Google Merchant Center termékfeed optimalizálás: feed struktúra, termékadatok javítása és Shopping kampányok alapozása.",

    resumeProofTitle: "EREDMÉNYEK",
    proofVal1: "100 Millió+ Ft kezelt hirdetési keret szigorú kontrollal: előzetes audit, negatív kulcsszó védelem és kreatív rotáció minden fiókban.",
    proofVal2: "100+ skálázott kampány e-commerce, B2B lead generation, SaaS és szolgáltatói szektorokban.",
    proofVal3: "100+ sikeres projekt: tracking-újraépítések, tölcsér-optimalizálások, dashboard rendszerek és fiókauditok.",
    proofVal4: "Több iparágban szerzett tapasztalat ügynökségi és szabadúszó környezetben.",
    proofVal5: "Átlátható, bizonyítható háttér: részletes esettanulmányokkal és élő tudástárral a maurerlajos.com oldalon.",

    resumeEduTitle: "TANULMÁNYOK ÉS BIZONYÍTVÁNYOK",
    edu1: "Google Ads tanúsítványok – Search, Display, Video, Shopping, App kampányok, GA Individual Qualification.",
    edu2: "CXL képzések – A/B tesztelés, growth folyamatok, konverziókutatás, CRO és felhasználói kutatás.",
    edu3: "Szegedi Tudományegyetem – Gazdaságinformatikus képzés, 2016.",

    resumeLetConnectTitle: "KAPCSOLAT",
    resumeLetConnectText: "Az önéletrajz azt mutatja meg, mit állít magáról a jelölt. Az interjú azt, hogyan tud beszélni róla. Egy gyakorlati próbamunka viszont azonnal megmutatja, hogyan gondolkodik a valóságban. Hagyjuk a tippelgetést: küldjön egy historikus adatsort, egy hibákkal teli mintariportot vagy egy stagnáló kampányfiókot. Feltárom a szűk keresztmetszeteket, és világos üzleti nyelven elmagyarázom, mihez nyúlnék hozzá először, és miért.",
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
