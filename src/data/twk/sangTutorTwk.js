// ============================================================================
// MODUL BELAJAR TWK — EKSTRAKSI PLAYLIST SANG TUTOR (11 VIDEO PUBLIK -> 5 MODUL)
// Mencakup: Bahasa Indonesia, Bela Negara, Integritas, Nasionalisme, & Pilar Negara
// ============================================================================

export const sangTutorTwkModules = [
  // --------------------------------------------------------------------------
  // 1. TWK BAHASA INDONESIA (Part 63)
  // --------------------------------------------------------------------------
  {
    id: "twk-st-bahasa-indonesia",
    category: "TWK",
    subCategory: "Bahasa Indonesia",
    title: "Master TWK Bahasa Indonesia: Ide Pokok, Kalimat Efektif, EYD V & Kata Baku",
    subtitle: "Ekstraksi Playlist Sang Tutor (Part 63) — Lumbung poin pasti keluar di 5–7 butir soal TWK",
    youtubeUrl: "https://www.youtube.com/watch?v=2CZGR4do8AY",
    youtubeId: "2CZGR4do8AY",
    playlistVideos: [
      { id: "2CZGR4do8AY", label: "Part 63: TWK Bahasa Indonesia (Ide Pokok & Kalimat Efektif)" }
    ],
    duration: "25 Menit",
    difficulty: "Pasti Keluar (5–7 Soal)",
    bknKeywords: [
      "Kalimat Utama vs Ide Pokok: Deduktif (awal), Induktif (akhir), Campuran (awal & akhir)",
      "Syarat Kalimat Efektif: Minimal S + P, Hemat (tidak pleonasme), Sejajar/Paralel, Logis",
      "Pemborosan Kata (Pleonasme) Wajib Coret: 'Para hadirin sekalian', 'Sangat indah sekali', 'Agar supaya'",
      "Penulisan Preposisi 'di' vs Awalan 'di-': Tempat = dipisah ('di kantor'), Kata Kerja Pasif = digabung ('diketik')",
      "Konjungsi Intrakalimat vs Antarkalimat: 'Sedangkan / Melainkan' di tengah kalimat; 'Oleh karena itu / Namun / Meskipun demikian' di awal kalimat diikuti koma (,)"
    ],
    timestamps: [
      { time: "00:00", seconds: 0, label: "Strategi Menjawab Soal Wacana Panjang Bahasa Indonesia" },
      { time: "05:30", seconds: 330, label: "Cara Cepat Menentukan Ide Pokok, Kalimat Utama & Simpulan" },
      { time: "12:15", seconds: 735, label: "Membedah Kesalahan Kalimat Efektif, EYD V & Kata Baku KBBI" }
    ],
    theorySections: [
      {
        heading: "1. Peta Materi Wajib Soal TWK Bahasa Indonesia (5–7 Butir Soal)",
        content: `Dalam struktur TWK modern, sub-tes **Bahasa Indonesia** adalah bagian paling objektif dan paling mudah diprediksi karena mengacu pada kaidah baku **EYD Edisi V** dan **KBBI**. Menguasai 4 pilar utama di bawah ini mengamankan 25–35 poin TWK secara cepat:`,
        points: [
          "1. Ide Pokok & Kalimat Utama: Ide pokok adalah inti permasalahan paragraf (diambil dari kalimat utama). Ciri kalimat utama: bersifat umum dan dijelaskan oleh kalimat lain. Ciri kalimat penjelas: memuat kata rujukan ('hal ini', 'tersebut', 'ia'), contoh, atau rincian angka.",
          "2. Kalimat Efektif: Kalimat harus memiliki Subjek (S) dan Predikat (P) yang jelas. Hati-hati jebakan **kalimat tanpa subjek** karena diawali kata depan ('Bagi para peserta diharapkan...' -> SALAH, seharusnya tanpa kata 'Bagi').",
          "3. Kehematan & Kesejajaran (Paralelisme): Jangan mengulang kata bermakna jamak ('banyak rumah-rumah' -> 'banyak rumah') dan gunakan imbuhan yang setara dalam rincian ('memasak, mencuci, dan menyapu' -> bukan 'memasak, mencuci, dan penyapuan').",
          "4. EYD V (Tanda Baca & Kapital): Nama gelar di depan/belakang nama ditulis kapital dan dipisah koma (contoh: 'Dr. Budi Santoso, S.Kom., M.T.'). Huruf kapital juga dipakai pada nama geografi yang diikuti nama diri ('Sungai Bengawan Solo'), tetapi tidak jika hanya menyebut jenis ('berenang di sungai')."
        ],
        table: {
          headers: ["Bentuk Salah (Sering Jadi Jebakan)", "Bentuk Baku Sesuai EYD V / KBBI", "Alasan Kaidah"],
          rows: [
            ["Antri, Apotik, Analisa, Praktek, Resiko", "Antre, Apotek, Analisis, Praktik, Risiko", "Penyerapan kata baku sesuai KBBI terbaru"],
            ["Merubah, Menterjemahkan, Mensukseskan", "Mengubah, Menerjemahkan, Menyukseskan", "Hukum K-T-S-P luluh jika bertemu awalan me- dan huruf kedua vokal"],
            ["Di dalam rapat membahas... (tanpa S)", "Di dalam rapat dibahas... / Rapat membahas...", "Kata depan 'di' membuat frasa menjadi Keterangan, bukan Subjek"],
            ["Namun demikian, ia tetap berangkat.", "Namun, ia tetap berangkat. / Meskipun demikian, ...", "Konjungsi antarkalimat 'Namun' wajib diikuti tanda koma (,)"],
            ["Para bapak-bapak sekalian", "Bapak-bapak / Para bapak", "Pemborosan kata (pleonasme) bermakna jamak ganda"]
          ]
        },
        alertBox: {
          type: "warning",
          title: "Jebakan Hukum Peluluhan K-T-S-P (Sering Muncul di Ujian!)",
          text: "Huruf awal K, T, S, P pada kata dasar akan LULUH jika diberi imbuhan meN- dan huruf keduanya VOKAL: 'me + sapu = menyapu', 'me + ubah = mengubah' (bukan merubah!). Namun TIDAK LULUH jika berupa kluster konsonan ('me + kritik = mengkritik', 'me + proses = memproses'). Pengecualian khusus: 'mengkaji' (ilmu) vs 'mengaji' (Al-Qur'an), dan 'mempunyai'."
        }
      }
    ],
    quickTricks: [
      {
        title: "Trik 10 Detik Cari Ide Pokok: 'Cek Kalimat Pertama vs Kalimat Terakhir'",
        mnemonic: "KALIMAT 2 ADA 'INI / TERSEBUT' = IDE POKOK DI AWAL | KALIMAT AKHIR ADA 'JADI / OLEH KARENA ITU' = IDE POKOK DI AKHIR",
        normalWay: "Membaca seluruh wacana 10 kalimat secara perlahan lalu menebak rangkumannya secara keseluruhan.",
        fastWay: "Langsung lihat kalimat ke-2 dan kalimat paling akhir! Jika kalimat ke-2 dimulai kata tunjuk ('Hal ini', 'Kondisi tersebut'), maka kalimat ke-1 adalah kalimat utama (Deduktif). Jika kalimat terakhir diawali konjungsi simpulan ('Dengan demikian', 'Oleh sebab itu', 'Jadi'), kalimat terakhir adalah intinya (Induktif)."
      }
    ],
    workedExamples: [
      {
        question: "Manakah di antara kalimat berikut yang merupakan kalimat efektif sesuai kaidah EYD Edisi V?",
        options: [
          "A. Bagi seluruh peserta ujian CPNS diharap segera memasuki ruangan tes.",
          "B. Dalam rapat koordinasi kemarin membahas tentang peningkatan kualitas pelayanan publik.",
          "C. Pemerintah terus menggalakkan program digitalisasi pelayanan publik demi mewujudkan birokrasi yang transparan, cepat, dan akuntabel.",
          "D. Meskipun hujan deras melanda kota sejak pagi, tetapi para pegawai tetap berangkat tepat waktu.",
          "E. Para hadirin sekalian dimohon berdiri sejenak untuk menyanyikan lagu Indonesia Raya."
        ],
        answer: "C. Pemerintah terus menggalakkan program digitalisasi pelayanan publik demi mewujudkan birokrasi yang transparan, cepat, dan akuntabel.",
        normalExplanation: "Opsi A tidak memiliki Subjek karena didahului kata 'Bagi'. Opsi B juga kehilangan Subjek ('Dalam rapat...') dan boros ('membahas tentang'). Opsi D menggunakan konjungsi ganda ('Meskipun ... tetapi'). Opsi E mengalami pleonasme ganda ('Para hadirin sekalian'). Opsi C memiliki struktur S-P-O-K lengkap, hemat, dan sejajar.",
        fastTrickExplanation: "Coret cepat kata terlarang di awal kalimat: 'Bagi...' (A), 'Dalam...' (B), 'Meskipun... tetapi' (D), 'Para... sekalian' (E). Otomatis langsung ketemu Opsi C!"
      }
    ],
    quiz: [
      {
        id: "twk-st-bi-q1",
        type: "TWK",
        question: "Manakah kelompok kata berikut yang seluruhnya ditulis sesuai kaidah kata baku KBBI?",
        options: [
          { label: "A", text: "Sistem, Analisis, Risiko, Apotek, Praktik", score: 5 },
          { label: "B", text: "Sistim, Analisa, Resiko, Apotik, Praktek", score: 0 },
          { label: "C", text: "Sistem, Analisa, Risiko, Apotek, Praktek", score: 0 },
          { label: "D", text: "Sistem, Analisis, Resiko, Apotik, Praktik", score: 0 },
          { label: "E", text: "Sistim, Analisis, Risiko, Apotek, Praktik", score: 0 }
        ],
        explanation: "Kata baku yang tepat dalam KBBI adalah Sistem (bukan sistim), Analisis (bukan analisa), Risiko (bukan resiko), Apotek (bukan apotik), dan Praktik (bukan praktek)."
      },
      {
        id: "twk-st-bi-q2",
        type: "TWK",
        question: "Penulisan gelar akademik dan nama diri yang paling tepat sesuai EYD Edisi V adalah...",
        options: [
          { label: "A", text: "Drs. Hendra Wijaya M.Kom", score: 0 },
          { label: "B", text: "Drs. Hendra Wijaya, M.Kom.", score: 5 },
          { label: "C", text: "Drs, Hendra Wijaya, M.Kom.", score: 0 },
          { label: "D", text: "Drs. Hendra Wijaya. M.Kom.", score: 0 },
          { label: "E", text: "Drs Hendra Wijaya, M.Kom", score: 0 }
        ],
        explanation: "Gelar di depan nama diakhiri tanda titik (Drs.), sedangkan antara nama diri dan gelar di belakangnya wajib dipisah dengan tanda koma (,) dan setiap singkatan gelar diakhiri titik (M.Kom.)."
      },
      {
        id: "twk-st-bi-q3",
        type: "TWK",
        question: "Perhatikan kalimat berikut: 'Untuk menjaga kualitas layanan, instansi perlu memroses laporan warga secara cepat dan mensosialisasikan aturan baru tersebut.' Kata berimbuhan yang TIDAK baku pada kalimat tersebut adalah...",
        options: [
          { label: "A", text: "menjaga dan layanan", score: 0 },
          { label: "B", text: "memroses dan mensosialisasikan", score: 5 },
          { label: "C", text: "kualitas dan instansi", score: 0 },
          { label: "D", text: "laporan dan aturan", score: 0 },
          { label: "E", text: "secara dan tersebut", score: 0 }
        ],
        explanation: "Kata dasar berawalan konsonan ganda 'pr-' (proses) tidak luluh sehingga menjadi 'memproses' (bukan memroses). Sedangkan kata 'sosialisasi' berawalan S diikuti vokal O sehingga wajib luluh menjadi 'menyosialisasikan' (bukan mensosialisasikan)."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 2. TWK BELA NEGARA (Part 23, 31, 57)
  // --------------------------------------------------------------------------
  {
    id: "twk-st-bela-negara",
    category: "TWK",
    subCategory: "Bela Negara",
    title: "Master TWK Bela Negara: 5 Nilai Dasar, Ancaman Nir-Militer & Peran ASN",
    subtitle: "Ekstraksi Playlist Sang Tutor (Part 23, 31, & 57) — Membedah implementasi bela negara sesuai profesi di era modern",
    youtubeUrl: "https://www.youtube.com/watch?v=5tGqjdoAl2o",
    youtubeId: "5tGqjdoAl2o",
    playlistVideos: [
      { id: "5tGqjdoAl2o", label: "Part 57: TWK Bela Negara Terbaru" },
      { id: "cjTgVVHmkyI", label: "Part 31: Soal HOTS Bela Negara" },
      { id: "tnobwXhNfSE", label: "Part 23: Full Penalaran Bela Negara & Pilar Negara" }
    ],
    duration: "35 Menit",
    difficulty: "Pasti Keluar (4–6 Soal)",
    bknKeywords: [
      "Landasan Konstitusi: Pasal 27 ayat (3) (Hak & Kewajiban Bela Negara) & Pasal 30 ayat (1)-(2) (Sistem Hankamrata: TNI-Polri komponen utama, Rakyat komponen pendukung)",
      "5 Nilai Dasar Bela Negara (UU No. 23 Tahun 2019): (1) Cinta Tanah Air, (2) Sadar Berbangsa & Bernegara, (3) Setia pada Pancasila sebagai Ideologi, (4) Rela Berkorban untuk Bangsa & Negara, (5) Kemampuan Awal Bela Negara",
      "Bentuk Pengabdian Sesuai Profesi: Dokter mengabdi di daerah 3T, Programmer/IT ASN mengamankan data pemerintah dari serangan siber, Guru mengajar di perbatasan",
      "Bela Negara Fisik vs Non-Fisik: Fisik = angkat senjata / wajib militer jika negara darurat | Non-Fisik = melawan hoaks, menjaga lingkungan, membayar pajak, berprestasi mengharumkan bangsa"
    ],
    timestamps: [
      { time: "00:00", seconds: 0, label: "5 Nilai Dasar Bela Negara & Dasar Hukumnya" },
      { time: "07:20", seconds: 440, label: "Perbedaan Bela Negara vs Nasionalisme vs Patriotisme dalam Soal Cerita" },
      { time: "14:40", seconds: 880, label: "Studi Kasus Bela Negara Nir-Militer & Ancaman Siber" }
    ],
    theorySections: [
      {
        heading: "1. Lima (5) Nilai Dasar Bela Negara & Perbedaannya dengan Nasionalisme",
        content: `Banyak peserta CPNS tertukar antara soal **Bela Negara** dan **Nasionalisme**. Kunci perbedaannya adalah: **Bela Negara selalu mengandung unsur KESADARAN & TINDAKAN NYATA menghadapi ancaman terhadap kedaulatan/keutuhan negara (baik ancaman fisik maupun non-fisik seperti disinformasi, kemiskinan, serangan siber, dan degradasi moral)** melalui **pengabdian sesuai profesi**.`,
        table: {
          headers: ["Nilai Dasar Bela Negara", "Indikator & Contoh Tindakan di Soal SKD"],
          rows: [
            ["1. Cinta Tanah Air", "Menjaga ruang hidup/lingkungan, melestarikan budaya, bangga memakai produk lokal, mengenal wilayah nusantara."],
            ["2. Kesadaran Berbangsa & Bernegara", "Mematuhi hukum & lalu lintas, taat membayar pajak, menggunakan hak pilih di pemilu, berpikir dan berbuat untuk kepentingan bangsa."],
            ["3. Setia pada Pancasila sebagai Ideologi Negara", "Menjadikan Pancasila pemersatu bangsa, menolak ideologi transnasional/radikalisme yang ingin mengganti dasar negara."],
            ["4. Rela Berkorban untuk Bangsa & Negara", "Mendahulukan kepentingan publik di atas pribadi/golongan, siap membantu korban bencana, bertugas di daerah terpencil/perbatasan."],
            ["5. Kemampuan Awal Bela Negara", "Memiliki kecerdasan emosional/intelektual, menjaga kesehatan jasmani-rohani, memiliki keterampilan profesi (misal keahlian IT/keamanan siber) untuk membela negara."]
          ]
        },
        alertBox: {
          type: "info",
          title: "Catatan Spesial untuk Lulusan S1 Informatika!",
          text: "Soal Bela Negara BKN saat ini sering mengangkat studi kasus ancaman SIBER (kebocoran data publik, serangan ransomware, penyebaran hoaks pemecah belah). Menjaga keamanan sistem informasi instansi dan melakukan literasi digital anti-hoaks merupakan wujud **Bela Negara Nir-Militer (Pengabdian Sesuai Profesi)**!"
        }
      }
    ],
    quickTricks: [
      {
        title: "Rumus 10 Detik: Membedakan Soal Nasionalisme vs Bela Negara",
        mnemonic: "IDENTITAS & KEBANGGAAN BUDAYA = NASIONALISME | PENGABDIAN PROFESI & HADAPI ANCAMAN NEGARA = BELA NEGARA",
        normalWay: "Bingung karena keduanya sama-sama menyebut istilah cinta tanah air dan rela berkorban.",
        fastWay: "Lihat konteks ceritanya! Jika soal membahas tentang menangkal ancaman (hoaks, narkoba, radikalisme, serangan siber, penyelundupan) atau mengabdi lewat keahlian profesi masing-masing -> Kunci BELA NEGARA!"
      }
    ],
    workedExamples: [
      {
        question: "Di era transformasi digital, serangan siber terhadap pusat data layanan publik serta penyebaran disinformasi di media sosial menjadi ancaman serius bagi stabilitas nasional. Sebagai seorang Pranata Komputer ASN, wujud kemampuan awal bela negara yang paling tepat dilakukan adalah...",
        options: [
          "A. Mengikuti pelatihan kemiliteran dasar dan meninggalkan tugas pemeliharaan sistem kantor",
          "B. Melakukan audit keamanan sistem secara berkala, menutup celah kerentanan aplikasi instansi, serta ikut mengedukasi literasi keamanan digital kepada pegawai",
          "C. Memutus seluruh koneksi internet kantor selamanya agar data tidak diretas",
          "D. Menyebarkan balik berita tandingan yang belum terverifikasi kebenarannya",
          "E. Membiarkan tim vendor luar negeri sepenuhnya memegang kendali akses server rahasia negara"
        ],
        answer: "B. Melakukan audit keamanan sistem secara berkala, menutup celah kerentanan aplikasi instansi, serta ikut mengedukasi literasi keamanan digital kepada pegawai",
        normalExplanation: "Sesuai UU No. 23 Tahun 2019, salah satu wujud nyata Bela Negara di era modern adalah pengabdian sesuai profesi untuk menghadapi ancaman non-militer (ancaman siber).",
        fastTrickExplanation: "Posisikan sesuai profesi (Prakom ASN) dan cari tindakan solutif menghadapi ancaman siber -> Opsi B paling tepat, profesional, dan sistemis!"
      }
    ],
    quiz: [
      {
        id: "twk-st-bn-q1",
        type: "TWK",
        question: "Berdasarkan Pasal 30 ayat (2) UUD 1945, sistem pertahanan dan keamanan negara Indonesia dilaksanakan melalui Sishankamrata (Sistem Pertahanan dan Keamanan Rakyat Semesta). Dalam sistem tersebut, kedudukan warga negara selain TNI dan Polri adalah sebagai...",
        options: [
          { label: "A", text: "Komponen utama yang wajib memanggul senjata setiap hari", score: 0 },
          { label: "B", text: "Kekuatan pendukung / komponen cadangan dan komponen pendukung", score: 5 },
          { label: "C", text: "Pengganti seluruh fungsi kepolisian dan militer", score: 0 },
          { label: "D", text: "Pengamat netral yang tidak memiliki kewajiban bela negara", score: 0 },
          { label: "E", text: "Kekuatan tempur utama di garis depan perbatasan", score: 0 }
        ],
        explanation: "Pasal 30 ayat (2) UUD 1945 menyebutkan bahwa TNI dan Polri merupakan kekuatan utama dalam usaha pertahanan dan keamanan negara, sedangkan rakyat merupakan kekuatan pendukung."
      },
      {
        id: "twk-st-bn-q2",
        type: "TWK",
        question: "Seorang dokter muda lulusan perguruan tinggi ternama memilih mendaftar program penugasan khusus ke wilayah kepulauan terluar Indonesia yang kekurangan tenaga medis, meskipun penghasilannya lebih kecil dibandingkan praktik di kota besar. Sikap dokter tersebut paling mencerminkan nilai dasar bela negara...",
        options: [
          { label: "A", text: "Rela berkorban untuk bangsa dan negara melalui pengabdian sesuai profesi", score: 5 },
          { label: "B", text: "Sikap chauvinisme terhadap negara asing", score: 0 },
          { label: "C", text: "Pelanggaran terhadap hak asasi pribadi", score: 0 },
          { label: "D", text: "Upaya menghindari kewajiban membayar pajak", score: 0 },
          { label: "E", text: "Sikap primordialisme kedaerahan", score: 0 }
        ],
        explanation: "Bersedia mengorbankan kenyamanan pribadi demi melayani masyarakat di wilayah perbatasan/3T sesuai profesinya merupakan wujud nyata nilai Rela Berkorban dalam Bela Negara."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 3. TWK INTEGRITAS (Part 35, 52)
  // --------------------------------------------------------------------------
  {
    id: "twk-st-integritas",
    category: "TWK",
    subCategory: "Integritas",
    title: "Master TWK Integritas: 9 Nilai Antikorupsi KPK & Trik Eliminasi Soal Etika ASN",
    subtitle: "Ekstraksi Playlist Sang Tutor (Part 35 & 52) — Menguasai 9 Nilai Integritas & pembeda Suap vs Gratifikasi vs Pemerasan",
    youtubeUrl: "https://www.youtube.com/watch?v=dUIYwghpxFs",
    youtubeId: "dUIYwghpxFs",
    playlistVideos: [
      { id: "dUIYwghpxFs", label: "Part 52: Soal TWK Integritas Terbaru" },
      { id: "YQPFsyYYS9I", label: "Part 35: Trik Eliminasi Jawaban Topik Integritas" }
    ],
    duration: "30 Menit",
    difficulty: "Pasti Keluar (4–6 Soal)",
    bknKeywords: [
      "Definisi Inti Integritas: Kesesuaian antara perkataan, hati nurani, dan perbuatan nyata meskipun tidak ada yang mengawasi",
      "9 Nilai Integritas KPK (JUMAT BERSEPEDA): Jujur, Mandiri, Tanggung Jawab, Berani, Sederhana, Peduli, Disiplin, Adil, Kerja Keras",
      "3 Dimensi KPK: (1) Inti (Jujur, Disiplin, Tanggung Jawab), (2) Etos Kerja (Mandiri, Kerja Keras, Sederhana), (3) Sikap (Berani, Peduli, Adil)",
      "Beda Suap vs Gratifikasi vs Pemerasan: Suap = ada kesepakatan transaksional sebelum/saat keputusan | Gratifikasi = pemberian hadiah terkait jabatan tanpa kesepakatan langsung (wajib lapor KPK maks 30 hari kerja) | Pemerasan = pejabat memaksa/mengancam meminta uang"
    ],
    timestamps: [
      { time: "00:00", seconds: 0, label: "Membedah 9 Nilai Integritas KPK dalam Studi Kasus ASN" },
      { time: "08:15", seconds: 495, label: "Trik Eliminasi Opsi Jawaban Saat Dilema Etika & Konflik Kepentingan" },
      { time: "16:30", seconds: 990, label: "Perbedaan Suap, Gratifikasi, dan Pungli dalam Soal Cerita TWK" }
    ],
    theorySections: [
      {
        heading: "1. Sembilan (9) Nilai Integritas KPK (Wajib Hafal dengan Jembatan Keledai!)",
        content: `Dalam soal TWK Integritas, BKN sering memberikan skenario dilema moral seorang pegawai/pejabat, lalu menanyakan **nilai integritas apa yang paling dominan** pada cerita tersebut. Kelompokkan 9 nilai integritas KPK ke dalam 3 kategori:`,
        table: {
          headers: ["Kelompok", "Nilai Integritas", "Ciri Khas Kasus pada Soal TWK"],
          rows: [
            ["Nilai Inti", "1. Jujur\n2. Disiplin\n3. Tanggung Jawab", "Jujur: tidak memanipulasi data/SPPD/absen meski tidak diawasi.\nDisiplin: taat waktu, aturan, dan SOP secara konsisten.\nTanggung Jawab: berani menanggung risiko atas kesalahan sendiri tanpa melempar ke bawahan."],
            ["Etos Kerja", "4. Mandiri\n5. Kerja Keras\n6. Sederhana", "Mandiri: menyelesaikan tugas tanpa selalu bergantung pada bantuan orang lain.\nKerja Keras: pantang menyerah mencapai target kerja.\nSederhana: tidak flexing/hedonisme, hidup sesuai kemampuan dan tidak pamer fasilitas dinas."],
            ["Nilai Sikap", "7. Berani\n8. Peduli\n9. Adil", "Berani: menolak perintah atasan yang melanggar hukum & melaporkan kecurangan (whistleblower).\nPeduli: sigap membantu rekan kerja/masyarakat kesulitan.\nAdil: tidak nepotisme, menilai objektif tanpa pilih kasih."]
          ]
        },
        alertBox: {
          type: "warning",
          title: "Jebakan Terbesar di Soal Integritas: 'Perintah Atasan vs Aturan Hukum!'",
          text: "Jika soal menceritakan atasan menyuruh Anda memanipulasi laporan keuangan atau meloloskan kerabatnya, JANGAN pilih opsi 'Mematuhi perintah atasan demi menjaga loyalitas' (Poin 0)! Seorang ASN berintegritas wajib **menolak secara santun berdasarkan peraturan perundang-undangan**!"
        }
      }
    ],
    quickTricks: [
      {
        title: "Jembatan Keledai 9 Nilai KPK: 'JU-DI-TA | MA-KER-SE | BE-PE-AD'",
        mnemonic: "INTI: JUjur - DIsiplin - TAwa (Tanggung Jawab) | ETOS: MAndiri - KERja keras - SEderhana | SIKAP: BErani - PEduli - ADil",
        normalWay: "Membingungkan apakah penolakan gratifikasi/suap masuk nilai Jujur atau Berani.",
        fastWay: "Lihat aksi utamanya: Jika menolak uang/hadiah diam-diam tanpa rekayasa laporan -> JUJUR. Jika secara terbuka menolak perintah curang atasan / melapor pelanggaran ke APIP/KPK -> BERANI! Jika membagi layanan sama rata tanpa pilih kasih -> ADIL!"
      }
    ],
    workedExamples: [
      {
        question: "Setelah selesai membantu proses pengurusan izin usaha secara cepat dan sesuai prosedur tanpa biaya tambahan, seorang pengusaha mengirimkan bingkisan parcel berisi gadget mahal ke rumah pribadi petugas pelayanan sebagai 'ucapan terima kasih'. Langkah paling berintegritas yang wajib dilakukan petugas tersebut adalah...",
        options: [
          "A. Menerimanya karena pemberian tersebut diberikan setelah proses izin selesai dan di luar jam kantor",
          "B. Menolak pemberian tersebut secara tegas dan sopan, atau melaporkannya kepada Unit Pengendali Gratifikasi (UPG) / KPK paling lambat 30 hari kerja jika terlanjur diterima",
          "C. Menerimanya lalu membagikannya kepada seluruh staf kantor agar adil",
          "D. Menukarnya dengan uang tunai agar lebih bermanfaat untuk keluarga",
          "E. Meminta pengusaha tersebut mengirimkannya ke rumah atasannya saja"
        ],
        answer: "B. Menolak pemberian tersebut secara tegas dan sopan, atau melaporkannya kepada Unit Pengendali Gratifikasi (UPG) / KPK paling lambat 30 hari kerja jika terlanjur diterima",
        normalExplanation: "Berdasarkan UU Tipikor, setiap pemberian yang berhubungan dengan jabatan dan berlawanan dengan kewajiban/tugas ASN termasuk Gratifikasi yang dianggap suap apabila tidak dilaporkan ke KPK dalam batas waktu 30 hari kerja.",
        fastTrickExplanation: "Ingat aturan baku KPK: Hadiah terkait jabatan = Gratifikasi -> Harus DITOLAK atau DILAPORKAN maks 30 hari kerja! Opsi A, C, D, E semua melegalkan gratifikasi, jadi otomatis gugur!"
      }
    ],
    quiz: [
      {
        id: "twk-st-int-q1",
        type: "TWK",
        question: "Seorang staf akuntansi menemukan adanya selisih dana pada laporan perjalanan dinas yang sengaja dinaikkan (mark-up) oleh kepala bidangnya. Meskipun mendapat tekanan untuk ikut menandatangani laporan tersebut agar cepat cair, ia menolak menandatangani dan melaporkannya melalui sistem pengaduan internal (whistleblowing system). Nilai integritas utama yang tercermin adalah...",
        options: [
          { label: "A", text: "Kesederhanaan", score: 0 },
          { label: "B", text: "Keberanian dan Kejujuran", score: 5 },
          { label: "C", text: "Kemandirian", score: 0 },
          { label: "D", text: "Kerja keras", score: 0 },
          { label: "E", text: "Kepedulian sosial", score: 0 }
        ],
        explanation: "Menolak memanipulasi data (Kejujuran) serta berani menghadapi tekanan atasan dengan melaporkan pelanggaran melalui jalur resmi (Keberanian) merupakan perwujudan nilai inti dan nilai sikap integritas."
      },
      {
        id: "twk-st-int-q2",
        type: "TWK",
        question: "Perbedaan mendasar antara tindak pidana 'Gratifikasi' dan 'Suap' dalam konteks hukum antikorupsi di Indonesia terletak pada...",
        options: [
          { label: "A", text: "Gratifikasi hanya berupa makanan, sedangkan suap berupa uang tunai", score: 0 },
          { label: "B", text: "Suap melibatkan kesepakatan timbal balik (transaksional) untuk memengaruhi keputusan jabatan, sedangkan gratifikasi bersifat pemberian sepihak terkait jabatan tanpa kesepakatan langsung", score: 5 },
          { label: "C", text: "Gratifikasi diperbolehkan sepenuhnya oleh hukum tanpa perlu dilaporkan", score: 0 },
          { label: "D", text: "Suap hanya berlaku di sektor swasta, sedangkan gratifikasi di sektor publik", score: 0 },
          { label: "E", text: "Keduanya tidak memiliki perbedaan hukum sama sekali", score: 0 }
        ],
        explanation: "Suap ditandai oleh adanya pertemuan kehendak/kesepakatan transaksional antara pemberi dan penerima untuk berbuat atau tidak berbuat sesuatu dalam jabatannya. Gratifikasi adalah pemberian dalam arti luas kepada pegawai negeri/penyelenggara negara terkait jabatannya."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 4. TWK NASIONALISME (Part 27, 32, 48)
  // --------------------------------------------------------------------------
  {
    id: "twk-st-nasionalisme",
    category: "TWK",
    subCategory: "Nasionalisme",
    title: "Master TWK Nasionalisme: Sejarah Kebangkitan Nasional, Identitas Bangsa & Sikap ASN",
    subtitle: "Ekstraksi Playlist Sang Tutor (Part 27, 32, & 48) — Membedah esensi nasionalisme positif vs etnosentrisme & chauvinisme",
    youtubeUrl: "https://www.youtube.com/watch?v=lu14DJgXreQ",
    youtubeId: "lu14DJgXreQ",
    playlistVideos: [
      { id: "lu14DJgXreQ", label: "Part 48: TWK Nasionalisme Selalu Keluar" },
      { id: "qpz6RZNISmo", label: "Part 32: Soal HOTS Nasionalisme" },
      { id: "n4dKD6Tbf-s", label: "Part 27: Pendalaman Soal Nasionalisme" }
    ],
    duration: "32 Menit",
    difficulty: "Pasti Keluar (4–6 Soal)",
    bknKeywords: [
      "3 Tonggak Sejarah Nasionalisme Indonesia: (1) Budi Utomo 20 Mei 1908 (Kebangkitan Nasional / Organisasi modern pertama), (2) Sumpah Pemuda 28 Oktober 1928 (Persatuan Satu Nusa-Bangsa-Bahasa), (3) Proklamasi 17 Agustus 1945",
      "Nasionalisme Arti Luas vs Sempit: Luas = Cinta tanah air sekaligus menghargai bangsa lain (sesuai Pancasila) | Sempit (Chauvinisme) = Mengagung-agungkan bangsa sendiri & merendahkan bangsa lain",
      "Peran ASN sebagai Perekat Bangsa (UU ASN): Bersikap netral dari politik praktis, melayani tanpa diskriminasi suku/agama/daerah, mempromosikan persatuan NKRI",
      "Tantangan Nasionalisme Era Globalisasi: Lunturnya budaya lokal, konsumerisme barang impor, polarisasi media sosial, serta sikap apatis generasi muda"
    ],
    timestamps: [
      { time: "00:00", seconds: 0, label: "Konsep Dasar Nasionalisme dalam Kisi-Kisi BKN" },
      { time: "06:45", seconds: 405, label: "Makna Sejarah Pergerakan Nasional (Budi Utomo, Indische Partij, Sumpah Pemuda)" },
      { time: "14:20", seconds: 860, label: "Bedah Kasus Sikap Nasionalisme ASN & Generasi Muda" }
    ],
    theorySections: [
      {
        heading: "1. Dari Kesadaran Daerah Menjadi Kesadaran Nasional (Tonggak Sejarah)",
        content: `Sebelum tahun 1908, perlawanan bangsa Indonesia terhadap penjajah selalu gagal karena bersifat **kedaerahan, fisik semata, dan bergantung pada satu pemimpin karismatik**. Perubahan besar muncul sejak Era Pergerakan Nasional:`,
        table: {
          headers: ["Tonggak / Organisasi", "Tanggal & Tokoh", "Esensi yang Sering Diuji di Soal HOTS"],
          rows: [
            ["Budi Utomo", "20 Mei 1908 (Dr. Sutomo & Dr. Wahidin Sudirohusodo)", "Awal Kebangkitan Nasional: perjuangan bergeser dari senjata fisik menjadi organisasi modern, pendidikan, dan persatuan."],
            ["Indische Partij", "25 Desember 1912 (Tiga Serangkai: Douwes Dekker, Cipto Mangunkusumo, Suwardi Suryaningrat)", "Organisasi politik pertama yang secara tegas menuntut kemerdekaan penuh Indonesia (Hindia untuk rakyat Hindia) tanpa memandang ras/golongan."],
            ["Sumpah Pemuda", "28 Oktober 1928 (Kongres Pemuda II)", "Ikrar satu tanah air, satu bangsa, dan menjunjung bahasa persatuan Bahasa Indonesia (meleburkan organisasi kedaerahan seperti Jong Java, Jong Sumatranen Bond, dll.)."]
          ]
        },
        alertBox: {
          type: "info",
          title: "Kunci Soal Nasionalisme Kontemporer",
          text: "Soal nasionalisme modern jarang menanyakan tahun lahir tokoh. Sebaliknya, soal bertanya: 'Bagaimana mempraktikkan semangat Sumpah Pemuda di tengah maraknya hoaks dan polarisasi SARA saat ini?' Jawabannya selalu mengarah pada: mengutamakan bahasa/identitas persatuan, menolak politik identitas pemecah belah, dan melestarikan karya anak bangsa!"
        }
      }
    ],
    quickTricks: [
      {
        title: "Trik Membedakan Soal Nasionalisme: 'Cek Kata Kunci IDENTITAS & PERSATUAN'",
        mnemonic: "BANGGA BUDAYA/PRODUK LOKAL + SATUKAN KEBERAGAMAN + NETRALITAS ASN = NASIONALISME",
        normalWay: "Bingung membedakan opsi jawaban antara keterbukaan global dengan hilangnya jati diri bangsa.",
        fastWay: "Dalam era globalisasi, Nasionalisme BUKAN berarti anti terhadap teknologi/ilmu asing! Pilih opsi yang: 'Mengadopsi kemajuan teknologi/ilmu global yang positif TANPA meninggalkan jati diri serta nilai luhur budaya Indonesia.'"
      }
    ],
    workedExamples: [
      {
        question: "Menjelang pelaksanaan pemilihan kepala daerah, suhu politik di masyarakat kerap memanas dan memicu pengotak-ngotakan warga di media sosial berdasarkan isu kesukuan. Sebagai seorang ASN yang memegang teguh nilai nasionalisme dan fungsinya sebagai perekat pemersatu bangsa, sikap yang paling tepat adalah...",
        options: [
          "A. Ikut mengunggah dukungan kepada salah satu calon yang berasal dari daerah yang sama agar putra daerah menang",
          "B. Menjaga netralitas penuh dari politik praktis, tidak menyebarkan konten bernuansa SARA, serta tetap melayani seluruh masyarakat secara objektif",
          "C. Mengajak rekan kerja kantor untuk tidak menggunakan hak pilih (golput) sebagai bentuk protes",
          "D. Memblokir seluruh layanan publik bagi warga yang berbeda pilihan politik",
          "E. Membentuk kelompok diskusi khusus pegawai berdasarkan kesamaan suku"
        ],
        answer: "B. Menjaga netralitas penuh dari politik praktis, tidak menyebarkan konten bernuansa SARA, serta tetap melayani seluruh masyarakat secara objektif",
        normalExplanation: "Berdasarkan UU ASN, salah satu fungsi utama ASN adalah sebagai perekat dan pemersatu bangsa yang wajib menjaga netralitas politik serta menghindari sikap primordialisme SARA.",
        fastTrickExplanation: "Coret pilihan yang berpihak pada suku/calon tertentu (A, E), golput (C), atau diskriminatif (D). Pilihan B jelas mencerminkan netralitas dan pemersatu bangsa!"
      }
    ],
    quiz: [
      {
        id: "twk-st-nas-q1",
        type: "TWK",
        question: "Perbedaan mendasar perjuangan bangsa Indonesia sesudah tahun 1908 dibandingkan dengan perjuangan sebelum tahun 1908 adalah...",
        options: [
          { label: "A", text: "Sesudah 1908 bersifat kedaerahan dan dipimpin tokoh agama saja", score: 0 },
          { label: "B", text: "Sesudah 1908 bersifat nasional, terorganisasi secara modern melalui pendidikan dan politik, serta memiliki cita-cita Indonesia merdeka bersama", score: 5 },
          { label: "C", text: "Sebelum 1908 sudah menggunakan organisasi partai politik modern secara nasional", score: 0 },
          { label: "D", text: "Sesudah 1908 seluruh organisasi menolak jalur diplomasi dan pendidikan", score: 0 },
          { label: "E", text: "Tidak ada perbedaan karakter perjuangan sebelum dan sesudah 1908", score: 0 }
        ],
        explanation: "Sebelum 1908 perjuangan bersifat sporadis dan kedaerahan. Sejak 1908 (Kebangkitan Nasional), perjuangan mulai digerakkan oleh kaum terpelajar secara terorganisasi dan berskala nasional."
      },
      {
        id: "twk-st-nas-q2",
        type: "TWK",
        question: "Arus globalisasi membawa masuk berbagai budaya asing secara cepat melalui media sosial. Sikap nasionalisme generasi muda yang paling bijaksana dalam menghadapi fenomena tersebut adalah...",
        options: [
          { label: "A", text: "Menutup diri dari seluruh perkembangan teknologi informasi dari luar negeri", score: 0 },
          { label: "B", text: "Mengganti seluruh tradisi lokal dengan gaya hidup budaya populer asing agar dianggap modern", score: 0 },
          { label: "C", text: "Menyaring budaya asing yang masuk berdasarkan nilai Pancasila serta memanfaatkan teknologi digital untuk mempromosikan budaya nusantara ke dunia", score: 5 },
          { label: "D", text: "Menganggap budaya Indonesia lebih tinggi derajatnya dan melarang warga negara asing berkunjung", score: 0 },
          { label: "E", text: "Membiarkan generasi muda melupakan bahasa Indonesia dan bahasa daerah", score: 0 }
        ],
        explanation: "Nasionalisme modern bersifat terbuka namun selektif: mengambil hal positif dari globalisasi untuk kemajuan bangsa sekaligus tetap melestarikan dan mempromosikan jati diri budaya Indonesia."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 5. TWK PILAR NEGARA: UUD 1945, NKRI & BHINNEKA TUNGGAL IKA (Part 28, 47)
  // --------------------------------------------------------------------------
  {
    id: "twk-st-pilar-negara",
    category: "TWK",
    subCategory: "Pilar Negara (Pancasila & UUD 1945)",
    title: "Master TWK Pilar Negara: UUD 1945 (Amandemen & Lembaga Negara), NKRI & Bhinneka",
    subtitle: "Ekstraksi Playlist Sang Tutor (Part 28 & 47) — Hubungan Pancasila dengan Pembukaan UUD 1945, Tugas Lembaga Negara, & Otonomi Daerah",
    youtubeUrl: "https://www.youtube.com/watch?v=0yG4P_pc00w",
    youtubeId: "0yG4P_pc00w",
    playlistVideos: [
      { id: "0yG4P_pc00w", label: "Part 47: Soal HOTS Pilar Negara" },
      { id: "b2zWdp43Axo", label: "Part 28: Soal Pilar Negara Terbaru" }
    ],
    duration: "34 Menit",
    difficulty: "Pasti Keluar (4–6 Soal)",
    bknKeywords: [
      "4 Pilar Kehidupan Berbangsa: Pancasila (Dasar & Ideologi), UUD 1945 (Konstitusi), NKRI (Bentuk Negara), Bhinneka Tunggal Ika (Semboyan)",
      "Pembukaan UUD 1945 Tidak Dapat Diubah: Mengandung Pancasila sebagai kaidah fundamental negara (Staatsfundamentalnorm)",
      "Lembaga Negara Pasca Amandemen: Tidak ada lagi Lembaga Tertinggi Negara! MPR sejajar dengan Presiden, DPR, DPD, BPK, MA, MK, & KY (Sistem Check and Balances)",
      "Urusan Absolut Pemerintah Pusat (6 Urusan Tidak Didesentralisasikan): Politik Luar Negeri, Pertahanan, Keamanan, Yustisi, Moneter & Fiskal Nasional, Agama",
      "Pasal Kunci UUD 1945: Pasal 1 (Bentuk & Kedaulatan), Pasal 27–34 (Hak-Kewajiban Warga, HAM, Agama, Bela Negara, Pendidikan, Perekonomian & Kesejahteraan)"
    ],
    timestamps: [
      { time: "00:00", seconds: 0, label: "Hubungan Pancasila dan 4 Alinea Pembukaan UUD 1945" },
      { time: "07:50", seconds: 470, label: "Peta Kekuasaan Lembaga Negara (MPR, DPR, DPD, Presiden, MA, MK, BPK, KY)" },
      { time: "16:10", seconds: 970, label: "Konsep NKRI, Otonomi Daerah (6 Urusan Pusat) & Bhinneka Tunggal Ika" }
    ],
    theorySections: [
      {
        heading: "1. Peta Kekuasaan Lembaga Negara Setelah Amandemen UUD 1945",
        content: `Sejak UUD 1945 diamandemen 4 kali (1999–2002), **MPR tidak lagi berstatus sebagai Lembaga Tertinggi Negara**. Seluruh lembaga negara memiliki kedudukan yang **setara** dalam mekanisme saling mengawasi dan mengimbangi (*checks and balances*):`,
        table: {
          headers: ["Lembaga Negara", "Kewenangan Kunci yang Sering Diuji di TWK"],
          rows: [
            ["MPR", "Mengubah dan menetapkan UUD; melantik Presiden/Wapres; memberhentikan Presiden/Wapres atas usul DPR setelah putusan MK."],
            ["DPR", "Memegang kekuasaan membentuk UU (Legislasi), Anggaran (APBN), dan Pengawasan terhadap pemerintah (Hak Interpelasi, Angket, Menyatakan Pendapat)."],
            ["DPD", "Mengajukan & ikut membahas RUU yang berkaitan dengan Otonomi Daerah, hubungan pusat-daerah, serta pengelolaan SDA."],
            ["BPK", "Memeriksa pengelolaan dan tanggung jawab tentang keuangan negara; hasil pemeriksaan diserahkan ke DPR, DPD, dan DPRD."],
            ["MA (Mahkamah Agung)", "Mengadili pada tingkat kasasi dan menguji peraturan perundang-undangan DI BAWAH UU terhadap UU (contoh: PP, Perpres, Perda)."],
            ["MK (Mahkamah Konstitusi)", "Menguji UU terhadap UUD (Judicial Review), memutus sengketa kewenangan lembaga negara, pembubaran parpol, dan perselisihan hasil pemilu."],
            ["KY (Komisi Yudisial)", "Mengusulkan pengangkatan hakim agung serta menjaga kehormatan, keluhuran martabat, dan perilaku hakim."]
          ]
        },
        alertBox: {
          type: "warning",
          title: "Jebakan Terpopuler Lembaga Peradilan: Uji Materi MA vs MK!",
          text: "- Menguji **Undang-Undang (UU) terhadap UUD 1945** -> Wewenang **MK (Mahkamah Konstitusi)**.\n- Menguji **Peraturan di bawah UU (PP/Perpres/Perda) terhadap UU** -> Wewenang **MA (Mahkamah Agung)**!"
        }
      },
      {
        heading: "2. Urusan Pemerintah Pusat vs Otonomi Daerah (NKRI)",
        content: "Dalam Negara Kesatuan Republik Indonesia (Pasal 18 UUD 1945), pemerintah daerah menjalankan otonomi seluas-luasnya, **KECUALI 6 urusan pemerintahan absolut** yang mutlak menjadi kewenangan Pemerintah Pusat:",
        points: [
          "1. Politik Luar Negeri (contoh: pembukaan kedutaan, perjanjian internasional).",
          "2. Pertahanan (contoh: pengerahan TNI, pengadaan alutsista).",
          "3. Keamanan (contoh: Kepolisian/Polri, penegakan keamanan nasional).",
          "4. Yustisi (contoh: lembaga peradilan, kejaksaan, keimigrasian, pemberian grasi/amnesti).",
          "5. Moneter dan Fiskal Nasional (contoh: mencetak mata uang Rupiah, kebijakan suku bunga BI, pajak nasional).",
          "6. Agama (contoh: penetapan hari libur keagamaan nasional, penyelenggaraan haji)."
        ]
      }
    ],
    quickTricks: [
      {
        title: "Jembatan Keledai 6 Urusan Pusat (Otonomi Daerah): 'PO-PER-KE-YU-MO-A'",
        mnemonic: "POlitik Luar Negeri | PERtahanan | KEamanan | YUstisi | MOnetar & Fiskal | Agama",
        normalWay: "Menghafal puluhan daftar urusan wajib dan pilihan pemerintah daerah.",
        fastWay: "Cukup hafalkan 6 Urusan Pusat (PO-PER-KE-YU-MO-A). Selain 6 hal ini (misal: pendidikan, kesehatan, pariwisata, tata ruang, jalan daerah), semuanya boleh diurus oleh Pemerintah Daerah!"
      }
    ],
    workedExamples: [
      {
        question: "Sebuah organisasi masyarakat merasa suatu pasal di dalam Undang-Undang Cipta Kerja bertentangan dengan hak warga negara yang dijamin dalam UUD 1945. Upaya konstitusional yang tepat dilakukan untuk membatalkan pasal dalam Undang-Undang tersebut adalah mengajukan uji materi (judicial review) kepada...",
        options: [
          "A. Mahkamah Agung (MA)",
          "B. Mahkamah Konstitusi (MK)",
          "C. Komisi Yudisial (KY)",
          "D. Dewan Perwakilan Daerah (DPD)",
          "E. Badan Pemeriksa Keuangan (BPK)"
        ],
        answer: "B. Mahkamah Konstitusi (MK)",
        normalExplanation: "Sesuai Pasal 24C ayat (1) UUD 1945, Mahkamah Konstitusi berwenang mengadili pada tingkat pertama dan terakhir yang putusannya bersifat final untuk menguji Undang-Undang terhadap Undang-Undang Dasar.",
        fastTrickExplanation: "Menguji UU terhadap UUD = MK. (Sedangkan menguji Perda/PP terhadap UU = MA). Langsung pilih Opsi B!"
      }
    ],
    quiz: [
      {
        id: "twk-st-pn-q1",
        type: "TWK",
        question: "Apabila terdapat Peraturan Daerah (Perda) yang isinya dinilai bertentangan dengan Undang-Undang di atasnya, maka lembaga peradilan yang berwenang melakukan uji materi (judicial review) terhadap Perda tersebut adalah...",
        options: [
          { label: "A", text: "Mahkamah Konstitusi (MK)", score: 0 },
          { label: "B", text: "Mahkamah Agung (MA)", score: 5 },
          { label: "C", text: "Komisi Yudisial (KY)", score: 0 },
          { label: "D", text: "Majelis Permusyawaratan Rakyat (MPR)", score: 0 },
          { label: "E", text: "Dewan Perwakilan Rakyat (DPR)", score: 0 }
        ],
        explanation: "Peraturan Daerah (Perda) berkedudukan di bawah Undang-Undang (UU). Sesuai Pasal 24A UUD 1945, pengujian peraturan perundang-undangan di bawah UU terhadap UU merupakan wewenang Mahkamah Agung (MA)."
      },
      {
        id: "twk-st-pn-q2",
        type: "TWK",
        question: "Berdasarkan prinsip otonomi daerah dalam sistem NKRI, urusan pemerintahan berikut ini yang TETAP menjadi kewenangan absolut Pemerintah Pusat dan TIDAK dapat diserahkan kepada Pemerintah Daerah adalah...",
        options: [
          { label: "A", text: "Pengelolaan dinas pariwisata dan taman kota", score: 0 },
          { label: "B", text: "Kebijakan moneter, pencetakan uang, dan yustisi", score: 5 },
          { label: "C", text: "Pengelolaan puskesmas dan RSUD kabupaten", score: 0 },
          { label: "D", text: "Pengaturan pasar tradisional dan UMKM daerah", score: 0 },
          { label: "E", text: "Pembangunan jalan lingkungan dan irigasi desa", score: 0 }
        ],
        explanation: "Ingat rumus PO-PER-KE-YU-MO-A: Politik Luar Negeri, Pertahanan, Keamanan, Yustisi, Moneter & Fiskal, serta Agama adalah 6 urusan absolut Pemerintah Pusat."
      }
    ]
  }
];
