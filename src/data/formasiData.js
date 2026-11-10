// ============================================================================
// DATA RADAR FORMASI & PEMETAAN LAMARAN CPNS — KHUSUS S1 INFORMATIKA / ILMU KOMPUTER
// Siap ditambahkan langsung saat SK Pengumuman Resmi Instansi turun!
// ============================================================================

export const USER_PROFILE_JURUSAN = {
  degree: "S1 Informatika / Teknik Informatika / Ilmu Komputer",
  strengthSummary:
    "Jurusan S1 Informatika termasuk 3 besar jurusan paling dibutuhkan di CPNS! Bisa masuk ke Jabatan Fungsional Khusus IT (Pranata Komputer, Manggala Informatika, Sandiman) maupun Jabatan Fungsional Umum/Manajerial (Auditor, Analis Kebijakan, PPUPD) di hampir seluruh Kementerian, Lembaga, dan Pemerintah Daerah.",
  targetSkdScore: {
    twk: 105,
    tiu: 140,
    tkp: 195,
    total: 440
  }
};

// Peta Jabatan yang Bisa Dilamar oleh S1 Informatika
export const JABATAN_INFORMATIKA_MAP = [
  {
    id: "jab-prakom",
    roleName: "Ahli Pertama - Pranata Komputer (Prakom)",
    category: "Jabatan Fungsional Teknis IT (Primadona S1 Informatika)",
    availability: "Hampir di SEMUA Kementerian, Badan Nasional, MA, Kejaksaan, Pemprov, & Pemkab/Pemkot",
    typicalTasks: "Pengembangan aplikasi pemerintahan (SPBE), manajemen database, infrastruktur jaringan, IT Governance, dan analisis sistem informasi.",
    skbTopics: "Database (SQL), Jaringan Komputer, Rekayasa Perangkat Lunak (SDLC), Keamanan Informasi, Cloud, & Tata Kelola SPBE / COBIT.",
    competitionLevel: "Kuota Sangat Banyak • Peluang Lolos Tinggi",
    badgeColor: "indigo"
  },
  {
    id: "jab-manggala",
    roleName: "Ahli Pertama - Manggala Informatika",
    category: "Jabatan Fungsional Keamanan Siber & Sandi",
    availability: "BSSN, Kementerian Komdigi (Kominfo), Kementerian Pusat, & Dinas Kominfo Daerah",
    typicalTasks: "Pengamanan informasi, penanganan insiden siber (CSIRT), kriptografi, audit keamanan aplikasi, dan manajemen risiko siber.",
    skbTopics: "Cyber Security, Network Security, Cryptography, Malware Analysis, ISO 27001, & Manajemen Risiko Siber.",
    competitionLevel: "Formasi Spesialis Baru • Saingan Lebih Terfokus",
    badgeColor: "rose"
  },
  {
    id: "jab-penata-kelola-ti",
    roleName: "Penata Kelola Sistem dan Teknologi Informasi",
    category: "Jabatan Pelaksana Teknis (Non-Fungsional)",
    availability: "KPU, Bawaslu, Kementerian Teknis, Sekretariat Daerah, RSUD, & Dinas Daerah",
    typicalTasks: "Pengelolaan operasional sistem TI, pemeliharaan perangkat keras/lunak, dukungan teknis pengguna, dan integrasi data instansi.",
    skbTopics: "Dasar Sistem Informasi, Troubleshooting Hardware/Software, Administrasi Jaringan, & E-Government.",
    competitionLevel: "Peluang Sangat Bagus di Instansi Daerah & Vertikal",
    badgeColor: "emerald"
  },
  {
    id: "jab-auditor",
    roleName: "Ahli Pertama - Auditor (IT Audit / E-Audit)",
    category: "Jabatan Fungsional Pengawasan",
    availability: "BPK RI, BPKP, Inspektorat Jenderal Kementerian, & Inspektorat Daerah",
    typicalTasks: "Pemeriksaan sistem informasi keuangan negara, audit teknologi informasi, dan pengawasan akuntabilitas berbasis sistem elektronik.",
    skbTopics: "Dasar Auditing, Tata Kelola TI, Akuntabilitas Publik, Logika Analitis, & Regulasi Keuangan Negara.",
    competitionLevel: "Tukin/Gaji Tinggi • Kuota Besar",
    badgeColor: "amber"
  },
  {
    id: "jab-sandiman",
    roleName: "Ahli Pertama - Sandiman",
    category: "Jabatan Fungsional Persandian",
    availability: "BSSN, Kementerian Luar Negeri, Kemhan, BIN, & Diskominfo Pemprov/Pemkab",
    typicalTasks: "Pengelolaan komunikasi sandi pemerintah, pengamanan berita rahasia negara, dan kontra-penginderaan.",
    skbTopics: "Kriptografi, Keamanan Jaringan, Regulasi Persandian Negara, & Keamanan Perangkat.",
    competitionLevel: "Spesifik Jurusan IT • Peluang Lolos Bagus",
    badgeColor: "purple"
  },
  {
    id: "jab-analis-kebijakan",
    roleName: "Ahli Pertama - Analis Kebijakan",
    category: "Jabatan Fungsional Manajerial / Kebijakan",
    availability: "Seluruh Kementerian, Lembaga Negara, Pemerintah Provinsi, & Pemerintah Kabupaten/Kota",
    typicalTasks: "Kajian kebijakan publik berbasis data digital, perumusan rekomendasi kebijakan transformasi digital pemerintah.",
    skbTopics: "Kebijakan Publik, Analisis Data, Regulasi Pemerintahan, & Studi Kasus Kebijakan.",
    competitionLevel: "Terbuka untuk Banyak Jurusan • Pesaing Cukup Ramai",
    badgeColor: "slate"
  }
];

// Daftar Awal Rencana / Target Lamaran Instansi (Bisa ditambah/diedit di web & siap diupdate saat SK turun)
export const INITIAL_FORMASI_LIST = [
  {
    id: "formasi-1",
    instansi: "Pemerintah Daerah (Pemprov / Pemkab / Pemkot Sekitar Domisili)",
    jabatan: "Ahli Pertama - Pranata Komputer",
    unitKerja: "Dinas Komunikasi dan Informatika (Diskominfo) / RSUD / Bappeda",
    jenisInstansi: "Pemerintah Daerah",
    kuota: "Menunggu SK Resmi",
    estimasiThp: "Rp 5.500.000 – Rp 9.000.000",
    syaratKhusus: "Ijazah S1 Informatika, IPK min 2.75/3.00, Tanpa syarat TOEFL",
    statusPilihan: "TARGET UTAMA",
    catatan: "Dekat domisili, syarat administrasi biasanya tidak mewajibkan TOEFL, kuota Prakom di Pemda umumnya banyak."
  },
  {
    id: "formasi-2",
    instansi: "Mahkamah Agung RI / Kejaksaan RI (Penempatan Daerah/Pengadilan/Kejari)",
    jabatan: "Ahli Pertama - Pranata Komputer",
    unitKerja: "Pengadilan Negeri / Pengadilan Agama / Kejaksaan Negeri",
    jenisInstansi: "Instansi Pusat (Penempatan Daerah)",
    kuota: "Menunggu SK Resmi",
    estimasiThp: "Rp 8.000.000 – Rp 12.500.000",
    syaratKhusus: "S1 Informatika, IPK min 2.75/3.00, Cek syarat TOEFL di SK terbaru",
    statusPilihan: "TARGET UTAMA",
    catatan: "Instansi pusat tetapi kantornya ada di tiap kabupaten/kota! Tunjangan kinerja pusat namun bisa bertugas di daerah."
  },
  {
    id: "formasi-3",
    instansi: "Badan Pusat Statistik (BPS) / BPKP / KPU",
    jabatan: "Ahli Pertama - Pranata Komputer / Penata Kelola Sistem & TI",
    unitKerja: "Kantor Wilayah Provinsi / Kantor Kabupaten/Kota",
    jenisInstansi: "Instansi Pusat (Vertikal di Daerah)",
    kuota: "Menunggu SK Resmi",
    estimasiThp: "Rp 8.000.000 – Rp 13.000.000",
    syaratKhusus: "S1 Informatika / Ilmu Komputer",
    statusPilihan: "ALTERNATIF AMAN",
    catatan: "Lingkungan kerja sangat erat dengan pengolahan data dan sistem informasi."
  },
  {
    id: "formasi-4",
    instansi: "Kementerian Komunikasi dan Digital (Komdigi) / BSSN",
    jabatan: "Ahli Pertama - Pranata Komputer / Manggala Informatika",
    unitKerja: "Kantor Pusat / Balai Monitor",
    jenisInstansi: "Instansi Pusat",
    kuota: "Menunggu SK Resmi",
    estimasiThp: "Rp 9.500.000 – Rp 15.000.000",
    syaratKhusus: "S1 Informatika, biasanya mensyaratkan sertifikat TOEFL (450-500)",
    statusPilihan: "PANTAU SK",
    catatan: "Sangat linear dengan S1 Informatika, karier fungsional IT sangat cepat berkembang."
  },
  {
    id: "formasi-5",
    instansi: "Kementerian Kesehatan (RS Vertikal / Poltekkes / Balai)",
    jabatan: "Ahli Pertama - Pranata Komputer",
    unitKerja: "Instalasi Sistem Informasi Rumah Sakit (SIMRS) / Pusdatin",
    jenisInstansi: "Instansi Pusat (UPT Daerah)",
    kuota: "Menunggu SK Resmi",
    estimasiThp: "Rp 8.500.000 – Rp 13.500.000",
    syaratKhusus: "S1 Informatika, pengalaman/pemahaman SIMRS menjadi nilai tambah besar saat SKB",
    statusPilihan: "TARGET UTAMA",
    catatan: "Sangat cocok jika sudah memiliki pemahaman alur sistem informasi kesehatan / SIMRS!"
  }
];

// Checklist Dokumen Wajib Pendaftaran SSCASN Bulan November (Anti-TMS)
export const SSCASN_DOC_CHECKLIST = [
  {
    id: "doc-ktp",
    title: "Scan KTP Elektronik Asli (Warna)",
    detail: "Pastikan foto dan NIK terbaca jelas, format JPG/PDF sesuai batas ukuran SSCASN (biasanya maks 200-500 KB)."
  },
  {
    id: "doc-ijazah",
    title: "Scan Ijazah Asli S1 Informatika (Warna)",
    detail: "Wajib scan dari Ijazah Asli (bukan fotokopi legalisir dan bukan SKL). Jika ada halaman belakang, gabungkan dalam 1 PDF."
  },
  {
    id: "doc-transkrip",
    title: "Scan Transkrip Nilai Asli S1 (Warna & Lengkap Semua Halaman)",
    detail: "Pastikan seluruh halaman transkrip tergabung utuh, tidak terpotong, dan tanda tangan dekan/rektor terlihat."
  },
  {
    id: "doc-akreditasi",
    title: "Sertifikat Akreditasi Kampus & Prodi S1 Informatika (BAN-PT)",
    detail: "Siapkan sertifikat akreditasi saat tahun kelulusan (atau akreditasi terbaru sesuai ketentuan instansi)."
  },
  {
    id: "doc-pasfoto",
    title: "Pasfoto Formal Latar Belakang Merah (Kemeja Putih)",
    detail: "Foto terbaru, wajah menghadap kamera, latar merah polos."
  },
  {
    id: "doc-surat-lamaran",
    title: "Surat Lamaran & Surat Pernyataan Sesuai Format SK Instansi",
    detail: "JANGAN ubah format/redaksi dari lampiran SK Instansi! Perhatikan apakah harus diketik atau ditulis tangan."
  },
  {
    id: "doc-emeterai",
    title: "Pembubuhan e-Meterai Rp10.000 Resmi (Peruri)",
    detail: "Wajib e-Meterai asli untuk setiap dokumen berbeda (jangan pakai 1 e-Meterai yang sama untuk 2 surat, dan posisi e-Meterai tidak boleh menimpa tanda tangan!)."
  },
  {
    id: "doc-toefl-sertif",
    title: "Sertifikat TOEFL / Sertifikat Kompetensi IT (Opsional Sesuai Instansi)",
    detail: "Jika melamar Kementerian Pusat yang mewajibkan TOEFL, pastikan masa berlaku sertifikat masih aktif saat bulan November."
  }
];

