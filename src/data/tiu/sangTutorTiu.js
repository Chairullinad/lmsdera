// ============================================================================
// MODUL BELAJAR TIU — EKSTRAKSI PLAYLIST SANG TUTOR (35 VIDEO PUBLIK -> 8 MODUL)
// Mencakup: Pecahan, Pola Bilangan, Perbandingan Kuantitatif & Kecukupan Data,
// Analisa Tabel, Soal Cerita, Silogisme 3 Premis & Argumen, Analitis, & Figural
// ============================================================================

export const sangTutorTiuModules = [
  // --------------------------------------------------------------------------
  // 1. TIU NUMERIK: OPERASI HITUNG PECAHAN & TRIK CEPAT (Part 18, 24, 34, 50, 55)
  // --------------------------------------------------------------------------
  {
    id: "tiu-st-pecahan-hitung-cepat",
    category: "TIU",
    subCategory: "Numerik - Berhitung Cepat & Pecahan",
    title: "Master Hitung Cepat & Operasi Pecahan: Konversi Persen, Desimal & Sifat Aljabar",
    subtitle: "Ekstraksi Playlist Sang Tutor (Part 18, 24, 34, 50, & 55) — Cara menyelesaikan hitungan rumit dalam < 25 detik tanpa kalkulator",
    youtubeUrl: "https://www.youtube.com/watch?v=dki7QzHVUPs",
    youtubeId: "dki7QzHVUPs",
    playlistVideos: [
      { id: "dki7QzHVUPs", label: "Part 55: Kemampuan Numerik Terbaru" },
      { id: "h3uFV_h1SJw", label: "Part 50: Operasi Hitung Pecahan" },
      { id: "zEe56WI8CGA", label: "Part 34: Hitungan Detik Operasi Pecahan" },
      { id: "32QKwLs-7Ks", label: "Part 24: HOTS Operasi Hitung Pecahan" },
      { id: "G3iJB-KAGpk", label: "Part 18: Soal Pecahan Terbaru" }
    ],
    duration: "45 Menit",
    difficulty: "Pasti Keluar (4–6 Soal)",
    bknKeywords: [
      "Pecahan Istimewa Wajib Hafal: 1/2 = 0,5 (50%); 1/3 = 33,33%; 1/4 = 25%; 1/5 = 20%; 1/6 = 16,67%; 1/8 = 12,5%; 3/8 = 37,5%; 5/8 = 62,5%; 7/8 = 87,5%",
      "Pecahan Berulang (Kelipatan 1/9): 0,aaaa... = a/9; 0,ababab... = ab/99 (Contoh: 0,333... = 3/9 = 1/3; 0,121212... = 12/99 = 4/33)",
      "Identitas Aljabar Sakti: a² - b² = (a + b)(a - b) -> Sangat sering keluar untuk angka besar seperti 2026² - 2025²!",
      "Sifat Distributif: (a × b) + (a × c) = a × (b + c) — Jangan dikalikan satu per satu!",
      "Teknik Pendekatan (Approximation): Jika pilihan jawaban berjarak jauh, bulatkan desimal ke bilangan terdekat dan cek digit terakhir"
    ],
    timestamps: [
      { time: "00:00", seconds: 0, label: "Tabel Pecahan Istimewa & Konversi Persen–Desimal" },
      { time: "06:40", seconds: 400, label: "Trik Mengalikan & Membagi Pecahan Campuran Secara Cepat" },
      { time: "14:15", seconds: 855, label: "Penggunaan Sifat Distributif & Selisih Kuadrat (a² - b²)" }
    ],
    theorySections: [
      {
        heading: "1. Daftar Pecahan Istimewa & Rumus Hitung Cepat BKN",
        content: `Dalam ujian CAT TIU, soal berhitung cepat TIDAK dirancang untuk menguji seberapa kuat Anda menghitung perkalian bersusun panjang, melainkan menguji kejelian Anda mengenali **pola pecahan istimewa** dan **sifat aljabar**.`,
        table: {
          headers: ["Nilai Persen / Desimal", "Bentuk Pecahan Sederhana", "Contoh Pengaplikasian Cepat"],
          rows: [
            ["12,5% atau 0,125", "1/8", "12,5% × 640 = 640 / 8 = 80"],
            ["37,5% atau 0,375", "3/8", "37,5% × 240 = (3/8) × 240 = 90"],
            ["62,5% atau 0,625", "5/8", "62,5% × 160 = (5/8) × 160 = 100"],
            ["87,5% atau 0,875", "7/8", "87,5% × 800 = (7/8) × 800 = 700"],
            ["16,67% atau 0,1667", "1/6", "16,67% × 180 = 180 / 6 = 30"],
            ["33,33% atau 0,333...", "1/3", "33,33% × 900 = 300"],
            ["66,67% atau 0,666...", "2/3", "66,67% × 450 = (2/3) × 450 = 300"]
          ]
        },
        alertBox: {
          type: "info",
          title: "Aturan Emas Operasi Pecahan: 'KaBaTaKu' & Teknik Pendekatan!",
          text: "1) Selalu dahulukan Kurung, lalu Kali/Bagi, baru Tambah/Kurang.\n2) Ubah pembagian pecahan `A ÷ (B/C)` menjadi perkalian terbalik `A × (C/B)`.\n3) Jika opsi A–E selisihnya jauh (misal 12, 24, 48), jangan hitung koma secara persis—lakukan pembulatan angka!"
        }
      }
    ],
    quickTricks: [
      {
        title: "Trik Selisih Kuadrat & Distributif: Nol Perkalian Panjang!",
        mnemonic: "a² - b² = (a + b)(a - b)  |  (a × b) - (a × c) = a × (b - c)",
        normalWay: "Menghitung manual 125² - 124² = 15.625 - 15.376 = 249 (butuh 30 detik dan rawan salah hitung).",
        fastWay: "125² - 124² = (125 + 124) × (125 - 124) = 249 × 1 = 249! Selesai dalam 3 detik!"
      }
    ],
    workedExamples: [
      {
        question: "Hasil dari 37,5% × 0,48 + 5/8 × 0,48 adalah...",
        options: ["A. 0,24", "B. 0,36", "C. 0,48", "D. 0,60", "E. 0,96"],
        answer: "C. 0,48",
        normalExplanation: "37,5% = 3/8. Maka (3/8 × 0,48) + (5/8 × 0,48) = 0,18 + 0,30 = 0,48.",
        fastTrickExplanation: "Keluarkan angka kembar (0,48) dengan sifat distributif: 0,48 × (3/8 + 5/8) = 0,48 × (8/8) = 0,48 × 1 = 0,48! (< 5 detik)"
      }
    ],
    quiz: [
      {
        id: "tiu-st-pec-q1",
        type: "TIU",
        question: "Nilai dari 62,5% dari 320 ditambah 16,67% dari 180 adalah...",
        options: [
          { label: "A", text: "210", score: 0 },
          { label: "B", text: "220", score: 0 },
          { label: "C", text: "230", score: 5 },
          { label: "D", text: "240", score: 0 },
          { label: "E", text: "250", score: 0 }
        ],
        explanation: "62,5% = 5/8, sehingga (5/8) × 320 = 200. Kemudian 16,67% = 1/6, sehingga (1/6) × 180 = 30. Total = 200 + 30 = 230."
      },
      {
        id: "tiu-st-pec-q2",
        type: "TIU",
        question: "Hasil dari (2026² - 2024²) ÷ (2026 + 2024) adalah...",
        options: [
          { label: "A", text: "1", score: 0 },
          { label: "B", text: "2", score: 5 },
          { label: "C", text: "4", score: 0 },
          { label: "D", text: "4050", score: 0 },
          { label: "E", text: "2025", score: 0 }
        ],
        explanation: "Gunakan identitas a² - b² = (a + b)(a - b). Sehingga (2026 + 2024)(2026 - 2024) ÷ (2026 + 2024) = 2026 - 2024 = 2."
      },
      {
        id: "tiu-st-pec-q3",
        type: "TIU",
        question: "Manakah nilai yang paling besar di antara pilihan berikut?",
        options: [
          { label: "A", text: "3/8 dari 24", score: 0 },
          { label: "B", text: "4/5 dari 15", score: 0 },
          { label: "C", text: "2/3 dari 21", score: 5 },
          { label: "D", text: "5/6 dari 12", score: 0 },
          { label: "E", text: "7/10 dari 18", score: 0 }
        ],
        explanation: "A = 9; B = 12; C = 14; D = 10; E = 12,6. Nilai paling besar adalah C (14)."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 2. TIU NUMERIK: POLA BILANGAN & DERET MODEL BARU (Part 54)
  // --------------------------------------------------------------------------
  {
    id: "tiu-st-pola-bilangan-baru",
    category: "TIU",
    subCategory: "Numerik - Deret Angka",
    title: "Pola Bilangan & Deret Model Baru: Deret Gambar, Tabel & Operasi Tersembunyi",
    subtitle: "Ekstraksi Playlist Sang Tutor (Part 54) — Menaklukkan variasi baru soal pola angka di luar deret baris biasa",
    youtubeUrl: "https://www.youtube.com/watch?v=SxRDC0qn1Mk",
    youtubeId: "SxRDC0qn1Mk",
    playlistVideos: [
      { id: "SxRDC0qn1Mk", label: "Part 54: Bentuk Baru Soal Pola Bilangan TIU" }
    ],
    duration: "22 Menit",
    difficulty: "Variasi Terbaru BKN",
    bknKeywords: [
      "Pola Bilangan Dalam Gambar (Kotak/Segitiga/Lingkaran): Angka di tengah/puncak biasanya hasil operasi angka di sekelilingnya",
      "4 Kombinasi Operasi Utama pada Gambar Angka: (1) Kali lalu Tambah/Kurang, (2) Jumlah lalu Bagi, (3) Selisih Silang, (4) Kuadrat/Akar",
      "Aturan Konsistensi Mutlak: Pola yang ditemukan pada Gambar 1 WAJIB menghasilkan angka tepat pada Gambar 2 sebelum diterapkan ke Gambar 3"
    ],
    timestamps: [
      { time: "00:00", seconds: 0, label: "Mengapa Pola Bilangan Kini Disajikan dalam Bentuk Gambar/Kotak?" },
      { time: "06:15", seconds: 375, label: "Cara Menguji Pola Silang, Vertikal, dan Horizontal pada Gambar" },
      { time: "13:00", seconds: 780, label: "Latihan Soal Pola Bilangan Model Baru" }
    ],
    theorySections: [
      {
        heading: "1. Strategi Menaklukkan Soal Pola Bilangan Model Gambar & Kotak",
        content: `Pada seleksi terbaru, BKN kerap memunculkan soal **pola bilangan di dalam bentuk bangun datar** (misalnya angka di dalam lingkaran dengan 4 angka di luarnya, atau 2 segitiga dengan angka di tengah). Prinsipnya tetap sederhana: **temukan rumus aritmatika yang konsisten dari Gambar 1, uji ke Gambar 2, lalu terapkan ke Gambar 3!**`,
        points: [
          "Langkah 1: Identifikasi angka mana yang menjadi **Target Hasil** (biasanya ukurannya lebih besar, berada di tengah, atau berada di posisi yang ditanyakan tanda tanya '?').",
          "Langkah 2: Uji operasi penjumlahan & perkalian pada angka-angka pinggir (misal: `(Atas × Bawah) + (Kiri × Kanan)` atau `(Kiri + Kanan) × (Atas - Bawah)`).",
          "Langkah 3: Jika angka target jauh lebih kecil dari jumlah angka sekeliling, coba operasi **pembagian** atau **akar kuadrat**."
        ]
      }
    ],
    quickTricks: [
      {
        title: "Trik 15 Detik Pola Angka Gambar: 'Bandingkan Besar Kecilnya Angka Target'",
        mnemonic: "TARGET JAUH LEBIH BESAR = PERKALIAN / KUADRAT | TARGET SEDANG = TAMBAH-KURANG SILANG | TARGET KECIL = PEMBAGIAN / SELISIH",
        normalWay: "Mencoba acak puluhan operasi hitung tanpa arah yang jelas.",
        fastWay: "Lihat besar angka di tengah! Jika angka pinggir (2, 3, 4, 5) dan tengahnya 26, jelas ada perkalian: (2×5)+(4×4)? Atau (3×4)+(2×5)? Cek cepat: (4×5)+(2×3) = 20+6 = 26!"
      }
    ],
    workedExamples: [
      {
        question: "Perhatikan pola bilangan berpasangan berikut:\n- Kelompok 1: (4, 6) menghasilkan 20\n- Kelompok 2: (5, 8) menghasilkan 35\n- Kelompok 3: (7, 9) menghasilkan ...",
        options: ["A. 48", "B. 54", "C. 56", "D. 60", "E. 63"],
        answer: "C. 56",
        normalExplanation: "Pada kelompok 1: (4 × 6) - 4 = 20. Pada kelompok 2: (5 × 8) - 5 = 35. Pola yang konsisten adalah: (A × B) - A = A × (B - 1). Maka untuk (7, 9): 7 × (9 - 1) = 7 × 8 = 56.",
        fastTrickExplanation: "Lihat selisih hasil dengan perkalian: 4×6=24 (kurang 4 jadi 20); 5×8=40 (kurang 5 jadi 35). Berarti A × (B - 1)! Maka 7 × 8 = 56!"
      }
    ],
    quiz: [
      {
        id: "tiu-st-pb-q1",
        type: "TIU",
        question: "Perhatikan pola operasi pada himpunan bilangan berikut:\n• 3 * 4 = 19\n• 5 * 2 = 17\n• 4 * 6 = ...\nNilai yang tepat untuk menggantikan tanda titik-titik adalah...",
        options: [
          { label: "A", text: "24", score: 0 },
          { label: "B", text: "28", score: 0 },
          { label: "C", text: "32", score: 0 },
          { label: "D", text: "34", score: 5 },
          { label: "E", text: "36", score: 0 }
        ],
        explanation: "Pola yang berlaku: (A × B) + A + B? Cek: (3×4)+3+4 = 12+7 = 19. Cek kedua: (5×2)+5+2 = 10+7 = 17. Benar! Maka 4 * 6 = (4×6)+4+6 = 24+10 = 34."
      },
      {
        id: "tiu-st-pb-q2",
        type: "TIU",
        question: "Suatu pola barisan angka berbentuk: 5, 11, 23, 47, 95, ... Angka selanjutnya adalah...",
        options: [
          { label: "A", text: "189", score: 0 },
          { label: "B", text: "190", score: 0 },
          { label: "C", text: "191", score: 5 },
          { label: "D", text: "192", score: 0 },
          { label: "E", text: "195", score: 0 }
        ],
        explanation: "Pola: (× 2) + 1. Cek: 5×2+1=11; 11×2+1=23; 23×2+1=47; 47×2+1=95. Maka berikutnya: 95×2+1 = 191."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 3. TIU NUMERIK: PERBANDINGAN KUANTITATIF & KECUKUPAN DATA
  //    (Part 16, 21, 29, 41, 51, 53, 60)
  // --------------------------------------------------------------------------
  {
    id: "tiu-st-kuantitatif-kecukupan-data",
    category: "TIU",
    subCategory: "Numerik - Perbandingan Kuantitatif & Kecukupan Data",
    title: "Master Perbandingan Kuantitatif (P vs Q) & Soal Kecukupan Data Model Terbaru",
    subtitle: "Ekstraksi Playlist Sang Tutor (Part 16, 21, 29, 41, 51, 53, & 60) — Cara menguji nilai P vs Q serta aturan pernyataan (1) dan (2)",
    youtubeUrl: "https://www.youtube.com/watch?v=f2QhcIJqlnA",
    youtubeId: "f2QhcIJqlnA",
    playlistVideos: [
      { id: "f2QhcIJqlnA", label: "Part 60: HOTS Kecukupan Data" },
      { id: "voRCbwPqlwc", label: "Part 53: Kecukupan Data (Model Pertama)" },
      { id: "GlnXrrqBSaA", label: "Part 51: HOTS Perbandingan Kuantitatif" },
      { id: "7pkfgD5Zhe8", label: "Part 41: HOTS Perbandingan Kuantitatif" },
      { id: "GqBac28v86k", label: "Part 29: Perbandingan Kuantitatif Terbaru" },
      { id: "LiOYrXgUEgA", label: "Part 21: Perbandingan Kuantitatif Model Baru" },
      { id: "GLyvcKmw4FQ", label: "Part 16: Dasar Perbandingan Kuantitatif" }
    ],
    duration: "55 Menit",
    difficulty: "Wajib Kuasai (4–6 Soal)",
    bknKeywords: [
      "Perbandingan Kuantitatif (P vs Q): Pilihan E ('Informasi tidak cukup') dipilih HANYA JIKA terdapat kontradiksi saat diuji dengan angka berbeda (misal: positif vs negatif, atau pecahan 0 < x < 1 vs bulat > 1)",
      "4 Angka Uji Wajib untuk P vs Q: Coba substitusi x = -2 (negatif), x = 0, x = 1/2 (pecahan), dan x = 2 (positif) sesuai syarat soal",
      "Aturan Baku Soal Kecukupan Data (Data Sufficiency): Anda TIDAK perlu menghitung hasil akhirnya sampai tuntas—cukup pastikan apakah persamaannya BISA menghasilkan 1 nilai pasti yang unik!"
    ],
    timestamps: [
      { time: "00:00", seconds: 0, label: "Memahami 5 Opsi Baku Soal Kecukupan Data (Pernyataan 1 & 2)" },
      { time: "08:30", seconds: 510, label: "Jebakan Tersembunyi pada Soal P vs Q (Bilangan Kuadrat & Pecahan)" },
      { time: "17:00", seconds: 1020, label: "Bedah Soal Perbandingan Kuantitatif & Kecukupan Data" }
    ],
    theorySections: [
      {
        heading: "1. Peta Opsi Baku Soal Kecukupan Data (Data Sufficiency)",
        content: `Tipe soal **Kecukupan Data** (Part 53 & Part 60) semakin populer di SKD CPNS & Kedinasan karena menguji ketajaman logika aljabar tanpa harus menghitung panjang. Soal memberi 1 pertanyaan utama dan **2 Pernyataan (1) & (2)**, dengan 5 pilihan jawaban standar:`,
        table: {
          headers: ["Opsi", "Arti Logika Kecukupan Data", "Kapan Memilih Opsi Ini?"],
          rows: [
            ["A", "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.", "Dari Pernyataan (1) sudah dapat 1 jawaban pasti/unik, sedangkan Pernyataan (2) masih menyisakan lebih dari satu kemungkinan."],
            ["B", "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.", "Kebalikan dari opsi A."],
            ["C", "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan saja tidak cukup.", "Persamaan butuh 2 variabel (x dan y): Pernyataan (1) memberi 1 persamaan, Pernyataan (2) memberi persamaan kedua -> digabung baru ketemu!"],
            ["D", "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.", "Masing-masing pernyataan secara terpisah sudah mampu menghasilkan jawaban tunggal yang pasti."],
            ["E", "Pernyataan (1) dan pernyataan (2) TIDAK cukup untuk menjawab pertanyaan.", "Meskipun sudah digabung, variabelnya masih belum lengkap atau menghasilkan dua jawaban berbeda (misal: x² = 9 -> x = +3 atau -3)."]
          ]
        },
        alertBox: {
          type: "warning",
          title: "Jebakan Nomor 1 di Soal P vs Q & Kecukupan Data: 'Pangkat Genap!'",
          text: "Jika diketahui `x² = 16`, hati-hati! Nilai `x` bisa **+4** ATAU **-4**! Jadi jika ditanya apakah `x > 2`, jawabannya TIDAK CUKUP (bisa lebih besar jika +4, bisa lebih kecil jika -4), kecuali ada syarat `x > 0` di soal!"
        }
      }
    ],
    quickTricks: [
      {
        title: "Trik Uji 2 Detik P vs Q: 'Cari Contoh Penyangkalan (Counter-Example)'",
        mnemonic: "UJI ANGKA x = 2 DAN x = 1/2 (atau -2) -> JIKA BEDA TANDA (< DAN >), JAWABAN PASTI TIDAK DAPAT DITENTUKAN!",
        normalWay: "Menurunkan pertidaksamaan aljabar yang rumit secara simbolik.",
        fastWay: "Langsung masukkan 2 angka kontras yang memenuhi syarat soal. Begitu angka pertama menghasilkan P > Q dan angka kedua menghasilkan P < Q (atau P = Q), langsung hentikan perhitungan dan pilih 'Informasi tidak dapat ditentukan'!"
      }
    ],
    workedExamples: [
      {
        question: "Diketahui bilangan real x dengan syarat x > 0. Manakah hubungan yang benar antara kuantitas P dan Q berikut?\n• P = x²\n• Q = x",
        options: [
          "A. P > Q",
          "B. P < Q",
          "C. P = Q",
          "D. P + Q = 1",
          "E. Hubungan antara P dan Q tidak dapat ditentukan"
        ],
        answer: "E. Hubungan antara P dan Q tidak dapat ditentukan",
        normalExplanation: "Karena hanya diketahui x > 0 tanpa batas apakah x bilangan bulat > 1 atau pecahan (0 < x < 1), maka:\n- Jika x = 2 -> P = 4, Q = 2 (P > Q)\n- Jika x = 1 -> P = 1, Q = 1 (P = Q)\n- Jika x = 0,5 -> P = 0,25, Q = 0,5 (P < Q).\nKarena hasilnya berubah-ubah, hubungan P dan Q tidak dapat ditentukan.",
        fastTrickExplanation: "Uji dua angka kontras: x = 2 (P > Q) vs x = 1/2 (P < Q). Karena bertolak belakang, langsung pilih Opsi E!"
      }
    ],
    quiz: [
      {
        id: "tiu-st-kd-q1",
        type: "TIU",
        question: "Berapakah nilai bilangan bulat x?\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut:\n(1) x² = 25\n(2) x > 0",
        options: [
          { label: "A", text: "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.", score: 0 },
          { label: "B", text: "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.", score: 0 },
          { label: "C", text: "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan saja tidak cukup.", score: 5 },
          { label: "D", text: "Pernyataan (1) SAJA cukup dan pernyataan (2) SAJA cukup.", score: 0 },
          { label: "E", text: "Pernyataan (1) dan (2) tidak cukup.", score: 0 }
        ],
        explanation: "Dari (1) saja, x bisa bernilai 5 atau -5 (belum tunggal -> tidak cukup). Dari (2) saja, x bisa 1, 2, 3, dst (tidak cukup). Jika (1) dan (2) digabung, x² = 25 dan x > 0 memastikan x = 5 (tunggal). Maka jawabannya C!"
      },
      {
        id: "tiu-st-kd-q2",
        type: "TIU",
        question: "Diketahui a > 2 dan b < -3. Jika P = a - b dan Q = 5, maka hubungan yang tepat antara P dan Q adalah...",
        options: [
          { label: "A", text: "P > Q", score: 5 },
          { label: "B", text: "P < Q", score: 0 },
          { label: "C", text: "P = Q", score: 0 },
          { label: "D", text: "2P = Q", score: 0 },
          { label: "E", text: "Tidak dapat ditentukan", score: 0 }
        ],
        explanation: "Ambil batas minimum a > 2 (misal a = 2,1) dan batas maksimum b < -3 (misal b = -3,1). Maka P = a - b = 2,1 - (-3,1) = 5,2. Nilai P selalu lebih besar dari 5 (P > Q)."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 4. TIU NUMERIK: ANALISA DATA TABEL & GRAFIK (Part 22, 49, 56, 58)
  // --------------------------------------------------------------------------
  {
    id: "tiu-st-analisa-tabel",
    category: "TIU",
    subCategory: "Numerik - Analisa Data Tabel & Grafik",
    title: "Master Analisa Data Tabel & Grafik: Rata-Rata, Persentase Kenaikan & Rasio",
    subtitle: "Ekstraksi Playlist Sang Tutor (Part 22, 49, 56, & 58) — Teknik membaca tabel data tanpa terjebak hitungan berulang",
    youtubeUrl: "https://www.youtube.com/watch?v=0cnMSKL_yGs",
    youtubeId: "0cnMSKL_yGs",
    playlistVideos: [
      { id: "0cnMSKL_yGs", label: "Part 58: HOTS Analisa Data Tabel & Soal Cerita" },
      { id: "hwAB1bet3eU", label: "Part 56: Soal Tabel Model Baru" },
      { id: "pwwxcaEIjLY", label: "Part 49: Soal Data Tabel Pasti Keluar" },
      { id: "OXB9aVVlVHI", label: "Part 22: Dasar Memahami Data Tabel" }
    ],
    duration: "38 Menit",
    difficulty: "Sering Keluar (2–4 Soal)",
    bknKeywords: [
      "Rumus Persentase Kenaikan/Penurunan: ((Nilai Baru - Nilai Lama) / Nilai Lama) × 100% — Pembaginya SELALU NILAI AWAL/LAMA!",
      "Rumus Rata-Rata Gabungan (Teknik Jungkat-Jungkit): Selisih rata-rata berbanding terbalik dengan jumlah anggotanya",
      "Teknik Scanning Tabel: Baca opsi jawaban terlebih dahulu (misal: hanya cek kota A dan C saja) agar tidak menghitung semua baris tabel!"
    ],
    timestamps: [
      { time: "00:00", seconds: 0, label: "Cara Cepat Memindai Informasi pada Tabel Multi-Kolom" },
      { time: "07:10", seconds: 430, label: "Menghitung Persentase Pertumbuhan & Selisih Data Secara Kilat" },
      { time: "14:45", seconds: 885, label: "Trik Rata-Rata Gabungan Tanpa Mengalikan Angka Besar" }
    ],
    theorySections: [
      {
        heading: "1. Teknik Eksekusi Cepat Soal Tabel & Persentase Pertumbuhan",
        content: `Soal tabel di TIU sebenarnya memiliki tingkat hitungan yang mudah, namun sengaja diberi banyak kolom/baris angka untuk **menghabiskan waktu peserta**. Gunakan 3 prinsip hemat waktu berikut:`,
        points: [
          "1. Cek Opsi Jawaban Dulu: Jika pertanyaan menanyakan 'Toko mana yang memiliki persentase kenaikan terbesar?', dan di opsi A–E hanya muncul 4 nama toko, abaikan baris toko lain yang tidak ada di opsi!",
          "2. Pembagi Persentase Pertumbuhan: Selalu bagi selisih dengan **tahun/nilai sebelumnya (Nilai Awal)**. Hati-hati jebakan: kenaikan dari 100 ke 150 adalah 50%, sedangkan penurunan dari 150 ke 100 adalah 33,3%!",
          "3. Rata-rata Gabungan Tanpa Perkalian Besar: Gunakan selisih terhadap rata-rata acuan (metode deviasi/jungkat-jungkit)."
        ]
      }
    ],
    quickTricks: [
      {
        title: "Trik Bandingkan Pecahan Kenaikan Tanpa Membagi Desimal (Kali Silang)",
        mnemonic: "BANDINGKAN a/b vs c/d -> KALI SILANG (a×d vs b×c), YANG HASIL KALINYA LEBIH BESAR BERARTI PERSENTASENYA LEBIH TINGGI!",
        normalWay: "Menghitung persentase setiap baris sampai 2 angka di belakang koma (misal: 14/45 = 31,11% vs 17/52 = 32,69%).",
        fastWay: "Bandingkan langsung pecahannya lewat kali silang: 14×52 = 728 vs 17×45 = 765. Karena 765 > 728, maka 17/52 pasti lebih besar!"
      }
    ],
    workedExamples: [
      {
        question: "Sebuah instansi mencatat jumlah pelamar pada 2025 adalah 800 orang dan meningkat menjadi 1.000 orang pada 2026. Berapa persentase kenaikan jumlah pelamar tersebut?",
        options: ["A. 15%", "B. 20%", "C. 25%", "D. 30%", "E. 40%"],
        answer: "C. 25%",
        normalExplanation: "Kenaikan = 1.000 - 800 = 200 orang. Persentase kenaikan = (200 / 800) × 100% = (1/4) × 100% = 25%.",
        fastTrickExplanation: "Selisih 200 dibanding nilai awal 800 = 200/800 = 1/4 = 25%! (Jangan terkecoh membagi dengan 1.000 karena itu akan menghasilkan 20% yang merupakan jebakan Opsi B)."
      }
    ],
    quiz: [
      {
        id: "tiu-st-tab-q1",
        type: "TIU",
        question: "Rata-rata nilai ujian 20 peserta kelas A adalah 80, sedangkan rata-rata nilai 30 peserta kelas B adalah 90. Rata-rata nilai gabungan seluruh peserta adalah...",
        options: [
          { label: "A", text: "84", score: 0 },
          { label: "B", text: "85", score: 0 },
          { label: "C", text: "86", score: 5 },
          { label: "D", text: "87", score: 0 },
          { label: "E", text: "88", score: 0 }
        ],
        explanation: "Perbandingan jumlah peserta A : B = 20 : 30 = 2 : 3. Jarak nilai 80 ke 90 adalah 10 poin. Dengan metode jungkat-jungkit, rata-rata gabungan lebih dekat ke kelompok yang lebih banyak (kelas B): 80 + (3/5 × 10) = 80 + 6 = 86."
      },
      {
        id: "tiu-st-tab-q2",
        type: "TIU",
        question: "Penjualan buku di Toko Dera pada bulan Januari adalah 250 eksemplar dan turun menjadi 200 eksemplar pada bulan Februari. Persentase penurunan penjualan pada bulan Februari adalah...",
        options: [
          { label: "A", text: "15%", score: 0 },
          { label: "B", text: "20%", score: 5 },
          { label: "C", text: "25%", score: 0 },
          { label: "D", text: "30%", score: 0 },
          { label: "E", text: "40%", score: 0 }
        ],
        explanation: "Penurunan = 250 - 200 = 50 eksemplar. Dibagi dengan nilai awal (Januari = 250): (50 / 250) × 100% = 1/5 × 100% = 20%."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 5. TIU NUMERIK: SOAL CERITA & PERBANDINGAN SENILAI/BERBALIK
  //    (Part 13, 20, 30, 38, 62)
  // --------------------------------------------------------------------------
  {
    id: "tiu-st-soal-cerita-perbandingan",
    category: "TIU",
    subCategory: "Numerik - Soal Cerita (Kecepatan, Jarak, Kerja Bersama)",
    title: "Master Soal Cerita & Perbandingan (Senilai, Berbalik Nilai, JKW, & Kerja Bersama)",
    subtitle: "Ekstraksi Playlist Sang Tutor (Part 13, 20, 30, 38, & 62) — Rumus O/(S×W), Susul-Menyusul, Papasan, dan Aritmatika Sosial",
    youtubeUrl: "https://www.youtube.com/watch?v=Jhlb4lN6YKM",
    youtubeId: "Jhlb4lN6YKM",
    playlistVideos: [
      { id: "Jhlb4lN6YKM", label: "Part 62: Soal Cerita Perbandingan Terbaru" },
      { id: "u-wf7YEIZAI", label: "Part 38: Soal Cerita Perbandingan" },
      { id: "hiIZcT1VxiA", label: "Part 30: Soal Cerita Terbaru" },
      { id: "CPcCUuZx__E", label: "Part 20: Perbandingan Terbalik & Senilai" },
      { id: "ijsi01bbnEc", label: "Part 13: Soal Cerita TIU Terbaru" }
    ],
    duration: "50 Menit",
    difficulty: "Pasti Keluar (4–6 Soal)",
    bknKeywords: [
      "Perbandingan Senilai (Sejajar): Bensin vs Jarak, Harga vs Barang -> Kalikan silang! (A1/B1 = A2/B2)",
      "Perbandingan Berbalik Nilai (Terbalik): Pekerja vs Waktu, Kecepatan vs Waktu -> Kalikan lurus sejajar! (A1 × B1 = A2 × B2)",
      "Perbandingan 3 Variabel (Subjek–Objek–Waktu): S1 × W1 / O1 = S2 × W2 / O2",
      "Rumus Berpapasan (Waktu Sama): t = Jarak Total / (V1 + V2) | Jika berangkat BEDA waktu: kurangi dulu jarak yang sudah ditempuh orang pertama!",
      "Rumus Menyusul: t = Selisih Jarak / (V_penyusul - V_disusul)",
      "Kerja Bersama 2 Orang: T_gabungan = (A × B) / (A + B)"
    ],
    timestamps: [
      { time: "00:00", seconds: 0, label: "Membedakan Senilai vs Berbalik Nilai dalam 3 Detik" },
      { time: "07:40", seconds: 460, label: "Rumus Sakti 3 Variabel (Subjek - Objek - Waktu)" },
      { time: "15:20", seconds: 920, label: "Soal Cerita Pekerjaan Terhenti, Berpapasan & Susul-Menyusul" }
    ],
    theorySections: [
      {
        heading: "1. Ringkasan 5 Rumus Sakti Soal Cerita TIU CPNS",
        content: `Hampir 90% soal cerita TIU di CAT BKN hanya berputar pada 5 skema rumus berikut. Cukup pahami polanya agar Anda langsung tahu harus mengalikan atau membagi angka di soal:`,
        table: {
          headers: ["Jenis Kasus Soal Cerita", "Rumus Cepat", "Catatan Penting"],
          rows: [
            ["Perbandingan Senilai (Misal: 5 kg beras Rp65.000)", "A1 / B1 = A2 / B2 (Kali Silang)", "Kedua besaran naik/turun bersamaan"],
            ["Perbandingan Berbalik Nilai (Misal: Pekerja vs Hari)", "P1 × H1 = P2 × H2 (Kali Lurus)", "Jika pekerja ditambah, waktu makin cepat/berkurang"],
            ["3 Variabel: Subjek (S), Waktu (W), Hasil/Objek (O)", "O1 / (S1 × W1) = O2 / (S2 × W2)", "Contoh: 4 penjahit dalam 3 hari membuat 24 baju"],
            ["Pekerjaan Terhenti di Tengah Jalan", "Tambahan Pekerja = (Pekerja Awal × Hari Libur) / Sisa Hari Wajib", "Cara paling cepat tanpa menghitung total unit pekerjaan!"],
            ["Kerja Bersama (A sendirian 6 jam, B sendirian 3 jam)", "T_bersama = (A × B) / (A + B)", "Contoh: (6 × 3) / (6 + 3) = 18 / 9 = 2 jam"]
          ]
        }
      }
    ],
    quickTricks: [
      {
        title: "Trik Pekerjaan Terhenti: Rumus 'Pekerja × Libur ÷ Sisa Hari'",
        mnemonic: "TAMBAHAN PEKERJA = (PEKERJA AWAL × LAMA TERHENTI) ÷ SISA HARI TARGET",
        normalWay: "Menghitung total beban kerja (P × H), dikurangi hari yang sudah dikerjakan, dibagi sisa hari, lalu dikurangi pekerja awal.",
        fastWay: "Misal: 12 pekerja target 20 hari, sudah kerja 8 hari, lalu libur 4 hari. Berapa sisa hari wajib? 20 - 8 - 4 = 8 hari! Maka tambahan pekerja = (12 × 4) ÷ 8 = 48 ÷ 8 = 6 orang! Selesai dalam 8 detik!"
      }
    ],
    workedExamples: [
      {
        question: "Sebuah proyek renovasi gedung ditargetkan selesai dalam 30 hari oleh 15 pekerja. Setelah bekerja selama 6 hari, pekerjaan terpaksa dihentikan selama 4 hari karena hujan lebat. Agar proyek tetap selesai tepat waktu, berapa banyak pekerja tambahan yang dibutuhkan?",
        options: ["A. 2 orang", "B. 3 orang", "C. 4 orang", "D. 5 orang", "E. 6 orang"],
        answer: "B. 3 orang",
        normalExplanation: "Total beban = 15 × 30 = 450. Sudah dikerjakan 15 × 6 = 90. Sisa beban = 360. Sisa hari = 30 - 6 - 4 = 20 hari. Pekerja yang dibutuhkan = 360 / 20 = 18 orang. Tambahan = 18 - 15 = 3 orang.",
        fastTrickExplanation: "Pakai Rumus Cepat: Sisa hari = 30 - 6 - 4 = 20 hari. Tambahan pekerja = (Pekerja Awal × Hari Libur) ÷ Sisa Hari = (15 × 4) ÷ 20 = 60 ÷ 20 = 3 orang! (Opsi B)"
      }
    ],
    quiz: [
      {
        id: "tiu-st-sc-q1",
        type: "TIU",
        question: "Jika 4 mesin cetak mampu mencetak 200 lembar brosur dalam waktu 5 menit, maka berapa lembar brosur yang dapat dicetak oleh 6 mesin yang sama dalam waktu 10 menit?",
        options: [
          { label: "A", text: "400 lembar", score: 0 },
          { label: "B", text: "500 lembar", score: 0 },
          { label: "C", text: "600 lembar", score: 5 },
          { label: "D", text: "750 lembar", score: 0 },
          { label: "E", text: "800 lembar", score: 0 }
        ],
        explanation: "Gunakan rumus Subjek-Objek-Waktu: O1 / (S1 × W1) = O2 / (S2 × W2) -> 200 / (4 × 5) = O2 / (6 × 10) -> 200 / 20 = O2 / 60 -> 10 = O2 / 60 -> O2 = 600 lembar."
      },
      {
        id: "tiu-st-sc-q2",
        type: "TIU",
        question: "Adi berangkat dari Kota X ke Kota Y pukul 07.00 dengan kecepatan 50 km/jam. Pada pukul 08.00, Budi menyusul dari Kota X dengan rute yang sama berkecepatan 70 km/jam. Pada pukul berapa Budi berhasil menyusul Adi?",
        options: [
          { label: "A", text: "Pukul 09.30", score: 0 },
          { label: "B", text: "Pukul 10.00", score: 0 },
          { label: "C", text: "Pukul 10.30", score: 5 },
          { label: "D", text: "Pukul 11.00", score: 0 },
          { label: "E", text: "Pukul 11.30", score: 0 }
        ],
        explanation: "Dalam 1 jam (07.00–08.00), Adi sudah menempuh jarak 50 km. Waktu menyusul = Selisih Jarak / (V_Budi - V_Adi) = 50 / (70 - 50) = 50 / 20 = 2,5 jam (2 jam 30 menit) setelah Budi berangkat. Jadi 08.00 + 2 jam 30 menit = Pukul 10.30."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 6. TIU VERBAL: SILOGISME 3 PREMIS & PENGUATAN/PELEMAHAN ARGUMEN
  //    (Part 17, 25, 46, 59)
  // --------------------------------------------------------------------------
  {
    id: "tiu-st-silogisme-argumen",
    category: "TIU",
    subCategory: "Verbal - Silogisme",
    title: "Master Silogisme 3 Premis & Tipe Baru: Penguatan dan Pelemahan Argumen",
    subtitle: "Ekstraksi Playlist Sang Tutor (Part 17, 25, 46, & 59) — Kuasai logika implikasi, kuantor, dan evaluasi kualitas argumen",
    youtubeUrl: "https://www.youtube.com/watch?v=V-k86ovhSNk",
    youtubeId: "V-k86ovhSNk",
    playlistVideos: [
      { id: "V-k86ovhSNk", label: "Part 59: Penguatan dan Pelemahan Argumen (Tipe Baru!)" },
      { id: "k01WuuRDl_Y", label: "Part 46: Rahasia Silogisme 3 Premis" },
      { id: "wm7DJIfnf5w", label: "Part 25: Soal HOTS Silogisme Terbaru" },
      { id: "OjKKqJM4cL0", label: "Part 17: Soal HOTS Silogisme" }
    ],
    duration: "45 Menit",
    difficulty: "Pasti Keluar (4–6 Soal)",
    bknKeywords: [
      "Modus Ponens: Jika p -> q, dan p terjadi, kesimpulan: q terjadi",
      "Modus Tollens: Jika p -> q, dan ~q (tidak q) terjadi, kesimpulan: ~p (tidak p)",
      "Silogisme Berantai (3 Premis): p -> q, q -> r, r -> s ==> Kesimpulan: p -> s (Coret variabel tengah yang sama!)",
      "Ekuivalensi Kontraposisi: p -> q  ≡  ~q -> ~p (Contoh: 'Jika hujan maka jalan basah' SAMA DENGAN 'Jika jalan tidak basah maka tidak hujan')",
      "Ekuivalensi Disjungsi: p -> q  ≡  ~p atau q ('Jika rajin maka lulus' SAMA DENGAN 'Tidak rajin atau lulus')",
      "Hukum Kuantor: 'Semua' + 'Sebagian/Ada' = Kesimpulan PASTI dimulai kata 'Sebagian/Ada/Sementara' (TIDAK BOLEH 'Semua'!)",
      "Penguatan & Pelemahan Argumen (Part 59): Memperkuat = menambah bukti pendukung sebab-akibat | Memperlemah = mematahkan asumsi dengan bukti tandingan/faktor lain"
    ],
    timestamps: [
      { time: "00:00", seconds: 0, label: "3 Rumus Dasar Logika: Ponens, Tollens, & Silogisme Rantai" },
      { time: "08:20", seconds: 500, label: "Trik Coret Tengah pada Silogisme 3 Premis + Kuantor" },
      { time: "16:40", seconds: 1000, label: "Materi Baru: Cara Menjawab Soal Memperkuat & Memperlemah Argumen" }
    ],
    theorySections: [
      {
        heading: "1. Peta Lengkap Rumus Silogisme & Materi Baru Penguatan-Pelemahan Argumen",
        content: `Di samping soal **Silogisme 3 Premis** dan **Penarikan Simpulan Kuantor (Semua vs Sebagian)**, seleksi terbaru memunculkan tipe soal verbal kritis baru: **Memperkuat dan Memperlemah Argumen** (Part 59).`,
        table: {
          headers: ["Tipe Soal Logika Verbal", "Aturan Emas / Rumus Kunci", "Jebakan yang Harus Dihindari"],
          rows: [
            ["Silogisme Implikasi (Jika... maka...)", "p -> q, q -> r => p -> r (atau kontraposisinya: ~r -> ~p)", "JANGAN pernah menyimpulkan balik 'q -> p' atau '~p -> ~q'! Itu cacat logika!"],
            ["Negasi Implikasi (~(p -> q))", "p dan ~q (Syarat terpenuhi TAPI akibat tidak terjadi)", "Negasi dari 'Jika belajar maka lulus' adalah 'Belajar TETAPI tidak lulus'."],
            ["Kuantor (Semua & Sebagian)", "'Semua' + 'Sebagian' = 'Sebagian/Ada'. 'Sebagian' + 'Sebagian' = TIDAK DAPAT DISIMPULKAN.", "Jangan pilih kesimpulan diawali kata 'Semua' jika ada satu premis memakai 'Sebagian/Ada'."],
            ["Memperkuat Argumen (Part 59)", "Pilih fakta/data baru yang MENDUKUNG hubungan sebab-akibat pada klaim pembicara.", "Jangan pilih opsi yang hanya mengulang isi kalimat soal tanpa menambah dukungan."],
            ["Memperlemah Argumen (Part 59)", "Pilih fakta yang MEMATAHKAN asumsi (sebab ada tapi akibat gagal, atau ada faktor luar penyebab sebenarnya).", "Jangan pilih pernyataan yang keluar dari topik argumen."]
          ]
        }
      }
    ],
    quickTricks: [
      {
        title: "Trik Coret Silang 5 Detik untuk Silogisme 3 Premis",
        mnemonic: "P -> Q | Q -> R | R -> S  ==>  CORET Q & R YANG KEMBAR! TERSISA P -> S (atau ~S -> ~P)",
        normalWay: "Membaca kalimat panjang berulang-ulang hingga pusing memikirkan kata penghubungnya.",
        fastWay: "Tulis simbol singkat di kertas buram: (1) Hujan -> Macet; (2) Macet -> Telat; (3) Telat -> Ditegur. Coret 'Macet' dan 'Telat'! Kesimpulannya pasti: Hujan -> Ditegur, ATAU balik & negasikan: Tidak Ditegur -> Tidak Hujan!"
      }
    ],
    workedExamples: [
      {
        question: "Perhatikan argumen berikut:\n'Sejak bulan lalu, Dinas Kominfo memasang sistem filter anti-spam pada server email kantor, dan jumlah email penipuan yang masuk ke kotak masuk pegawai turun 80%. Oleh karena itu, penurunan email penipuan ini pasti disebabkan oleh pemasangan filter anti-spam tersebut.'\nManakah pernyataan berikut yang paling MEMPERLEMAH argumen di atas?",
        options: [
          "A. Pegawai kantor merasa lebih nyaman bekerja karena kotak masuk email lebih bersih",
          "B. Sistem filter anti-spam tersebut dibeli dari vendor teknologi ternama",
          "C. Dua hari sebelum filter dipasang, penyedia jaringan internet pusat memblokir seluruh server pengirim spam internasional yang selama ini menyerang kantor tersebut",
          "D. Sebagian pegawai belum mengganti kata sandi email mereka selama setahun terakhir",
          "E. Biaya pemeliharaan server email mengalami penurunan tahun ini"
        ],
        answer: "C. Dua hari sebelum filter dipasang, penyedia jaringan internet pusat memblokir seluruh server pengirim spam internasional yang selama ini menyerang kantor tersebut",
        normalExplanation: "Argumen mengklaim bahwa X (filter kantor) adalah penyebab Y (turunnya spam). Cara paling kuat untuk melemahkan argumen sebab-akibat adalah menunjukkan adanya **penyebab alternatif lain** (pemblokiran oleh ISP pusat) yang sebenarnya menyebabkan penurunan tersebut.",
        fastTrickExplanation: "Cari opsi yang membuktikan: 'Turunnya spam BUKAN karena filter kantor, melainkan karena ada faktor lain!' -> Opsi C memberikan penyebab alternatif yang telak mematahkan klaim!"
      }
    ],
    quiz: [
      {
        id: "tiu-st-sil-q1",
        type: "TIU",
        question: "Diketahui premis berikut:\n• Jika Dera lulus SKD, maka ia mengikuti tes SKB.\n• Jika ia mengikuti tes SKB, maka ia wajib menyiapkan portofolio IT.\n• Hari ini Dera tidak menyiapkan portofolio IT.\nKesimpulan yang paling sah adalah...",
        options: [
          { label: "A", text: "Dera lulus SKD tetapi tidak ikut SKB", score: 0 },
          { label: "B", text: "Dera tidak lulus SKD", score: 5 },
          { label: "C", text: "Dera mengikuti tes SKB tanpa portofolio", score: 0 },
          { label: "D", text: "Dera pasti menjadi CPNS tahun ini", score: 0 },
          { label: "E", text: "Tidak dapat ditarik kesimpulan", score: 0 }
        ],
        explanation: "Rantai implikasi: Lulus SKD (p) -> Ikut SKB (q) -> Siapkan Portofolio (r). Coret q sehingga menjadi p -> r. Karena terjadi ~r (tidak menyiapkan portofolio), menurut Modus Tollens kesimpulannya adalah ~p: Dera tidak lulus SKD."
      },
      {
        id: "tiu-st-sil-q2",
        type: "TIU",
        question: "Semua programmer di divisi IT menguasai bahasa SQL. Sebagian programmer di divisi IT juga menguasai keamanan jaringan. Kesimpulan yang paling tepat adalah...",
        options: [
          { label: "A", text: "Semua programmer yang menguasai SQL pasti menguasai keamanan jaringan", score: 0 },
          { label: "B", text: "Sebagian programmer di divisi IT menguasai bahasa SQL sekaligus keamanan jaringan", score: 5 },
          { label: "C", text: "Semua programmer di divisi IT tidak menguasai keamanan jaringan", score: 0 },
          { label: "D", text: "Tidak ada programmer divisi IT yang menguasai SQL", score: 0 },
          { label: "E", text: "Semua yang menguasai keamanan jaringan adalah programmer divisi IT", score: 0 }
        ],
        explanation: "Aturan Kuantor: 'Semua' + 'Sebagian' -> Kesimpulan harus memakai kata 'Sebagian'. Karena semuanya menguasai SQL dan sebagiannya menguasai keamanan jaringan, maka sebagian tersebut pasti menguasai kedua-duanya (SQL sekaligus keamanan jaringan)."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 7. TIU VERBAL: PENALARAN ANALITIS (Part 26, 39, 45)
  // --------------------------------------------------------------------------
  {
    id: "tiu-st-penalaran-analitis",
    category: "TIU",
    subCategory: "Verbal - Penalaran Analitis",
    title: "Master Penalaran Analitis: Teknik Coret Tabel untuk Urutan, Jadwal & Meja Bundar",
    subtitle: "Ekstraksi Playlist Sang Tutor (Part 26, 39, & 45) — Menjawab soal cerita logika panjang tanpa kebingungan syarat",
    youtubeUrl: "https://www.youtube.com/watch?v=i3_LPzF24KI",
    youtubeId: "i3_LPzF24KI",
    playlistVideos: [
      { id: "i3_LPzF24KI", label: "Part 45: Penalaran Analitis Pasti Keluar" },
      { id: "4ZYeZ2hyd08", label: "Part 39: Rahasia Penalaran Analitis" },
      { id: "CHaa33OPXbI", label: "Part 26: Soal HOTS Penalaran Analitis" }
    ],
    duration: "38 Menit",
    difficulty: "Pasti Keluar (3–4 Soal)",
    bknKeywords: [
      "3 Tipe Utama Analitis: (1) Urutan / Peringkat (>, <), (2) Posisi Duduk Sejajar / Meja Bundar, (3) Penjadwalan / Pemilihan Kombinasi Bersyarat",
      "Aturan Meja Bundar: Cari dulu syarat yang paling PASTI (misal: 'A duduk berhadapan dengan D' atau 'B di sebelah kanan A'), baru masukkan syarat lain",
      "Aturan Urutan Ranking: Selalu terjemahkan kalimat 'A lebih tinggi dari B tetapi lebih rendah dari C' menjadi simbol C > A > B (jangan dihafal di kepala!)"
    ],
    timestamps: [
      { time: "00:00", seconds: 0, label: "Teknik Mengubah Kalimat Syarat Menjadi Simbol Matematika" },
      { time: "08:00", seconds: 480, label: "Menggambar Skema Meja Bundar & Kursi Sejajar" },
      { time: "15:30", seconds: 930, label: "Trik Eliminasi Opsi pada Soal Penjadwalan & Pemilihan Tim" }
    ],
    theorySections: [
      {
        heading: "1. Metode 3 Langkah Menaklukkan Soal Penalaran Analitis",
        content: `Banyak peserta kehabisan waktu di Penalaran Analitis karena mencoba membayangkan urutan di kepala. Padahal trik terbaiknya adalah **langsung membuat coretan simbol sederhana** dan **mengeliminasi opsi jawaban menggunakan syarat yang paling keras (syarat wajib/larangan)**.`,
        points: [
          "1. Ubah Kata Sifat Jadi Tanda Pertidaksamaan: 'A selesai sebelum B' ditulis `A > B` (atau `A - B`). 'C tepat di antara D dan E' ditulis `[D - C - E]` atau `[E - C - D]` (blok tak terpisahkan).",
          "2. Jika Soal Bertanya 'Manakah Urutan yang MUNGKIN Benar?', JANGAN Susun dari Nol! Langsung uji syarat pertama ke opsi A–E dan coret opsi yang melanggar syarat tersebut!",
          "3. Posisi Berhadapan di Meja Bundar (6 atau 8 kursi): Posisi berhadapan artinya terpisah persis setengah lingkaran (misal kursi 1 berhadapan dengan kursi 4 pada meja 6 kursi)."
        ]
      }
    ],
    quickTricks: [
      {
        title: "Trik Eliminasi Syarat Terbalik (Anti-Susun Manual!)",
        mnemonic: "SOAL TANYA 'URUTAN YANG MUNGKIN' = LANGSUNG CEK OPSI A-E TERHADAP SYARAT 1, SYARAT 2, SYARAT 3!",
        normalWay: "Mencoba menggambar semua kemungkinan kombinasi urutan dari awal hingga selesai.",
        fastWay: "Baca syarat ke-1 (misal: 'Budi tidak boleh di sebelah Ani') -> Coret semua opsi di mana Budi & Ani bersebelahan! Lanjut cek syarat ke-2 -> Coret lagi! Biasanya baru cek 2 syarat sudah langsung tersisa 1 jawaban benar!"
      }
    ],
    workedExamples: [
      {
        question: "Lima peserta ujian CPNS (A, B, C, D, dan E) memperoleh nilai SKD sebagai berikut:\n• Nilai A lebih tinggi dari B, tetapi lebih rendah dari C.\n• Nilai D lebih tinggi dari C.\n• Nilai E lebih rendah dari B, tetapi bukan yang paling rendah? (Tidak ada syarat lain, E lebih rendah dari B).\nSiapakah peserta dengan nilai tertinggi kedua?",
        options: ["A. A", "B. B", "C. C", "D. D", "E. E"],
        answer: "C. C",
        normalExplanation: "Susun pertidaksamaan: (1) C > A > B; (2) D > C; (3) B > E. Gabungkan semuanya: D > C > A > B > E. Nilai tertinggi pertama = D, tertinggi kedua = C.",
        fastTrickExplanation: "Tulis berurutan langsung: D > C > A > B > E. Posisi ke-2 dari kiri jelas C!"
      }
    ],
    quiz: [
      {
        id: "tiu-st-an-q1",
        type: "TIU",
        question: "Enam orang (P, Q, R, S, T, U) duduk mengelilingi meja bundar menghadap ke tengah meja. Diketahui:\n• P duduk tepat berhadapan dengan S.\n• Q duduk tepat di sebelah kanan P.\n• R duduk tepat di sebelah kiri S.\n• T duduk tepat di sebelah kanan S.\nSiapakah yang duduk tepat di sebelah kiri P?",
        options: [
          { label: "A", text: "Q", score: 0 },
          { label: "B", text: "R", score: 0 },
          { label: "C", text: "T", score: 0 },
          { label: "D", text: "U", score: 5 },
          { label: "E", text: "S", score: 0 }
        ],
        explanation: "Posisikan P di arah jam 6 (menghadap tengah) dan S berhadapan di jam 12. Sebelah kanan P (jam 4) adalah Q. Dari sudut pandang S (jam 12 menghadap tengah), sebelah kiri S adalah jam 2 (R) dan sebelah kanan S adalah jam 10 (T). Satu-satunya kursi kosong tersisa adalah jam 8 (sebelah kiri P), yang pasti ditempati oleh U."
      },
      {
        id: "tiu-st-an-q2",
        type: "TIU",
        question: "Jadwal presentasi 5 tim (K, L, M, N, O) diatur dengan ketentuan:\n• Tim K harus tampil sebelum Tim M.\n• Tim N harus tampil tepat setelah Tim L.\n• Tim O tampil di urutan terakhir.\nManakah urutan jadwal presentasi yang MEMENUHI semua syarat?",
        options: [
          { label: "A", text: "M - K - L - N - O", score: 0 },
          { label: "B", text: "K - L - M - N - O", score: 0 },
          { label: "C", text: "L - N - K - M - O", score: 5 },
          { label: "D", text: "K - M - N - L - O", score: 0 },
          { label: "E", text: "L - K - N - O - M", score: 0 }
        ],
        explanation: "Uji opsi: Syarat 1 (K sebelum M) mencoret A. Syarat 2 (L diikuti langsung N -> blok LN) mencoret B dan D. Syarat 3 (O di akhir) mencoret E. Tersisa hanya Opsi C (L - N - K - M - O)!"
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 8. TIU FIGURAL: SERIAL, KETAKSAMAAN & ANALOGI GAMBAR
  //    (Part 12, 14, 15, 42, 43, 44)
  // --------------------------------------------------------------------------
  {
    id: "tiu-st-figural-master",
    category: "TIU",
    subCategory: "Figural - Serial, Analogi, Ketidaksamaan",
    title: "Master TIU Figural: Rotasi, Pencerminan, Ketidaksamaan & Serial Gambar",
    subtitle: "Ekstraksi Playlist Sang Tutor (Part 12, 14, 15, 42, 43, & 44) — Kunci mengamankan 100% poin soal gambar dengan cepat",
    youtubeUrl: "https://www.youtube.com/watch?v=79hX4LN7Mls",
    youtubeId: "79hX4LN7Mls",
    playlistVideos: [
      { id: "79hX4LN7Mls", label: "Part 44: Serial Gambar (Pasti Keluar)" },
      { id: "a92O8B_CF6U", label: "Part 43: Ketaksamaan Gambar Terbaru" },
      { id: "7RijENJ7mKE", label: "Part 42: Analogi Gambar Terbaru" },
      { id: "hi3oEVnnGUQ", label: "Part 15: HOTS Analogi Gambar" },
      { id: "jf2cFEO8aYc", label: "Part 14: Ketaksamaan Gambar" },
      { id: "jUp-QMT4BRI", label: "Part 12: Soal Figural Terbaru" }
    ],
    duration: "48 Menit",
    difficulty: "Lumbung Poin Cepat (5–6 Soal)",
    bknKeywords: [
      "3 Jenis Soal Figural BKN: (1) Analogi Gambar (A:B = C:D), (2) Ketaksamaan Gambar (Cari 1 dari 5 gambar yang beda aturan), (3) Serial Gambar (Pola gambar ke-4 / ke-5)",
      "4 Parameter Utama yang Harus Dicek: (1) Rotasi/Putaran (45°, 90°, 180° searah/berlawanan jarum jam), (2) Pencerminan (Vertikal/Horizontal), (3) Jumlah Sisi / Garis / Titik, (4) Warna (Hitam-Putih bergantian)",
      "Trik Fokus 1 Elemen: Jangan lihat seluruh gambar yang ramai sekaligus! Pilih SATU elemen (misal titik hitam kecil saja), lacak pergerakannya untuk langsung mencoret 3 opsi salah!"
    ],
    timestamps: [
      { time: "00:00", seconds: 0, label: "Mengenal 4 Pola Perubahan pada Soal Figural BKN" },
      { time: "07:30", seconds: 450, label: "Teknik Mengamati 1 Elemen Spesifik pada Serial Gambar" },
      { time: "14:50", seconds: 890, label: "Strategi Ketaksamaan Gambar: Putar di Kepala vs Hitung Sisi/Arah" }
    ],
    theorySections: [
      {
        heading: "1. Peta Checklist 4 Parameter Untuk Setiap Soal Figural",
        content: `Soal Figural adalah bagian TIU yang paling bebas dari salah hitung, asalkan mata Anda terlatih memeriksa 4 hal secara berurutan tanpa terpancing kerumitan gambar:`,
        table: {
          headers: ["Jenis Soal Figural", "Apa yang Harus Dicek Pertama?", "Jebakan Umum"],
          rows: [
            ["1. Analogi Gambar (A -> B :: C -> ?)", "Cek perubahan dari A ke B: apakah diputar (90°/180°), dicerminkan (kiri-kanan), berubah warna (hitam <-> putih), atau jumlah sisinya bertambah +1?", "Terbalik antara Rotasi 180° dengan Pencerminan! (Pencerminan membalik posisi tangan kiri menjadi kanan; rotasi TIDAK membalik bentuknya)."],
            ["2. Ketaksamaan Gambar (Cari 1 yang Beda)", "Putar gambar secara imajiner searah jarum jam! 4 gambar adalah gambar yang SAMA hanya diputar sudutnya; 1 gambar adalah hasil PENCERMINAN (terbalik) atau jumlah elemennya beda.", "Langsung memilih gambar yang arahnya miring tanpa mengecek apakah jika diputar sebenarnya bentuknya sama persis!"],
            ["3. Serial Gambar (1 -> 2 -> 3 -> 4 -> ?)", "Lacak 1 elemen saja per langkah (misal: posisi panah bergerak 45° searah jarum jam, lalu cek warna kotak hitam-putih-hitam-putih).", "Mencoba memahami 4 elemen sekaligus sehingga memakan waktu lama."]
          ]
        }
      }
    ],
    quickTricks: [
      {
        title: "Trik '1 Elemen' & 'Aturan Ganjil-Genap' pada Serial Gambar",
        mnemonic: "LACAK 1 TITIK/PANAH SAJA -> CORET 3 OPSI -> BANDINGKAN 2 OPSI TERSISA PAKAI WARNA/JUMLAH SISI!",
        normalWay: "Menggambar ulang perubahan seluruh bangun dari kotak ke-1 sampai kotak ke-4.",
        fastWay: "Jika di gambar ada panah, segitiga, lingkaran, dan arsiran: fokus hanya pada PANAH! Jika panah berputar 90° ke kanan tiap langkah, langsung coret opsi yang arah panahnya salah. Sisa 2 opsi, baru cek warna arsirannya!"
      }
    ],
    workedExamples: [
      {
        question: "Pada sebuah soal Ketidaksamaan Gambar, terdapat 5 gambar huruf 'F' yang dilengkapi satu titik hitam di sisi kanannya. Empat gambar berada pada posisi miring/terbalik akibat rotasi 90°, 180°, dan 270°, sedangkan satu gambar memiliki posisi titik hitam berada di sisi kiri garis tegak huruf 'F'. Manakah gambar yang berbeda?",
        options: [
          "A. Gambar yang diputar 90° searah jarum jam",
          "B. Gambar yang diputar 180°",
          "C. Gambar yang diputar 270° searah jarum jam",
          "D. Gambar yang titik hitamnya berpindah ke sisi berlawanan (hasil pencerminan)",
          "E. Gambar pada posisi normal 0°"
        ],
        answer: "D. Gambar yang titik hitamnya berpindah ke sisi berlawanan (hasil pencerminan)",
        normalExplanation: "Rotasi tidak pernah mengubah orientasi kiri-kanan relatif terhadap objek (titik tetap berada di sebelah kanan kepala huruf F jika diputar searah arah pandang huruf). Pencerminan membalik sisi kanan menjadi kiri sehingga tidak kongruen dengan keempat gambar lainnya.",
        fastTrickExplanation: "4 gambar hasil rotasi selalu kongruen (sama persis jika kertas ujian diputar). Hanya 1 gambar hasil pencerminan yang orientasi kiri-kanannya terbalik -> Opsi D!"
      }
    ],
    quiz: [
      {
        id: "tiu-st-fig-q1",
        type: "TIU",
        question: "Pada deret serial 4 kotak, kotak ke-1 berisi Segitiga (3 sisi) dengan 1 titik hitam; kotak ke-2 berisi Persegi (4 sisi) dengan 2 titik putih; kotak ke-3 berisi Segi Lima (5 sisi) dengan 3 titik hitam. Isi kotak ke-4 yang paling konsisten adalah...",
        options: [
          { label: "A", text: "Segi Enam (6 sisi) dengan 4 titik putih", score: 5 },
          { label: "B", text: "Segi Enam (6 sisi) dengan 4 titik hitam", score: 0 },
          { label: "C", text: "Segi Lima (5 sisi) dengan 4 titik putih", score: 0 },
          { label: "D", text: "Segi Tujuh (7 sisi) dengan 4 titik putih", score: 0 },
          { label: "E", text: "Lingkaran dengan 4 titik hitam", score: 0 }
        ],
        explanation: "Pola: (1) Jumlah sisi bangun bertambah +1 tiap langkah: 3 -> 4 -> 5 -> 6 (Segi Enam). (2) Jumlah titik bertambah +1: 1 -> 2 -> 3 -> 4. (3) Warna titik bergantian: Hitam -> Putih -> Hitam -> Putih. Jadi jawabannya Segi Enam dengan 4 titik putih (A)."
      },
      {
        id: "tiu-st-fig-q2",
        type: "TIU",
        question: "Dalam soal Analogi Gambar, Gambar A berupa tanda panah mengarah ke Atas (12.00) dengan kotak di pangkalnya berubah menjadi Gambar B berupa tanda panah mengarah ke Kanan (03.00) dengan lingkaran di pangkalnya. Jika Gambar C berupa panah mengarah ke Kanan (03.00) dengan kotak di pangkalnya, maka Gambar D adalah...",
        options: [
          { label: "A", text: "Panah mengarah ke Atas (12.00) dengan lingkaran di pangkalnya", score: 0 },
          { label: "B", text: "Panah mengarah ke Bawah (06.00) dengan lingkaran di pangkalnya", score: 5 },
          { label: "C", text: "Panah mengarah ke Kiri (09.00) dengan kotak di pangkalnya", score: 0 },
          { label: "D", text: "Panah mengarah ke Bawah (06.00) dengan kotak di pangkalnya", score: 0 },
          { label: "E", text: "Panah mengarah ke Kanan (03.00) dengan lingkaran di pangkalnya", score: 0 }
        ],
        explanation: "Aturan perubahan A -> B: (1) Arah panah diputar 90° searah jarum jam (12.00 -> 03.00), (2) Bentuk di pangkal berubah dari kotak menjadi lingkaran. Terapkan pada C (03.00 + kotak): diputar 90° searah jarum jam menjadi Bawah (06.00) dan kotak menjadi lingkaran -> Opsi B."
      }
    ]
  }
];
