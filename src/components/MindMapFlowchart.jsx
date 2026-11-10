import React, { useState } from 'react';
import {
  GitBranch,
  ChevronDown,
  ChevronRight,
  Search,
  Sparkles,
  AlertTriangle,
  Maximize2,
  Minimize2,
  ArrowDown,
  CheckCircle2,
  Shield,
  Brain,
  HeartHandshake
} from 'lucide-react';
import { FLOWCHART_MASTER_DATA } from '../data/mindMapFlowchartData.js';

export default function MindMapFlowchart() {
  const [activeCat, setActiveCat] = useState('TWK'); // TWK | TIU | TKP
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSubNodes, setExpandedSubNodes] = useState(() => {
    // Default: buka semua sub-node pertama pada tiap cabang atau biarkan terbuka agar langsung terbaca lengkap
    const allIds = {};
    Object.values(FLOWCHART_MASTER_DATA).forEach((cat) => {
      cat.branches.forEach((b) => {
        b.subNodes.forEach((sn) => {
          allIds[sn.id] = true;
        });
      });
    });
    return allIds;
  });

  const currentData = FLOWCHART_MASTER_DATA[activeCat];

  const toggleSubNode = (id) => {
    setExpandedSubNodes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const setAllForActiveCat = (openState) => {
    setExpandedSubNodes((prev) => {
      const updated = { ...prev };
      currentData.branches.forEach((b) => {
        b.subNodes.forEach((sn) => {
          updated[sn.id] = openState;
        });
      });
      return updated;
    });
  };

  const q = searchQuery.trim().toLowerCase();

  // Filter branches & subNodes by search query
  const filteredBranches = currentData.branches
    .map((branch) => {
      if (!q) return branch;
      const branchMatch =
        branch.title.toLowerCase().includes(q) ||
        branch.triggerLabel.toLowerCase().includes(q) ||
        branch.mnemonic.toLowerCase().includes(q);

      const matchingSubNodes = branch.subNodes.filter(
        (sn) =>
          sn.title.toLowerCase().includes(q) ||
          sn.summary.toLowerCase().includes(q) ||
          (sn.trapAlert && sn.trapAlert.toLowerCase().includes(q)) ||
          sn.smallPoints.some((pt) => pt.toLowerCase().includes(q))
      );

      if (branchMatch) return branch;
      if (matchingSubNodes.length > 0) {
        return { ...branch, subNodes: matchingSubNodes };
      }
      return null;
    })
    .filter(Boolean);

  const catTheme =
    activeCat === 'TWK'
      ? {
          banner: 'from-rose-600 to-red-700',
          accentText: 'text-rose-600 dark:text-rose-400',
          accentBorder: 'border-rose-300 dark:border-rose-800',
          accentBg: 'bg-rose-50 dark:bg-rose-950/30',
          treeLine: 'border-rose-300 dark:border-rose-800'
        }
      : activeCat === 'TIU'
      ? {
          banner: 'from-indigo-600 to-blue-700',
          accentText: 'text-indigo-600 dark:text-indigo-400',
          accentBorder: 'border-indigo-300 dark:border-indigo-800',
          accentBg: 'bg-indigo-50 dark:bg-indigo-950/30',
          treeLine: 'border-indigo-300 dark:border-indigo-800'
        }
      : {
          banner: 'from-emerald-600 to-teal-700',
          accentText: 'text-emerald-600 dark:text-emerald-400',
          accentBorder: 'border-emerald-300 dark:border-emerald-800',
          accentBg: 'bg-emerald-50 dark:bg-emerald-950/30',
          treeLine: 'border-emerald-300 dark:border-emerald-800'
        };

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className={`rounded-3xl bg-gradient-to-r ${catTheme.banner} p-6 md:p-8 text-white shadow-lg`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-extrabold uppercase tracking-wider">
              <GitBranch className="w-4 h-4 text-amber-300" />
              <span>Flowchart &amp; Rangkuman Lengkap SKD CPNS</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold">
              {currentData.title}
            </h2>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
              Disusun berbentuk <strong>Pohon Flowchart Alur Berpikir</strong> dari topik besar, cabang sub-materi, hingga seluruh <strong>poin-poin kecil terperinci</strong> (pasal, butir, rumus, pengecualian, dan jebakan soal) agar sangat mudah dipelajari dan diingat.
            </p>
          </div>

          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-xs space-y-1 shrink-0 min-w-[210px]">
            <div className="font-extrabold uppercase text-amber-200">Target Skor &amp; Porsi</div>
            <div className="font-bold text-sm text-white">{currentData.targetScore}</div>
          </div>
        </div>
      </div>

      {/* Category Switcher + Search + Expand Controls */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {[
              { code: 'TWK', label: 'Flowchart TWK (Lengkap)', icon: Shield },
              { code: 'TIU', label: 'Flowchart TIU (Semua Rumus)', icon: Brain },
              { code: 'TKP', label: 'Flowchart TKP (6 Aspek)', icon: HeartHandshake }
            ].map((item) => {
              const Icon = item.icon;
              const isSel = activeCat === item.code;
              return (
                <button
                  key={item.code}
                  onClick={() => {
                    setActiveCat(item.code);
                    setSearchQuery('');
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition ${
                    isSel
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setAllForActiveCat(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold hover:bg-emerald-100 transition"
            >
              <Maximize2 className="w-3.5 h-3.5" /> Buka Semua Detail
            </button>
            <button
              onClick={() => setAllForActiveCat(false)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-xs font-bold hover:bg-slate-200 transition"
            >
              <Minimize2 className="w-3.5 h-3.5" /> Ringkas Flowchart
            </button>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Cari poin kecil di ${activeCat} (contoh: "butir 9", "K-T-S-P", "gratifikasi", "susul", "kuantor", "SOP")...`}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* ROOT DECISION FLOW (Alur Start Soal) */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3 text-center">
          Alur Start Berpikir Saat Mengerjakan Soal {activeCat}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
          <div className={`p-3.5 rounded-xl border ${catTheme.accentBorder} ${catTheme.accentBg} text-xs font-extrabold text-slate-800 dark:text-slate-100 text-center`}>
            {currentData.rootFlow.step1}
          </div>
          <div className={`p-3.5 rounded-xl border ${catTheme.accentBorder} ${catTheme.accentBg} text-xs font-extrabold text-slate-800 dark:text-slate-100 text-center`}>
            {currentData.rootFlow.step2}
          </div>
          <div className={`p-3.5 rounded-xl border ${catTheme.accentBorder} ${catTheme.accentBg} text-xs font-extrabold text-slate-800 dark:text-slate-100 text-center`}>
            {currentData.rootFlow.step3}
          </div>
        </div>
        <div className="flex justify-center mt-3">
          <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-extrabold ${catTheme.accentBg} ${catTheme.accentText}`}>
            <ArrowDown className="w-4 h-4" /> Pilih Cabang Flowchart di Bawah Sesuai Fokus Soal
          </div>
        </div>
      </div>

      {/* FLOWCHART BRANCHES (Level 1 -> Level 2 -> Level 3 Small Points) */}
      {filteredBranches.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-10 text-center border border-slate-200 dark:border-slate-800 text-sm text-slate-500">
          Tidak ditemukan kata kunci <strong>&ldquo;{searchQuery}&rdquo;</strong> pada {activeCat}. Coba kata kunci lain atau pindah tab kategori.
        </div>
      ) : (
        <div className="space-y-6">
          {filteredBranches.map((branch) => (
            <div key={branch.id} className="relative">
              {/* Connector Trigger Label */}
              <div className="flex items-center gap-2 mb-2 pl-2">
                <span className={`px-3 py-1 rounded-full text-xs font-extrabold border ${catTheme.accentBorder} ${catTheme.accentBg} ${catTheme.accentText}`}>
                  ↳ Jika Soal Membahas: {branch.triggerLabel}
                </span>
              </div>

              {/* Level 1 Branch Card */}
              <div className={`bg-white dark:bg-slate-900 rounded-2xl border-2 ${catTheme.accentBorder} shadow-sm overflow-hidden`}>
                <div className={`p-5 ${catTheme.accentBg} border-b ${catTheme.accentBorder} flex flex-col sm:flex-row sm:items-center justify-between gap-3`}>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md text-xs font-extrabold bg-indigo-600 text-white">
                        {branch.badge}
                      </span>
                      <span className="text-xs font-bold text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/60 px-2.5 py-0.5 rounded-md">
                        ⚡ Hafalan Cepat: {branch.mnemonic}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-extrabold text-slate-900 dark:text-white pt-1">
                      {branch.title}
                    </h3>
                  </div>
                </div>

                {/* Level 2 Sub-Nodes (Connected with Flowchart Tree Line) */}
                <div className="p-4 sm:p-6">
                  <div className={`pl-4 sm:pl-6 border-l-2 ${catTheme.treeLine} space-y-5`}>
                    {branch.subNodes.map((sn) => {
                      const isOpen = !!expandedSubNodes[sn.id] || q.length > 0;

                      return (
                        <div key={sn.id} className="relative">
                          {/* Horizontal branch connector dot */}
                          <div className={`w-4 h-0.5 bg-slate-300 dark:bg-slate-600 absolute -left-4 sm:-left-6 top-5`} />

                          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/40 overflow-hidden">
                            {/* Sub-Node Header (Clickable Toggle) */}
                            <button
                              onClick={() => toggleSubNode(sn.id)}
                              className="w-full text-left p-4 flex items-start justify-between gap-3 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition"
                            >
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  {isOpen ? (
                                    <ChevronDown className={`w-4 h-4 shrink-0 ${catTheme.accentText}`} />
                                  ) : (
                                    <ChevronRight className="w-4 h-4 shrink-0 text-slate-400" />
                                  )}
                                  <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                                    {sn.title}
                                  </h4>
                                </div>
                                <p className="text-xs text-slate-600 dark:text-slate-400 pl-6">
                                  {sn.summary}
                                </p>
                              </div>
                              <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 shrink-0">
                                {sn.smallPoints.length} Poin Detail
                              </span>
                            </button>

                            {/* Level 3: Granular Small Points */}
                            {isOpen && (
                              <div className="px-4 pb-4 pt-1 space-y-2.5 border-t border-slate-200/70 dark:border-slate-700/70 bg-white dark:bg-slate-900/60">
                                <div className="pt-2 space-y-2">
                                  {sn.smallPoints.map((pt, pIdx) => {
                                    const colonIdx = pt.indexOf(':');
                                    const hasPrefix = colonIdx > 0 && colonIdx < 48;
                                    const prefix = hasPrefix ? pt.slice(0, colonIdx + 1) : '';
                                    const body = hasPrefix ? pt.slice(colonIdx + 1) : pt;

                                    return (
                                      <div
                                        key={pIdx}
                                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs sm:text-sm leading-relaxed"
                                      >
                                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${catTheme.accentText}`} />
                                        <div className="text-slate-700 dark:text-slate-200">
                                          {hasPrefix && (
                                            <strong className="text-slate-900 dark:text-white font-extrabold">
                                              {prefix}
                                            </strong>
                                          )}
                                          <span>{body}</span>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>

                                {sn.trapAlert && (
                                  <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 flex items-start gap-2.5 text-xs">
                                    <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                                    <div className="text-amber-900 dark:text-amber-200 leading-relaxed">
                                      <strong>⚠️ Jebakan Ujian Wajib Waspada:</strong> {sn.trapAlert}
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
