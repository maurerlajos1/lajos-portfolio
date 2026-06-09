import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import mermaid from 'mermaid';
import { getBlogPostById } from '../data/blogPosts';
import { useLanguage } from '../i18n';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

const Mermaid = ({ chart }) => {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    if (containerRef.current) {
      mermaid.initialize({ startOnLoad: true, theme: 'dark', background: 'transparent' });
      containerRef.current.innerHTML = '';
      mermaid.render(`mermaid-${Math.random().toString(36).substr(2, 9)}`, chart)
        .then(({ svg }) => {
          if (containerRef.current) {
            containerRef.current.innerHTML = svg;
          }
        })
        .catch(e => console.error('Mermaid rendering error:', e));
    }
  }, [chart]);

  return <div ref={containerRef} className="flex justify-center my-10 overflow-x-auto w-full" />;
};

export default function BlogPost() {
  const { id } = useParams();
  const { lang } = useLanguage();
  const post = getBlogPostById(id);

  useEffect(() => {
    if (post) {
      window.scrollTo(0, 0);
    }
  }, [post, lang]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-accent hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-6 py-12"
    >
      <SEO 
        title={post[lang]?.title} 
        description={post[lang]?.excerpt || post.category} 
        image={`https://maurerlajos.com${post.image || '/profile_pic.jpeg'}`}
        url={`https://maurerlajos.com/blog/${id}`}
        type="article"
      />
      
      <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-accent transition-colors mb-8 font-medium">
        <ArrowLeft size={16} className="mr-2" /> Back to Articles
      </Link>
      
      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="bg-accent/10 text-accent border border-accent/20 px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2">
            <Tag size={14} /> {post.category}
          </span>
          <span className="text-gray-500 text-sm flex items-center gap-2">
            <Calendar size={14} /> 
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          {post[lang]?.title}
        </h1>
        
        <div className="w-full aspect-[21/9] md:aspect-[2.5/1] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
          <img 
            src={post.image || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'} 
            alt={post[lang]?.title} 
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-accent hover:prose-a:text-blue-400 prose-img:rounded-xl prose-hr:border-white/10 prose-strong:text-white prose-p:text-gray-300 prose-li:text-gray-300">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              if (!inline && match && match[1] === 'mermaid') {
                return <Mermaid chart={String(children).replace(/\n$/, '')} />;
              }
              return (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }
          }}
        >
          {post[lang]?.content}
        </ReactMarkdown>
      </div>
      

    </motion.article>
  );
}
