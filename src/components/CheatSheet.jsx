import React, { useState } from 'react';
import { Zap, Sparkles, Search, BookOpen } from 'lucide-react';
import { allModules } from '../data/modulesIndex.js';

export default function CheatSheet({ onOpenModule }) {
  const [filterCat, setFilterCat] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredModules = allModules.filter((mod) => {
    const matchCat = filterCat === 'ALL' || mod.category === filterCat;
    const matchSearch =
      mod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mod.subCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (mod.bknKeywords || []).some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-6 pb-10">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl p-6 md:p-8 text-white shadow-md">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider bg-white/20 w-fit px-3 py-1 rounded-full mb-2">
          <Zap className="w-3.5 h-3.5" />
          <span>Cheat Sheet SKD CPNS</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold">
          Kumpulan Rumus Cepat (&lt; 45 Detik) &amp; Kata Kunci Sakti BKN
        </h2>
        <p className="text-sm text-amber-50 mt-1 max-w-2xl">
          Halaman ini menghimpun secara otomatis seluruh Jembatan Keledai, Rumus Cepat TIU, Kata Kunci Sila/Pasal TWK, dan Indikator Poin 5 TKP dari setiap modul yang ada.
        </p>
      </div>

      {/* Filter & Search */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap gap-2">
          {['ALL', 'TWK', 'TIU', 'TKP'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCat(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition ${
                filterCat === cat
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {cat === 'ALL' ? 'Semua Kategori' : cat}
            </button>
          ))}
        </div>

        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari kata kunci atau rumus..."
            className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Cheat Sheet Cards */}
      <div className="space-y-6">
        {filteredModules.map((mod) => (
          <div
            key={mod.id}
            className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-xs font-extrabold bg-indigo-600 text-white">
                    {mod.category}
                  </span>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    {mod.subCategory}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mt-1">
                  {mod.title}
                </h3>
              </div>

              <button
                onClick={() => onOpenModule(mod)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white text-xs font-bold transition shrink-0"
              >
                <BookOpen className="w-3.5 h-3.5" /> Buka Modul Lengkap
              </button>
            </div>

            {/* Kata Kunci BKN */}
            {mod.bknKeywords && (
              <div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Kata Kunci Soal BKN:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {mod.bknKeywords.map((kw, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200"
                    >
                      • {kw}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Trik Cepat */}
            {(mod.quickTricks || []).map((t, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-700/70 space-y-2"
              >
                <div className="text-xs font-extrabold text-amber-900 dark:text-amber-300">
                  ⚡ {t.title}
                </div>
                {t.mnemonic && (
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-900 font-mono text-xs font-extrabold text-amber-800 dark:text-amber-300 text-center border border-amber-200 dark:border-amber-800">
                    {t.mnemonic}
                  </div>
                )}
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong>Cara Cepat:</strong> {t.fastWay}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

