import serverSideTrackingEn from '../content/blog/server-side-tracking.md?raw';
import croPsychologyEn from '../content/blog/cro-psychology.md?raw';
import googleAdsFunnelEn from '../content/blog/google-ads-funnel.md?raw';

import serverSideTrackingHu from '../content/blog/server-side-tracking-hu.md?raw';
import croPsychologyHu from '../content/blog/cro-psychology-hu.md?raw';
import googleAdsFunnelHu from '../content/blog/google-ads-funnel-hu.md?raw';

export const blogPosts = [
  {
    id: 'server-side-tracking',
    date: '2026-06-09',
    category: 'Analytics / Measurement',
    image: '/images/blog/server_side_tracking.png',
    en: {
      title: 'Why Server-Side Tracking is No Longer Optional in 2026',
      excerpt: 'If you are still relying entirely on client-side pixels, you are bleeding data. Discover how server-side architectures bypass ad blockers and ITP.',
      content: serverSideTrackingEn,
    },
    hu: {
      title: 'Miért Nem Opció Többé a Server-Side Tracking 2026-ban',
      excerpt: 'Ha még mindig kizárólag kliensoldali pixelekre támaszkodsz, elveszíted az adataidat. Ismerd meg, hogyan kerüli meg az SST a hirdetésblokkolókat.',
      content: serverSideTrackingHu,
    }
  },
  {
    id: 'cro-psychology',
    date: '2026-06-08',
    category: 'CRO / Landing Page Optimization',
    image: '/images/blog/cro_psychology.png',
    en: {
      title: 'The Psychology of CRO: Turning Friction into Flow',
      excerpt: 'Conversion Rate Optimization is not about A/B testing button colors. It is the systematic application of behavioral psychology and heuristic analysis.',
      content: croPsychologyEn,
    },
    hu: {
      title: 'A CRO Pszichológiája: Súrlódások Megszüntetése',
      excerpt: 'A konverzióoptimalizálás nem a gombok színezéséről szól. Ez a viselkedéspszichológia és a heurisztikus elemzés szisztematikus alkalmazása.',
      content: croPsychologyHu,
    }
  },
  {
    id: 'google-ads-funnel',
    date: '2026-06-07',
    category: 'PPC / Google Ads',
    image: '/images/blog/google_ads_funnel.png',
    en: {
      title: 'Stop Bleeding Budget: How to Force Google Ads to Find Buyers, Not Just Traffic',
      excerpt: 'The days of simply bidding on exact match keywords are over. Learn how to feed Google\'s algorithm with Offline Conversion Tracking and Value-Based Bidding.',
      content: googleAdsFunnelEn,
    },
    hu: {
      title: 'Ne Égesd a Büdzsét: Így Kényszerítsd a Google Ads-t, Hogy Vásárlókat Hozzon',
      excerpt: 'A pontos egyezésű kulcsszavakra való licitálás napjai lejártak. Tudd meg, hogyan tápláld az algoritmust Offline Konverziókkal és Value-Based Bidding-gel.',
      content: googleAdsFunnelHu,
    }
  }
];

export const getBlogPostById = (id) => blogPosts.find(post => post.id === id);
