import React, { createContext, useContext, useState } from 'react';

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
    backToBlog: "Back to Articles",
    postNotFound: "Post Not Found",
    authorTitle: "Lajos Maurer",
    authorDesc: "Performance Growth & CRO Specialist. Specializing in highly technical paid media scaling and data-driven revenue optimization.",
    authorLink: "Learn more about my background →",
    
    // Hero - UVP
    heroPreTitle: "Systematic Revenue Growth",
    heroTitle: "Traffic is cheap. Intent is expensive. I build the systems that turn casual clicks into measurable revenue.",
    heroSubtitle: "Most marketing budgets are burned on guesses. I don't care about vanity metrics. I care about server-side tracking, bulletproof attribution, and behavioral triggers that actually make people pull out their credit cards.\n\nNo black boxes. No guessing.",
    heroCtaVault: "Steal My Playbooks",
    secondaryCta: "Interactive Forecaster",

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
    resumeProfileTitle: "Professional Profile",
    resumePositioning: "Experimentation-led performance marketer with CXL-level depth in CRO, voice-of-customer research, messaging, analytics, and paid acquisition.",
    resumeCoreSkills: "Core Competencies",
    skillCRO: "CRO & Experimentation (A/B testing, heuristics)",
    skillResearch: "VoC & User Research (Message mining)",
    skillTracking: "Technical Analytics (Server-side tracking, GA4)",
    skillPPC: "Paid Acquisition (Google Ads, Meta, TikTok)",
    resumeTechTitle: "Tools & Technical Skills",
    resumeTech1: "Analytics & Tracking: GA4, Google Tag Manager, Server-Side & Client-Side GTM, Looker Studio, Power BI, Conversion Tracking",
    resumeTech2: "Platforms & Software: WordPress, Elementor Pro, WooCommerce, Shoprenter, Unas, Ahrefs, Mailchimp, HubSpot, Salesforce, Canva",
    resumeTech3: "Web & Automation: HTML, CSS, JavaScript, Python, SQL",
    resumeExperience: "Professional Experience",
    roleFreelance: "Self-Employed Freelance (Aug 2025 - Present)",
    caseFreeL1: "Led independent performance marketing work focused on paid media strategy, analytics, reporting, and conversion-oriented campaign improvement.",
    caseFreeL2: "Continued hands-on execution across tracking, channel performance analysis, copywriting, landing pages, banner production, and ad creative support.",
    resumeMetrics: "Career Impact Highlights",
    resumeEducation: "Education",
    edu1: "Business Information Systems Programme — University of Szeged (2016)",
    edu2: "Mathematics and Informatics Major — János Arany Theoretical High School (2011)",
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
    backToBlog: "Vissza a cikkekhez",
    postNotFound: "A cikk nem található",
    authorTitle: "Lajos Maurer",
    authorDesc: "Teljesítmény-fókuszú Növekedési & CRO Szakértő. Erősen technikai fókuszú fizetett média skálázásra és adatvezérelt bevételoptimalizálásra specializálódott.",
    authorLink: "Tudj meg többet a szakmai hátteremről →",
    
    // Hero - UVP
    heroPreTitle: "Szisztematikus Növekedés",
    heroTitle: "A forgalom olcsó. A vásárlási szándék drága. Olyan mérési és pszichológiai rendszereket építek, amik a céltalan kattintókból fizető vásárlókat csinálnak.",
    heroSubtitle: "A marketing büdzsék nagyrésze vakrepülésre megy el. Engem nem érdekelnek a lájk-hegyek és a hiúsági metrikák. Ami érdekel: golyóálló szerver-oldali mérések, tiszta attribúció, és azok a pszichológiai triggerek, amiktől az emberek tényleg előveszik a bankkártyájukat.\n\nNincs fekete doboz. Nincs vakmerő tippelgetés.",
    heroCtaVault: "Vidd a Stratégiáim",
    secondaryCta: "Növekedés Előrejelző",

    // Social Proof Bar
    proof1: "100 Millió+ Ft Kezelt Költés",
    proof2: "10+ Optimalizált Iparág",
    proof3: "CXL/CRO Módszertan",

    // Problem & Focus
    problemTitle: "A cégek égetik a pénzt. Ünneplik a 'megtekintéseket', miközben sorra veszítik el a vevőket a kasszánál.",
    problemText: "A klasszikus ügynökségi modell halott. Olcsó kattintásokat adnak el neked, és hangzatos 'márkaismertségi' riportokat küldenek, miközben az akvizíciós költségeid az egekben vannak.\n\nÉn klinikusan közelítek a növekedéshez. Amit nem tudunk hajszálpontosan mérni, azt nem is skálázzuk. Először mindig a lyukas tölcsért foltozzuk be: rendbetesszük az adathigiéniát, feltérképezzük a valódi motivációkat, és addig tekerjük a matekot, amíg pozitív nem lesz a megtérülés.",

    // Core Principles
    solutionTitle: "Hagyd abba a találgatást. Kezdj el mérni.",
    meth1Title: "1. A Pszichológia (UX & CRO)",
    meth1Desc: "Látom, hol akadnak meg a látogatóid, hol hagyják ott a kosarat, és pontosan miért kattintanak el. Aztán addig írom át a szövegeket és faragom újra az oldalt, amíg végig nem mennek a folyamaton. A felhasználói súrlódás a bevétel legnagyobb ellensége.",
    meth2Title: "2. A Matematika (Attribúció)",
    meth2Desc: "A hagyományos pixelek haldoklanak. Server-side (szerver-oldali) méréseket építek, hogy az algoritmusok tényleges vásárlókat találjanak, ne csak nézelődőket. Minden elköltött hirdetési forintot feketén-fehéren az üzleti bevételhez kötök.",

    // Interactive Tool (Reciprocity/Proof)
    toolSectionTitle: "Ne higgy nekem. Játssz a matekkal.",
    toolSectionIntro: "Nézd meg, hogyan többszörözi meg a bevételedet egy mikroszkopikus, 1%-os konverziójavulás. Húzd el a csúszkákat és figyeld a változást.",
    toolTitle: "Növekedési Kalkulátor",
    toolIntro: "Állítsd be a változókat. A növekedés nem véletlen, ez egy egyenlet.",
    
    // Philosophy / Anxiety Reduction
    anxietyTitle: "A Hitvallásom",
    anxietyText: "A teljesítménymarketing számomra egy matematikai rendszer. A 'megérzéseket' adatokkal zúzom szét, a kampányokat pedig úgy építem fel, hogy kristálytiszta legyen, miből lesz a bevétel. Nincsenek ügynökségi fekete dobozok, és nincs tippelgetés.",
    
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
    rolePerformance: "Performance & Growth Manager",
    resumeProfileTitle: "Szakmai Profil",
    resumePositioning: "Kísérletezés-vezérelt teljesítménymarketing szakember. Mélyreható elméleti és gyakorlati tudás CRO, Voice-of-Customer kutatás, üzenetírás, analitika és fizetett akvizíció (PPC) területeken.",
    resumeCoreSkills: "Fő Kompetenciák",
    skillCRO: "CRO & Kísérletezés (A/B tesztelés, heurisztika)",
    skillResearch: "VoC & Felhasználókutatás (Message mining)",
    skillTracking: "Technikai Analitika (Server-side GTM, GA4)",
    skillPPC: "Fizetett Akvizíció (Google Ads, Meta, TikTok)",
    resumeTechTitle: "Technológiai Stack & Eszközök",
    resumeTech1: "Analitika & Mérés: GA4, Google Tag Manager, Server-Side GTM, Looker Studio, Power BI, Konverziómérés",
    resumeTech2: "Platformok & Szoftverek: WordPress, WooCommerce, Shoprenter, Unas, Ahrefs, Mailchimp, HubSpot, Salesforce",
    resumeTech3: "Web & Automatizáció: HTML, CSS, JavaScript, Python, SQL",
    resumeExperience: "Szakmai Tapasztalat",
    roleFreelance: "Szabadúszó (2025 Aug - Jelenleg)",
    caseFreeL1: "Független teljesítménymarketing projektek vezetése, fókuszban a fizetett média stratégia, analitika és konverzió-optimalizálás.",
    caseFreeL2: "Gyakorlati kivitelezés: mérések beállítása, csatorna-szintű elemzések, szövegírás, landing oldalak és hirdetési kreatívok készítése.",
    resumeMetrics: "Karrier Eredmények",
    resumeEducation: "Tanulmányok",
    edu1: "Gazdaságinformatikus — Szegedi Tudományegyetem (2016)",
    edu2: "Matematika-Informatika Szak — Arany János Elméleti Líceum (2011)",
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

  const t = (key) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
export { translations };
