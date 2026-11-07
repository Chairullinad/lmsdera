// ============================================================================
// MODUL BELAJAR TIU (TES INTELIGENSIA UMUM)
// Setiap kali ada link YouTube baru untuk TIU, tambahkan modul rinci di sini.
// ============================================================================

export const tiuSubCategories = [
  "Semua Sub-Topik",
  "Numerik - Deret Angka",
  "Numerik - Berhitung Cepat & Pecahan",
  "Numerik - Perbandingan (Senilai, Berbalik, Gabungan)",
  "Numerik - Soal Cerita (Kecepatan, Jarak, Kerja Bersama)",
  "Verbal - Analogi",
  "Verbal - Silogisme",
  "Verbal - Penalaran Analitis",
  "Figural - Serial, Analogi, Ketidaksamaan"
];

export const tiuModules = [
  {
    id: "tiu-numerik-deret-angka",
    category: "TIU",
    subCategory: "Numerik - Deret Angka",
    title: "Mastery Deret Angka & Huruf: Pola Larik, Bertingkat, dan Fibonacci",
    subtitle: "Teknik mengenali pola deret angka SKD CPNS dalam waktu kurang dari 30 detik",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    youtubeId: "",
    duration: "30 Menit",
    difficulty: "Pasti Keluar (4-6 Soal)",
    bknKeywords: [
      "Deret 1 Larik: Barisan pendek (5-7 angka), perubahan stabil",
      "Deret 2 Larik (Lompat 1): Barisan panjang (7-10 angka), angka naik-turun zig-zag",
      "Deret 3 Larik (Lompat 2): Barisan sangat panjang (>= 9 angka)",
      "Deret Fibonacci: Suku ke-n adalah jumlah 2 suku sebelumnya",
      "Deret Bertingkat: Selisih baru terlihat polanya pada tingkat ke-2"
    ],
    timestamps: [
      { time: "00:00", seconds: 0, label: "Anatomi 5 Tipe Pola Deret Angka BKN" },
      { time: "05:20", seconds: 320, label: "Cara Membedakan Deret 1 Larik vs 2 Larik Sekali Lihat" },
      { time: "12:10", seconds: 730, label: "Jebakan Deret Pecahan, Kuadrat, dan Bilangan Prima" },
      { time: "19:00", seconds: 1140, label: "Latihan Cepat 10 Soal Deret Asli FR SKD" }
    ],
    theorySections: [
      {
        heading: "1. Lima Pola Dasar Deret Angka yang Wajib Dikuasai",
        content: `Soal Deret Angka di TIU CPNS adalah **lumbung poin tercepat** jika Anda tahu cara mendiagnosis polanya di 5 detik pertama. Jangan langsung menghitung selisih dari depan jika deretnya panjang! Perhatikan dulu **panjang barisan** dan **perubahan nilainya**.`,
        points: [
          "1. Pola 1 Larik (Berurutan): Hubungan langsung antar suku berdekatan (U1 -> U2 -> U3). Biasanya berupa penjumlahan (+), pengurangan (-), perkalian (×), pembagian (÷), atau kombinasi.",
          "2. Pola 2 Larik (Lompat Satu): Suku ganjil berpasangan dengan suku ganjil (U1 -> U3 -> U5), dan suku genap dengan suku genap (U2 -> U4 -> U6). Ciri khas: angkanya naik-turun tidak beraturan.",
          "3. Pola 3 Larik (Lompat Dua): Biasanya muncul pada deret yang terdiri dari 9 hingga 12 suku angka.",
          "4. Pola Bertingkat (Tingkat 2): Jika selisih tingkat pertama adalah +2, +5, +10, +17, cek selisih tingkat keduanya (+3, +5, +7 -> bilangan ganjil!).",
          "5. Pola Fibonacci & Angka Spesial: Suku berikutnya adalah penjumlahan 2 suku sebelumnya (misal: 2, 3, 5, 8, 13, 21), atau deret bilangan kuadrat (1, 4, 9, 16, 25, 36) dan pangkat tiga (1, 8, 27, 64, 125)."
        ],
        table: {
          headers: ["Ciri Visual Soal", "Diagnosis Pola", "Langkah Eksekusi Cepat"],
          rows: [
            ["Angka membesar sangat drastis (misal: 3 ke 6 ke 18 ke 72)", "Perkalian / Pangkat", "Cek rasio kali: ×2, ×3, ×4 dst."],
            ["Angka naik-turun zig-zag (misal: 10, 50, 12, 45, 14, 40)", "Pasti 2 Larik (Lompat 1)", "Langsung lingkari suku ganjil saja atau suku genap saja sesuai posisi titik-titik (...)"],
            ["Deret sangat panjang (9-11 angka)", "2 Larik atau 3 Larik", "Hitung mundur dari titik-titik (...) lompat 1 atau lompat 2"],
            ["Angka awal berulang (misal: 3, 3, 6, 9, 15, 24)", "Fibonacci atau ×1", "Coba jumlahkan 2 angka di depannya (3+3=6, 3+6=9, 6+9=15)"]
          ]
        },
        alertBox: {
          type: "info",
          title: "Rahasia Hemat Waktu!",
          text: "Jika yang ditanyakan hanya 1 angka di ujung kanan dan Anda tahu itu deret 2 larik, JANGAN hitung larik pasangannya! Hanya hitung larik yang mendarat tepat di titik-titik (...)."
        }
      }
    ],
    quickTricks: [
      {
        title: "Rumus Diagnosis 5 Detik: 'Lihat Ujung & Hitung Jumlah Suku'",
        mnemonic: "≤ 6 Suku = 1 Larik | 7-8 Suku Zig-Zag = Lompat 1 | ≥ 9 Suku = Lompat 2",
        normalWay: "Menuliskan ulang semua angka di kertas buram lalu mencari selisih satu per satu dari suku pertama sampai akhir.",
        fastWay: "Hitung jumlah sukunya di layar! Kalau zig-zag, langsung tarik garis lompat 1 dari belakang (dari posisi titik-titik mundur 2 langkah). Anda bahkan tidak perlu menyalin soal ke kertas buram!"
      }
    ],
    workedExamples: [
      {
        question: "Tentukan dua angka selanjutnya dari deret berikut: 4, 100, 8, 95, 16, 85, 32, 70, ..., ...",
        options: [
          "A. 48, 55",
          "B. 64, 50",
          "C. 64, 55",
          "D. 48, 50",
          "E. 60, 45"
        ],
        answer: "B. 64, 50",
        normalExplanation: "Jika dicari selisih berurutan (+96, -92, +87, -79) tidak membentuk pola. Maka pisahkan menjadi 2 larik:\n- Larik 1 (suku ganjil): 4, 8, 16, 32 -> dikali 2 (×2), maka suku berikutnya = 32 × 2 = 64.\n- Larik 2 (suku genap): 100, 95, 85, 70 -> dikurangi -5, -10, -15, maka berikutnya dikurangi -20 -> 70 - 20 = 50.",
        fastTrickExplanation: "Lihat angka zig-zag (4 ke 100 ke 8 ke 95) -> Pasti 2 Larik! Suku ganjil jelas kelipatan ×2 (4, 8, 16, 32 -> 64). Cek opsi yang depannya 64: hanya B dan C. Lalu lihat 100 -> 95 (-5) -> 85 (-10) -> 70 (-15) -> pasti -20 = 50. Jawab B!"
      }
    ],
    quiz: [
      {
        id: "tiu-q1",
        type: "TIU",
        question: "Perhatikan deret angka berikut: 3, 7, 15, 31, 63, ... Angka selanjutnya adalah...",
        options: [
          { label: "A", text: "95", score: 0 },
          { label: "B", text: "115", score: 0 },
          { label: "C", text: "126", score: 0 },
          { label: "D", text: "127", score: 5 },
          { label: "E", text: "129", score: 0 }
        ],
        explanation: "Pola 1 Larik: Selisihnya adalah +4, +8, +16, +32 (selisih dikali 2). Maka selisih berikutnya adalah +64. Sehingga 63 + 64 = 127. (Atau pola alternatif: dikali 2 lalu ditambah 1 -> 63 × 2 + 1 = 127)."
      },
      {
        id: "tiu-q2",
        type: "TIU",
        question: "Perhatikan deret angka berikut: 2, 5, 7, 12, 19, 31, ... Angka selanjutnya adalah...",
        options: [
          { label: "A", text: "43", score: 0 },
          { label: "B", text: "48", score: 0 },
          { label: "C", text: "50", score: 5 },
          { label: "D", text: "52", score: 0 },
          { label: "E", text: "62", score: 0 }
        ],
        explanation: "Ini adalah deret Fibonacci: suku berikutnya merupakan penjumlahan 2 suku di depannya (2+5=7, 5+7=12, 7+12=19, 12+19=31). Maka angka selanjutnya = 19 + 31 = 50."
      },
      {
        id: "tiu-q3",
        type: "TIU",
        question: "Perhatikan deret berikut: 12, 60, 15, 52, 19, 44, 24, 36, ..., ...",
        options: [
          { label: "A", text: "29, 28", score: 0 },
          { label: "B", text: "30, 28", score: 5 },
          { label: "C", text: "30, 26", score: 0 },
          { label: "D", text: "31, 28", score: 0 },
          { label: "E", text: "29, 26", score: 0 }
        ],
        explanation: "Pola 2 Larik (Lompat 1):\n- Larik ganjil: 12 -> 15 (+3) -> 19 (+4) -> 24 (+5) -> berikutnya (+6) = 30.\n- Larik genap: 60 -> 52 (-8) -> 44 (-8) -> 36 (-8) -> berikutnya (-8) = 28.\nJadi jawabannya 30, 28."
      }
    ]
  }
];

