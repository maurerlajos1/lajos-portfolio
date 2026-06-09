import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { useLanguage } from '../i18n';
import SEO from '../components/SEO';

export default function Blog() {
  const { t, lang } = useLanguage();
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <SEO title={t('navBlog') || 'Blog'} description={t('blogHeaderSubtitle')} url="https://maurerlajos.com/blog" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
            {t('blogHeaderTitle')}
          </span>
        </h1>
        <p className="text-xl text-gray-400">
          {t('blogHeaderSubtitle')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300"
          >
            <div className="aspect-[16/9] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent z-10 opacity-60"></div>
              <img 
                src={post.image || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'} 
                alt={post[lang]?.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-accent/20 backdrop-blur-md text-accent border border-accent/20 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <Tag size={12} /> {post.category}
                </span>
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-4 text-sm text-accent mb-4">
                <span className="flex items-center gap-1">
                  <Tag className="w-4 h-4" />
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-gray-500">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                <Link to={`/blog/${post.id}`} className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true"></span>
                  {post[lang]?.title}
                </Link>
              </h2>
              
              <p className="text-gray-400 mb-8 flex-grow">
                {post[lang]?.excerpt}
              </p>
              
              <div className="mt-auto flex items-center text-accent font-semibold group-hover:gap-2 transition-all">
                {t('readArticle')} <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
