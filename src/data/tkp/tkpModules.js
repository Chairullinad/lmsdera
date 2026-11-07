// ============================================================================
// MODUL BELAJAR TKP (TES KARAKTERISTIK PRIBADI)
// Setiap kali ada link YouTube baru untuk TKP, tambahkan modul rinci di sini.
// ============================================================================

export const tkpSubCategories = [
  "Semua Sub-Topik",
  "Pelayanan Publik",
  "Jejaring Kerja (Kemitraan)",
  "Sosial Budaya",
  "Teknologi Informasi & Komunikasi (TIK)",
  "Profesionalisme",
  "Anti-Radikalisme"
];

export const tkpModules = [
  {
    id: "tkp-pelayanan-publik-profesionalisme",
    category: "TKP",
    subCategory: "Pelayanan Publik",
    title: "Strategi Skor Maksimal (Poin 5) TKP: Pelayanan Publik & Profesionalisme",
    subtitle: "Rumus membedakan opsi bernilai 5 dan 4 menggunakan indikator kompetensi BKN",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    youtubeId: "",
    duration: "20 Menit",
    difficulty: "Kunci Lulus Passing Grade (166+)",
    bknKeywords: [
      "Pelayanan Publik: Ramah, Cekatan, Solutif sesuai SOP, Mendahulukan Kepentingan Umum",
      "Jejaring Kerja: Kolaboratif, Terbuka, Koordinasi, Membangun Relasi Positif",
      "Sosial Budaya: Empati, Adaptif terhadap Perbedaan, Menghormati Adat/Kebiasaan Lokal",
      "TIK: Efisiensi Digital, Keamanan Data, Adaptasi Sistem Baru, Anti Gaptek",
      "Profesionalisme: Fokus Tugas, Integritas Kerja, Tidak Mencampur Urusan Pribadi",
      "Anti-Radikalisme: Verifikasi Fakta (Tabayyun), Lapor Pihak Berwenang, Menjaga Kondusivitas"
    ],
    timestamps: [
      { time: "00:00", seconds: 0, label: "Mengapa Banyak Peserta Gagal di TKP Padahal Soal Terlihat Mudah?" },
      { time: "04:40", seconds: 280, label: "6 Aspek Kompetensi TKP & Kata Kunci Poin 5" },
      { time: "11:15", seconds: 675, label: "Rumus Menghadapi Komplain Masyarakat: 'Tenangkan - Pahami - Solusi SOP'" },
      { time: "15:50", seconds: 950, label: "Bedah Soal Jebakan Poin 4 vs Poin 5" }
    ],
    theorySections: [
      {
        heading: "1. Peta Kata Kunci 6 Aspek TKP Resmi PermenPAN-RB",
        content: `Kunci utama menaklukkan TKP bukan menebak mana jawaban yang paling "terdengar sopan", melainkan **mengidentifikasi aspek apa yang sedang diuji pada soal**, lalu memilih opsi yang memiliki **tindakan nyata (actionable) sesuai SOP dan wewenang jabatan**.`,
        points: [
          "1. Pelayanan Publik: Melayani dengan ramah, tanggap, efektif, dan **tetap patuh pada aturan/SOP** tanpa diskriminasi.",
          "2. Jejaring Kerja: Membuka komunikasi, berkolaborasi lintas divisi/instansi, berbagi informasi positif untuk pencapaian bersama.",
          "3. Sosial Budaya: Mampu beradaptasi di lingkungan baru yang majemuk, menghargai kearifan lokal tanpa melanggar hukum.",
          "4. TIK: Memanfaatkan teknologi untuk mempercepat layanan, menjaga kerahasiaan akun/data, serta mau belajar sistem digital baru.",
          "5. Profesionalisme: Tetap menyelesaikan tanggung jawab kerja secara tuntas meskipun ada masalah pribadi atau tekanan kerja.",
          "6. Anti-Radikalisme: Bersikap kritis terhadap hoaks/provokasi, mengedepankan dialog inklusif, dan berkoordinasi dengan pihak berwenang sesuai wewenang."
        ],
        table: {
          headers: ["Situasi di Soal TKP", "Ciri Opsi Poin 5 (Terbaik)", "Ciri Opsi Poin 3-4 (Jebakan)"],
          rows: [
            ["Warga marah / komplain di loket pelayanan", "Menenangkan dengan ramah, mendengarkan keluhan, lalu memberikan solusi langsung sesuai prosedur/SOP", "Hanya meminta maaf tanpa memberi solusi konkret, atau langsung melempar ke atasan padahal bisa ditangani sendiri"],
            ["Pasien gawat darurat / Lansia kesulitan antre", "Memberikan prioritas darurat sesuai SOP triase / membantu mengarahkan ke jalur prioritas tanpa mengabaikan hak antrean", "Melanggar SOP secara sepihak hingga merugikan seluruh antrean lain"],
            ["Rekan kerja kesulitan menggunakan aplikasi baru", "Menyelesaikan tugas utama lalu membimbing rekan kerja / membuat panduan singkat bersama", "Mengerjakan seluruh tugas rekan tersebut sehingga rekan tidak belajar (tidak memberdayakan)"]
          ]
        },
        alertBox: {
          type: "warning",
          title: "Aturan Emas Poin 5 TKP: Jangan Menjadi 'Pahlawan Kesiangan' yang Melanggar SOP!",
          text: "Opsi yang terlihat 'sangat baik hati' tetapi melanggar SOP instansi atau mengambil alih wewenang atasan tanpa izin biasanya hanya bernilai 2 atau 3! Pilih opsi yang ramah + solutif + sesuai kewenangan & SOP."
        }
      }
    ],
    quickTricks: [
      {
        title: "Rumus 3 Langkah Pelayanan Publik: '3S' (Sapa/Tenangkan -> Sesuaikan SOP -> Solusi Tuntas)",
        mnemonic: "EMPATI + SESUAI WEWENANG/SOP + SOLUSI KONKRET = POIN 5",
        normalWay: "Memilih jawaban yang paling panjang atau yang paling meminta maaf berulang-ulang.",
        fastWay: "Buang opsi yang pasif (diam/mengabaikan/melempar tanggung jawab). Dari 2 opsi terbaik yang tersisa, pilih opsi yang mengandung: (1) Respon empati/tenang, DAN (2) Tindakan solusi nyata sesuai prosedur/wewenang Anda."
      }
    ],
    workedExamples: [
      {
        question: "Anda adalah petugas pelayanan terpadu di kantor pemerintahan. Saat jam istirahat hampir tiba dan antrean masih cukup panjang, datang seorang lansia yang tampak kebingungan karena dokumen persyaratannya kurang satu lembar fotokopi. Sikap Anda yang paling tepat adalah...",
        options: [
          "A. Meminta lansia tersebut pulang dan kembali lagi besok pagi dengan dokumen lengkap.",
          "B. Meloloskan berkas lansia tersebut meskipun syaratnya kurang karena merasa kasihan.",
          "C. Menjelaskan dengan ramah kekurangan berkasnya dan mengarahkan ke fasilitas fotokopi/layanan bantuan lansia di kantor agar berkasnya tetap bisa diproses hari itu.",
          "D. Meminta satpam untuk mengurus semua keperluan lansia tersebut karena Anda sudah memasuki jam istirahat.",
          "E. Menegur keluarga yang tidak mendampingi lansia tersebut saat mengurus dokumen."
        ],
        answer: "C (Poin 5)",
        normalExplanation: "Opsi C menunjukkan keramahan (Pelayanan Publik), memberikan solusi konkret, membantu kelompok rentan (lansia), namun tetap menjaga ketertiban administrasi/SOP (dokumen tetap dilengkapi).",
        fastTrickExplanation: "Opsi B adalah jebakan 'baik hati tapi melanggar SOP' (Poin 2). Opsi A, D, E tidak solutif. Opsi C memenuhi rumus: Ramah + Patuh SOP + Solusi Tuntas = Poin 5!"
      }
    ],
    quiz: [
      {
        id: "tkp-q1",
        type: "TKP",
        question: "Instansi tempat Anda bekerja baru saja menerapkan sistem pelaporan kinerja berbasis aplikasi digital baru. Beberapa pegawai senior mengeluh kesulitan dan mengajak Anda untuk tetap menggunakan cara manual saja. Sikap Anda adalah...",
        options: [
          { label: "A", text: "Mempelajari aplikasi tersebut secara mandiri dan menggunakannya sendiri tanpa mempedulikan pegawai senior.", score: 3 },
          { label: "B", text: "Mengikuti ajakan pegawai senior sementara waktu demi menjaga kekompakan di kantor.", score: 1 },
          { label: "C", text: "Mempelajari penggunaan aplikasi baru tersebut hingga mahir, lalu berinisiatif membantu dan membimbing rekan-rekan senior agar dapat menggunakannya bersama.", score: 5 },
          { label: "D", text: "Melaporkan pegawai senior yang menolak sistem baru tersebut kepada kepala instansi.", score: 2 },
          { label: "E", text: "Meminta bagian IT untuk kembali ke sistem manual sampai seluruh pegawai siap.", score: 4 }
        ],
        explanation: "Skor Poin: C (5), E (4), A (3), D (2), B (1). Soal ini menguji aspek TIK & Jejaring Kerja. Opsi C mendapatkan poin 5 karena Anda adaptif terhadap teknologi baru sekaligus proaktif membimbing rekan kerja."
      },
      {
        id: "tkp-q2",
        type: "TKP",
        question: "Saat Anda sedang melayani antrean masyarakat di loket, tiba-tiba seorang warga memotong antrean dan marah-marah menuntut berkasnya diselesaikan saat itu juga karena mengaku buru-buru. Sikap Anda adalah...",
        options: [
          { label: "A", text: "Langsung mendahulukan berkas warga tersebut agar tidak membuat keributan di ruang pelayanan.", score: 2 },
          { label: "B", text: "Menenangkan warga tersebut dengan sopan, menjelaskan aturan antrean yang berlaku, serta mengarahkannya mengambil nomor antrean sesuai prosedur.", score: 5 },
          { label: "C", text: "Meminta petugas keamanan untuk langsung mengeluarkan warga tersebut dari ruangan.", score: 3 },
          { label: "D", text: "Tetap tenang dan meminta warga tersebut menunggu sampai antrean yang sedang dilayani selesai, lalu menjelaskan prosedur layanan.", score: 4 },
          { label: "E", text: "Mengabaikan warga tersebut dan terus melayani antrean sesuai urutan.", score: 1 }
        ],
        explanation: "Skor Poin: B (5), D (4), C (3), A (2), E (1). Dalam Pelayanan Publik, menghadapi warga yang marah harus dilakukan dengan kepala dingin (sopan/menenangkan), namun tetap tegas menjaga keadilan antrean sesuai SOP."
      }
    ]
  }
];

