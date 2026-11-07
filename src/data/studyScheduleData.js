// ============================================================================
// DATA JADWAL & TARGET BELAJAR STRATEGIS (NOVEMBER – JANUARI)
// Pendaftaran: November | Fokus Intensif: Desember | Ujian SKD: Januari
// ============================================================================

export const SKD_SCORE_TARGETS = {
  twk: {
    passingGrade: 65,
    safeTarget: 105,
    maxScore: 150,
    totalQuestions: 30,
    targetCorrect: "Minimal 21 Soal Benar (dari 30 Soal)",
    strategyNote: "Kuasai Penalaran Pancasila Sila 1-5, Bela Negara, Integritas, dan Bahasa Indonesia (5-6 soal Bahasa Indonesia wajib benar semua!)."
  },
  tiu: {
    passingGrade: 80,
    safeTarget: 140,
    maxScore: 175,
    totalQuestions: 35,
    targetCorrect: "Minimal 28 Soal Benar (dari 35 Soal)",
    strategyNote: "Sebagai lulusan S1 Informatika, TIU adalah LUMBUNG SKOR UTAMA Anda! Maksimalkan logika Silogisme, Penalaran Analitis, Deret Angka, Perbandingan, dan Figural."
  },
  tkp: {
    passingGrade: 166,
    safeTarget: 195,
    maxScore: 225,
    totalQuestions: 45,
    targetCorrect: "Rata-rata Poin 4 & 5 di Setiap Soal",
    strategyNote: "Gunakan rumus 'Ramah + Solutif + Sesuai SOP/Wewenang'. Jangan pernah mengosongkan jawaban TKP!"
  }
};

// Jadwal Rutin Harian (Senin - Minggu) yang Efektif & Anti-Burnout
export const WEEKLY_ROUTINE_TEMPLATE = [
  {
    day: "Senin",
    focusCategory: "TWK",
    theme: "TWK — Pilar Negara (Pancasila & UUD 1945)",
    duration: "90 Menit",
    morningTask: "25 Menit: Tonton 1 Video Fokus TWK & baca kata kunci BKN di LMS Dera",
    eveningTask: "65 Menit: Bedah 15 soal penalaran Pancasila/UUD 1945 & catat jebakan opsi",
    color: "rose"
  },
  {
    day: "Selasa",
    focusCategory: "TIU",
    theme: "TIU — Numerik (Deret Angka, Hitung Cepat, & Perbandingan)",
    duration: "90 Menit",
    morningTask: "20 Menit: Hafalkan pola rumus cepat < 45 detik di Cheat Sheet",
    eveningTask: "70 Menit: Drilling 20 soal Numerik menggunakan stopwatch (maks 45 detik/soal)",
    color: "indigo"
  },
  {
    day: "Rabu",
    focusCategory: "TKP",
    theme: "TKP — Pelayanan Publik, Profesionalisme, & TIK",
    duration: "75 Menit",
    morningTask: "20 Menit: Pahami indikator poin 5 vs poin 4 pada 6 aspek TKP",
    eveningTask: "55 Menit: Latihan 25 soal cerita TKP & evaluasi mengapa opsi bernilai 5",
    color: "emerald"
  },
  {
    day: "Kamis",
    focusCategory: "TWK",
    theme: "TWK — Nasionalisme, Integritas, Bela Negara, & B.Indonesia",
    duration: "90 Menit",
    morningTask: "25 Menit: Pelajari perbedaan Nasionalisme vs Bela Negara vs Integritas",
    eveningTask: "65 Menit: Latihan 10 soal studi kasus Integritas + 10 soal Ide Pokok/Kalimat Efektif B.Indo",
    color: "rose"
  },
  {
    day: "Jumat",
    focusCategory: "TIU",
    theme: "TIU — Verbal (Silogisme & Analitis) + Figural",
    duration: "90 Menit",
    morningTask: "20 Menit: Latih rumus penarikan kesimpulan Silogisme & tabel posisi Analitis",
    eveningTask: "70 Menit: Drilling 15 soal Verbal + 15 soal Figural (Rotasi, Pencerminan, Serial)",
    color: "indigo"
  },
  {
    day: "Sabtu",
    focusCategory: "SIMULASI",
    theme: "TRYOUT MINGGUAN — Simulasi CAT Gabungan & Evaluasi",
    duration: "120 Menit",
    morningTask: "100 Menit: Kerjakan Simulasi Tryout CAT tanpa gangguan (kondisikan seperti ujian asli)",
    eveningTask: "20 Menit: Bedah khusus soal-soal yang masih salah dan catat di tab Catatan Pribadi",
    color: "purple"
  },
  {
    day: "Minggu",
    focusCategory: "REVIEW",
    theme: "Review Ringan Cheat Sheet & Istirahat Mental",
    duration: "45 Menit",
    morningTask: "45 Menit: Baca santai halaman 'Rumus & Kata Kunci Kilat' dari HP sambil istirahat",
    eveningTask: "Free Time: Istirahat cukup agar pikiran segar untuk minggu berikutnya",
    color: "amber"
  }
];

// Roadmap 10 Minggu: November (Pendaftaran) -> Desember (Intensif) -> Januari (Ujian SKD)
export const ROADMAP_NOV_JAN = [
  {
    phaseId: "fase-november",
    month: "FASE 1: NOVEMBER",
    title: "Fondasi Konsep Inti & Tuntas Administrasi SSCASN",
    subtitle: "Target Bulan Ini: Berkas SSCASN Lolos 100% (Anti-TMS) + Kuasai Seluruh Materi Dasar TWK, TIU, TKP",
    badge: "Minggu 1 – Minggu 4",
    color: "indigo",
    weeks: [
      {
        id: "nov-w1",
        weekLabel: "Minggu 1 November",
        title: "Riset Formasi S1 Informatika & Penguasaan Pancasila Sila 1–5",
        tasks: [
          "Siapkan scan warna seluruh dokumen asli SSCASN (KTP, Ijazah S1 Informatika, Transkrip, Akreditasi)",
          "Tuntaskan Modul Tips Master TWK & Modul Fokus TWK #48 s/d #51 (Pancasila Sila 1–5) di LMS Dera",
          "Kuasai pola dasar TIU Deret Angka (1 Larik, 2 Larik, Bertingkat, Fibonacci)"
        ]
      },
      {
        id: "nov-w2",
        weekLabel: "Minggu 2 November",
        title: "Finalisasi Submit SSCASN & Fondasi TIU Verbal-Numerik",
        tasks: [
          "Cek ulang SK Pengumuman Instansi, pastikan format Surat Lamaran & e-Meterai 100% sesuai aturan",
          "Pelajari TWK UUD 1945 (Sejarah Konstitusi, Amandemen 1-4, & Hak-Kewajiban Pasal 27-34)",
          "Kuasai TIU Operasi Hitung Cepat, Pecahan/Desimal, dan Perbandingan Senilai vs Berbalik Nilai"
        ]
      },
      {
        id: "nov-w3",
        weekLabel: "Minggu 3 November",
        title: "Pendalaman TKP 6 Aspek & TWK Nasionalisme-Integritas",
        tasks: [
          "Kuasai kata kunci Poin 5 pada 6 Aspek TKP (Pelayanan Publik, Jejaring Kerja, Sosial Budaya, TIK, Profesionalisme, Anti-Radikalisme)",
          "Pelajari TWK Nasionalisme & Integritas (Perbedaan Jujur, Berani, Tanggung Jawab, Disiplin, Mandiri)",
          "Kuasai TIU Silogisme (Modus Ponens, Modus Tollens, Kuantor Semua-Sebagian)"
        ]
      },
      {
        id: "nov-w4",
        weekLabel: "Minggu 4 November",
        title: "TWK Bela Negara, Bahasa Indonesia & TIU Figural Dasar",
        tasks: [
          "Pelajari TWK Bela Negara & Bahasa Indonesia (Ide Pokok, Kalimat Efektif, Kata Baku KBBI, EYD V)",
          "Kuasai TIU Penalaran Analitis (Urutan/Ranking & Kombinasi Posisi Duduk Meja Bundar/Sejajar)",
          "Lakukan Evaluasi Tryout Akhir Bulan November (Target Skor Awal >= 360)"
        ]
      }
    ]
  },
  {
    phaseId: "fase-desember",
    month: "FASE 2: DESEMBER",
    title: "Akselerasi Kecepatan TIU (< 45 Detik) & Penalaran HOTS",
    subtitle: "Target Bulan Ini: Kecepatan Hitung & Analisa Meningkat 2x Lipat + Skor Tryout Tembus 400+",
    badge: "Minggu 5 – Minggu 8",
    color: "rose",
    weeks: [
      {
        id: "des-w1",
        weekLabel: "Minggu 1 Desember",
        title: "Drilling Soal Cerita TIU & Studi Kasus HOTS Pilar Negara",
        tasks: [
          "Kuasai TIU Soal Cerita: Kecepatan-Jarak-Waktu (Susul-menyusul & Papasan) dan Pekerjaan Bersama",
          "Latihan 50 Soal HOTS TWK Pengamalan Pancasila & Pasal UUD 1945 dalam kasus birokrasi",
          "Drilling 30 Soal TKP Pelayanan Publik & Profesionalisme (Target minimal 85% dapat poin 5)"
        ]
      },
      {
        id: "des-w2",
        weekLabel: "Minggu 2 Desember",
        title: "Mastery TIU Figural (99% Benar) & TWK Sejarah Pergerakan",
        tasks: [
          "Drilling 40 Soal TIU Figural (Serial, Analogi Gambar, Ketidaksamaan, Jaring-jaring Kubus)",
          "Rangkum garis waktu Sejarah Pergerakan Nasional (Budi Utomo, Indische Partij, Sumpah Pemuda, BPUPKI-PPKI)",
          "Tryout CAT Tengah Bulan Desember (Target TIU >= 125)"
        ]
      },
      {
        id: "des-w3",
        weekLabel: "Minggu 3 Desember",
        title: "Pemantapan Bahasa Indonesia TWK & Perbandingan Gabungan TIU",
        tasks: [
          "Drilling 30 Soal Bahasa Indonesia TWK (Penulisan Gelar, Huruf Kapital, Kalimat Sumbang, Simpulan Paragraf)",
          "Kuasai TIU Perbandingan Tiga Variabel (Subjek - Objek - Waktu: Rumus O / (S × W))",
          "Drilling 30 Soal TKP Jejaring Kerja, TIK, dan Anti-Radikalisme"
        ]
      },
      {
        id: "des-w4",
        weekLabel: "Minggu 4 Desember",
        title: "Evaluasi Kelemahan & Tryout Intensif Akhir Tahun",
        tasks: [
          "Identifikasi 3 sub-topik yang paling sering salah selama bulan Desember dan pelajari ulang modulnya",
          "Kerjakan 2x Tryout Full CAT 110 Soal (Target Skor Akhir Desember >= 415)",
          "Review lengkap halaman Cheat Sheet LMS Dera"
        ]
      }
    ]
  },
  {
    phaseId: "fase-januari",
    month: "FASE 3: JANUARI (BULAN UJIAN SKD)",
    title: "Drilling Full CAT, Manajemen Waktu, & Mental Juara",
    subtitle: "Target Bulan Ini: Konsisten Skor 430–450+, Manajemen Waktu 100 Menit Tuntas, & Siap Tempur Hari-H",
    badge: "Minggu 9 – Hari H",
    color: "emerald",
    weeks: [
      {
        id: "jan-w1",
        weekLabel: "Minggu 1 Januari",
        title: "Simulasi Manajemen Waktu 100 Menit (Strategi Urutan Pengerjaan)",
        tasks: [
          "Latih strategi urutan waktu CAT: TKP/TWK cepat & tepat (60 menit) -> TIU fokus penuh (40 menit)",
          "Drilling soal-soal setipe FR (Field Report) tahun sebelumnya",
          "Pastikan tidak ada satu pun soal yang memakan waktu lebih dari 90 detik (gunakan fitur Ragu-ragu)"
        ]
      },
      {
        id: "jan-w2",
        weekLabel: "Minggu 2 Januari",
        title: "Drilling Full CAT Berseri & Pemantapan Cheat Sheet",
        tasks: [
          "Simulasi CAT 2 hari sekali pada jam yang sama dengan jadwal sesi ujian Anda",
          "Baca ulang seluruh Jembatan Keledai & Kata Kunci BKN di LMS Dera setiap pagi (15 menit)",
          "Siapkan pakaian ujian (kemeja putih, celana/rok hitam, sepatu hitam), Kartu Ujian, & KTP asli"
        ]
      },
      {
        id: "jan-w3",
        weekLabel: "Minggu 3–4 Januari (Hari-H Ujian SKD)",
        title: "Tenang, Fokus, Berdoa, & Raih Skor Puncak SKD!",
        tasks: [
          "H-1 Ujian: Hentikan belajar berat di malam hari, cukup baca Cheat Sheet ringan dan tidur tepat waktu",
          "Hari-H: Datang 90 menit sebelum sesi dimulai, tenang, baca kalimat terakhir soal dulu, dan kunci skor 440+!"
        ]
      }
    ]
  }
];
