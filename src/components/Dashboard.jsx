import React from 'react';
import {
  Shield,
  Brain,
  HeartHandshake,
  CheckCircle2,
  PlayCircle,
  Sparkles,
  ArrowRight,
  Zap,
  Award,
  Youtube
} from 'lucide-react';
import { allModules, CATEGORY_META } from '../data/modulesIndex.js';

export default function Dashboard({
  completedIds,
  quizScores,
  onOpenModule,
  onNavigateCategory,
  onOpenSimulasi,
  onOpenCheatSheet
}) {
  const categories = [
    {
      code: 'TWK',
      icon: Shield,
      gradient: 'from-rose-500 to-red-600',
      lightBg: 'bg-rose-50 dark:bg-rose-950/30',
      border: 'border-rose-200 dark:border-rose-800/60',
      textColor: 'text-rose-600 dark:text-rose-400'
    },
    {
      code: 'TIU',
      icon: Brain,
      gradient: 'from-indigo-500 to-blue-600',
      lightBg: 'bg-indigo-50 dark:bg-indigo-950/30',
      border: 'border-indigo-200 dark:border-indigo-800/60',
      textColor: 'text-indigo-600 dark:text-indigo-400'
    },
    {
      code: 'TKP',
      icon: HeartHandshake,
      gradient: 'from-emerald-500 to-teal-600',
      lightBg: 'bg-emerald-50 dark:bg-emerald-950/30',
      border: 'border-emerald-200 dark:border-emerald-800/60',
      textColor: 'text-emerald-600 dark:text-emerald-400'
    }
  ];

  const totalCompleted = completedIds.length;
  const totalModules = allModules.length;
  const overallPercent = totalModules > 0 ? Math.round((totalCompleted / totalModules) * 100) : 0;

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-rose-600 p-6 md:p-8 text-white shadow-lg">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Workspace Belajar CPNS Dera</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Siap Taklukkan SKD CPNS (TWK • TIU • TKP)!
            </h2>
            <p className="text-indigo-100 text-sm md:text-base leading-relaxed">
              Seluruh materi dari video YouTube pilihan Anda dirangkum secara mendalam menjadi konsep inti, rumus cepat &lt; 45 detik, bedah contoh soal, serta kuis interaktif berstandar BKN.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 min-w-[210px] text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-100">
              Progres Modul Selesai
            </div>
            <div className="text-4xl font-extrabold mt-1">{overallPercent}%</div>
            <div className="text-xs text-indigo-100 mt-1">
              {totalCompleted} dari {totalModules} Modul Tuntas
            </div>
            <div className="w-full h-2 bg-white/20 rounded-full mt-3 overflow-hidden">
              <div
                className="h-full bg-amber-300 rounded-full transition-all duration-500"
                style={{ width: `${overallPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3 Section Utama: TWK, TIU, TKP */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
              Pilih Kategori Modul SKD (TWK, TIU, TKP)
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Klik salah satu section untuk melihat daftar modul materi dan pembahasan dari YouTube
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((cat) => {
            const meta = CATEGORY_META[cat.code];
            const Icon = cat.icon;
            const catModules = allModules.filter((m) => m.category === cat.code);
            const doneCount = catModules.filter((m) => completedIds.includes(m.id)).length;

            return (
              <div
                key={cat.code}
                onClick={() => onNavigateCategory(cat.code)}
                className={`group cursor-pointer rounded-2xl p-5 bg-white dark:bg-slate-900 border ${cat.border} shadow-sm hover:shadow-md transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-white shadow-sm`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {catModules.length} Modul
                    </span>
                  </div>

                  <div className={`text-xs font-extrabold uppercase tracking-wider ${cat.textColor}`}>
                    SECTION {meta.code}
                  </div>
                  <h4 className="text-lg font-extrabold text-slate-900 dark:text-white mt-0.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                    {meta.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                    {meta.shortDesc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-600 dark:text-slate-400">
                    Selesai: <strong className="text-slate-900 dark:text-white">{doneCount}/{catModules.length}</strong>
                  </span>
                  <span className="inline-flex items-center gap-1 font-bold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
                    Buka Section <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Access Tools: Cheat Sheet & Mini CAT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div
          onClick={onOpenCheatSheet}
          className="cursor-pointer rounded-2xl p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800/50 flex items-center justify-between hover:shadow-md transition"
        >
          <div className="space-y-1 pr-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase text-amber-700 dark:text-amber-400">
              <Zap className="w-4 h-4" />
              <span>Rangkuman Kilat & Rumus Cepat</span>
            </div>
            <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
              Buka Cheat Sheet (Jembatan Keledai & Kata Kunci BKN)
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Kumpulan seluruh rumus &lt; 45 detik dan kata kunci poin 5 dari semua modul.
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-amber-600 shrink-0" />
        </div>

        <div
          onClick={onOpenSimulasi}
          className="cursor-pointer rounded-2xl p-5 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/20 border border-purple-200 dark:border-purple-800/50 flex items-center justify-between hover:shadow-md transition"
        >
          <div className="space-y-1 pr-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase text-purple-700 dark:text-purple-400">
              <Award className="w-4 h-4" />
              <span>Uji Kemampuan Gabungan</span>
            </div>
            <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
              Mulai Simulasi Mini CAT (Timer + Skor BKN)
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Latihan soal lintas modul TWK, TIU, dan TKP dengan hitung mundur waktu.
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-purple-600 shrink-0" />
        </div>
      </div>

      {/* Daftar Seluruh Modul Terbaru */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
          <div>
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
              Daftar Modul Pembelajaran Tersedia
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Kirimkan link YouTube baru di chat kapan saja untuk menambahkan modul baru secara rinci ke daftar ini!
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {allModules.map((mod) => {
            const isDone = completedIds.includes(mod.id);
            const savedScore = quizScores[mod.id];
            const badgeColor =
              mod.category === 'TWK'
                ? 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300'
                : mod.category === 'TIU'
                ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300'
                : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300';

            return (
              <div
                key={mod.id}
                onClick={() => onOpenModule(mod)}
                className="group cursor-pointer p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 bg-slate-50/50 dark:bg-slate-800/30 hover:bg-white dark:hover:bg-slate-800 transition flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded-md ${badgeColor}`}>
                      {mod.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      • {mod.subCategory}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-amber-100/80 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 font-medium">
                      {mod.difficulty}
                    </span>
                    {isDone && (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Selesai Dipelajari
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                    {mod.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{mod.subtitle}</p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {savedScore !== undefined && (
                    <div className="text-right px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800">
                      <div className="text-[10px] text-slate-400 font-semibold">Skor Kuis</div>
                      <div className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400">
                        {savedScore} Poin
                      </div>
                    </div>
                  )}
                  <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm transition">
                    <PlayCircle className="w-4 h-4" />
                    Pelajari Modul
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

