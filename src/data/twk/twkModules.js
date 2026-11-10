import { sangTutorTwkModules } from './sangTutorTwk.js';

// ============================================================================
// MODUL BELAJAR TWK (TES WAWASAN KEBANGSAAN)
// Disusun secara rinci dari Seri Video Pembelajaran TWK (Dhedi R Ghazali & Sang Tutor)
// ============================================================================

export const twkSubCategories = [
  "Semua Sub-Topik",
  "Tips & Strategi Master TWK",
  "Pilar Negara (Pancasila & UUD 1945)",
  "Nasionalisme",
  "Integritas",
  "Bela Negara",
  "Bahasa Indonesia"
];

export const twkModules = [
  // ==========================================================================
  // VIDEO TIPS: STRATEGI & TIPS MENAKLUKKAN TWK SKD CPNS
  // Link: https://www.youtube.com/watch?v=iaZ2cwwz7ZI
  // ==========================================================================
  {
    id: "twk-tips-strategi-master",
    category: "TWK",
    subCategory: "Tips & Strategi Master TWK",
    title: "TIPS & STRATEGI MASTER TWK: Cara Menaklukkan Soal Penalaran HOTS BKN",
    subtitle: "Peta jalan menguasai 30 soal TWK (90% Penalaran Studi Kasus vs 10% Hafalan Strategis) ala Coach Dhedi R Ghazali",
    youtubeUrl: "https://www.youtube.com/watch?v=iaZ2cwwz7ZI",
    youtubeId: "iaZ2cwwz7ZI",
    duration: "22 Menit",
    difficulty: "Wajib Tonton Pertama",
    bknKeywords: [
      "Proporsi TWK BKN Modern: 90% Penalaran & Analisa Kasus (HOTS), hanya 10% Hafalan Murni",
      "5 Pilar Kisi-Kisi Resmi PermenPAN-RB: Nasionalisme, Integritas, Bela Negara, Pilar Negara, Bahasa Indonesia",
      "Teknik Baca Cepat: Baca kalimat tanya di akhir soal dulu, baru cari kata kunci di narasi cerita",
      "Pola Opsi Jawaban Mirip: Eliminasi opsi yang ekstrem, melanggar hukum/SOP, atau tidak menyelesaikan akar masalah",
      "Pelajaran Bahasa Indonesia TWK: Pasti keluar Ide Pokok, Kalimat Efektif, EYD V, dan Penulisan Gelar/Kata Baku",
      "Kunci Lulus PG (65+) hingga Skor 100+: Kuasai konsep esensi tiap sila & pasal, bukan sekadar menghafal nomor pasal"
    ],
    timestamps: [
      { time: "00:00", seconds: 0, label: "Mengapa Banyak Peserta Gagal Passing Grade TWK?" },
      { time: "03:45", seconds: 225, label: "Perubahan Karakteristik Soal TWK: Hafalan Lama vs Penalaran HOTS Baru" },
      { time: "08:20", seconds: 500, label: "Bedah 5 Kisi-Kisi Utama TWK & Porsi Soalnya" },
      { time: "13:10", seconds: 790, label: "Trik Menghadapi Soal Panjang (Wacana) vs Opsi Jawaban Panjang" },
      { time: "17:30", seconds: 1050, label: "Strategi Manajemen Waktu & Latihan Berbasis FR (Field Report)" }
    ],
    theorySections: [
      {
        heading: "1. Transformasi Soal TWK BKN: Mengapa Hafalan Saja Tidak Cukup?",
        content: `Banyak peserta CPNS terjebak belajar TWK dengan cara lama: menghafal ratusan tanggal sejarah, nama kabinet, atau bunyi seluruh pasal dari awal sampai akhir. Padahal dalam skema **SKD CAT BKN terbaru**, komposisi soal TWK telah berubah menjadi **90% Penalaran (HOTS / Higher Order Thinking Skills)** dan hanya sekitar **10% hafalan terapan**. Artinya, pembuat soal menyajikan **fenomena sosial, kasus birokrasi, atau potongan berita**, lalu meminta Anda menilai tindakan mana yang sesuai dengan nilai Pancasila, UUD 1945, Integritas, atau Bela Negara.`,
        points: [
          "Karakteristik Soal Tipe 1 (Soal Panjang - Opsi Pendek): Narasi soal berupa cerita 4–6 kalimat, sedangkan opsinya pendek (misal: Sila ke-1 s.d. Sila ke-5, atau Nasionalisme vs Patriotisme). Solusinya: Baca kalimat terakhir dulu!",
          "Karakteristik Soal Tipe 2 (Soal Pendek - Opsi Panjang): Pertanyaannya hanya 1 kalimat (misal: 'Wujud bela negara seorang ASN di era disrupsi digital adalah...'), tetapi opsi A–E berupa kalimat panjang yang semuanya terdengar positif.",
          "Fokus Hafalan yang Masih Relevan: Kaidah Bahasa Indonesia (EYD Edisi V, kalimat efektif, ide pokok), kedudukan lembaga negara di UUD 1945 setelah amandemen, serta makna simbolik sejarah pergerakan nasional (Budi Utomo, Sumpah Pemuda, BPUPKI-PPKI)."
        ],
        table: {
          headers: ["Sub-Kisi TWK (30 Soal)", "Estimasi Jumlah Soal", "Fokus Utama yang Diujikan BKN"],
          rows: [
            ["1. Pilar Negara (Pancasila, UUD 1945, NKRI, Bhinneka)", "8 - 10 Soal", "Pengamalan Sila 1-5 dalam kasus nyata, hak & kewajiban warga negara (Pasal 27-34), sistem pemerintahan & lembaga negara, keberagaman SARA."],
            ["2. Nasionalisme", "4 - 6 Soal", "Cinta tanah air, menempatkan kepentingan publik di atas golongan, kebanggaan identitas nasional di kancah global."],
            ["3. Integritas", "4 - 6 Soal", "Jujur, antikorupsi, konsistensi kata & perbuatan, menolak gratifikasi, berani melaporkan pelanggaran (whistleblowing)."],
            ["4. Bela Negara", "4 - 6 Soal", "5 Nilai Dasar Bela Negara, pengabdian sesuai profesi, kesiapsiagaan menghadapi ancaman militer & nir-militer (hoaks, radikalisme, narkoba)."],
            ["5. Bahasa Indonesia", "5 - 7 Soal", "Gagasan utama/ide pokok paragraf, simpulan bacaan, kalimat efektif, kata baku (KBBI), penggunaan tanda baca & huruf kapital."]
          ]
        },
        alertBox: {
          type: "warning",
          title: "Kesalahan Fatal Saat Mengerjakan TWK!",
          text: "Jangan menghabiskan waktu lebih dari 1,5 menit untuk membaca ulang wacana dari kalimat pertama! Gunakan teknik Skimming & Scanning: langsung baca kalimat tanya di bagian paling bawah, garis bawahi Subjek + Masalah Utama di kalimat ke-2 atau terakhir, lalu cocokkan dengan kata kunci opsi."
        }
      },
      {
        heading: "2. Metode 3 Langkah Bedah Soal TWK HOTS Ala Coach Dhedi",
        content: "Ketika berhadapan dengan 5 pilihan jawaban (A, B, C, D, E) yang semuanya terlihat benar dan bijaksana, gunakan saringan 3 lapis berikut:",
        points: [
          "Lapis 1 — Cek Kesesuaian Konteks Soal (Relevansi): Banyak opsi yang kalimatnya sangat bagus secara moral, tetapi TIDAK nyambung dengan masalah yang diceritakan di soal. Coret opsi yang keluar dari konteks cerita!",
          "Lapis 2 — Cek Kata Kunci Kisi-Kisi (Spesifisitas): Jika soal menanyakan 'Integritas', cari opsi yang berbicara tentang kejujuran, transparansi, atau kepatuhan aturan—bukan opsi tentang kasihan/empati (karena empati adalah kata kunci Kemanusiaan/Sila 2).",
          "Lapis 3 — Posisikan Diri Sebagai ASN / Warga Negara Taat Hukum: Jangan pernah memilih opsi yang main hakim sendiri, melanggar prosedur resmi, bersifat reaktif-emosional, atau memaksakan kehendak."
        ]
      }
    ],
    quickTricks: [
      {
        title: "Trik Baca Mundur 15 Detik (Bottom-Up Reading)",
        mnemonic: "BACA PERTANYAAN DULU -> CARI KONFLIK DI KALIMAT AKHIR -> COCOKKAN KATA KUNCI OPSI",
        normalWay: "Membaca paragraf wacana yang panjang dari awal sampai akhir, baru membaca pertanyaan, lalu lupa isi awal cerita sehingga harus membaca ulang dari atas.",
        fastWay: "Langsung lihat kalimat paling akhir (pertanyaannya apa: apakah tanya Sila ke berapa, nilai Integritas apa, atau Ide Pokok?). Setelah tahu apa yang dicari, mata Anda langsung menangkap kata kunci di 1-2 kalimat terakhir soal!"
      },
      {
        title: "Rumus Eliminasi Opsi Pengecoh ('Opsi Malaikat Palsu')",
        mnemonic: "BAIK TAPI MELANGGAR HUKUM/SOP = SALAH | BAIK TAPI BEDA TOPIK = SALAH",
        normalWay: "Bingung memilih antara dua opsi yang sama-sama terdengar sopan dan patriotik.",
        fastWay: "Bandingkan 2 opsi tersisa: Pilih opsi yang dampaknya SISTEMIS, KONSTRUKTIF, dan SESUAI KORIDOR HUKUM/KONSTITUSI, bukan tindakan impulsif perorangan."
      }
    ],
    workedExamples: [
      {
        question: "Maraknya penyebaran berita bohong (hoaks) menjelang pemilihan umum di media sosial berpotensi memecah belah persatuan masyarakat. Sebagai warga negara yang memiliki kesadaran bela negara di era digital, langkah paling tepat yang harus dilakukan adalah...",
        options: [
          "A. Menutup seluruh akun media sosial agar terhindar dari paparan berita bohong.",
          "B. Membalas setiap unggahan hoaks dengan komentar keras agar penyebarnya jera.",
          "C. Melakukan verifikasi kebenaran informasi (saring sebelum sharing) serta turut mengedukasi literasi digital di lingkungan sekitar.",
          "D. Meminta pemerintah memblokir seluruh akses internet selama masa pemilihan umum.",
          "E. Mengumpulkan massa untuk mendatangi rumah pembuat berita bohong tersebut."
        ],
        answer: "C. Melakukan verifikasi kebenaran informasi (saring sebelum sharing) serta turut mengedukasi literasi digital di lingkungan sekitar.",
        normalExplanation: "Opsi A dan D bersifat pasif/ekstrem (anti-teknologi). Opsi B dan E bersifat reaktif dan main hakim sendiri. Opsi C adalah wujud nyata bela negara nir-militer di ruang siber yang konstruktif.",
        fastTrickExplanation: "Gunakan saringan Lapis 3: Coret yang pasif/kabur (A), emosional (B), berlebihan (D), dan main hakim sendiri (E). Tersisa C yang solutif dan edukatif!"
      }
    ],
    quiz: [
      {
        id: "twk-tips-q1",
        type: "TWK",
        question: "Saat mengerjakan soal TWK yang memiliki wacana sepanjang satu paragraf penuh, langkah pertama yang paling efisien untuk menghemat waktu ujian CAT adalah...",
        options: [
          { label: "A", text: "Mencatat seluruh isi paragraf ke kertas buram terlebih dahulu", score: 0 },
          { label: "B", text: "Membaca kalimat pertanyaan di akhir soal terlebih dahulu untuk mengetahui fokus masalah yang ditanyakan", score: 5 },
          { label: "C", text: "Langsung memilih jawaban yang paling panjang tanpa membaca soal", score: 0 },
          { label: "D", text: "Membaca berulang-ulang dari kalimat pertama sampai hafal", score: 0 },
          { label: "E", text: "Melewati semua soal TWK dan tidak mengerjakannya sama sekali", score: 0 }
        ],
        explanation: "Teknik Bottom-Up Reading (membaca kalimat pertanyaan terlebih dahulu) membuat otak langsung fokus mencari kata kunci spesifik di dalam wacana tanpa membuang waktu membaca informasi pengecoh."
      },
      {
        id: "twk-tips-q2",
        type: "TWK",
        question: "Seorang kepala dinas menolak bingkisan parsel hari raya dari kontraktor rekanan proyek meskipun parsel tersebut dikirim ke rumah pribadinya tanpa sepengetahuan staf kantor. Nilai utama yang sedang diuji pada narasi soal tersebut adalah...",
        options: [
          { label: "A", text: "Nasionalisme budaya lokal", score: 0 },
          { label: "B", text: "Integritas (Jujur, Antikorupsi/Antigratifikasi, dan Konsisten)", score: 5 },
          { label: "C", text: "Kemampuan berbahasa Indonesia", score: 0 },
          { label: "D", text: "Bela negara militer", score: 0 },
          { label: "E", text: "Kemanusiaan universal", score: 0 }
        ],
        explanation: "Menolak gratifikasi/suap meskipun tidak ada orang lain yang melihat (konsistensi antara nilai moral dan tindakan nyata) adalah inti dari kisi-kisi Integritas."
      }
    ]
  },

  // ==========================================================================
  // VIDEO 1 (FOKUS TWK #48): PANCASILA SILA KE-1
  // Link: https://www.youtube.com/watch?v=Fj7z66_qPh4
  // ==========================================================================
  {
    id: "twk-fokus-48-sila-1",
    category: "TWK",
    subCategory: "Pilar Negara (Pancasila & UUD 1945)",
    title: "FOKUS TWK #48 — Materi & Bedah Soal Pancasila SILA KE-1 (Ketuhanan YME)",
    subtitle: "Kupas tuntas 7 Butir Sila 1, Tri Kerukunan Umat Beragama, Kaitan Pasal 28E & 29 UUD 1945, serta Bentuk Penyimpangan Sila 1",
    youtubeUrl: "https://www.youtube.com/watch?v=Fj7z66_qPh4",
    youtubeId: "Fj7z66_qPh4",
    duration: "28 Menit",
    difficulty: "Fokus TWK #48 • Wajib Kuasai",
    bknKeywords: [
      "Lambang Sila 1: Bintang Emas Bersudut Lima dengan perisai latar hitam (cahaya Tuhan di tengah kegelapan)",
      "Nilai Dasar Sila 1: Hubungan vertikal manusia dengan Tuhan (Taat ibadah) & hubungan horizontal antarumat beragama (Toleransi)",
      "Pasal Kembar Agama di UUD 1945: Pasal 28E ayat (1)-(2) (HAM individu memeluk agama) vs Pasal 29 ayat (1)-(2) (Jaminan Negara)",
      "Tri Kerukunan Umat Beragama: Intern umat seagama, Antarumat berbeda agama, dan Antara umat beragama dengan Pemerintah",
      "Batas Toleransi Sila 1: Menghormati dan bekerja sama dalam urusan sosial kemasyarakatan, BUKAN mencampuradukkan ritual ibadah (sinkretisme ritual)",
      "Penyimpangan Sila 1: Ateisme, Pemaksaan Agama, Intoleransi/Pengrusakan Rumah Ibadah, Penistaan Agama, Radikalisme/Terorisme Berkedok Agama"
    ],
    timestamps: [
      { time: "00:00", seconds: 0, label: "Kedudukan Sila 1 dalam Hierarkis Piramidal Pancasila" },
      { time: "04:30", seconds: 270, label: "Bedah Lengkap 7 Butir Pengamalan Sila ke-1 (TAP MPR / BPIP)" },
      { time: "10:15", seconds: 615, label: "Nilai Dasar, Nilai Instrumental (Pasal 28E & 29), dan Nilai Praksis Sila 1" },
      { time: "15:40", seconds: 940, label: "Bentuk Penyimpangan & Pelanggaran Sila 1 dalam Soal Cerita HOTS" },
      { time: "20:00", seconds: 1200, label: "Latihan & Pembahasan Soal HOTS Sila ke-1" }
    ],
    theorySections: [
      {
        heading: "1. Kedudukan Sila ke-1 & Sifat Hierarkis Piramidal Pancasila",
        content: `Dalam struktur filsafat Pancasila yang bersifat **Organis** (satu kesatuan utuh) dan **Hierarkis Piramidal** (berjenjang), **Sila ke-1 (Ketuhanan Yang Maha Esa)** menempati posisi puncak fondasi spiritual: **Sila ke-1 menjiwai dan meliputi Sila ke-2, ke-3, ke-4, dan ke-5**. Artinya, kemanusiaan, persatuan, kerakyatan/demokrasi, dan keadilan sosial di Indonesia bukanlah sekuler tanpa nilai moral, melainkan berlandaskan nilai-nilai ketuhanan dan moral agama.`,
        points: [
          "Makna Lambang Bintang Emas Perisai Hitam: Bintang emas melambangkan cahaya kerohanian yang dipancarkan Tuhan kepada setiap manusia, sedangkan latar hitam melambangkan warna alam/semesta bahwa berkat rahmat Tuhan manusia tidak tersesat dalam kegelapan.",
          "Indonesia Bukan Negara Agama & Bukan Negara Sekuler: Indonesia adalah **Negara Berketuhanan (Religious Nation-State)**. Negara tidak mendasarkan hukum pada satu agama tertentu saja, namun juga tidak memisahkan nilai agama dari kehidupan bernegara.",
          "Dimensi Vertikal (Habblumminallah): Percaya dan takwa kepada Tuhan YME sesuai agama dan kepercayaan masing-masing.",
          "Dimensi Horizontal (Toleransi Beragama): Hormat-menghormati, bekerja sama antarumat beragama, menjaga kerukunan, dan tidak memaksakan agama kepada orang lain."
        ]
      },
      {
        heading: "2. Tujuh (7) Butir Resmi Pengamalan Sila ke-1 & Contoh Kasus Nyata",
        content: "Pembuat soal SKD BKN merancang soal cerita Sila ke-1 langsung dari ke-7 butir resmi berikut. Pastikan Anda memahami terjemahan kasusnya:",
        table: {
          headers: ["No", "Bunyi Butir Resmi Sila ke-1", "Contoh Wujud Nyata di Soal Cerita TWK"],
          rows: [
            ["1", "Bangsa Indonesia menyatakan kepercayaannya dan ketakwaannya terhadap Tuhan YME.", "Berdoa sebelum bekerja, meyakini Tuhan mengawasi pekerjaan sehingga tidak berani korupsi meskipun tidak ada CCTV."],
            ["2", "Manusia Indonesia percaya dan takwa terhadap Tuhan YME, sesuai dengan agama dan kepercayaannya masing-masing menurut dasar kemanusiaan yang adil dan beradab.", "Menjalankan ibadah tepat waktu tanpa merugikan atau menyakiti sesama manusia; beragama secara santun dan beradab."],
            ["3", "Mengembangkan sikap hormat menghormati dan bekerja sama antara pemeluk agama dengan penganut kepercayaan yang berbeda-beda terhadap Tuhan YME.", "Umat agama A membantu menjaga keamanan/kelancaran parkir saat umat agama B merayakan hari besar keagamaannya."],
            ["4", "Membina kerukunan hidup di antara sesama umat beragama dan kepercayaan terhadap Tuhan YME.", "Aktif dalam Forum Kerukunan Umat Beragama (FKUB), dialog lintas iman untuk mencegah kesalahpahaman."],
            ["5", "Agama dan kepercayaan terhadap Tuhan YME adalah masalah yang menyangkut hubungan pribadi manusia dengan Tuhan YME.", "Menghormati privasi ibadah rekan kerja, tidak mencampuri urusan keyakinan personal orang lain."],
            ["6", "Mengembangkan sikap saling menghormati kebebasan menjalankan ibadah sesuai dengan agama dan kepercayaannya masing-masing.", "Memberikan waktu istirahat/izin bagi anggota tim yang sedang menjalankan ibadah wajib saat rapat berlangsung."],
            ["7", "Tidak memaksakan suatu agama dan kepercayaan terhadap Tuhan YME kepada orang lain.", "Tidak mengiming-imingi jabatan atau bantuan sosial dengan syarat seseorang harus pindah agama/keyakinan."]
          ]
        }
      },
      {
        heading: "3. Tiga Dimensi Nilai Sila 1 & Perbedaan Pasal 28E vs Pasal 29 UUD 1945",
        content: "Dalam soal TWK tingkat lanjut, sering ditanyakan penjabaran Sila 1 ke dalam **Nilai Dasar**, **Nilai Instrumental**, dan **Nilai Praksis**:",
        points: [
          "1. Nilai Dasar (Tetap/Tidak Berubah): Nilai Ketuhanan itu sendiri sebagaimana termaktub dalam Pembukaan UUD 1945 Alinea ke-3 ('Atas berkat rakhmat Allah Yang Maha Kuasa...') dan Alinea ke-4.",
          "2. Nilai Instrumental (Penjabaran dalam Peraturan/Pasal): Pasal 28E ayat (1) & (2) UUD 1945, Pasal 29 ayat (1) & (2) UUD 1945, UU PNPS No. 1 Tahun 1965 tentang Pencegahan Penyalahgunaan dan/atau Penodaan Agama.",
          "3. Nilai Praksis (Implementasi Sehari-hari): Tindakan nyata masyarakat, seperti tidak membuat kegaduhan saat tetangga sedang beribadah.",
          "Beda Pasal 28E vs Pasal 29 di Soal TWK: Jika soal menekankan **'Hak asasi setiap orang/individu untuk bebas memeluk agama'** -> pilih **Pasal 28E ayat (1)**. Jika soal menekankan **'Kewajiban/Jaminan Negara terhadap kemerdekaan tiap penduduk untuk beribadah'** -> pilih **Pasal 29 ayat (2)**!"
        ],
        alertBox: {
          type: "warning",
          title: "Jebakan Soal HOTS: Toleransi Sila 1 vs Sila 2 vs Sila 3!",
          text: "1) Jika toleransinya spesifik menyangkut IBADAH, AGAMA, HARI RAYA, RUMAH IBADAH, atau KEYAKINAN -> Mutlak Sila ke-1!\n2) Jika toleransinya menyangkut SUKU, ADAT, BAHASA DAERAH demi keutuhan bangsa -> Pilih Sila ke-3!\n3) Jika menghargai martabat seseorang tanpa memandang status ekonomi/fisik -> Pilih Sila ke-2!"
        }
      }
    ],
    quickTricks: [
      {
        title: "Jembatan Keledai 7 Butir Sila 1: 'TA-KER-RU-PRI-BE-PAK'",
        mnemonic: "TAkwa (1-2) | KERja sama lintas iman (3) | RUkun hidup beragama (4) | PRI-badi dengan Tuhan (5) | BEbas ibadah (6) | Jangan PAKsa agama (7)",
        normalWay: "Menghafal kalimat panjang ke-7 butir Sila 1 dari kata pertama sampai terakhir.",
        fastWay: "Cukup ingat 6 kata kunci 'TA-KER-RU-PRI-BE-PAK'. Begitu di soal cerita ada kata kunci: 'ketakwaan', 'kerukunan antaragama', 'kebebasan beribadah', atau 'tidak memaksakan keyakinan', langsung kunci Sila ke-1!"
      },
      {
        title: "Trik Membedakan Pasal 28E vs Pasal 29 dalam 5 Detik",
        mnemonic: "Subjek 'SETIAP ORANG BEBAS...' = Pasal 28E | Subjek 'NEGARA MENJAMIN...' = Pasal 29",
        normalWay: "Bingung karena kedua pasal sama-sama membahas agama dan ibadah.",
        fastWay: "Lihat SUBJEK di awal kalimat soal! Kalau fokusnya HAK INDIVIDU memilih agama/kepercayaan = Pasal 28E. Kalau fokusnya PERAN NEGARA menjamin kemerdekaan penduduk beribadah = Pasal 29 ayat (2)."
      }
    ],
    workedExamples: [
      {
        question: "Dalam sebuah rapat proyek di kantor pemerintahan yang berlangsung sejak pagi, waktu menunjukkan pukul 12.00 siang dan bertepatan dengan waktu ibadah salat Jumat bagi pegawai muslim. Pimpinan rapat yang beragama non-muslim segera menskors rapat selama 90 menit agar pegawai muslim dapat menjalankan ibadah salat Jumat dengan tenang. Tindakan pimpinan rapat tersebut merupakan wujud pengamalan Pancasila khususnya...",
        options: [
          "A. Sila ke-1 karena menghormati kebebasan menjalankan ibadah sesuai agama masing-masing",
          "B. Sila ke-2 karena memanusiakan bawahan agar dapat beristirahat makan siang",
          "C. Sila ke-3 karena mencegah potensi demonstrasi pegawai di kantor",
          "D. Sila ke-4 karena keputusan menskors rapat diambil melalui musyawarah pimpinan",
          "E. Sila ke-5 karena memberikan hak istirahat yang adil kepada seluruh pegawai"
        ],
        answer: "A. Sila ke-1 karena menghormati kebebasan menjalankan ibadah sesuai agama masing-masing",
        normalExplanation: "Meskipun terjadi di dalam rapat (yang sering mengecoh ke Sila 4), alasan utama pimpinan menskors rapat adalah memberikan kesempatan pegawai menjalankan ibadah salat Jumat. Ini sesuai dengan butir ke-6 Sila ke-1.",
        fastTrickExplanation: "Jangan terkecoh kata 'rapat'! Lihat OBJEK dan TUJUAN tindakannya: 'agar dapat menjalankan ibadah salat Jumat dengan tenang' -> Urusan kebebasan beribadah = Mutlak Sila ke-1 (Opsi A)."
      },
      {
        question: "Aksi terorisme dan radikalisme yang mengatasnamakan agama dengan melakukan pengeboman di tempat ibadah merupakan pelanggaran berat terhadap nilai Pancasila, terutama Sila Pertama, karena...",
        options: [
          "A. Menurunkan pendapatan negara dari sektor pariwisata",
          "B. Merusak fasilitas jalan raya yang dibangun dari pajak rakyat",
          "C. Bertentangan dengan hakikat ketuhanan yang mengajarkan kasih sayang, kerukunan, serta melanggar hak kebebasan beribadah menurut dasar kemanusiaan yang adil dan beradab",
          "D. Menghambat jalannya musyawarah pemilihan kepala daerah",
          "E. Mengurangi minat investor asing untuk menanamkan modal di dalam negeri"
        ],
        answer: "C. Bertentangan dengan hakikat ketuhanan yang mengajarkan kasih sayang, kerukunan, serta melanggar hak kebebasan beribadah menurut dasar kemanusiaan yang adil dan beradab",
        normalExplanation: "Butir ke-2 Sila Pertama menegaskan bahwa ketakwaan terhadap Tuhan YME harus dijalankan 'menurut dasar kemanusiaan yang adil dan beradab' serta butir ke-4 & ke-6 menuntut kerukunan dan penghormatan kebebasan beribadah.",
        fastTrickExplanation: "Pertanyaan menanyakan alasan pelanggaran SILA PERTAMA. Opsi A dan E (ekonomi), Opsi B (fasilitas umum/Sila 5), Opsi D (demokrasi/Sila 4). Hanya Opsi C yang memuat esensi Sila 1 (ketuhanan, kerukunan, kebebasan ibadah)!"
      },
      {
        question: "Pemerintah daerah memfasilitasi pembentukan Forum Kerukunan Umat Beragama (FKUB) dan menjamin keamanan setiap rumah ibadah yang telah memenuhi persyaratan administratif tanpa pandang bulu. Kebijakan pemerintah daerah ini merupakan nilai praksis yang menjabarkan nilai instrumental UUD 1945, yaitu...",
        options: [
          "A. Pasal 27 ayat (1)",
          "B. Pasal 28D ayat (1)",
          "C. Pasal 29 ayat (2)",
          "D. Pasal 30 ayat (1)",
          "E. Pasal 31 ayat (1)"
        ],
        answer: "C. Pasal 29 ayat (2)",
        normalExplanation: "Pasal 29 ayat (2) UUD 1945 berbunyi: 'Negara menjamin kemerdekaan tiap-tiap penduduk untuk memeluk agamanya masing-masing dan untuk beribadat menurut agamanya dan kepercayaannya itu.'",
        fastTrickExplanation: "Ingat rumus cepat kita: Subjeknya adalah 'Pemerintah/Negara menjamin keamanan beribadah penduduk' -> Pasti Pasal 29 ayat (2)!"
      }
    ],
    quiz: [
      {
        id: "twk-f48-q1",
        type: "TWK",
        question: "Di Desa Harmoni, warga yang beragama Hindu sedang melaksanakan ibadah Hari Raya Nyepi. Warga desa yang beragama Islam, Kristen, dan Buddha secara sukarela menjaga ketenangan lingkungan desa dan tidak menyalakan pengeras suara luar agar pelaksanaan ibadah Nyepi berjalan khusyuk. Perilaku warga Desa Harmoni merupakan pengamalan nilai praksis Pancasila, khususnya...",
        options: [
          { label: "A", text: "Sila ke-1, karena mengembangkan sikap saling menghormati kebebasan menjalankan ibadah dan membina kerukunan antarumat beragama", score: 5 },
          { label: "B", text: "Sila ke-2, karena memberikan bantuan kemanusiaan kepada korban bencana", score: 0 },
          { label: "C", text: "Sila ke-3, karena mengutamakan produk lokal desa di atas produk impor", score: 0 },
          { label: "D", text: "Sila ke-4, karena melaksanakan pemilihan kepala desa secara demokratis", score: 0 },
          { label: "E", text: "Sila ke-5, karena membagi hasil panen desa secara merata", score: 0 }
        ],
        explanation: "Menjaga ketenangan dan menghormati pelaksanaan ibadah umat agama lain (Hari Raya Nyepi) merupakan implementasi langsung butir ke-3, ke-4, dan ke-6 Sila Pertama Pancasila."
      },
      {
        id: "twk-f48-q2",
        type: "TWK",
        question: "Seorang bendahara proyek pemerintah menolak ajakan rekannya untuk memanipulasi nota pembelian barang meskipun rekannya meyakinkan bahwa pemeriksaan audit tidak akan bisa mendeteksinya. Bendahara tersebut menolak karena meyakini bahwa Tuhan Yang Maha Esa selalu melihat setiap perbuatan manusia. Sikap bendahara ini menunjukkan bahwa...",
        options: [
          { label: "A", text: "Sila ke-1 menjiwai perilaku integritas melalui ketakwaan kepada Tuhan YME dalam kehidupan sehari-hari", score: 5 },
          { label: "B", text: "Sila ke-1 hanya berlaku di dalam tempat ibadah saja", score: 0 },
          { label: "C", text: "Bendahara tersebut takut kehilangan jabatan semata", score: 0 },
          { label: "D", text: "Sila ke-4 melarang adanya diskusi antar rekan kerja", score: 0 },
          { label: "E", text: "Aturan audit negara tidak perlu dipatuhi jika sudah berdoa", score: 0 }
        ],
        explanation: "Dalam konsep Hierarkis Piramidal, Sila ke-1 (kepercayaan dan ketakwaan kepada Tuhan YME) menjadi landasan moral rohani yang menjiwai seluruh tindakan manusia Indonesia, termasuk kejujuran saat tidak diawasi manusia."
      },
      {
        id: "twk-f48-q3",
        type: "TWK",
        question: "Perhatikan pernyataan berikut:\n(1) Membantu tetangga lintas agama memperbaiki atap rumahnya yang bocor.\n(2) Mengikuti ritual doa peribadatan agama lain dengan mencampuradukkan tata cara ibadah semua agama.\n(3) Tidak memaksakan keyakinan agama kepada anak buah di kantor.\n(4) Menolak pendirian rumah ibadah agama lain yang telah memenuhi seluruh syarat hukum karena alasan mayoritas.\nSikap yang SESUAI dengan pengamalan Sila Pertama Pancasila ditunjukkan oleh nomor...",
        options: [
          { label: "A", text: "(1) dan (2)", score: 0 },
          { label: "B", text: "(1) dan (3)", score: 5 },
          { label: "C", text: "(2) dan (3)", score: 0 },
          { label: "D", text: "(2) dan (4)", score: 0 },
          { label: "E", text: "(3) dan (4)", score: 0 }
        ],
        explanation: "Pernyataan (1) adalah kerja sama sosial antarumat beragama (butir 3) dan pernyataan (3) adalah tidak memaksakan agama (butir 7). Pernyataan (2) keliru karena toleransi Sila 1 bukan mencampuradukkan ritual ibadah (sinkretisme), sedangkan (4) adalah tindakan intoleransi yang melanggar Sila 1."
      },
      {
        id: "twk-f48-q4",
        type: "TWK",
        question: "Pancasila memiliki sifat hierarkis piramidal. Makna yang paling tepat dari pernyataan bahwa 'Sila Pertama menjiwai dan meliputi Sila Kedua, Ketiga, Keempat, dan Kelima' adalah...",
        options: [
          { label: "A", text: "Hanya Sila Pertama yang wajib diamalkan oleh warga negara, sedangkan sila lainnya bersifat opsional", score: 0 },
          { label: "B", text: "Seluruh penyelenggaraan kemanusiaan, persatuan bangsa, demokrasi permusyawaratan, dan keadilan sosial di Indonesia harus berlandaskan nilai moral Ketuhanan", score: 5 },
          { label: "C", text: "Negara Indonesia harus mengganti seluruh hukum positif dengan hukum satu agama tertentu", score: 0 },
          { label: "D", text: "Urutan sila-sila Pancasila boleh diubah-ubah sesuai keinginan pemerintah", score: 0 },
          { label: "E", text: "Sila Kelima memiliki kedudukan paling tinggi dibandingkan Sila Pertama", score: 0 }
        ],
        explanation: "Sifat hierarkis piramidal berarti Sila 1 menjadi basis moral dan spiritual yang menjiwai penegakan HAM (Sila 2), persatuan bangsa (Sila 3), demokrasi (Sila 4), dan keadilan sosial (Sila 5)."
      },
      {
        id: "twk-f48-q5",
        type: "TWK",
        question: "Munculnya kelompok yang menyebarkan ujaran kebencian terhadap simbol-simbol agama lain di media sosial hingga memicu keresahan antarumat beragama merupakan penyimpangan terhadap nilai Pancasila, khususnya...",
        options: [
          { label: "A", text: "Sila Pertama, karena merusak kerukunan hidup antarumat beragama dan tidak menghormati perbedaan keyakinan", score: 5 },
          { label: "B", text: "Sila Kedua, karena tidak memberikan bantuan sembako kepada warga miskin", score: 0 },
          { label: "C", text: "Sila Keempat, karena tidak mengikuti pemilihan umum", score: 0 },
          { label: "D", text: "Sila Kelima, karena melakukan pemborosan anggaran", score: 0 },
          { label: "E", text: "Semua jawaban salah", score: 0 }
        ],
        explanation: "Penistaan atau ujaran kebencian terhadap agama/keyakinan lain secara langsung melanggar butir ke-3 dan ke-4 Sila Pertama Pancasila tentang hormat-menghormati dan membina kerukunan hidup antarumat beragama."
      }
    ]
  },

  // ==========================================================================
  // VIDEO 2 (FOKUS TWK #49): PANCASILA SILA KE-2
  // Link: https://www.youtube.com/watch?v=z29t9kFI3zA
  // ==========================================================================
  {
    id: "twk-fokus-49-sila-2",
    category: "TWK",
    subCategory: "Pilar Negara (Pancasila & UUD 1945)",
    title: "FOKUS TWK #49 — Materi & Bedah Soal Pancasila SILA KE-2 (Kemanusiaan yang Adil dan Beradab)",
    subtitle: "Kupas 10 Butir Sila 2, Harkat Martabat Manusia (HAM), Persamaan Derajat (Egaliter), Tenggang Rasa, & Bedanya dengan Sila 5",
    youtubeUrl: "https://www.youtube.com/watch?v=z29t9kFI3zA",
    youtubeId: "z29t9kFI3zA",
    duration: "27 Menit",
    difficulty: "Fokus TWK #49 • Sering Keluar HOTS",
    bknKeywords: [
      "Lambang Sila 2: Rantai Emas bermata bulat (perempuan) & persegi (laki-laki) berjumlah 17 mata rantai yang saling berkaitan erat",
      "Inti Nilai Dasar Sila 2: Harkat & Martabat Manusia (Human Dignity), Hak Asasi Manusia (HAM), Kesamaan Derajat (Egaliter)",
      "Sikap Kunci Sila 2: Saling mencintai sesama, Tenggang rasa & tepa selira, Tidak semena-mena, Gemar kegiatan kemanusiaan, Berani membela kebenaran",
      "Hubungan Internasional di Sila 2: Bangsa Indonesia merasa dirinya sebagai bagian dari seluruh umat manusia (Kerja sama kemanusiaan global)",
      "Pembeda Sila 2 vs Sila 5: Sila 2 = Empati personal, penyelamatan nyawa, anti-diskriminasi/anti-bullying | Sila 5 = Kesejahteraan ekonomi, fasilitas publik, pemberdayaan agar mandiri",
      "Pelanggaran Sila 2: Perundungan (Bullying), Diskriminasi ras/suku/gender, Perdagangan orang (Human Trafficking), Kekerasan/Penyiksaan, Pelanggaran HAM"
    ],
    timestamps: [
      { time: "00:00", seconds: 0, label: "Makna Filosofis Kemanusiaan yang 'Adil' dan 'Beradab' & Lambang Rantai" },
      { time: "05:10", seconds: 310, label: "Bedah 10 Butir Pengamalan Sila ke-2 beserta Kata Kunci Soalnya" },
      { time: "11:45", seconds: 705, label: "Kaitan Sila ke-2 dengan HAM (Pasal 28A–28J UUD 1945)" },
      { time: "16:20", seconds: 980, label: "Trik Membedakan Soal Kemanusiaan (Sila 2) vs Keadilan Sosial (Sila 5)" },
      { time: "21:00", seconds: 1260, label: "Latihan & Pembahasan Soal Penalaran HOTS Sila ke-2" }
    ],
    theorySections: [
      {
        heading: "1. Filosofi 'Kemanusiaan yang Adil dan Beradab' & Makna Lambang Rantai",
        content: `Dalam hierarki Pancasila, **Sila ke-2 dijiwai oleh Sila ke-1, serta menjiwai Sila ke-3, ke-4, dan ke-5**. Mengapa digunakan frasa **"Adil dan Beradab"**?
- **Adil**: Memperlakukan manusia sesuai dengan hak dan kewajiban asasinya secara proporsional—adil terhadap diri sendiri, adil terhadap sesama manusia, dan adil terhadap lingkungan.
- **Beradab**: Memiliki adab, budi pekerti luhur, kesopanan, dan moralitas sehingga tidak bertindak biadab/kejam/semena-mena terhadap manusia lain.
- **Lambang Rantai Emas (Latar Merah)**: Terdiri atas mata rantai **persegi (laki-laki)** dan **lingkaran (perempuan)** yang saling menyambung tak terputus, melambangkan hubungan timbal balik antarmanusia yang setara (egaliter) dan saling membutuhkan.`,
        points: [
          "Pengakuan Martabat Luhur: Manusia bukan sekadar alat produksi, melainkan makhluk Tuhan yang memiliki harkat dan martabat mulia.",
          "Prinsip Egaliter (Persamaan Derajat): Tidak boleh ada kasta atau diskriminasi layanan berdasarkan kekayaan, warna kulit, suku, agama, maupun gender.",
          "Humanisme Universal (Butir ke-9 & ke-10): Sila ke-2 tidak hanya mengatur hubungan sesama warga Indonesia, tetapi juga solidaritas kemanusiaan dunia (contoh: mengirim bantuan medis/kemanusiaan ke negara lain yang dilanda gempa atau perang)."
        ]
      },
      {
        heading: "2. Sepuluh (10) Butir Resmi Pengamalan Sila ke-2 & Terjemahan Kasusnya",
        content: "Hafalkan kata kunci dari ke-10 butir Sila ke-2 berikut karena hampir setiap kalimat soal HOTS mengambil salah satu dari 10 butir ini:",
        table: {
          headers: ["No", "Bunyi Butir Resmi Sila ke-2", "Contoh Kasus Nyata di Soal SKD BKN"],
          rows: [
            ["1", "Mengakui dan memperlakukan manusia sesuai dengan harkat dan martabatnya sebagai makhluk Tuhan YME.", "Memperlakukan pekerja asisten rumah tangga atau petugas kebersihan secara manusiawi dan penuh rasa hormat."],
            ["2", "Mengakui persamaan derajat, persamaan hak, dan kewajiban asasi setiap manusia, tanpa membeda-bedakan suku, keturunan, agama, kepercayaan, jenis kelamin, kedudukan sosial, warna kulit dan sebagainya.", "Dokter IGD atau petugas loket melayani pasien kurang mampu dan pejabat dengan standar kualitas pelayanan yang sama."],
            ["3", "Mengembangkan sikap saling mencintai sesama manusia.", "Menebarkan kasih sayang, menghentikan ujaran kebencian personal, peduli pada penderitaan sesama."],
            ["4", "Mengembangkan sikap saling tenggang rasa dan tepa selira.", "Menjaga perasaan orang lain; tidak membicarakan kekurangan fisik teman (tidak body shaming)."],
            ["5", "Mengembangkan sikap tidak semena-mena terhadap orang lain.", "Atasan tidak menindas, tidak mempermalukan, dan tidak mengeksploitasi bawahan di luar batas kemanusiaan."],
            ["6", "Menjunjung tinggi nilai-nilai kemanusiaan.", "Mengutamakan penyelamatan nyawa korban kecelakaan di jalan raya sebelum mengurus perdebatan ganti rugi kendaraan."],
            ["7", "Gemar melakukan kegiatan kemanusiaan.", "Rutin mendonorkan darah di PMI, menjadi relawan evakuasi korban bencana alam, menyantuni anak yatim/lansia terlantar."],
            ["8", "Berani membela kebenaran dan keadilan.", "Berani menjadi saksi untuk membela rekan kerja atau siswa yang difitnah/di-bully meskipun mendapat tekanan."],
            ["9", "Bangsa Indonesia merasa dirinya sebagai bagian dari seluruh umat manusia.", "Turut berduka dan mengirimkan bantuan kemanusiaan bagi korban bencana alam di luar negeri."],
            ["10", "Mengembangkan sikap hormat menghormati dan bekerja sama dengan bangsa lain.", "Menghormati kedaulatan negara lain, pertukaran pelajar/riset kesehatan internasional demi kemaslahatan manusia."]
          ]
        }
      },
      {
        heading: "3. Pembeda Tajam Sila ke-2 vs Sila ke-3 vs Sila ke-5 dalam Soal HOTS",
        content: "Banyak peserta bingung ketika soal menceritakan tentang **'Kerja Sama Internasional'** atau **'Membantu Korban Bencana'**. Berikut rumusnya:",
        points: [
          "Kasus Hubungan Internasional: Jika tujuannya untuk **kemanusiaan universal, misi medis, penghormatan sesama bangsa manusia** -> **Sila ke-2** (Butir 9 & 10). Namun jika tujuannya untuk **menjaga kedaulatan NKRI, diplomasi perbatasan, atau mengharumkan nama bangsa Indonesia** -> **Sila ke-3**!",
          "Kasus Bantuan Masyarakat: Jika bantuannya berupa **pertolongan darurat kemanusiaan, donor darah, evakuasi bencana, empati personal** -> **Sila ke-2** (Butir 6 & 7). Namun jika bantuannya berupa **pemberdayaan ekonomi, pelatihan kerja supaya mandiri, subsidi merata, pembangunan infrastruktur umum** -> **Sila ke-5**!",
          "Nilai Instrumental Sila ke-2 di UUD 1945: Terletak pada **Pasal 28A s.d. Pasal 28J (Bab XA tentang Hak Asasi Manusia)**, terutama Pasal 28I ayat (1) tentang hak hidup dan hak untuk tidak disiksa, serta Pasal 28I ayat (2) tentang bebas dari perlakuan diskriminatif."
        ],
        alertBox: {
          type: "warning",
          title: "Kata Kunci Emas Sila ke-2: 'Anti-Bullying, Anti-Diskriminasi, & Berani Membela yang Benar!'",
          text: "Setiap kali Anda menemukan soal cerita tentang perundungan (bullying) di sekolah/kantor, pelecehan harkat martabat, membeda-bedakan pelayanan karena status kaya/miskin, atau keberanian membela orang tak bersalah yang tertindas -> 100% jawabannya adalah SILA KE-2!"
        }
      }
    ],
    quickTricks: [
      {
        title: "Jembatan Keledai 10 Butir Sila 2: 'MA-DER-CIN-TENG-SEMENA | KEMANUSIAAN-BELA-DUNIA'",
        mnemonic: "MArtabat (1) | DERajat sama (2) | CINtai sesama (3) | TENGgang rasa (4) | Tidak SEMENA-mena (5) | Kegiatan KEMANUSIAAN (6-7) | BELA kebenaran (8) | Warga DUNIA/Bangsa lain (9-10)",
        normalWay: "Menebak-nebak apakah kasus di soal masuk Sila 2 atau Sila 5 berdasarkan perasaan.",
        fastWay: "Tanyakan 1 hal pada soal: 'Apakah ini tentang HARKAT MARTABAT, NYAWA, EMPATI, & KESAMAAN DERAJAT MANUSIA?' Jika YA -> Kunci Sila ke-2!"
      },
      {
        title: "Rumus 10 Detik: Bantuan Sila 2 vs Bantuan Sila 5",
        mnemonic: "MENOLONG KARENA IBA/DARURAT NYAWA = SILA 2 | MENOLONG AGAR MANDIRI/SEJAHTERA = SILA 5",
        normalWay: "Terkecoh memilih Sila 5 setiap kali melihat kata 'membantu warga miskin'.",
        fastWay: "Cek kalimat tujuannya! Jika bunyinya 'agar orang lain dapat mandiri / pemerataan kesejahteraan' -> Sila 5. Jika bunyinya 'atas dasar kemanusiaan / empati / tanpa membedakan derajat' -> Sila 2."
      }
    ],
    workedExamples: [
      {
        question: "Seorang siswa baru dari daerah terpencil sering diejek oleh beberapa temannya di sekolah karena logat bicaranya yang berbeda dan pakaiannya yang sederhana. Melihat hal tersebut, Rina segera menegur teman-temannya dan mengajak mereka untuk berteman dengan siswa baru tersebut tanpa memandang latar belakangnya. Tindakan Rina mencerminkan pengamalan Pancasila khususnya...",
        options: [
          "A. Sila Pertama",
          "B. Sila Kedua",
          "C. Sila Ketiga",
          "D. Sila Keempat",
          "E. Sila Kelima"
        ],
        answer: "B. Sila Kedua",
        normalExplanation: "Kasus di atas adalah tindakan perundungan (bullying) dan merendahkan derajat seseorang karena latar belakang ekonomi/daerah. Rina berani membela kebenaran (butir 8), tidak semena-mena (butir 5), dan mengakui persamaan derajat manusia (butir 2) pada Sila ke-2.",
        fastTrickExplanation: "Kata kunci di soal: 'diejek (bullying)', 'pakaian sederhana (status sosial)', dan 'tanpa memandang latar belakang (persamaan derajat)'. Anti-bullying & persamaan derajat = Mutlak Sila ke-2!"
      },
      {
        question: "Indonesia secara aktif mengirimkan tim medis dan bantuan logistik darurat bagi para korban gempa bumi hebat yang melanda negara sahabat di Timur Tengah, meskipun kedua negara memiliki perbedaan budaya dan sistem politik. Kebijakan ini merupakan wujud pengamalan nilai Pancasila, yaitu...",
        options: [
          "A. Sila ke-1 karena membantu negara yang seagama",
          "B. Sila ke-2 karena bangsa Indonesia merasa dirinya sebagai bagian dari seluruh umat manusia dan menjunjung tinggi nilai kemanusiaan",
          "C. Sila ke-3 karena memperluas wilayah kekuasaan nasional Indonesia",
          "D. Sila ke-4 karena mengikuti perintah parlemen internasional",
          "E. Sila ke-5 karena membagi kekayaan APBN ke seluruh dunia"
        ],
        answer: "B. Sila ke-2 karena bangsa Indonesia merasa dirinya sebagai bagian dari seluruh umat manusia dan menjunjung tinggi nilai kemanusiaan",
        normalExplanation: "Sesuai dengan butir ke-6, ke-7, ke-9, dan ke-10 Sila Kedua Pancasila, solidaritas kemanusiaan untuk menyelamatkan korban bencana di negara lain didasari oleh pengakuan bahwa bangsa Indonesia adalah bagian dari seluruh umat manusia.",
        fastTrickExplanation: "Misi kemanusiaan/medis darurat lintas negara = Butir ke-9 & ke-10 Sila ke-2 (Opsi B)!"
      },
      {
        question: "Praktik perdagangan orang (human trafficking) dan kerja paksa terhadap pekerja migran dengan menahan gaji serta dokumen paspor mereka merupakan kejahatan yang secara langsung meruntuhkan nilai dasar...",
        options: [
          "A. Ketuhanan Yang Maha Esa",
          "B. Kemanusiaan yang Adil dan Beradab",
          "C. Persatuan Indonesia",
          "D. Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan",
          "E. Keadilan Sosial bagi Seluruh Rakyat Indonesia"
        ],
        answer: "B. Kemanusiaan yang Adil dan Beradab",
        normalExplanation: "Human trafficking dan perbudakan modern memperlakukan manusia sebagai barang dagangan, merampas harkat dan martabat manusia (butir 1), serta bertindak semena-mena (butir 5) yang melanggar Sila ke-2.",
        fastTrickExplanation: "Human trafficking / perbudakan = Pelanggaran HAM berat & merendahkan harkat martabat manusia -> Pasti melanggar Sila ke-2!"
      }
    ],
    quiz: [
      {
        id: "twk-f49-q1",
        type: "TWK",
        question: "Di sebuah kantor pelayanan publik, seorang petugas tetap melayani seorang warga penyandang disabilitas dan berpakaian lusuh dengan penuh kesopanan, senyum ramah, serta memberikan hak layanan yang sama persis seperti saat melayani pejabat daerah. Sikap petugas tersebut merupakan pengamalan Pancasila sila ke...",
        options: [
          { label: "A", text: "Sila ke-1", score: 0 },
          { label: "B", text: "Sila ke-2", score: 5 },
          { label: "C", text: "Sila ke-3", score: 0 },
          { label: "D", text: "Sila ke-4", score: 0 },
          { label: "E", text: "Sila ke-5", score: 0 }
        ],
        explanation: "Mengakui persamaan derajat, persamaan hak, dan memperlakukan setiap manusia sesuai harkat dan martabatnya tanpa membeda-bedakan kedudukan sosial atau kondisi fisik adalah butir ke-1 dan ke-2 Sila Kedua Pancasila."
      },
      {
        id: "twk-f49-q2",
        type: "TWK",
        question: "Ketika mengetahui rekannya dituduh melakukan kesalahan administrasi yang sebenarnya dilakukan oleh atasan mereka sendiri, Andi memberanikan diri memberikan kesaksian yang jujur disertai bukti autentik agar rekannya yang tidak bersalah tersebut tidak dipecat secara sepihak. Tindakan Andi mencerminkan butir pengamalan Sila Kedua, yaitu...",
        options: [
          { label: "A", text: "Gemar melakukan kegiatan donor darah", score: 0 },
          { label: "B", text: "Berani membela kebenaran dan keadilan serta tidak semena-mena terhadap orang lain", score: 5 },
          { label: "C", text: "Mengutamakan musyawarah untuk mencapai mufakat", score: 0 },
          { label: "D", text: "Bangga menggunakan produk buatan dalam negeri", score: 0 },
          { label: "E", text: "Menghormati kebebasan menjalankan ibadah", score: 0 }
        ],
        explanation: "Butir ke-8 Sila Kedua Pancasila secara tegas menyebutkan: 'Berani membela kebenaran dan keadilan', terlebih ketika ada pihak yang diperlakukan secara semena-mena/difitnah."
      },
      {
        id: "twk-f49-q3",
        type: "TWK",
        question: "Perhatikan dua kasus berikut:\nKasus X: Sekelompok mahasiswa menggalang dana darurat dan menjadi relawan evakuasi korban tanah longsor karena rasa empati terhadap penderitaan para korban.\nKasus Y: Pemerintah daerah memberikan pelatihan pengolahan hasil laut dan akses kredit usaha mikro kepada nelayan agar mereka dapat hidup mandiri dan sejahtera.\nSecara berurutan, Kasus X dan Kasus Y merupakan perwujudan nilai Pancasila sila ke...",
        options: [
          { label: "A", text: "Sila ke-2 dan Sila ke-5", score: 5 },
          { label: "B", text: "Sila ke-5 dan Sila ke-2", score: 0 },
          { label: "C", text: "Sila ke-3 dan Sila ke-4", score: 0 },
          { label: "D", text: "Sila ke-1 dan Sila ke-2", score: 0 },
          { label: "E", text: "Sila ke-2 dan Sila ke-3", score: 0 }
        ],
        explanation: "Kasus X fokus pada kegiatan kemanusiaan darurat atas dasar empati (Butir ke-7 Sila ke-2). Kasus Y fokus pada pemberdayaan ekonomi masyarakat agar mandiri dan sejahtera (Butir Sila ke-5). Jadi jawabannya Sila ke-2 dan Sila ke-5."
      },
      {
        id: "twk-f49-q4",
        type: "TWK",
        question: "Fenomena cyberbullying (perundungan siber) berupa komentar penghinaan fisik dan doxing data pribadi seseorang di media sosial hingga korban mengalami depresi berat merupakan bentuk penyimpangan terhadap Sila Kedua Pancasila karena...",
        options: [
          { label: "A", text: "Mengurangi kuota internet masyarakat", score: 0 },
          { label: "B", text: "Merendahkan harkat dan martabat manusia, tidak memiliki tenggang rasa, serta bertindak semena-mena terhadap sesama", score: 5 },
          { label: "C", text: "Menurunkan nilai tukar rupiah terhadap mata uang asing", score: 0 },
          { label: "D", text: "Menghapuskan sistem pemilu langsung di Indonesia", score: 0 },
          { label: "E", text: "Melarang penggunaan produk luar negeri", score: 0 }
        ],
        explanation: "Cyberbullying melanggar butir ke-1 (harkat martabat manusia), butir ke-4 (tenggang rasa dan tepa selira), serta butir ke-5 (tidak semena-mena terhadap orang lain) pada Sila Kedua."
      },
      {
        id: "twk-f49-q5",
        type: "TWK",
        question: "Nilai instrumental dalam UUD Negara Republik Indonesia Tahun 1945 yang secara khusus menjabarkan Sila Kedua Pancasila mengenai larangan perlakuan diskriminatif atas dasar apa pun adalah...",
        options: [
          { label: "A", text: "Pasal 28I ayat (2)", score: 5 },
          { label: "B", text: "Pasal 23 ayat (1)", score: 0 },
          { label: "C", text: "Pasal 30 ayat (2)", score: 0 },
          { label: "D", text: "Pasal 33 ayat (3)", score: 0 },
          { label: "E", text: "Pasal 36A", score: 0 }
        ],
        explanation: "Pasal 28I ayat (2) UUD 1945 menegaskan: 'Setiap orang berhak bebas dari perlakuan yang bersifat diskriminatif atas dasar apa pun dan berhak mendapatkan perlindungan terhadap perlakuan yang bersifat diskriminatif itu.'"
      }
    ]
  },

  // ==========================================================================
  // VIDEO 3 (FOKUS TWK #50): PANCASILA SILA KE-3
  // Link: https://www.youtube.com/watch?v=-gKrX4EdlFk&t=4s
  // ==========================================================================
  {
    id: "twk-fokus-50-sila-3",
    category: "TWK",
    subCategory: "Pilar Negara (Pancasila & UUD 1945)",
    title: "FOKUS TWK #50 — Materi & Bedah Soal Pancasila SILA KE-3 (Persatuan Indonesia)",
    subtitle: "Kupas 7 Butir Sila 3, Nasionalisme vs Patriotisme, Bhinneka Tunggal Ika, & Istilah Penyimpangan (Chauvinisme, Etnosentrisme, Primordialisme)",
    youtubeUrl: "https://www.youtube.com/watch?v=-gKrX4EdlFk",
    youtubeId: "-gKrX4EdlFk",
    duration: "29 Menit",
    difficulty: "Fokus TWK #50 • Langganan Soal BKN",
    bknKeywords: [
      "Lambang Sila 3: Pohon Beringin dengan akar tunjang yang kuat & sulur-sulur menggantung (pengayom keberagaman suku bangsa)",
      "Inti Nilai Dasar Sila 3: Persatuan & Kesatuan NKRI, Kepentingan Bangsa di Atas Pribadi/Golongan, Rela Berkorban, Cinta Tanah Air, Bhinneka Tunggal Ika",
      "Beda Nasionalisme vs Patriotisme: Nasionalisme = Paham/Rasa cinta bangsa & tanah air | Patriotisme = Sikap rela berkorban jiwa raga/harta demi negara",
      "Chauvinisme: Cinta tanah air berlebihan yang menganggap bangsanya paling unggul dan merendahkan bangsa lain (Contoh: Nazi Jerman)",
      "Etnosentrisme vs Primordialisme: Etnosentrisme = Mengukur/merendahkan budaya suku lain memakai standar sukunya sendiri | Primordialisme = Ikatan bawaan lahir berlebihan",
      "Pasal UUD 1945 Terkait Sila 3: Pasal 1 ayat (1) (Negara Kesatuan), Pasal 27 ayat (3) & Pasal 30 (Bela Negara & Pertahanan), Pasal 35–36B (Atribut Kenegaraan)"
    ],
    timestamps: [
      { time: "00:00", seconds: 0, label: "Filosofi Persatuan Indonesia & Makna Lambang Pohon Beringin" },
      { time: "04:50", seconds: 290, label: "Bedah 7 Butir Pengamalan Sila ke-3 & Kata Kunci Soal HOTS" },
      { time: "10:40", seconds: 640, label: "Perbedaan Nasionalisme, Patriotisme, dan Bela Negara dalam Soal TWK" },
      { time: "16:15", seconds: 975, label: "6 Paham Pengancam Sila ke-3: Chauvinisme, Etnosentrisme, Sukuisme, Separatisme" },
      { time: "21:30", seconds: 1290, label: "Bedah Soal Penalaran HOTS Sila ke-3" }
    ],
    theorySections: [
      {
        heading: "1. Makna Filosofis Sila ke-3 & Lambang Pohon Beringin",
        content: `Dalam hierarki piramidal Pancasila, **Sila ke-3 (Persatuan Indonesia)** dijiwai oleh Sila ke-1 dan ke-2, serta menjiwai dan meliputi Sila ke-4 dan ke-5.
- **Mengapa Pohon Beringin?** Pohon beringin merupakan pohon besar dan rindang tempat seluruh rakyat Indonesia dapat **berteduh dan merasa aman** (simbol negara mengayomi rakyat). Sementara **sulur dan akar yang menjalar ke segala arah** namun berasal dari satu pohon yang sama melambangkan keragaman suku, adat, budaya, dan agama yang tetap menyatu dalam **Bhinneka Tunggal Ika**.`,
        points: [
          "Konsep Negara Bangsa (Nation-State): Persatuan Indonesia tidak dibangun atas kesamaan satu suku atau satu ras saja, melainkan kesadaran sejarah dan kehendak untuk bersatu mencapai cita-cita nasional.",
          "Nasionalisme Indonesia adalah Nasionalisme Kemanusiaan (Bukan Chauvinisme): Karena Sila ke-3 dijiwai oleh Sila ke-2, maka cinta tanah air Indonesia tetap menghormati perdamaian dunia dan martabat bangsa lain (lihat Butir ke-6 Sila 3)."
        ]
      },
      {
        heading: "2. Tujuh (7) Butir Resmi Pengamalan Sila ke-3 & Aplikasi Soal HOTS",
        content: "Pelajari 7 butir Sila ke-3 berikut beserta bentuk soal cerita yang sering diujikan oleh BKN:",
        table: {
          headers: ["No", "Bunyi Butir Resmi Sila ke-3", "Contoh Kasus Nyata di Soal SKD BKN"],
          rows: [
            ["1", "Mampu menempatkan persatuan, kesatuan, serta kepentingan dan keselamatan bangsa dan negara sebagai kepentingan bersama di atas kepentingan pribadi dan golongan.", "Seorang atlet atau diplomat tetap menjalankan tugas mewakili Indonesia di kejuaraan internasional meskipun harus menunda acara liburan keluarga."],
            ["2", "Sanggup dan rela berkorban untuk kepentingan negara dan bangsa apabila diperlukan.", "Merelakan sebagian tanah miliknya dibebaskan (dengan ganti rugi yang layak) demi pembangunan jalan tol/bendungan strategis nasional; tenaga kesehatan bertugas di pulau terluar."],
            ["3", "Mengembangkan rasa cinta kepada tanah air dan bangsa.", "Melestarikan warisan budaya nusantara (batik, wayang, tari tradisional), menjaga kelestarian hutan dan laut Indonesia."],
            ["4", "Mengembangkan rasa kebanggaan berkebangsaan dan bertanah air Indonesia.", "Bangga membeli dan memakai produk UMKM dalam negeri, menggunakan Bahasa Indonesia dengan baik, mengibarkan Merah Putih saat berprestasi."],
            ["5", "Memelihara ketertiban dunia yang berdasarkan kemerdekaan, perdamaian abadi, dan keadilan sosial.", "Pengiriman Pasukan Garuda (Kontingen Garuda) dalam misi perdamaian PBB untuk menjaga ketertiban dunia atas nama negara Indonesia."],
            ["6", "Mengembangkan persatuan Indonesia atas dasar Bhinneka Tunggal Ika.", "Berteman, bekerja sama, dan hidup berdampingan secara harmonis dengan warga dari berbagai suku bangsa tanpa memandang asal daerah."],
            ["7", "Memajukan pergaulan demi persatuan dan kesatuan bangsa.", "Mengadakan festival budaya lintas daerah di kampus/kantor untuk mempererat persaudaraan antarsuku."]
          ]
        }
      },
      {
        heading: "3. Kamus Wajib Paham Penyimpangan Sila ke-3 (Sering Keluar di Opsi A–E!)",
        content: "Dalam soal TWK Sila ke-3 dan Nasionalisme, pembuat soal sangat sering menanyakan istilah-istilah paham yang mengancam persatuan bangsa. Jangan sampai tertukar:",
        table: {
          headers: ["Istilah Paham", "Kata Kunci Pengertian", "Contoh Kasus di Soal"],
          rows: [
            ["Primordialisme", "Memegang teguh ikatan bawaan sejak lahir (suku, ras, daerah asal) secara berlebihan di ruang publik.", "Seorang pejabat hanya mau mengangkat pegawai yang berasal dari kampung halaman/marga yang sama dengannya."],
            ["Etnosentrisme", "Menganggap kebudayaan sukunya sendiri paling baik dan menggunakan standar sukunya untuk meremehkan budaya suku lain.", "Menertawakan pakaian adat atau tradisi upacara suku lain karena dianggap aneh/kuno dibanding budaya sukunya."],
            ["Sukuisme", "Sikap mementingkan keuntungan sukunya sendiri dan mengabaikan suku-suku lain dalam kehidupan berbangsa.", "Membuat organisasi eksklusif yang menolak bekerja sama dengan warga dari suku berbeda."],
            ["Chauvinisme", "Nasionalisme sempit/berlebihan yang mengagungkan bangsanya sendiri secara fanatik sambil merendahkan/menjajah bangsa lain.", "Menganggap ras/bangsanya adalah ras tertinggi di dunia dan berhak menindas negara lain."],
            ["Separatisme", "Gerakan memisahkan diri dari Negara Kesatuan Republik Indonesia (NKRI) untuk mendirikan negara sendiri.", "Pemberontakan bersenjata yang ingin memisahkan suatu provinsi dari kedaulatan NKRI."],
            ["Ekstremisme / Radikalisme", "Paham yang menghendaki perubahan sosial/politik secara drastis hingga menggunakan kekerasan dan menolak konsensus dasar negara.", "Menolak Pancasila dan menghalalkan kekerasan terhadap kelompok yang berbeda pandangan."]
          ]
        },
        alertBox: {
          type: "warning",
          title: "Pembeda Krusial: Sila ke-2 vs Sila ke-3 dalam Konteks Internasional!",
          text: "Ingat: Butir ke-5 Sila 3 juga menyebut 'Memelihara ketertiban dunia'. Lalu bagaimana membedakannya dengan Sila 2?\n- Jika soal menekankan 'Pengiriman Pasukan Garuda TNI / Diplomasi Negara untuk menjaga perdamaian dunia sesuai amanat Pembukaan UUD 1945' -> Pilih SILA KE-3!\n- Jika soal menekankan 'Empati kemanusiaan membantu korban kelaparan/bencana sebagai sesama umat manusia' -> Pilih SILA KE-2!"
        }
      }
    ],
    quickTricks: [
      {
        title: "Jembatan Keledai 7 Butir Sila 3: 'UTAMA-KORBAN-CINTA-BANGGA-TERTIB-BHINNEKA-GAUL'",
        mnemonic: "UTAMAkan bangsa (1) | Rela berKORBAN (2) | CINTA tanah air (3) | BANGGA produk/bangsa Indonesia (4) | TERTIB dunia (5) | BHINNEKA Tunggal Ika (6) | PerGAULan persatuan (7)",
        normalWay: "Bingung membedakan kapan suatu tindakan masuk Sila 3 (Persatuan) atau Sila 5 (Keadilan Sosial) saat membeli produk UMKM.",
        fastWay: "Perhatikan ALASAN di kalimat soal! Jika membeli produk lokal karena 'Cinta dan bangga terhadap buatan bangsa sendiri dibanding barang impor' -> Sila ke-3! Jika membeli di warung tetangga karena 'Ingin pemerataan ekonomi dan menolong usaha kecil agar mandiri' -> Sila ke-5!"
      },
      {
        title: "Rumus 5 Detik Bedakan 'Primordialisme' vs 'Etnosentrisme' vs 'Chauvinisme'",
        mnemonic: "IKATAN LAHIR/PILIH KASIH SESUKU = Primordialisme | MERENDAHKAN BUDAYA SUKU LAIN = Etnosentrisme | MERENDAHKAN NEGARA/BANGSA LAIN = Chauvinisme",
        normalWay: "Menghafal definisi kamus yang panjang sehingga tertukar saat ujian.",
        fastWay: "Lihat OBJEKNYA: Pilih kasih teman sesuku = Primordialisme. Mengejek budaya suku lain di dalam negeri = Etnosentrisme. Mengejek bangsa/negara luar = Chauvinisme!"
      }
    ],
    workedExamples: [
      {
        question: "Seorang mahasiswa Indonesia yang sedang menempuh pendidikan beasiswa di luar negeri selalu memperkenalkan budaya batik, kuliner nusantara, serta prestasi teknologi Indonesia dalam pameran internasional kampus. Setelah lulus, ia menolak tawaran menjadi warga negara asing dan memilih kembali ke tanah air untuk membangun daerah tertinggal. Sikap mahasiswa tersebut mencerminkan pengamalan Pancasila khususnya...",
        options: [
          "A. Sila Pertama",
          "B. Sila Kedua",
          "C. Sila Ketiga",
          "D. Sila Keempat",
          "E. Sila Kelima"
        ],
        answer: "C. Sila Ketiga",
        normalExplanation: "Mahasiswa tersebut mengembangkan rasa cinta tanah air (butir 3), rasa kebanggaan berkebangsaan dan bertanah air Indonesia (butir 4), serta mengutamakan kepentingan bangsa di atas kepentingan pribadi (butir 1) pada Sila Ketiga.",
        fastTrickExplanation: "Kata kunci di soal: 'memperkenalkan budaya nusantara', 'menolak pindah kewarganegaraan', dan 'kembali ke tanah air membangun bangsa'. Cinta tanah air & bangga berbangsa Indonesia = Mutlak Sila ke-3!"
      },
      {
        question: "Dalam proses rekrutmen pegawai di suatu perusahaan daerah, seorang manajer HRD secara diam-diam meloloskan kandidat yang nilainya rendah hanya karena kandidat tersebut berasal dari suku dan daerah kelahiran yang sama dengannya. Tindakan manajer tersebut bertentangan dengan semangat Sila Ketiga Pancasila dan menunjukkan sikap...",
        options: [
          "A. Chauvinisme",
          "B. Kosmopolitanisme",
          "C. Primordialisme sempit dan nepotisme",
          "D. Hedonisme",
          "E. Sekularisme"
        ],
        answer: "C. Primordialisme sempit dan nepotisme",
        normalExplanation: "Mengutamakan orang dari ikatan bawaan lahir (suku/daerah asal yang sama) secara tidak adil dalam jabatan publik merupakan bentuk primordialisme sempit yang merusak persatuan nasional.",
        fastTrickExplanation: "Pilih kasih karena 'suku dan daerah kelahiran yang sama' = Ikatan bawaan lahir = Primordialisme sempit (Opsi C)!"
      },
      {
        question: "Ketika terjadi perselisihan antarwarga yang berasal dari latar belakang suku berbeda di sebuah kompleks perumahan, tokoh masyarakat setempat segera mempertemukan kedua belah pihak dan mengingatkan bahwa keberagaman suku bukanlah alasan untuk terpecah belah karena semua adalah saudara sebangsa. Upaya tokoh masyarakat tersebut merupakan wujud pengamalan Sila Ketiga, terutama butir...",
        options: [
          "A. Mengembangkan persatuan Indonesia atas dasar Bhinneka Tunggal Ika",
          "B. Suka bekerja keras dan menghargai hasil karya orang lain",
          "C. Tidak memaksakan suatu agama kepada orang lain",
          "D. Mengakui persamaan derajat antarbangsa di dunia",
          "E. Melaksanakan keputusan musyawarah kepada Tuhan YME"
        ],
        answer: "A. Mengembangkan persatuan Indonesia atas dasar Bhinneka Tunggal Ika",
        normalExplanation: "Meredam konflik antarsuku dengan menyadarkan bahwa perbedaan suku tetap satu kesatuan bangsa adalah implementasi butir ke-6 Sila Ketiga: 'Mengembangkan persatuan Indonesia atas dasar Bhinneka Tunggal Ika.'",
        fastTrickExplanation: "Opsi B (Sila 5), Opsi C (Sila 1), Opsi D (Sila 2), Opsi E (Sila 4). Hanya Opsi A yang merupakan butir Sila ke-3!"
      }
    ],
    quiz: [
      {
        id: "twk-f50-q1",
        type: "TWK",
        question: "Meskipun produk sepatu dan tas merek luar negeri sedang menjadi tren di kalangan anak muda, Dera memilih untuk membeli dan menggunakan sepatu serta tas buatan perajin lokal Indonesia karena merasa bangga dengan kualitas karya anak bangsa. Sikap Dera merupakan perwujudan Pancasila sila ke...",
        options: [
          { label: "A", text: "Sila ke-1", score: 0 },
          { label: "B", text: "Sila ke-2", score: 0 },
          { label: "C", text: "Sila ke-3", score: 5 },
          { label: "D", text: "Sila ke-4", score: 0 },
          { label: "E", text: "Sila ke-5", score: 0 }
        ],
        explanation: "Mencintai produk dalam negeri karena rasa cinta tanah air dan kebanggaan berkebangsaan Indonesia merupakan wujud butir ke-3 dan ke-4 Sila Ketiga Pancasila."
      },
      {
        id: "twk-f50-q2",
        type: "TWK",
        question: "Seseorang yang menilai tradisi adat daerah lain sebagai budaya yang 'rendah dan tidak beradab' karena diukur menggunakan standar adat sukunya sendiri yang dianggap paling sempurna, menunjukkan sikap penyimpangan terhadap Sila Ketiga yang disebut...",
        options: [
          { label: "A", text: "Patriotisme", score: 0 },
          { label: "B", text: "Etnosentrisme", score: 5 },
          { label: "C", text: "Hedonisme", score: 0 },
          { label: "D", text: "Sosialisme", score: 0 },
          { label: "E", text: "Liberalisme", score: 0 }
        ],
        explanation: "Etnosentrisme adalah sikap menilai dan merendahkan budaya kelompok/suku lain berdasarkan ukuran dan standar budaya sukunya sendiri."
      },
      {
        id: "twk-f50-q3",
        type: "TWK",
        question: "Dokter Raka rela meninggalkan kenyamanannya di kota besar untuk bertugas melayani kesehatan masyarakat di pulau terluar perbatasan Indonesia demi menjaga keselamatan warga di wilayah perbatasan NKRI. Sikap Dokter Raka paling tepat menggambarkan...",
        options: [
          { label: "A", text: "Pengamalan Sila ke-3, yakni rela berkorban dan mengutamakan kepentingan bangsa di atas kepentingan pribadi", score: 5 },
          { label: "B", text: "Sikap chauvinisme terhadap bangsa tetangga", score: 0 },
          { label: "C", text: "Sikap primordialisme kedaerahan", score: 0 },
          { label: "D", text: "Pelanggaran hak asasi tenaga medis", score: 0 },
          { label: "E", text: "Upaya mencari keuntungan finansial pribadi semata", score: 0 }
        ],
        explanation: "Rela berkorban demi kepentingan bangsa dan negara serta menempatkan keselamatan bangsa di atas kenyamanan pribadi adalah butir ke-1 dan ke-2 Sila Ketiga Pancasila (Patriotisme)."
      },
      {
        id: "twk-f50-q4",
        type: "TWK",
        question: "Nasionalisme yang dikembangkan oleh bangsa Indonesia berdasarkan Sila Ketiga Pancasila berbeda dengan paham Chauvinisme karena...",
        options: [
          { label: "A", text: "Nasionalisme Indonesia menutup diri dari segala bentuk kerja sama internasional", score: 0 },
          { label: "B", text: "Nasionalisme Indonesia dijiwai oleh Ketuhanan dan Kemanusiaan yang adil dan beradab sehingga mencintai tanah air sekaligus menghormati bangsa lain demi ketertiban dunia", score: 5 },
          { label: "C", text: "Nasionalisme Indonesia menganggap bangsa Indonesia lebih unggul derajatnya dibandingkan seluruh bangsa lain", score: 0 },
          { label: "D", text: "Chauvinisme lebih menghargai perdamaian abadi dibandingkan nasionalisme Pancasila", score: 0 },
          { label: "E", text: "Nasionalisme Indonesia hanya mengakui satu suku bangsa saja", score: 0 }
        ],
        explanation: "Karena Sila ke-3 dijiwai oleh Sila ke-1 dan ke-2, maka Nasionalisme Indonesia bersifat humanis dan terbuka: mencintai bangsa sendiri tanpa merendahkan bangsa lain serta ikut memelihara ketertiban dunia."
      },
      {
        id: "twk-f50-q5",
        type: "TWK",
        question: "Pasal dalam UUD 1945 yang menjadi landasan konstitusional (nilai instrumental) Sila Ketiga Pancasila terkait kewajiban dan hak setiap warga negara untuk ikut serta dalam usaha pembelaan negara adalah...",
        options: [
          { label: "A", text: "Pasal 27 ayat (3)", score: 5 },
          { label: "B", text: "Pasal 28E ayat (1)", score: 0 },
          { label: "C", text: "Pasal 29 ayat (1)", score: 0 },
          { label: "D", text: "Pasal 31 ayat (2)", score: 0 },
          { label: "E", text: "Pasal 34 ayat (1)", score: 0 }
        ],
        explanation: "Pasal 27 ayat (3) UUD 1945 berbunyi: 'Setiap warga negara berhak dan wajib ikut serta dalam upaya pembelaan negara.' Adapun Pasal 30 ayat (1) mengatur hak dan kewajiban dalam usaha pertahanan dan keamanan negara."
      }
    ]
  },

  // ==========================================================================
  // VIDEO 4 (FOKUS TWK #51): PANCASILA SILA KE-4
  // Link: https://www.youtube.com/watch?v=idrLFUxjjkY
  // ==========================================================================
  {
    id: "twk-fokus-51-sila-4",
    category: "TWK",
    subCategory: "Pilar Negara (Pancasila & UUD 1945)",
    title: "FOKUS TWK #51 — Materi & Bedah Soal Pancasila SILA KE-4 (Kerakyatan / Demokrasi)",
    subtitle: "Kupas 10 Butir Sila 4, Demokrasi Pancasila, Musyawarah Mufakat vs Voting, Larangan Memaksakan Kehendak, & Pertanggungjawaban Moral",
    youtubeUrl: "https://www.youtube.com/watch?v=idrLFUxjjkY",
    youtubeId: "idrLFUxjjkY",
    duration: "26 Menit",
    difficulty: "Fokus TWK #51 • Kunci Soal Demokrasi",
    bknKeywords: [
      "Lambang Sila 4: Kepala Banteng dengan latar merah (Banteng adalah hewan sosial yang suka berkumpul dan kuat ketika bersatu)",
      "Inti Nilai Dasar Sila 4: Kedaulatan Rakyat (Demokrasi Pancasila), Musyawarah untuk Mufakat, Hikmat Kebijaksanaan (Akal sehat & nurani)",
      "Urutan Pengambilan Keputusan Sila 4: Utamakan Musyawarah Mufakat dengan semangat kekeluargaan -> Jika buntu, baru mekanisme Voting/Suara Terbanyak sesuai aturan",
      "Sikap Kunci Sila 4: Kedudukan sama sebagai warga negara, Tidak memaksakan kehendak, Menghargai pendapat orang lain, Menerima & melaksanakan hasil keputusan dengan itikad baik",
      "Butir Unik Sila 4 (Sering Mengecoh ke Sila 1!): 'Keputusan yang diambil harus dapat dipertanggungjawabkan secara moral kepada Tuhan YME...' adalah Butir ke-9 SILA KE-4!",
      "Penyimpangan Sila 4: Otoritarianisme/Diktator, Politik Uang (Money Politics), Memaksakan kehendak/Anarkis saat demo, Menolak hasil pemilu/rapat yang sah, Golput/Apatis"
    ],
    timestamps: [
      { time: "00:00", seconds: 0, label: "Filosofi Demokrasi Pancasila & Makna Lambang Kepala Banteng" },
      { time: "04:40", seconds: 280, label: "Bedah Lengkap 10 Butir Pengamalan Sila ke-4 (Wajib Waspada Butir ke-9!)" },
      { time: "11:10", seconds: 670, label: "Mekanisme Musyawarah Mufakat vs Voting & Etika Menyampaikan Pendapat" },
      { time: "16:05", seconds: 965, label: "Nilai Instrumental Sila 4 di UUD 1945 (Pasal 1 ayat 2, Pasal 2, Pasal 19, Pasal 22E, Pasal 28)" },
      { time: "20:30", seconds: 1230, label: "Bedah Soal HOTS Sila ke-4 & Jebakan Soal Rapat" }
    ],
    theorySections: [
      {
        heading: "1. Makna Filosofis Sila ke-4 & Konsep Demokrasi Pancasila",
        content: `Dalam hierarki piramidal Pancasila, **Sila ke-4 dijiwai oleh Sila ke-1, ke-2, dan ke-3, serta menjiwai Sila ke-5**.
- **Kerakyatan**: Kedaulatan berada di tangan rakyat dan dilaksanakan menurut UUD (Pasal 1 ayat 2 UUD 1945).
- **Hikmat Kebijaksanaan**: Penggunaan akal sehat yang rasional, jujur, bijaksana, dan mempertimbangkan hati nurani demi kepentingan rakyat banyak, bukan demokrasi liberal yang menghalalkan segala cara.
- **Permusyawaratan / Perwakilan**: Mengutamakan **Musyawarah untuk Mufakat** (Demokrasi Langsung) maupun melalui lembaga perwakilan rakyat seperti DPR, DPD, DPRD, dan MPR (Demokrasi Perwakilan/Representatif).`,
        points: [
          "Makna Lambang Kepala Banteng (Latar Merah): Banteng adalah hewan sosial yang gemar berkumpul dalam kawanan dan saling melindungi, melambangkan budaya masyarakat Indonesia yang gemar berkumpul untuk bermusyawarah.",
          "Kapan Voting (Pemungutan Suara) Boleh Dilakukan? Dalam Demokrasi Pancasila, langkah pertama yang wajib diupayakan adalah **musyawarah untuk mufakat dengan semangat kekeluargaan**. Namun, apabila musyawarah mufakat menemui jalan buntu (deadlock) atau dalam pemilihan umum massal (Pemilu/Pilkada), maka pengambilan suara terbanyak (**voting**) sah dan demokratis selama seluruh pihak menerima hasilnya dengan itikad baik."
        ]
      },
      {
        heading: "2. Sepuluh (10) Butir Resmi Pengamalan Sila ke-4 & Jebakan Butir ke-9!",
        content: "Perhatikan baik-baik ke-10 butir Sila ke-4 di bawah ini, terutama **Butir ke-1** (sering tertukar dengan Sila 2) dan **Butir ke-9** (sering tertukar dengan Sila 1):",
        table: {
          headers: ["No", "Bunyi Butir Resmi Sila ke-4", "Catatan Penting & Contoh Kasus di Soal BKN"],
          rows: [
            ["1", "Sebagai warga negara dan warga masyarakat, setiap manusia Indonesia mempunyai kedudukan, hak, dan kewajiban yang sama.", "⚠️ Bedakan dengan Sila 2! Jika konteksnya 'kedudukan sama sebagai WARGA NEGARA dalam politik/pemilu/aspirasi' -> Sila 4! Jika 'persamaan derajat sebagai MANUSIA (HAM)' -> Sila 2!"],
            ["2", "Tidak boleh memaksakan kehendak kepada orang lain.", "Tidak mengancam peserta rapat lain agar menyetujui pendapatnya; orang tua berdiskusi dengan anak tanpa otoriter."],
            ["3", "Mengutamakan musyawarah dalam mengambil keputusan untuk kepentingan bersama.", "Menyelesaikan sengketa batas tanah desa atau penentuan kebijakan organisasi melalui forum musyawarah."],
            ["4", "Musyawarah untuk mencapai mufakat diliputi oleh semangat kekeluargaan.", "Rapat berjalan hangat, saling menghargai tanpa permusuhan pribadi meskipun berbeda argumen."],
            ["5", "Menghormati dan menjunjung tinggi setiap keputusan yang dicapai sebagai hasil musyawarah.", "Tidak melakukan sabotase atau protes anarkis setelah keputusan rapat disahkan secara sah."],
            ["6", "Dengan itikad baik dan rasa tanggung jawab menerima dan melaksanakan hasil keputusan musyawarah.", "Meskipun usulannya kalah dalam rapat/voting, tetap ikut bekerja menyukseskan keputusan bersama tersebut."],
            ["7", "Di dalam musyawarah diutamakan kepentingan bersama di atas kepentingan pribadi dan golongan.", "Anggota dewan menyusun UU demi kemaslahatan rakyat luas, bukan demi keuntungan partai/sponsor politiknya."],
            ["8", "Musyawarah dilakukan dengan akal sehat dan sesuai dengan hati nurani yang luhur.", "Menggunakan data ilmiah dan argumen logis saat rapat, bukan teriakan emosional atau fitnah."],
            ["9", "Keputusan yang diambil harus dapat dipertanggungjawabkan secara moral kepada Tuhan YME, menjunjung tinggi harkat dan martabat manusia, nilai-nilai kebenaran dan keadilan mengutamakan persatuan dan kesatuan demi kepentingan bersama.", "⚠️ JEBAKAN FAVORIT BKN! Walaupun ada kata 'Tuhan YME' dan 'harkat martabat', kalimat tentang 'PERTANGGUNGJAWABAN MORAL ATAS KEPUTUSAN MUSYAWARAH' adalah Butir ke-9 SILA KE-4!"],
            ["10", "Memberikan kepercayaan kepada wakil-wakil yang dipercayai untuk melaksanakan permusyawaratan.", "Berpartisipasi aktif menggunakan hak pilih dalam Pemilu (tidak golput) dan menyampaikan aspirasi melalui wakil rakyat (DPR/DPRD)."]
          ]
        },
        alertBox: {
          type: "warning",
          title: "Waspada Jebakan Nomor 1 di Soal Sila ke-4!",
          text: "Jika soal berbunyi: 'Seorang pemimpin mengambil keputusan hasil musyawarah yang dapat dipertanggungjawabkan secara moral kepada Tuhan Yang Maha Esa...' -> JANGAN pilih Sila ke-1! Itu adalah bunyi persis Butir ke-9 SILA KE-4!"
        }
      },
      {
        heading: "3. Nilai Instrumental Sila ke-4 dalam UUD 1945 & Bentuk Penyimpangannya",
        content: "Berikut pasal-pasal UUD 1945 yang menjadi penjabaran Sila ke-4 beserta bentuk pelanggarannya:",
        points: [
          "Pasal 1 ayat (2) UUD 1945: Kedaulatan berada di tangan rakyat dan dilaksanakan menurut Undang-Undang Dasar.",
          "Pasal 2 & Pasal 3 UUD 1945 (Lembaga MPR), Pasal 19–22B (DPR), Pasal 22C–22D (DPD).",
          "Pasal 22E UUD 1945: Pemilihan Umum dilaksanakan secara langsung, umum, bebas, rahasia, jujur, dan adil (Luber Jurdil) setiap lima tahun sekali.",
          "Pasal 28 UUD 1945: Kemerdekaan berserikat dan berkumpul, mengeluarkan pikiran dengan lisan dan tulisan dan sebagainya ditetapkan dengan undang-undang.",
          "Bentuk Penyimpangan Sila ke-4: (1) Sikap Otoriter / Diktator (mengambil keputusan publik secara sepihak tanpa mendengar aspirasi); (2) Politik Uang (Money Politics / serangan fajar); (3) Demonstrasi anarkis & memaksakan kehendak; (4) Menolak hasil Pemilu/keputusan rapat yang sudah sah; (5) Penyalahgunaan wewenang oleh wakil rakyat."
        ]
      }
    ],
    quickTricks: [
      {
        title: "Jembatan Keledai 10 Butir Sila 4: 'WARGA-JANGAN PAKSA-MUSYAWARAH-KELUARGA-TERIMA-AKAL-TANGGungJAWAB-WAKIL'",
        mnemonic: "WARGA sama (1) | JANGAN PAKSA kehendak (2) | MUSYAWARAH mufakat (3) | Semangat KELUARGA (4) | TERIMA & laksanakan hasil (5-6) | Kepentingan bersama & AKAL sehat (7-8) | TANGGUNG JAWAB moral keputusan (9) | Percaya WAKIL rakyat (10)",
        normalWay: "Terjebak memilih Sila 1 saat melihat kata 'Tuhan' atau memilih Sila 2 saat melihat kata 'kedudukan sama'.",
        fastWay: "Cek KONTEKS UTAMANYA! Selama konteks ceritanya adalah PENGAMBILAN KEPUTUSAN BERSAMA, RAPAT, PEMILU, ASPIRASI, DEMOKRASI, atau PERWAKILAN -> Kunci Sila ke-4!"
      },
      {
        title: "Rumus Menentukan Sikap Terbaik dalam Soal Konflik Rapat / Perbedaan Pendapat",
        mnemonic: "DENGARKAN ARGUMEN -> MUSYAWARAH AKAL SEHAT -> JIKA BUNTU VOTING SAH -> TERIMA & LAKSANAKAN BERSAMA",
        normalWay: "Memilih opsi 'walk-out dari ruangan rapat' atau 'meminta ketua langsung memutuskan sendiri agar cepat selesai'.",
        fastWay: "Dalam soal cerita rapat yang alot: (1) Hindari walk-out/marah; (2) Hindari keputusan otoriter sepihak; (3) Pilih opsi yang membuka ruang dialog/musyawarah, atau jika sudah diputuskan secara sah, pilih opsi menerima dengan lapang dada dan ikut melaksanakan!"
      }
    ],
    workedExamples: [
      {
        question: "Dalam rapat paripurna penyusunan peraturan daerah, terjadi perdebatan sengit antara dua fraksi mengenai alokasi anggaran pendidikan. Setelah musyawarah mufakat diupayakan secara maksimal namun tetap menemui jalan buntu, pimpinan sidang akhirnya mengambil keputusan melalui pemungutan suara (voting) sesuai tata tertib sidang. Fraksi yang kalah suara tetap menghormati hasil voting tersebut dan turut mengawal pelaksanaan perda hingga tuntas. Sikap fraksi yang kalah tersebut mencerminkan pengamalan Pancasila khususnya...",
        options: [
          "A. Sila Pertama",
          "B. Sila Kedua",
          "C. Sila Ketiga",
          "D. Sila Keempat",
          "E. Sila Kelima"
        ],
        answer: "D. Sila Keempat",
        normalExplanation: "Menghormati dan menjunjung tinggi setiap keputusan yang dicapai serta menerima dan melaksanakan hasil keputusan bersama dengan itikad baik dan rasa tanggung jawab merupakan butir ke-5 dan ke-6 Sila Keempat Pancasila.",
        fastTrickExplanation: "Konteks: 'Rapat paripurna', 'musyawarah', 'voting sah', dan 'menerima hasil keputusan dengan itikad baik' -> 100% Sila ke-4 (Opsi D)!"
      },
      {
        question: "Seorang bupati memastikan bahwa setiap kebijakan daerah yang diputuskan dalam rapat koordinasi telah melalui kajian ilmiah yang matang serta dapat dipertanggungjawabkan secara moral kepada Tuhan Yang Maha Esa dan menjunjung tinggi nilai kebenaran serta keadilan. Tindakan bupati tersebut merupakan implementasi butir pengamalan Pancasila, yaitu...",
        options: [
          "A. Sila ke-1 Butir ke-1",
          "B. Sila ke-2 Butir ke-8",
          "C. Sila ke-3 Butir ke-1",
          "D. Sila ke-4 Butir ke-8 dan ke-9",
          "E. Sila ke-5 Butir ke-2"
        ],
        answer: "D. Sila ke-4 Butir ke-8 dan ke-9",
        normalExplanation: "Kajian ilmiah yang rasional adalah wujud musyawarah dengan akal sehat (Butir 8 Sila 4), dan kalimat 'Keputusan yang diambil harus dapat dipertanggungjawabkan secara moral kepada Tuhan YME...' adalah bunyi eksak Butir ke-9 Sila Keempat.",
        fastTrickExplanation: "Ingat peringatan jebakan kita! Kalimat 'Keputusan yang diambil dapat dipertanggungjawabkan secara moral kepada Tuhan YME' adalah Butir ke-9 SILA KE-4!"
      },
      {
        question: "Praktik politik uang (money politics) dalam pemilihan kepala desa di mana calon kepala desa membagikan uang tunai kepada warga agar memilih dirinya merupakan pelanggaran serius terhadap nilai demokrasi pada Sila Keempat karena...",
        options: [
          "A. Mengurangi jumlah uang tunai yang beredar di bank daerah",
          "B. Merusak kemurnian kedaulatan rakyat, memanipulasi hati nurani pemilih, serta menghasilkan pemimpin yang tidak dapat dipertanggungjawabkan secara moral",
          "C. Membuat warga desa menjadi terlalu kaya secara mendadak",
          "D. Menghilangkan kebebasan warga untuk memeluk agama",
          "E. Menghentikan perdagangan ekspor-impor antarnegara"
        ],
        answer: "B. Merusak kemurnian kedaulatan rakyat, memanipulasi hati nurani pemilih, serta menghasilkan pemimpin yang tidak dapat dipertanggungjawabkan secara moral",
        normalExplanation: "Politik uang mencederai asas Pemilu Luber Jurdil dan bertentangan dengan nilai hikmat kebijaksanaan (akal sehat dan hati nurani yang luhur) serta tanggung jawab moral dalam Sila Keempat.",
        fastTrickExplanation: "Politik uang = Merusak demokrasi, kedaulatan rakyat, dan hati nurani pemilih -> Langsung pilih Opsi B!"
      }
    ],
    quiz: [
      {
        id: "twk-f51-q1",
        type: "TWK",
        question: "Sebagai ketua panitia kegiatan peringatan HUT RI di kelurahan, Dimas tidak langsung menentukan sendiri jenis perlombaan yang akan digelar, melainkan mengundang perwakilan pemuda dan ketua RT untuk berdiskusi bersama dalam suasana keakraban. Sikap Dimas mencerminkan pengamalan Sila Keempat Pancasila, yaitu...",
        options: [
          { label: "A", text: "Mengutamakan musyawarah dalam mengambil keputusan untuk kepentingan bersama dengan semangat kekeluargaan", score: 5 },
          { label: "B", text: "Gemar melakukan kegiatan kemanusiaan bagi korban bencana", score: 0 },
          { label: "C", text: "Tidak memaksakan suatu agama kepada orang lain", score: 0 },
          { label: "D", text: "Mengembangkan sikap hidup hemat dan tidak bergaya hidup mewah", score: 0 },
          { label: "E", text: "Memelihara ketertiban dunia berdasarkan kemerdekaan", score: 0 }
        ],
        explanation: "Mengundang perwakilan warga untuk berdiskusi mengambil keputusan bersama dalam suasana keakraban adalah implementasi butir ke-3 dan ke-4 Sila Keempat Pancasila."
      },
      {
        id: "twk-f51-q2",
        type: "TWK",
        question: "Ketika menyampaikan kritik terhadap kebijakan pemerintah daerah, sekelompok mahasiswa memilih jalur audiensi resmi dengan DPRD disertai naskah akademik yang berisi solusi rasional, alih-alih melakukan aksi perusakan pagar kantor pemerintahan. Tindakan mahasiswa tersebut sesuai dengan Sila Keempat Pancasila karena...",
        options: [
          { label: "A", text: "Menyampaikan aspirasi melalui lembaga perwakilan dengan akal sehat, hati nurani luhur, dan tidak memaksakan kehendak secara anarkis", score: 5 },
          { label: "B", text: "Menghilangkan hak warga negara lain untuk berbicara", score: 0 },
          { label: "C", text: "Mengutamakan produk luar negeri dibandingkan produk lokal", score: 0 },
          { label: "D", text: "Menyerahkan seluruh urusan negara kepada pihak asing", score: 0 },
          { label: "E", text: "Menolak seluruh hasil pemilihan umum yang sah", score: 0 }
        ],
        explanation: "Berdiskusi melalui lembaga perwakilan (DPRD) dengan argumen rasional (naskah akademik) tanpa kekerasan mencerminkan butir ke-2, ke-8, dan ke-10 Sila Keempat Pancasila."
      },
      {
        id: "twk-f51-q3",
        type: "TWK",
        question: "Perhatikan butir pengamalan Pancasila berikut:\n'Keputusan yang diambil harus dapat dipertanggungjawabkan secara moral kepada Tuhan Yang Maha Esa, menjunjung tinggi harkat dan martabat manusia, nilai-nilai kebenaran dan keadilan mengutamakan persatuan dan kesatuan demi kepentingan bersama.'\nButir tersebut merupakan bagian dari pengamalan Pancasila...",
        options: [
          { label: "A", text: "Sila Pertama", score: 0 },
          { label: "B", text: "Sila Kedua", score: 0 },
          { label: "C", text: "Sila Ketiga", score: 0 },
          { label: "D", text: "Sila Keempat", score: 5 },
          { label: "E", text: "Sila Kelima", score: 0 }
        ],
        explanation: "Ini adalah butir ke-9 pada Sila Keempat Pancasila. Subjek utamanya adalah 'Keputusan yang diambil (dalam musyawarah)', yang menunjukkan bagaimana Sila ke-4 dijiwai oleh Sila 1, 2, dan 3."
      },
      {
        id: "twk-f51-q4",
        type: "TWK",
        question: "Seorang kepala bagian marah besar dan mengancam akan memotong insentif bawahannya apabila mereka berani menyampaikan pendapat yang berbeda dengan usulannya di dalam rapat evaluasi bulanan. Perilaku kepala bagian tersebut melanggar Sila Keempat Pancasila terutama butir...",
        options: [
          { label: "A", text: "Tidak boleh memaksakan kehendak kepada orang lain", score: 5 },
          { label: "B", text: "Sanggup dan rela berkorban untuk kepentingan negara", score: 0 },
          { label: "C", text: "Membina kerukunan hidup di antara sesama umat beragama", score: 0 },
          { label: "D", text: "Menghargai hasil karya orang lain yang bermanfaat", score: 0 },
          { label: "E", text: "Gemar melakukan kegiatan kemanusiaan", score: 0 }
        ],
        explanation: "Mengancam bawahan agar tidak berani berpendapat dalam rapat merupakan tindakan otoriter yang melanggar butir ke-2 Sila Keempat: 'Tidak boleh memaksakan kehendak kepada orang lain.'"
      },
      {
        id: "twk-f51-q5",
        type: "TWK",
        question: "Pasal dalam UUD Negara Republik Indonesia Tahun 1945 yang menjadi landasan konstitusional (nilai instrumental) Sila Keempat Pancasila mengenai kemerdekaan berserikat, berkumpul, dan mengeluarkan pikiran dengan lisan maupun tulisan adalah...",
        options: [
          { label: "A", text: "Pasal 28", score: 5 },
          { label: "B", text: "Pasal 29 ayat (1)", score: 0 },
          { label: "C", text: "Pasal 30 ayat (1)", score: 0 },
          { label: "D", text: "Pasal 33 ayat (1)", score: 0 },
          { label: "E", text: "Pasal 35", score: 0 }
        ],
        explanation: "Pasal 28 UUD 1945 berbunyi: 'Kemerdekaan berserikat dan berkumpul, mengeluarkan pikiran dengan lisan dan tulisan dan sebagainya ditetapkan dengan undang-undang.'"
      }
    ]
  },

  // ==========================================================================
  // MODUL KOMPARASI MASTER: PERBANDINGAN SILA 1 S/D 5 (PELENGKAP SILA 5)
  // ==========================================================================
  {
    id: "twk-pancasila-pengamalan",
    category: "TWK",
    subCategory: "Pilar Negara (Pancasila & UUD 1945)",
    title: "Rangkuman Komparasi Sila 1 s/d Sila 5 & Pendalaman Sila ke-5 (Keadilan Sosial)",
    subtitle: "Tabel perbandingan cepat membedakan Sila 1, 2, 3, 4, dan 5 beserta 11 Butir Sila Kelima",
    youtubeUrl: "https://www.youtube.com/watch?v=iaZ2cwwz7ZI",
    youtubeId: "iaZ2cwwz7ZI",
    duration: "25 Menit",
    difficulty: "Rangkuman Pamungkas Pancasila",
    bknKeywords: [
      "Sila 1 (7 Butir): Keyakinan, Toleransi Ibadah, Tidak Memaksakan Agama",
      "Sila 2 (10 Butir): Kemanusiaan, Kesamaan Derajat (HAM), Tenggang Rasa, Tidak Semena-mena, Membela Kebenaran",
      "Sila 3 (7 Butir): Persatuan di atas Kepentingan Pribadi, Cinta Tanah Air, Rela Berkorban, Bhinneka Tunggal Ika",
      "Sila 4 (10 Butir): Musyawarah Mufakat, Menghargai Pendapat, Tidak Memaksakan Kehendak, Itikad Baik Menerima Hasil",
      "Sila 5 (11 Butir): Keseimbangan Hak & Kewajiban, Tidak Boros/Mewah, Kerja Keras, Menghargai Karya Orang Lain, Menolong Agar Mandiri"
    ],
    timestamps: [
      { time: "00:00", seconds: 0, label: "Peta Perbandingan 45 Butir Pancasila (Sila 1 s/d 5)" },
      { time: "06:00", seconds: 360, label: "Bedah 11 Butir Sila ke-5 (Keadilan Sosial)" }
    ],
    theorySections: [
      {
        heading: "1. Sebelas (11) Butir Resmi Sila ke-5 (Keadilan Sosial bagi Seluruh Rakyat Indonesia)",
        content: `Sebagai pelengkap Sila 1 s/d Sila 4 dari seri Fokus TWK, **Sila ke-5** dilambangkan dengan **Padi dan Kapas** (simbol pangan dan sandang sebagai syarat utama kemakmuran yang merata tanpa kesenjangan sosial). Sila ke-5 dijiwai dan diliputi oleh Sila ke-1, 2, 3, dan 4.`,
        points: [
          "1. Mengembangkan perbuatan yang luhur, yang mencerminkan sikap dan suasana kekeluargaan dan kegotongroyongan.",
          "2. Mengembangkan sikap adil terhadap sesama.",
          "3. Menjaga keseimbangan antara hak dan kewajiban.",
          "4. Menghormati hak orang lain (contoh: tidak menyerobot antrean, tidak memarkir mobil di trotoar pejalan kaki).",
          "5. Suka memberi pertolongan kepada orang lain agar dapat berdiri sendiri (contoh: pelatihan UMKM, pemberian kail bukan sekadar umpan).",
          "6. Tidak menggunakan hak milik untuk usaha-usaha yang bersifat pemerasan terhadap orang lain (contoh: praktik rentenir/lintah darat).",
          "7. Tidak menggunakan hak milik untuk hal-hal yang bersifat pemborosan dan gaya hidup mewah (hedonisme/flexing pejabat).",
          "8. Tidak menggunakan hak milik untuk bertentangan dengan atau merugikan kepentingan umum (contoh: merusak fasilitas publik, menimbun sembako).",
          "9. Suka bekerja keras.",
          "10. Suka menghargai hasil karya orang lain yang bermanfaat bagi kemajuan dan kesejahteraan bersama (anti-plagiarisme/anti-pembajakan).",
          "11. Suka melakukan kegiatan dalam rangka mewujudkan kemajuan yang merata dan berkeadilan sosial (Pasal 33 & 34 UUD 1945)."
        ],
        table: {
          headers: ["Kasus / Konteks Cerita", "Jika Fokusnya...", "Maka Masuk Sila..."],
          rows: [
            ["Bantuan Korban Bencana", "Menolong karena iba, empati sesama manusia, evakuasi nyawa", "Sila ke-2 (Kemanusiaan)"],
            ["Bantuan / Pemberdayaan", "Memberi pelatihan kerja, modal UMKM, perbaikan jembatan umum agar masyarakat mandiri", "Sila ke-5 (Keadilan Sosial)"],
            ["Konflik Antar Kelompok", "Mendamaikan demi menjaga keutuhan bangsa & mencegah perpecahan NKRI", "Sila ke-3 (Persatuan)"],
            ["Perbedaan Pendapat Rapat", "Menerima keputusan rapat dengan lapang dada meskipun usulannya ditolak", "Sila ke-4 (Kerakyatan)"],
            ["Fasilitas Umum / Pajak", "Membayar pajak tepat waktu, tidak merusak fasilitas umum, tidak pamer kemewahan (hedonisme)", "Sila ke-5 (Keadilan Sosial)"]
          ]
        }
      }
    ],
    quickTricks: [
      {
        title: "Trik Eliminasi 10 Detik: Rumus 'Tuhan - Manusia - Bangsa - Rapat - Rakyat'",
        mnemonic: "1-TUHAN & IBADAH | 2-EMPATI & HAM INDIVIDU | 3-KEUTUHAN NKRI & PRODUK LOKAL | 4-DEMOKRASI & MUSYAWARAH | 5-HAK PUBLIK, EKONOMI & ANTI BOROS",
        normalWay: "Membaca seluruh paragraf panjang berulang kali lalu mencoba menghafal ke-45 butir P4 satu per satu.",
        fastWay: "Langsung cari OBJEK yang dirugikan atau diuntungkan di kalimat terakhir soal: (1) Urusan ibadah/keyakinan = Sila 1; (2) Harkat martabat/nyawa/diskriminasi personal = Sila 2; (3) Persatuan/produk lokal/keutuhan bangsa = Sila 3; (4) Suara/keputusan bersama/aspirasi = Sila 4; (5) Fasilitas publik/kemiskinan/hak orang banyak/gaya hidup mewah = Sila 5."
      }
    ],
    workedExamples: [
      {
        question: "Seorang pejabat daerah menolak menggunakan mobil dinas mewah dan memilih mengalokasikan anggaran tersebut untuk memperbaiki akses jalan desa serta memberikan pelatihan wirausaha bagi warga kurang mampu agar mandiri secara ekonomi. Tindakan pejabat tersebut mencerminkan pengamalan Pancasila terutama sila ke...",
        options: [
          "A. Sila Pertama",
          "B. Sila Kedua",
          "C. Sila Ketiga",
          "D. Sila Keempat",
          "E. Sila Kelima"
        ],
        answer: "E. Sila Kelima",
        normalExplanation: "Pejabat tersebut menghindari gaya hidup mewah/pemborosan anggaran publik (butir 7) dan menggunakannya untuk pemerataan kesejahteraan sosial (jalan desa & pemberdayaan ekonomi warga agar mandiri - butir 5 & 11).",
        fastTrickExplanation: "Kata kunci di soal: 'menolak gaya hidup mewah/boros', 'fasilitas umum (jalan desa)', dan 'pelatihan agar mandiri secara ekonomi'. Ketiganya adalah mutlak butir Sila ke-5!"
      }
    ],
    quiz: [
      {
        id: "twk-q1",
        type: "TWK",
        question: "Pak Budi selalu berusaha menghargai hasil karya rekan kerjanya dengan tidak melakukan plagiarisme serta selalu memberikan apresiasi yang layak atas inovasi timnya. Sikap Pak Budi merupakan wujud pengamalan Pancasila sila ke...",
        options: [
          { label: "A", text: "Sila ke-1 (Ketuhanan Yang Maha Esa)", score: 0 },
          { label: "B", text: "Sila ke-2 (Kemanusiaan yang Adil dan Beradab)", score: 0 },
          { label: "C", text: "Sila ke-3 (Persatuan Indonesia)", score: 0 },
          { label: "D", text: "Sila ke-4 (Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan)", score: 0 },
          { label: "E", text: "Sila ke-5 (Keadilan Sosial bagi Seluruh Rakyat Indonesia)", score: 5 }
        ],
        explanation: "Menghargai hasil karya orang lain yang bermanfaat bagi kemajuan dan kesejahteraan bersama (termasuk tidak melakukan plagiarisme/pembajakan hak cipta) merupakan butir ke-10 pada Sila ke-5 Pancasila."
      },
      {
        id: "twk-q2",
        type: "TWK",
        question: "Tindakan menimbun minyak goreng dan masker kesehatan saat terjadi kelangkaan demi meraup keuntungan pribadi yang berlipat ganda sehingga menyengsarakan masyarakat luas merupakan pelanggaran terhadap Pancasila terutama sila ke...",
        options: [
          { label: "A", text: "Sila ke-1", score: 0 },
          { label: "B", text: "Sila ke-2", score: 0 },
          { label: "C", text: "Sila ke-3", score: 0 },
          { label: "D", text: "Sila ke-4", score: 0 },
          { label: "E", text: "Sila ke-5", score: 5 }
        ],
        explanation: "Menimbun barang kebutuhan pokok untuk pemerasan dan merugikan kepentingan umum secara langsung melanggar butir ke-6 dan ke-8 Sila Kelima Pancasila serta Pasal 33 UUD 1945."
      }
    ]
  },
  ...sangTutorTwkModules
];
