import React, { useState, useEffect } from 'react';
import {
  Award,
  Clock,
  Flag,
  CheckCircle2,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Play
} from 'lucide-react';
import { getAllQuizQuestions } from '../data/modulesIndex.js';

export default function QuizEngine() {
  const questions = getAllQuizQuestions();
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [flagged, setFlagged] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(questions.length * 60); // 1 menit per soal

  useEffect(() => {
    if (!started || submitted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [started, submitted]);

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const handleStart = () => {
    setAnswers({});
    setFlagged({});
    setCurrentIndex(0);
    setSubmitted(false);
    setTimeLeft(questions.length * 60);
    setStarted(true);
  };

  const scoreByCategory = (cat) => {
    return questions
      .filter((q) => q.category === cat)
      .reduce((sum, q) => {
        const chosen = answers[q.id];
        return sum + (chosen !== undefined && q.options[chosen] ? q.options[chosen].score : 0);
      }, 0);
  };

  if (!started) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 text-center max-w-2xl mx-auto my-8 space-y-6 shadow-sm">
        <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mx-auto shadow-md">
          <Award className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Simulasi Mini CAT SKD BKN
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Simulasi ini menggabungkan seluruh bank soal dari modul <strong>TWK</strong>, <strong>TIU</strong>, dan <strong>TKP</strong> yang telah dipelajari lengkap dengan navigasi nomor soal, tombol Ragu-Ragu, dan penghitung mundur waktu.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl">
          <div>
            <div className="text-xs font-bold text-slate-500">Total Soal</div>
            <div className="text-xl font-extrabold text-slate-900 dark:text-white">
              {questions.length} Butir
            </div>
          </div>
          <div>
            <div className="text-xs font-bold text-slate-500">Waktu</div>
            <div className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400">
              {questions.length} Menit
            </div>
          </div>
          <div>
            <div className="text-xs font-bold text-slate-500">Skor Maksimal</div>
            <div className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400">
              {questions.length * 5} Poin
            </div>
          </div>
        </div>

        <button
          onClick={handleStart}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-md transition"
        >
          <Play className="w-4 h-4" /> Mulai Simulasi CAT Sekarang
        </button>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <div className="space-y-6 pb-12">
      {/* Top Status Bar */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-lg bg-indigo-600 text-white text-xs font-extrabold">
            {currentQ.category}
          </span>
          <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
            Soal {currentIndex + 1} dari {questions.length}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 font-mono text-sm font-extrabold">
            <Clock className="w-4 h-4" />
            {formatTime(timeLeft)}
          </div>

          {!submitted ? (
            <button
              onClick={() => setSubmitted(true)}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold transition"
            >
              Selesai &amp; Kumpulkan
            </button>
          ) : (
            <button
              onClick={handleStart}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-extrabold transition"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Ulangi Simulasi
            </button>
          )}
        </div>
      </div>

      {/* Score Summary Card When Submitted */}
      {submitted && (
        <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-2xl p-6 text-white shadow-md">
          <h3 className="text-lg font-extrabold mb-3">Hasil Evaluasi Simulasi Mini CAT</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="bg-white/15 backdrop-blur-sm p-3 rounded-xl">
              <div className="text-xs font-bold uppercase">Skor TWK</div>
              <div className="text-2xl font-extrabold">{scoreByCategory('TWK')}</div>
            </div>
            <div className="bg-white/15 backdrop-blur-sm p-3 rounded-xl">
              <div className="text-xs font-bold uppercase">Skor TIU</div>
              <div className="text-2xl font-extrabold">{scoreByCategory('TIU')}</div>
            </div>
            <div className="bg-white/15 backdrop-blur-sm p-3 rounded-xl">
              <div className="text-xs font-bold uppercase">Skor TKP</div>
              <div className="text-2xl font-extrabold">{scoreByCategory('TKP')}</div>
            </div>
            <div className="bg-amber-400 text-slate-950 p-3 rounded-xl">
              <div className="text-xs font-extrabold uppercase">Total Skor</div>
              <div className="text-2xl font-extrabold">
                {scoreByCategory('TWK') + scoreByCategory('TIU') + scoreByCategory('TKP')}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main CAT Layout: Question Area + Number Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="text-xs font-bold text-slate-400">
            Modul: {currentQ.moduleTitle}
          </div>

          <p className="text-base font-semibold text-slate-900 dark:text-white leading-relaxed">
            {currentQ.question}
          </p>

          <div className="space-y-2.5">
            {currentQ.options.map((opt, idx) => {
              const isSelected = answers[currentQ.id] === idx;
              let style =
                'border-slate-200 dark:border-slate-700 hover:border-indigo-400 bg-slate-50/50 dark:bg-slate-800/40';
              if (isSelected && !submitted) {
                style = 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 ring-2 ring-indigo-500/30';
              } else if (submitted) {
                if (opt.score === 5) {
                  style = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50';
                } else if (isSelected) {
                  style = 'border-rose-500 bg-rose-50 dark:bg-rose-950/50';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => {
                    if (!submitted) {
                      setAnswers((prev) => ({ ...prev, [currentQ.id]: idx }));
                    }
                  }}
                  className={`w-full text-left p-3.5 rounded-xl border transition flex items-start justify-between gap-3 text-xs sm:text-sm ${style}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-extrabold">{opt.label}.</span>
                    <span className="font-medium leading-relaxed">{opt.text}</span>
                  </div>
                  {submitted && (
                    <span className="px-2 py-0.5 rounded text-xs font-extrabold bg-slate-200 dark:bg-slate-700 shrink-0">
                      Poin {opt.score}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {submitted && (
            <div className="p-4 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-xs sm:text-sm space-y-1">
              <div className="font-extrabold text-indigo-800 dark:text-indigo-300">
                💡 Pembahasan:
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Bottom Navigation Buttons */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <button
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold disabled:opacity-40"
            >
              <ChevronLeft className="w-4 h-4" /> Sebelumnya
            </button>

            {!submitted && (
              <button
                onClick={() =>
                  setFlagged((prev) => ({ ...prev, [currentQ.id]: !prev[currentQ.id] }))
                }
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-extrabold transition ${
                  flagged[currentQ.id]
                    ? 'bg-amber-500 text-white'
                    : 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300'
                }`}
              >
                <Flag className="w-3.5 h-3.5" /> Ragu-Ragu
              </button>
            )}

            <button
              disabled={currentIndex === questions.length - 1}
              onClick={() => setCurrentIndex((i) => Math.min(questions.length - 1, i + 1))}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold disabled:opacity-40"
            >
              Selanjutnya <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Question Grid Panel */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm h-fit">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
            Navigasi Nomor Soal
          </h4>
          <div className="grid grid-cols-5 gap-2">
            {questions.map((q, idx) => {
              const isAnswered = answers[q.id] !== undefined;
              const isFlag = flagged[q.id];
              const isCurr = idx === currentIndex;

              let boxClass = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300';
              if (isFlag) {
                boxClass = 'bg-amber-500 text-white';
              } else if (isAnswered) {
                boxClass = 'bg-emerald-600 text-white';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-9 rounded-lg text-xs font-extrabold transition ${boxClass} ${
                    isCurr ? 'ring-2 ring-indigo-600 ring-offset-2 dark:ring-offset-slate-900' : ''
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

