import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Circle,
  Play,
  BookOpen,
  Zap,
  HelpCircle,
  FileText,
  AlertTriangle,
  Sparkles,
  ExternalLink,
  Check,
  RotateCcw,
  Award,
  Clock
} from 'lucide-react';

function extractYoutubeId(urlOrId) {
  if (!urlOrId) return '';
  const trimmed = urlOrId.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
  const match = trimmed.match(regExp);
  return match && match[2].length === 11 ? match[2] : '';
}

export default function ModuleViewer({
  module,
  isCompleted,
  onToggleComplete,
  userNote,
  onSaveNote,
  savedScore,
  onSaveQuizScore,
  onBack
}) {
  const [activeSection, setActiveSection] = useState('MATERI'); // MATERI | TRIK | KUIS
  const [startSeconds, setStartSeconds] = useState(0);
  const [customVideoUrl, setCustomVideoUrl] = useState(module.youtubeId || '');
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [noteText, setNoteText] = useState(userNote || '');
  const [noteSavedBadge, setNoteSavedBadge] = useState(false);

  useEffect(() => {
    setActiveSection('MATERI');
    setStartSeconds(0);
    setCustomVideoUrl(module.youtubeId || extractYoutubeId(module.youtubeUrl) || '');
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setNoteText(userNote || '');
  }, [module.id, userNote]);

  const activeYoutubeId = extractYoutubeId(customVideoUrl);

  const handleSelectOption = (qId, optIndex) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optIndex }));
  };

  const handleSubmitQuiz = () => {
    let total = 0;
    (module.quiz || []).forEach((q) => {
      const idx = selectedAnswers[q.id];
      if (idx !== undefined && q.options[idx]) {
        total += q.options[idx].score;
      }
    });
    setQuizSubmitted(true);
    onSaveQuizScore(module.id, total);
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  const handleNoteChange = (e) => {
    const val = e.target.value;
    setNoteText(val);
    onSaveNote(module.id, val);
    setNoteSavedBadge(true);
    setTimeout(() => setNoteSavedBadge(false), 1500);
  };

  const maxPossibleScore = (module.quiz || []).length * 5;
  const currentCalculatedScore = (module.quiz || []).reduce((acc, q) => {
    const idx = selectedAnswers[q.id];
    return acc + (idx !== undefined && q.options[idx] ? q.options[idx].score : 0);
  }, 0);

  return (
    <div className="space-y-6 pb-12">
      {/* Top Bar: Back & Completion Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Daftar Modul {module.category}
        </button>

        <div className="flex items-center gap-3">
          {savedScore !== undefined && (
            <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              Skor Kuis Terbaik: {savedScore} / {maxPossibleScore}
            </span>
          )}

          <button
            onClick={() => onToggleComplete(module.id)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition shadow-sm ${
              isCompleted
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-indigo-600 hover:text-white'
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                Sudah Selesai Dipelajari
              </>
            ) : (
              <>
                <Circle className="w-4 h-4" />
                Tandai Selesai
              </>
            )}
          </button>
        </div>
      </div>

      {/* Module Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-lg text-xs font-extrabold bg-indigo-600 text-white">
            {module.category}
          </span>
          <span className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            {module.subCategory}
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300">
            <Clock className="w-3.5 h-3.5" /> {module.duration}
          </span>
          <span className="px-3 py-1 rounded-lg text-xs font-bold bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300">
            {module.difficulty}
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
          {module.title}
        </h1>
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
          {module.subtitle}
        </p>

        {/* Sub-Tab Switcher inside Module */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveSection('MATERI')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeSection === 'MATERI'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            1. Video & Materi Rinci
          </button>

          <button
            onClick={() => setActiveSection('TRIK')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeSection === 'TRIK'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            <Zap className="w-4 h-4" />
            2. Rumus Sakti & Bedah Soal ({module.workedExamples?.length || 0})
          </button>

          <button
            onClick={() => setActiveSection('KUIS')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeSection === 'KUIS'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            3. Latihan Kuis Interaktif ({module.quiz?.length || 0} Soal)
          </button>

          <button
            onClick={() => setActiveSection('CATATAN')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeSection === 'CATATAN'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            4. Catatan Pribadi
          </button>
        </div>
      </div>

      {/* =====================================================================
          TAB 1: VIDEO PEMBELAJARAN & MATERI RINCI (DEEP-DIVE THEORY)
         ===================================================================== */}
      {activeSection === 'MATERI' && (
        <div className="space-y-6">
          {/* BAGIAN 1: Video Player & Timestamp */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Play className="w-5 h-5 text-rose-600" />
                <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
                  Bagian 1: Video Pembelajaran & Timestamp Bab Penting
                </h2>
              </div>
              {(activeYoutubeId || module.youtubeUrl) && (
                <a
                  href={activeYoutubeId ? `https://www.youtube.com/watch?v=${activeYoutubeId}` : module.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Buka langsung di YouTube <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            {/* Daftar Putar Multi-Video (Jika modul memiliki beberapa Part Video dari Playlist) */}
            {module.playlistVideos && module.playlistVideos.length > 0 && (
              <div className="p-3.5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-800/60 space-y-2.5">
                <div className="text-xs font-extrabold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 flex items-center justify-between">
                  <span>Daftar Video Terkait pada Modul Ini ({module.playlistVideos.length} Video)</span>
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Klik untuk memutar</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {module.playlistVideos.map((pv, idx) => {
                    const isPlaying = activeYoutubeId === pv.id;
                    return (
                      <button
                        key={pv.id || idx}
                        onClick={() => {
                          setCustomVideoUrl(pv.id);
                          setStartSeconds(0);
                        }}
                        className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition text-left ${
                          isPlaying
                            ? 'bg-indigo-600 text-white shadow-sm'
                            : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-indigo-400'
                        }`}
                      >
                        <Play className={`w-3.5 h-3.5 shrink-0 ${isPlaying ? 'text-amber-300' : 'text-rose-500'}`} />
                        <span>{pv.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Input / Ganti Link YouTube Cepat */}
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={customVideoUrl}
                onChange={(e) => setCustomVideoUrl(e.target.value)}
                placeholder="Tempel link YouTube di sini untuk memutar video di dalam modul..."
                className="flex-1 px-3.5 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Video Embed */}
              <div className="lg:col-span-2 aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center">
                {activeYoutubeId ? (
                  <iframe
                    key={`${activeYoutubeId}-${startSeconds}`}
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${activeYoutubeId}?start=${startSeconds}&autoplay=${
                      startSeconds > 0 ? 1 : 0
                    }`}
                    title={module.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="text-center p-6 text-slate-400 space-y-2">
                    <Play className="w-10 h-10 mx-auto text-slate-600" />
                    <p className="text-sm font-semibold text-slate-300">
                      Siap Memutar Video Materi YouTube
                    </p>
                    <p className="text-xs max-w-md mx-auto">
                      Tempelkan URL YouTube pada kotak di atas atau kirimkan link YouTube Anda di chat untuk ditanamkan permanen ke modul ini.
                    </p>
                  </div>
                )}
              </div>

              {/* Daftar Timestamp */}
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-700/60 flex flex-col justify-between">
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                    Daftar Timestamp Pembahasan
                  </h3>
                  <div className="space-y-2">
                    {(module.timestamps || []).map((ts, idx) => (
                      <button
                        key={idx}
                        onClick={() => setStartSeconds(ts.seconds)}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-950/50 border border-transparent hover:border-indigo-200 dark:hover:border-indigo-800 transition flex items-start gap-2.5 group"
                      >
                        <span className="px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/70 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-bold shrink-0">
                          {ts.time}
                        </span>
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-300">
                          {ts.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* KATA KUNCI SAKTI BKN */}
          {module.bknKeywords && module.bknKeywords.length > 0 && (
            <div className="bg-gradient-to-br from-indigo-50 to-slate-50 dark:from-indigo-950/40 dark:to-slate-900 rounded-2xl p-6 border border-indigo-200 dark:border-indigo-800/60">
              <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-extrabold text-sm uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Kata Kunci Sakti Soal BKN (Wajib Ingat!)</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {module.bknKeywords.map((kw, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 bg-white dark:bg-slate-900/90 p-3 rounded-xl border border-indigo-100 dark:border-indigo-900/50 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 shadow-sm"
                  >
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{kw}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* BAGIAN 2: Penjelasan Materi Rinci */}
          <div className="space-y-6">
            {(module.theorySections || []).map((sec, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5"
              >
                <h3 className="text-lg md:text-xl font-extrabold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                  {sec.heading}
                </h3>

                <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {sec.content}
                </p>

                {sec.points && (
                  <ul className="space-y-2.5">
                    {sec.points.map((pt, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200/60 dark:border-slate-700/50"
                      >
                        <span className="w-2 h-2 rounded-full bg-indigo-600 mt-2 shrink-0" />
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {sec.table && (
                  <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                          {sec.table.headers.map((h, i) => (
                            <th key={i} className="p-3.5 font-extrabold border-b border-slate-200 dark:border-slate-700">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                        {sec.table.rows.map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition"
                          >
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`p-3.5 text-slate-700 dark:text-slate-300 ${
                                  cIdx === 0 ? 'font-bold text-slate-900 dark:text-white' : ''
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {sec.alertBox && (
                  <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/70 flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div className="space-y-1 text-xs sm:text-sm">
                      <div className="font-extrabold text-amber-900 dark:text-amber-300">
                        {sec.alertBox.title}
                      </div>
                      <div className="text-amber-800 dark:text-amber-200/90 leading-relaxed">
                        {sec.alertBox.text}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =====================================================================
          TAB 2: KOTAK TRIK CEPAT (< 45 DETIK) & BEDAH CONTOH SOAL VIDEO
         ===================================================================== */}
      {activeSection === 'TRIK' && (
        <div className="space-y-6">
          {/* Kotak Trik Cepat */}
          <div className="space-y-4">
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" />
              Bagian 3: Kotak Trik Cepat / Cara Sakti (&lt; 45 Detik)
            </h2>

            {(module.quickTricks || []).map((trick, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-amber-950/30 dark:via-slate-900 dark:to-orange-950/20 border-2 border-amber-300 dark:border-amber-700/70 shadow-sm space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base md:text-lg font-extrabold text-slate-900 dark:text-white">
                    ⚡ {trick.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500 text-white">
                    Jembatan Keledai / Rumus Cepat
                  </span>
                </div>

                {trick.mnemonic && (
                  <div className="p-3.5 rounded-xl bg-amber-100/80 dark:bg-amber-900/40 border border-amber-300 dark:border-amber-700 text-center font-mono text-xs sm:text-sm font-extrabold text-amber-950 dark:text-amber-200">
                    {trick.mnemonic}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/50">
                    <div className="text-xs font-extrabold uppercase text-rose-700 dark:text-rose-400 mb-1">
                      ❌ Cara Biasa (Memakan Waktu Lama)
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {trick.normalWay}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800/60">
                    <div className="text-xs font-extrabold uppercase text-emerald-700 dark:text-emerald-400 mb-1">
                      ✅ Cara Sakti (&lt; 30–45 Detik)
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                      {trick.fastWay}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bedah Contoh Soal dari Video */}
          <div className="space-y-4">
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              Bagian 4: Bedah Contoh Soal Step-by-Step
            </h2>

            {(module.workedExamples || []).map((ex, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
              >
                <div className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Contoh Soal #{idx + 1}
                </div>
                <p className="text-sm md:text-base font-semibold text-slate-900 dark:text-white leading-relaxed">
                  {ex.question}
                </p>

                <div className="space-y-1.5 pl-2">
                  {ex.options.map((opt, oIdx) => (
                    <div
                      key={oIdx}
                      className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 py-1"
                    >
                      {opt}
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-extrabold">
                    Kunci Jawaban: {ex.answer}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                      <div className="text-xs font-extrabold text-slate-700 dark:text-slate-300 mb-1">
                        📖 Konsep Dasar / Pembahasan Lengkap:
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                        {ex.normalExplanation}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60">
                      <div className="text-xs font-extrabold text-indigo-700 dark:text-indigo-300 mb-1">
                        ⚡ Eksekusi Trik Cepat:
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 whitespace-pre-line leading-relaxed">
                        {ex.fastTrickExplanation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =====================================================================
          TAB 3: LATIHAN KUIS MANDIRI INTERAKTIF
         ===================================================================== */}
      {activeSection === 'KUIS' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
                Bagian 5: Latihan Soal Mandiri ({module.category})
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {module.category === 'TKP'
                  ? 'Aturan Skor TKP: Setiap opsi memiliki bobot nilai 1 s/d 5 poin.'
                  : 'Aturan Skor TWK/TIU: Jawaban Benar = +5 Poin, Jawaban Salah = 0 Poin.'}
              </p>
            </div>

            {quizSubmitted && (
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200">
                  <div className="text-[10px] font-bold uppercase">Total Skor Anda</div>
                  <div className="text-lg font-extrabold">
                    {currentCalculatedScore} / {maxPossibleScore} Poin
                  </div>
                </div>
                <button
                  onClick={handleResetQuiz}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold hover:bg-slate-200 transition"
                >
                  <RotateCcw className="w-4 h-4" /> Ulangi Kuis
                </button>
              </div>
            )}
          </div>

          <div className="space-y-5">
            {(module.quiz || []).map((q, qIdx) => {
              const chosenIdx = selectedAnswers[q.id];

              return (
                <div
                  key={q.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Soal #{qIdx + 1}
                    </span>
                    {quizSubmitted && chosenIdx !== undefined && (
                      <span
                        className={`text-xs font-extrabold px-3 py-1 rounded-lg ${
                          q.options[chosenIdx].score === 5
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300'
                            : 'bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300'
                        }`}
                      >
                        +{q.options[chosenIdx].score} Poin
                      </span>
                    )}
                  </div>

                  <p className="text-sm md:text-base font-semibold text-slate-900 dark:text-white leading-relaxed">
                    {q.question}
                  </p>

                  <div className="space-y-2">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = chosenIdx === optIdx;
                      const isMaxScore = opt.score === 5;

                      let btnStyle =
                        'border-slate-200 dark:border-slate-700 hover:border-indigo-400 bg-slate-50/60 dark:bg-slate-800/40';
                      if (isSelected && !quizSubmitted) {
                        btnStyle =
                          'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-900 dark:text-indigo-200 ring-2 ring-indigo-500/30';
                      } else if (quizSubmitted) {
                        if (isMaxScore) {
                          btnStyle =
                            'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200';
                        } else if (isSelected && !isMaxScore) {
                          btnStyle =
                            'border-rose-500 bg-rose-50 dark:bg-rose-950/50 text-rose-900 dark:text-rose-200';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectOption(q.id, optIdx)}
                          className={`w-full text-left p-3.5 rounded-xl border transition flex items-start justify-between gap-3 text-xs sm:text-sm ${btnStyle}`}
                        >
                          <div className="flex items-start gap-3">
                            <span className="font-extrabold">{opt.label}.</span>
                            <span className="font-medium leading-relaxed">{opt.text}</span>
                          </div>
                          {quizSubmitted && (
                            <span
                              className={`shrink-0 text-xs font-extrabold px-2 py-0.5 rounded ${
                                opt.score === 5
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                              }`}
                            >
                              Skor {opt.score}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {quizSubmitted && (
                    <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 text-xs sm:text-sm space-y-1">
                      <div className="font-extrabold text-indigo-800 dark:text-indigo-300">
                        💡 Pembahasan Kunci Jawaban:
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {q.explanation}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {!quizSubmitted && (
            <button
              onClick={handleSubmitQuiz}
              className="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-md transition flex items-center justify-center gap-2"
            >
              <Award className="w-5 h-5" />
              Periksa Jawaban & Lihat Pembahasan
            </button>
          )}
        </div>
      )}

      {/* =====================================================================
          TAB 4: CATATAN PRIBADI (AUTO-SAVE LOCALSTORAGE)
         ===================================================================== */}
      {activeSection === 'CATATAN' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
                Bagian 6: Catatan Belajar Pribadi Anda
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Tulis poin tambahan atau rumus versi Anda sendiri untuk modul ini. Otomatis tersimpan di browser.
              </p>
            </div>
            {noteSavedBadge && (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <Check className="w-4 h-4" /> Tersimpan otomatis
              </span>
            )}
          </div>

          <textarea
            rows={10}
            value={noteText}
            onChange={handleNoteChange}
            placeholder="Ketik rangkuman pribadi, jembatan keledai tambahan, atau hal yang perlu diingat dari modul ini..."
            className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 leading-relaxed"
          />
        </div>
      )}
    </div>
  );
}

