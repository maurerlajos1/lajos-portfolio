import React, { useState } from 'react';
import { useLanguage } from './i18n';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Briefcase, TrendingUp, BookOpen, Globe } from 'lucide-react';

const ForecasterTool = () => {
  const { t } = useLanguage();
  const [traffic, setTraffic] = useState(50000);
  const [cvr, setCvr] = useState(2.0);
  const [aov, setAov] = useState(150);
  const [spend, setSpend] = useState(10000);

  const revenue = traffic * (cvr / 100) * aov;
  const conversions = traffic * (cvr / 100);
  const cpa = spend / (conversions || 1);
  const roas = revenue / (spend || 1);

  const chartData = [
    { name: 'Spend', value: spend, fill: '#ef4444' },
    { name: 'Revenue', value: revenue, fill: '#22c55e' }
  ];

  return (
    <div className="glass-panel animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <div className="flex items-center mb-6 gap-3">
        <TrendingUp className="text-accent" size={28} />
        <h2 className="text-gradient">{t('toolTitle')}</h2>
      </div>
      <p className="text-gray-400 mb-8">{t('toolIntro')}</p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
        {/* Sliders */}
        <div className="flex flex-col gap-6">
          <div className="py-2">
            <div className="flex justify-between mb-2">
              <span>{t('metricTraffic')}</span>
              <strong>{traffic.toLocaleString()}</strong>
            </div>
            <input type="range" min="1000" max="200000" step="1000" value={traffic} onChange={(e) => setTraffic(Number(e.target.value))} className="w-full focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-full cursor-pointer" />
          </div>
          <div className="py-2">
            <div className="flex justify-between mb-2">
              <span>{t('metricCVR')}</span>
              <strong>{cvr.toFixed(1)}%</strong>
            </div>
            <input type="range" min="0.1" max="10" step="0.1" value={cvr} onChange={(e) => setCvr(Number(e.target.value))} className="w-full focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-full cursor-pointer" />
          </div>
          <div className="py-2">
            <div className="flex justify-between mb-2">
              <span>{t('metricAOV')}</span>
              <strong>${aov}</strong>
            </div>
            <input type="range" min="10" max="500" step="5" value={aov} onChange={(e) => setAov(Number(e.target.value))} className="w-full focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-full cursor-pointer" />
          </div>
          <div className="py-2">
            <div className="flex justify-between mb-2">
              <span>{t('metricSpend')}</span>
              <strong>${spend.toLocaleString()}</strong>
            </div>
            <input type="range" min="1000" max="50000" step="1000" value={spend} onChange={(e) => setSpend(Number(e.target.value))} className="w-full focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-full cursor-pointer" />
          </div>
        </div>

        {/* Results & Chart */}
        <div className="bg-black/20 p-6 rounded-xl flex flex-col">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center bg-white/5 p-4 rounded-lg">
              <div className="text-gray-400 text-sm">{t('resultRevenue')}</div>
              <strong className="text-2xl text-green-500">${revenue.toLocaleString(undefined, {maximumFractionDigits:0})}</strong>
            </div>
            <div className="text-center bg-white/5 p-4 rounded-lg">
              <div className="text-gray-400 text-sm">{t('resultROAS')}</div>
              <strong className="text-2xl text-blue-500">{roas.toFixed(2)}x</strong>
            </div>
          </div>
          <div className="flex-1 min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                <XAxis dataKey="name" stroke="var(--color-text-secondary)" />
                <YAxis stroke="var(--color-text-secondary)" tickFormatter={(val) => `$${val/1000}k`} />
                <Tooltip cursor={{fill: 'rgba(255,255,255,0.05)'}} contentStyle={{background: '#1a1a24', border: '1px solid rgba(255,255,255,0.1)'}} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForecasterTool;
