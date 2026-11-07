import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './components/Dashboard.jsx';
import ModuleViewer from './components/ModuleViewer.jsx';
import CheatSheet from './components/CheatSheet.jsx';
import QuizEngine from './components/QuizEngine.jsx';
import {
  allModules,
  getModulesByCategory,
  CATEGORY_META
} from './data/modulesIndex.js';
import {
  Search,
  PlayCircle,
  CheckCircle2,
  Clock,
  BookOpen,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('DASHBOARD'); // DASHBOARD | TWK | TIU | TKP | CHEATSHEET | SIMULASI
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedSubCat, setSelectedSubCat] = useState('Semua Sub-Topik');
  const [searchQuery, setSearchQuery] = useState('');

  // LocalStorage state persistence
  const [completedIds, setCompletedIds] = useState(() => {
    try {
      const saved = localStorage.getItem('lms_dera_completed');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [userNotes, setUserNotes] = useState(() => {
    try {
      const saved = localStorage.getItem('lms_dera_notes');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [quizScores, setQuizScores] = useState(() => {
    try {
      const saved = localStorage.getItem('lms_dera_scores');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('lms_dera_theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('lms_dera_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('lms_dera_theme', 'light');
    }
  }, [darkMode]);

  const handleToggleComplete = (moduleId) => {
    setCompletedIds((prev) => {
      const exists = prev.includes(moduleId);
      const updated = exists ? prev.filter((id) => id !== moduleId) : [...prev, moduleId];
      localStorage.setItem('lms_dera_completed', JSON.stringify(updated));
      return updated;
    });
  };

  const handleSaveNote = (moduleId, text) => {
    setUserNotes((prev) => {
      const updated = { ...prev, [moduleId]: text };
      localStorage.setItem('lms_dera_notes', JSON.stringify(updated));
      return updated;
    });
  };

  const handleSaveQuizScore = (moduleId, score) => {
    setQuizScores((prev) => {
      const currentBest = prev[moduleId] || 0;
      const updated = { ...prev, [moduleId]: Math.max(currentBest, score) };
      localStorage.setItem('lms_dera_scores', JSON.stringify(updated));
      return updated;
    });
  };

  const handleSelectCategory = (catCode) => {
    setSelectedModule(null);
    setSelectedSubCat('Semua Sub-Topik');
    setSearchQuery('');
    setActiveTab(catCode);
  };

  const handleOpenModule = (mod) => {
    setSelectedModule(mod);
    setActiveTab(mod.category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render Category Section View (TWK / TIU / TKP)
  const renderCategorySection = (catCode) => {
    const meta = CATEGORY_META[catCode];
    const modulesInCat = getModulesByCategory(catCode);

    const filtered = modulesInCat.filter((m) => {
      const matchSub =
        selectedSubCat === 'Semua Sub-Topik' || m.subCategory === selectedSubCat;
      const matchSearch =
        m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.subCategory.toLowerCase().includes(searchQuery.toLowerCase());
      return matchSub && matchSearch;
    });

    const headerColors =
      catCode === 'TWK'
        ? 'from-rose-600 to-red-700'
        : catCode === 'TIU'
        ? 'from-indigo-600 to-blue-700'
        : 'from-emerald-600 to-teal-700';

    return (
      <div className="space-y-6 pb-12">
        {/* Category Banner */}
        <div
          className={`rounded-3xl bg-gradient-to-r ${headerColors} p-6 md:p-8 text-white shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6`}
        >
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Section {meta.code}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold">{meta.name}</h2>
            <p className="text-sm text-white/90 leading-relaxed">{meta.shortDesc}</p>
          </div>

          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-xs space-y-1.5 shrink-0 min-w-[220px]">
            <div className="flex justify-between">
              <span className="text-white/80">Passing Grade BKN:</span>
              <strong className="font-extrabold">{meta.passingGrade} Poin</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-white/80">Jumlah Soal Resmi:</span>
              <strong className="font-extrabold">{meta.totalQuestionsBKN} Butir</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-white/80">Skor Maksimal:</span>
              <strong className="font-extrabold">{meta.maxScoreBKN} Poin</strong>
            </div>
            <div className="pt-1 border-t border-white/20 text-[11px] font-bold text-amber-200">
              {meta.scoringRule}
            </div>
          </div>
        </div>

        {/* Sub-Category Filter & Search Bar */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Filter Sub-Topik {meta.code}:
            </div>
            <div className="relative min-w-[260px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Cari materi di ${meta.code}...`}
                className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {meta.subCategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubCat(sub)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                  selectedSubCat === sub
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>

        {/* Module Cards List */}
        {filtered.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-10 text-center border border-slate-200 dark:border-slate-800 space-y-2">
            <BookOpen className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-200">
              Belum Ada Modul pada Sub-Topik Ini
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              Kirimkan link YouTube materi <strong>{selectedSubCat}</strong> di chat, maka modul rinci lengkap dengan rumus cepat dan latihan soal akan langsung ditambahkan ke sini!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {filtered.map((mod) => {
              const isDone = completedIds.includes(mod.id);
              const bestScore = quizScores[mod.id];

              return (
                <div
                  key={mod.id}
                  onClick={() => handleOpenModule(mod)}
                  className="group cursor-pointer bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 shadow-sm hover:shadow-md transition flex flex-col md:flex-row md:items-center justify-between gap-5"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md text-xs font-extrabold bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300">
                        {mod.subCategory}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                        <Clock className="w-3.5 h-3.5" /> {mod.duration}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300">
                        {mod.difficulty}
                      </span>
                      {isDone && (
                        <span className="inline-flex items-center gap-1 text-xs font-extrabold text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 className="w-4 h-4" /> Selesai
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                      {mod.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      {mod.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        📖 {mod.theorySections?.length || 0} Bab Materi Rinci
                      </span>
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300">
                        ⚡ {mod.quickTricks?.length || 0} Rumus Cepat
                      </span>
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300">
                        ✍️ {mod.quiz?.length || 0} Soal Latihan
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    {bestScore !== undefined && (
                      <div className="text-right px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                        <div className="text-[10px] font-bold text-slate-400">Skor Kuis</div>
                        <div className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400">
                          {bestScore} Poin
                        </div>
                      </div>
                    )}
                    <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-extrabold shadow-sm transition">
                      <PlayCircle className="w-4 h-4" />
                      Buka Modul
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setSelectedModule(null);
          setActiveTab(tab);
        }}
        completedIds={completedIds}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onSelectCategory={handleSelectCategory}
      />

      <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-6xl mx-auto w-full overflow-y-auto">
        {selectedModule ? (
          <ModuleViewer
            module={selectedModule}
            isCompleted={completedIds.includes(selectedModule.id)}
            onToggleComplete={handleToggleComplete}
            userNote={userNotes[selectedModule.id] || ''}
            onSaveNote={handleSaveNote}
            savedScore={quizScores[selectedModule.id]}
            onSaveQuizScore={handleSaveQuizScore}
            onBack={() => setSelectedModule(null)}
          />
        ) : activeTab === 'DASHBOARD' ? (
          <Dashboard
            completedIds={completedIds}
            quizScores={quizScores}
            onOpenModule={handleOpenModule}
            onNavigateCategory={handleSelectCategory}
            onOpenSimulasi={() => setActiveTab('SIMULASI')}
            onOpenCheatSheet={() => setActiveTab('CHEATSHEET')}
          />
        ) : activeTab === 'CHEATSHEET' ? (
          <CheatSheet onOpenModule={handleOpenModule} />
        ) : activeTab === 'SIMULASI' ? (
          <QuizEngine />
        ) : (
          renderCategorySection(activeTab)
        )}
      </main>
    </div>
  );
}

