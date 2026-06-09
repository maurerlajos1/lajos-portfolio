const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const distDir = path.join(__dirname, 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html not found. Run npm run build first.');
  process.exit(1);
}

const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

const pages = [
  {
    route: '/',
    title: 'Lajos Maurer | Paid Acquisition & CRO Engineer',
    description: 'Stop buying traffic. Start buying revenue. I engineer growth for businesses ready to scale.',
    image: 'https://maurerlajos.com/profile_pic.jpeg'
  },
  {
    route: '/work',
    title: 'Case Studies | Lajos Maurer',
    description: 'Read about the specific heuristic audit processes, behavioral models, and technical measurement systems that drive these metrics.',
    image: 'https://maurerlajos.com/profile_pic.jpeg'
  },
  {
    route: '/vault',
    title: 'The Vault | Lajos Maurer',
    description: 'My curated database of behavioral models, A/B testing playbooks, and tracking templates.',
    image: 'https://maurerlajos.com/profile_pic.jpeg'
  },
  {
    route: '/blog',
    title: 'Blog | Lajos Maurer',
    description: 'Thoughts on growth, acquisition, and conversion optimization.',
    image: 'https://maurerlajos.com/profile_pic.jpeg'
  },
  {
    route: '/about',
    title: 'About Me | Lajos Maurer',
    description: 'The timeline, stack, and philosophy behind the results.',
    image: 'https://maurerlajos.com/profile_pic.jpeg'
  },
  {
    route: '/resume',
    title: 'Resume | Lajos Maurer',
    description: 'Performance Marketing & CRO Specialist Resume.',
    image: 'https://maurerlajos.com/profile_pic.jpeg'
  },
  {
    route: '/blog/cro-psychology',
    title: 'The Psychology of CRO: Turning Friction into Flow | Lajos Maurer',
    description: 'Conversion Rate Optimization is not just about A/B testing button colors. It is the systematic application of behavioral psychology.',
    image: 'https://maurerlajos.com/profile_pic.jpeg'
  },
  {
    route: '/blog/google-ads-funnel',
    title: 'Stop Bleeding Budget: How to Force Google Ads to Find Buyers | Lajos Maurer',
    description: 'Modern Google Ads is an ecosystem driven by machine learning. Learn how to stop buying traffic and start buying revenue.',
    image: 'https://maurerlajos.com/profile_pic.jpeg'
  },
  {
    route: '/blog/server-side-tracking',
    title: 'Why Server-Side Tracking is No Longer Optional in 2026 | Lajos Maurer',
    description: 'If you are still relying entirely on client-side pixels, you are bleeding data. Discover why server-side tracking is essential.',
    image: 'https://maurerlajos.com/profile_pic.jpeg'
  }
];

pages.forEach(page => {
  const $ = cheerio.load(indexHtml);
  
  // Remove any existing generic SEO tags that might be in index.html to avoid duplicates
  $('title').remove();
  $('meta[property^="og:"]').remove();
  $('meta[name^="twitter:"]').remove();
  $('meta[name="description"]').remove();
  
  // Inject specific SEO tags
  $('head').append(`
    <title>${page.title}</title>
    <meta name="description" content="${page.description}">
    
    <meta property="og:title" content="${page.title}">
    <meta property="og:description" content="${page.description}">
    <meta property="og:image" content="${page.image}">
    <meta property="og:url" content="https://maurerlajos.com${page.route}">
    <meta property="og:type" content="${page.route.startsWith('/blog/') ? 'article' : 'website'}">
    
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${page.title}">
    <meta name="twitter:description" content="${page.description}">
    <meta name="twitter:image" content="${page.image}">
  `);

  const html = $.html();
  
  // For root route, just overwrite dist/index.html
  // But wait, if we overwrite dist/index.html, it will serve the root SEO for any unknown routes too.
  // That's fine.
  if (page.route === '/') {
    fs.writeFileSync(indexHtmlPath, html);
    console.log('Prerendered /');
  } else {
    // For other routes, create a directory and an index.html inside it
    // e.g., dist/blog/cro-psychology/index.html
    const routeDir = path.join(distDir, page.route);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    fs.writeFileSync(path.join(routeDir, 'index.html'), html);
    console.log(`Prerendered ${page.route}`);
  }
});

console.log('Static HTML prerendering complete!');
