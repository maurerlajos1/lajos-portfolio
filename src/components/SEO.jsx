import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../i18n';

export default function SEO({ 
  title, 
  description, 
  image = 'https://maurerlajos.com/profile_pic.jpeg', 
  url = 'https://maurerlajos.com',
  type = 'website'
}) {
  const { lang } = useLanguage();
  
  const siteTitle = 'Lajos Maurer | Performance Growth & CRO Specialist';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <Helmet htmlAttributes={{ lang }}>
      {/* Standard SEO */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
