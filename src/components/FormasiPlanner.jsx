import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  Building2,
  CheckCircle2,
  Circle,
  Plus,
  Trash2,
  Sparkles,
  FileCheck2,
  MapPin,
  Wallet,
  GraduationCap,
  Star,
  AlertCircle
} from 'lucide-react';
import {
  USER_PROFILE_JURUSAN,
  JABATAN_INFORMATIKA_MAP,
  INITIAL_FORMASI_LIST,
  SSCASN_DOC_CHECKLIST
} from '../data/formasiData.js';

export default function FormasiPlanner() {
  const [activeSubTab, setActiveSubTab] = useState('PETA_JABATAN'); // PETA_JABATAN | PERBANDINGAN | BERKAS

  // LocalStorage for Custom Formasi List
  const [formasiList, setFormasiList] = useState(() => {
    try {
      const saved = localStorage.getItem('lms_dera_formasi_list');
      return saved ? JSON.parse(saved) : INITIAL_FORMASI_LIST;
    } catch {
      return INITIAL_FORMASI_LIST;
    }
  });

  // LocalStorage for SSCASN Document Checklist
  const [checkedDocs, setCheckedDocs] = useState(() => {
    try {
      const saved = localStorage.getItem('lms_dera_sscasn_docs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Form state for adding new Formasi from SK Instansi
  const [showAddModal, setShowAddModal] = useState(false);
  const [newFormasi, setNewFormasi] = useState({
    instansi: '',
    jabatan: 'Ahli Pertama - Pranata Komputer',
    unitKerja: '',
    jenisInstansi: 'Pemerintah Daerah',
    kuota: '',
    estimasiThp: '',
    syaratKhusus: 'S1 Informatika',
    statusPilihan: 'TARGET UTAMA',
    catatan: ''
  });

  useEffect(() => {
    localStorage.setItem('lms_dera_formasi_list', JSON.stringify(formasiList));
  }, [formasiList]);

  useEffect(() => {
    localStorage.setItem('lms_dera_sscasn_docs', JSON.stringify(checkedDocs));
  }, [checkedDocs]);

  const toggleDoc = (docId) => {
    setCheckedDocs((prev) =>
      prev.includes(docId) ? prev.filter((id) => id !== docId) : [...prev, docId]
    );
  };

  const handleAddFormasi = (e) => {
    e.preventDefault();
    if (!newFormasi.instansi.trim()) return;
    const item = {
      ...newFormasi,
      id: `formasi-${Date.now()}`
    };
    setFormasiList((prev) => [item, ...prev]);
    setNewFormasi({
      instansi: '',
      jabatan: 'Ahli Pertama - Pranata Komputer',
      unitKerja: '',
      jenisInstansi: 'Pemerintah Daerah',
      kuota: '',
      estimasiThp: '',
      syaratKhusus: 'S1 Informatika',
      statusPilihan: 'TARGET UTAMA',
      catatan: ''
    });
    setShowAddModal(false);
  };

  const handleDeleteFormasi = (id) => {
    setFormasiList((prev) => prev.filter((f) => f.id !== id));
  };

  const handleChangeStatus = (id, nextStatus) => {
    setFormasiList((prev) =>
      prev.map((f) => (f.id === id ? { ...f, statusPilihan: nextStatus } : f))
    );
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600 p-6 md:p-8 text-white shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-extrabold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-amber-300" />
              <span>Kualifikasi Pendidikan: {USER_PROFILE_JURUSAN.degree}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold">
              Radar Formasi &amp; Strategi Pilihan Lamaran CPNS
            </h2>
            <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed">
              {USER_PROFILE_JURUSAN.strengthSummary}
            </p>
          </div>

          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-xs space-y-2 shrink-0 min-w-[230px]">
            <div className="font-extrabold uppercase tracking-wider text-amber-300">
              Target Aman Lolos Perangkingan
            </div>
            <div className="flex justify-between">
              <span>Target TWK:</span>
              <strong>{USER_PROFILE_JURUSAN.targetSkdScore.twk} Poin</strong>
            </div>
            <div className="flex justify-between">
              <span>Target TIU (Kuat di IT):</span>
              <strong>{USER_PROFILE_JURUSAN.targetSkdScore.tiu} Poin</strong>
            </div>
            <div className="flex justify-between">
              <span>Target TKP:</span>
              <strong>{USER_PROFILE_JURUSAN.targetSkdScore.tkp} Poin</strong>
            </div>
            <div className="pt-1.5 border-t border-white/20 flex justify-between text-sm font-extrabold text-white">
              <span>Total Skor Aman:</span>
              <span>{USER_PROFILE_JURUSAN.targetSkdScore.total}+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="flex flex-wrap gap-2 bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <button
          onClick={() => setActiveSubTab('PETA_JABATAN')}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition ${
            activeSubTab === 'PETA_JABATAN'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
          }`}
        >
          <Briefcase className="w-4 h-4" />
          1. Peta Jabatan S1 Informatika ({JABATAN_INFORMATIKA_MAP.length} Formasi Utama)
        </button>

        <button
          onClick={() => setActiveSubTab('PERBANDINGAN')}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition ${
            activeSubTab === 'PERBANDINGAN'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
          }`}
        >
          <Building2 className="w-4 h-4" />
          2. Tabel Incaran Instansi &amp; SK ({formasiList.length})
        </button>

        <button
          onClick={() => setActiveSubTab('BERKAS')}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition ${
            activeSubTab === 'BERKAS'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
          }`}
        >
          <FileCheck2 className="w-4 h-4" />
          3. Checklist Berkas SSCASN Anti-TMS ({checkedDocs.length}/{SSCASN_DOC_CHECKLIST.length})
        </button>
      </div>

      {/* =====================================================================
          SUB-TAB 1: PETA JABATAN UNTUK S1 INFORMATIKA
         ===================================================================== */}
      {activeSubTab === 'PETA_JABATAN' && (
        <div className="space-y-4">
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 rounded-2xl p-4 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
              <strong>Tips Strategis S1 Informatika:</strong> Saat SK Instansi turun di bulan November, cari kata kunci jabatan di bawah ini pada lampiran PDF formasi. Jabatan <strong>Pranata Komputer Ahli Pertama</strong> hampir selalu membuka kuota terbesar di setiap instansi pusat maupun daerah!
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {JABATAN_INFORMATIKA_MAP.map((jab) => (
              <div
                key={jab.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-lg text-xs font-extrabold bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300">
                      {jab.category}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                      {jab.competitionLevel}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                    {jab.roleName}
                  </h3>

                  <div className="text-xs text-slate-600 dark:text-slate-300 space-y-2 pt-1">
                    <div>
                      <strong className="text-slate-900 dark:text-white">🏢 Instansi Tersedia:</strong>{' '}
                      {jab.availability}
                    </div>
                    <div>
                      <strong className="text-slate-900 dark:text-white">💻 Tugas Pokok:</strong>{' '}
                      {jab.typicalTasks}
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700">
                      <strong className="text-indigo-600 dark:text-indigo-400">
                        📚 Kisi-Kisi SKB Nanti:
                      </strong>{' '}
                      {jab.skbTopics}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =====================================================================
          SUB-TAB 2: TABEL PERBANDINGAN INCARAN INSTANSI & SK FORMASI
         ===================================================================== */}
      {activeSubTab === 'PERBANDINGAN' && (
        <div className="space-y-5">
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                Daftar Incaran Formasi &amp; Perbandingan SK Instansi
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Begitu SK resmi dari instansi turun, kirimkan ke chat untuk dianalisis otomatis, atau tambahkan incaran Anda melalui tombol di samping.
              </p>
            </div>
            <button
              onClick={() => setShowAddModal(!showAddModal)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-extrabold shadow-sm transition shrink-0"
            >
              <Plus className="w-4 h-4" />
              Tambah Formasi Incaran Baru
            </button>
          </div>

          {/* Form Tambah Formasi Baru */}
          {showAddModal && (
            <form
              onSubmit={handleAddFormasi}
              className="bg-indigo-50/70 dark:bg-indigo-950/30 rounded-2xl p-6 border border-indigo-200 dark:border-indigo-800 space-y-4"
            >
              <h4 className="text-sm font-extrabold text-indigo-900 dark:text-indigo-200">
                Tambah Formasi dari SK Pengumuman Instansi
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold mb-1">Nama Instansi (Kementerian / Pemda)</label>
                  <input
                    type="text"
                    required
                    value={newFormasi.instansi}
                    onChange={(e) => setNewFormasi({ ...newFormasi, instansi: e.target.value })}
                    placeholder="Contoh: Pemkab Boyolali / Kemenkes RI"
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">Jabatan yang Dilamar</label>
                  <input
                    type="text"
                    required
                    value={newFormasi.jabatan}
                    onChange={(e) => setNewFormasi({ ...newFormasi, jabatan: e.target.value })}
                    placeholder="Contoh: Ahli Pertama - Pranata Komputer"
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">Unit Kerja Penempatan</label>
                  <input
                    type="text"
                    value={newFormasi.unitKerja}
                    onChange={(e) => setNewFormasi({ ...newFormasi, unitKerja: e.target.value })}
                    placeholder="Contoh: Dinas Kominfo / RSUD"
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">Kuota Formasi &amp; Estimasi Gaji/THP</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={newFormasi.kuota}
                      onChange={(e) => setNewFormasi({ ...newFormasi, kuota: e.target.value })}
                      placeholder="Kuota (misal: 4 Orang)"
                      className="w-full px-3 py-2 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
                    />
                    <input
                      type="text"
                      value={newFormasi.estimasiThp}
                      onChange={(e) => setNewFormasi({ ...newFormasi, estimasiThp: e.target.value })}
                      placeholder="Gaji/THP (misal: 7-9 Jt)"
                      className="w-full px-3 py-2 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">Syarat Khusus di SK</label>
                  <input
                    type="text"
                    value={newFormasi.syaratKhusus}
                    onChange={(e) => setNewFormasi({ ...newFormasi, syaratKhusus: e.target.value })}
                    placeholder="Contoh: IPK 3.00, Tanpa TOEFL"
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">Catatan Pertimbangan</label>
                  <input
                    type="text"
                    value={newFormasi.catatan}
                    onChange={(e) => setNewFormasi({ ...newFormasi, catatan: e.target.value })}
                    placeholder="Contoh: Dekat rumah, peluang besar"
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-xs font-bold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-extrabold"
                >
                  Simpan ke Daftar Incaran
                </button>
              </div>
            </form>
          )}

          {/* Cards Daftar Incaran */}
          <div className="space-y-4">
            {formasiList.map((item) => {
              const statusStyle =
                item.statusPilihan === 'TARGET UTAMA'
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border-emerald-300'
                  : item.statusPilihan === 'ALTERNATIF AMAN'
                  ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/70 dark:text-indigo-300 border-indigo-300'
                  : 'bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border-amber-300';

              return (
                <div
                  key={item.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`px-3 py-0.5 rounded-full text-xs font-extrabold border ${statusStyle}`}>
                          ⭐ {item.statusPilihan}
                        </span>
                        <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                          • {item.jenisInstansi}
                        </span>
                      </div>
                      <h4 className="text-lg font-extrabold text-slate-900 dark:text-white">
                        {item.instansi}
                      </h4>
                      <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                        {item.jabatan}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <select
                        value={item.statusPilihan}
                        onChange={(e) => handleChangeStatus(item.id, e.target.value)}
                        className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      >
                        <option value="TARGET UTAMA">⭐ Target Utama</option>
                        <option value="ALTERNATIF AMAN">🛡️ Alternatif Aman</option>
                        <option value="PANTAU SK">🔍 Pantau SK</option>
                      </select>
                      <button
                        onClick={() => handleDeleteFormasi(item.id)}
                        title="Hapus dari daftar"
                        className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-slate-400 font-semibold">Unit Penempatan:</div>
                        <div className="font-bold text-slate-800 dark:text-slate-200">
                          {item.unitKerja || '-'}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Wallet className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-slate-400 font-semibold">Estimasi THP / Kuota:</div>
                        <div className="font-bold text-slate-800 dark:text-slate-200">
                          {item.estimasiThp || '-'} ({item.kuota || 'Menunggu SK'})
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-slate-400 font-semibold">Syarat Khusus:</div>
                        <div className="font-bold text-slate-800 dark:text-slate-200">
                          {item.syaratKhusus || 'S1 Informatika'}
                        </div>
                      </div>
                    </div>
                  </div>

                  {item.catatan && (
                    <div className="text-xs text-slate-600 dark:text-slate-400 italic">
                      💡 <strong>Analisis Peluang:</strong> {item.catatan}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* =====================================================================
          SUB-TAB 3: CHECKLIST DOKUMEN PENDAFTARAN SSCASN (ANTI-TMS)
         ===================================================================== */}
      {activeSubTab === 'BERKAS' && (
        <div className="space-y-4">
          <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/60 rounded-2xl p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-rose-900 dark:text-rose-200 leading-relaxed">
              <strong>Penting untuk Pendaftaran Bulan November:</strong> Jangan sampai gugur di Seleksi Administrasi (TMS) hanya karena salah scan dokumen atau e-Meterai menimpa tanda tangan! Centang satu per satu dokumen di bawah ini setelah Anda menyiapkannya di folder khusus laptop/HP.
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-3">
            {SSCASN_DOC_CHECKLIST.map((doc) => {
              const isChecked = checkedDocs.includes(doc.id);
              return (
                <div
                  key={doc.id}
                  onClick={() => toggleDoc(doc.id)}
                  className={`cursor-pointer p-4 rounded-xl border transition flex items-start gap-3.5 ${
                    isChecked
                      ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800'
                      : 'bg-slate-50/60 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 hover:border-indigo-400'
                  }`}
                >
                  {isChecked ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <Circle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-1">
                    <h4
                      className={`text-sm font-extrabold ${
                        isChecked
                          ? 'line-through text-emerald-800 dark:text-emerald-300'
                          : 'text-slate-900 dark:text-white'
                      }`}
                    >
                      {doc.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {doc.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

