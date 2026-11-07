import React, { useState, useEffect } from 'react';
import {
  Calendar,
  CheckCircle2,
  Circle,
  Target,
  Clock,
  Flame,
  Award,
  Sparkles
} from 'lucide-react';
import {
  SKD_SCORE_TARGETS,
  WEEKLY_ROUTINE_TEMPLATE,
  ROADMAP_NOV_JAN
} from '../data/studyScheduleData.js';

export default function StudyPlanner() {
  const [activeView, setActiveView] = useState('ROADMAP'); // ROADMAP | RUTINITAS | TARGET_SKOR

  // LocalStorage for completed roadmap tasks
  const [checkedTasks, setCheckedTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('lms_dera_schedule_tasks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Exam Date Target (Default: 15 Januari)
  const [examDate, setExamDate] = useState(() => {
    return localStorage.getItem('lms_dera_exam_date') || '2027-01-15';
  });

  useEffect(() => {
    localStorage.setItem('lms_dera_schedule_tasks', JSON.stringify(checkedTasks));
  }, [checkedTasks]);

  useEffect(() => {
    localStorage.setItem('lms_dera_exam_date', examDate);
  }, [examDate]);

  const toggleTask = (taskKey) => {
    setCheckedTasks((prev) =>
      prev.includes(taskKey) ? prev.filter((k) => k !== taskKey) : [...prev, taskKey]
    );
  };

  // Calculate total tasks & progress
  const allTaskKeys = [];
  ROADMAP_NOV_JAN.forEach((phase) => {
    phase.weeks.forEach((w) => {
      w.tasks.forEach((_, idx) => {
        allTaskKeys.push(`${w.id}-t${idx}`);
      });
    });
  });

  const completedCount = checkedTasks.length;
  const totalTasksCount = allTaskKeys.length;
  const progressPercent =
    totalTasksCount > 0 ? Math.round((completedCount / totalTasksCount) * 100) : 0;

  // Calculate days remaining until examDate
  const today = new Date();
  const target = new Date(examDate);
  const diffDays = Math.max(0, Math.ceil((target - today) / (1000 * 60 * 60 * 24)));

  return (
    <div className="space-y-6 pb-12">
      {/* Top Countdown & Roadmap Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-purple-700 via-indigo-700 to-rose-600 p-6 md:p-8 text-white shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-extrabold uppercase tracking-wider">
              <Flame className="w-4 h-4 text-amber-300" />
              <span>Strategi Pendaftaran November → Ujian Januari</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold">
              Jadwal &amp; Target Belajar Intensif (Roadmap Nov – Jan)
            </h2>
            <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed">
              Waktu efektif sekitar <strong>8–10 Minggu</strong> dibagi ke dalam 3 fase: <strong>November</strong> (Fondasi &amp; Berkas SSCASN), <strong>Desember</strong> (Kecepatan TIU &amp; Penalaran HOTS), dan <strong>Januari</strong> (Drilling Full CAT 110 Soal).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-center min-w-[150px]">
              <div className="text-[11px] font-bold uppercase text-indigo-100">
                Hitung Mundur Tes
              </div>
              <div className="text-3xl font-extrabold text-amber-300 mt-1">
                {diffDays} Hari
              </div>
              <input
                type="date"
                value={examDate}
                onChange={(e) => setExamDate(e.target.value)}
                className="mt-2 px-2 py-1 rounded bg-white/20 text-white text-[11px] font-bold focus:outline-none"
              />
            </div>

            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-center min-w-[160px]">
              <div className="text-[11px] font-bold uppercase text-indigo-100">
                Ketuntasan Jadwal
              </div>
              <div className="text-3xl font-extrabold mt-1">{progressPercent}%</div>
              <div className="text-[11px] text-indigo-100 mt-1">
                {completedCount}/{totalTasksCount} Target Selesai
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View Switcher */}
      <div className="flex flex-wrap gap-2 bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <button
          onClick={() => setActiveView('ROADMAP')}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition ${
            activeView === 'ROADMAP'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
          }`}
        >
          <Calendar className="w-4 h-4" />
          1. Roadmap Mingguan (November – Januari)
        </button>

        <button
          onClick={() => setActiveView('RUTINITAS')}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition ${
            activeView === 'RUTINITAS'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
          }`}
        >
          <Clock className="w-4 h-4" />
          2. Jadwal Harian (Senin – Minggu)
        </button>

        <button
          onClick={() => setActiveView('TARGET_SKOR')}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition ${
            activeView === 'TARGET_SKOR'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
          }`}
        >
          <Target className="w-4 h-4" />
          3. Rincian Target Skor Lolos Perangkingan (440+)
        </button>
      </div>

      {/* =====================================================================
          VIEW 1: ROADMAP MINGGUAN NOVEMBER - DESEMBER - JANUARI
         ===================================================================== */}
      {activeView === 'ROADMAP' && (
        <div className="space-y-6">
          {ROADMAP_NOV_JAN.map((phase) => (
            <div
              key={phase.phaseId}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-lg text-xs font-extrabold bg-indigo-600 text-white">
                      {phase.month}
                    </span>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                      {phase.badge}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-extrabold text-slate-900 dark:text-white mt-1.5">
                    {phase.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {phase.subtitle}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {phase.weeks.map((week) => (
                  <div
                    key={week.id}
                    className="rounded-2xl p-4 bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                        {week.weekLabel}
                      </span>
                    </div>
                    <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
                      {week.title}
                    </h4>

                    <div className="space-y-2 pt-1">
                      {week.tasks.map((t, idx) => {
                        const key = `${week.id}-t${idx}`;
                        const done = checkedTasks.includes(key);
                        return (
                          <div
                            key={key}
                            onClick={() => toggleTask(key)}
                            className={`cursor-pointer p-3 rounded-xl border text-xs transition flex items-start gap-2.5 ${
                              done
                                ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-400'
                            }`}
                          >
                            {done ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            ) : (
                              <Circle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                            )}
                            <span className={done ? 'line-through font-medium' : 'font-medium'}>
                              {t}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* =====================================================================
          VIEW 2: JADWAL RUTIN HARIAN (SENIN - MINGGU)
         ===================================================================== */}
      {activeView === 'RUTINITAS' && (
        <div className="space-y-4">
          <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/60 rounded-2xl p-4 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 leading-relaxed">
              <strong>Mengapa Jadwal Harian Ini Dibagi Pagi (20–25 Menit) &amp; Malam (60–70 Menit)?</strong> Otak jauh lebih kuat menyerap pola soal SKD jika dicicil rutin <strong>1,5 jam setiap hari</strong> dibandingkan belajar 8 jam sekaligus tapi hanya seminggu sekali!
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3.5">
            {WEEKLY_ROUTINE_TEMPLATE.map((item) => (
              <div
                key={item.day}
                className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-lg text-xs font-extrabold bg-indigo-600 text-white">
                      {item.day}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Fokus: {item.focusCategory}
                    </span>
                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                      ⏱ {item.duration}
                    </span>
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
                    {item.theme}
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:w-[55%]">
                  <div className="p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50">
                    <div className="font-extrabold text-amber-800 dark:text-amber-300 mb-0.5">
                      ☀️ Sesi Pagi / Siang (Buka di HP):
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">{item.morningTask}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/50">
                    <div className="font-extrabold text-indigo-800 dark:text-indigo-300 mb-0.5">
                      🌙 Sesi Sore / Malam (Fokus Latihan):
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">{item.eveningTask}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =====================================================================
          VIEW 3: RINCIAN TARGET SKOR LOLOS PERANGKINGAN (3X KUOTA SKB)
         ===================================================================== */}
      {activeView === 'TARGET_SKOR' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { code: 'TWK', data: SKD_SCORE_TARGETS.twk, color: 'rose' },
            { code: 'TIU', data: SKD_SCORE_TARGETS.tiu, color: 'indigo' },
            { code: 'TKP', data: SKD_SCORE_TARGETS.tkp, color: 'emerald' }
          ].map((sec) => (
            <div
              key={sec.code}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-lg text-xs font-extrabold bg-indigo-600 text-white">
                    TARGET {sec.code}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    Passing Grade BKN: {sec.data.passingGrade}
                  </span>
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-500">Target Skor Aman Dera:</div>
                  <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
                    {sec.data.safeTarget}{' '}
                    <span className="text-sm font-semibold text-slate-400">
                      / {sec.data.maxScore} Poin
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs font-extrabold text-emerald-800 dark:text-emerald-300">
                  🎯 {sec.data.targetCorrect}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {sec.data.strategyNote}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
