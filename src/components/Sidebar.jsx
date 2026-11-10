import React from 'react';
import {
  LayoutDashboard,
  Shield,
  Brain,
  HeartHandshake,
  Zap,
  Award,
  Sun,
  Moon,
  BookOpen,
  CheckCircle2,
  Briefcase,
  Calendar,
  GitBranch
} from 'lucide-react';
import { allModules } from '../data/modulesIndex.js';

export default function Sidebar({
  activeTab,
  setActiveTab,
  completedIds,
  darkMode,
  setDarkMode,
  onSelectCategory
}) {
  const countByCat = (cat) => allModules.filter((m) => m.category === cat).length;
  const doneByCat = (cat) =>
    allModules.filter((m) => m.category === cat && completedIds.includes(m.id)).length;

  const navItems = [
    {
      id: 'DASHBOARD',
      label: 'Dashboard Belajar',
      icon: LayoutDashboard,
      badge: `${completedIds.length}/${allModules.length}`,
      color: 'text-slate-600 dark:text-slate-300'
    },
    {
      id: 'FORMASI',
      label: 'Pilihan Lamaran (S1 IT)',
      icon: Briefcase,
      badge: 'Formasi',
      color: 'text-cyan-600 dark:text-cyan-400'
    },
    {
      id: 'JADWAL',
      label: 'Jadwal & Target (Nov–Jan)',
      icon: Calendar,
      badge: 'Roadmap',
      color: 'text-purple-600 dark:text-purple-400'
    },
    {
      id: 'TWK',
      label: 'TWK — Wawasan Kebangsaan',
      icon: Shield,
      badge: `${doneByCat('TWK')}/${countByCat('TWK')}`,
      color: 'text-rose-600 dark:text-rose-400'
    },
    {
      id: 'TIU',
      label: 'TIU — Inteligensia Umum',
      icon: Brain,
      badge: `${doneByCat('TIU')}/${countByCat('TIU')}`,
      color: 'text-indigo-600 dark:text-indigo-400'
    },
    {
      id: 'TKP',
      label: 'TKP — Karakteristik Pribadi',
      icon: HeartHandshake,
      badge: `${doneByCat('TKP')}/${countByCat('TKP')}`,
      color: 'text-emerald-600 dark:text-emerald-400'
    },
    {
      id: 'FLOWCHART',
      label: 'Flowchart & Rangkuman Lengkap',
      icon: GitBranch,
      badge: 'Detail',
      color: 'text-teal-600 dark:text-teal-400'
    },
    {
      id: 'CHEATSHEET',
      label: 'Rumus & Kata Kunci Kilat',
      icon: Zap,
      badge: 'Sakti',
      color: 'text-amber-600 dark:text-amber-400'
    },
    {
      id: 'SIMULASI',
      label: 'Simulasi Mini CAT SKD',
      icon: Award,
      badge: 'Latihan',
      color: 'text-purple-600 dark:text-purple-400'
    }
  ];

  return (
    <aside className="w-full md:w-72 shrink-0 bg-white dark:bg-slate-900 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between">
      <div>
        {/* Brand Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-rose-600 flex items-center justify-center text-white font-extrabold shadow-md">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white leading-none">
                LMS DERA
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                S1 Informatika • SKD CPNS
              </p>
            </div>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            title="Ganti Tema Terang/Gelap"
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-3 space-y-1.5">
          <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Menu Utama &amp; Materi
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  if (['TWK', 'TIU', 'TKP'].includes(item.id)) {
                    onSelectCategory(item.id);
                  }
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70'
                }`}
              >
                <div className="flex items-center gap-3 truncate">
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : item.color}`} />
                  <span className="truncate">{item.label}</span>
                </div>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {item.badge}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Passing Grade Reference Card */}
      <div className="p-4 m-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200 mb-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          <span>Passing Grade vs Target Aman</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200/60 dark:border-rose-800/50">
            <div className="text-[10px] font-bold text-rose-600 dark:text-rose-400">TWK</div>
            <div className="text-sm font-extrabold text-slate-900 dark:text-white">65</div>
            <div className="text-[10px] text-emerald-600 font-bold">Target 105</div>
          </div>
          <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-800/50">
            <div className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400">TIU</div>
            <div className="text-sm font-extrabold text-slate-900 dark:text-white">80</div>
            <div className="text-[10px] text-emerald-600 font-bold">Target 140</div>
          </div>
          <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/50">
            <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">TKP</div>
            <div className="text-sm font-extrabold text-slate-900 dark:text-white">166</div>
            <div className="text-[10px] text-emerald-600 font-bold">Target 195</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
