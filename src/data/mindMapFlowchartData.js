// ============================================================================
// DATA MASTER FLOWCHART & RANGKUMAN LENGKAP (POIN BESAR -> DETAIL POIN KECIL)
// Tersinkronisasi dengan seluruh modul TWK, TIU, TKP (Dhedi R Ghazali & Sang Tutor)
// ============================================================================

export const FLOWCHART_MASTER_DATA = {
  TWK: {
    code: "TWK",
    title: "Flowchart & Rangkuman Lengkap TWK (Tes Wawasan Kebangsaan)",
    targetScore: "Target Aman: 105+ / 150 (Minimal 21 Benar dari 30 Soal)",
    rootFlow: {
      step1: "1. Baca Kalimat Pertanyaan di PALING AKHIR Soal (Bottom-Up Reading)",
      step2: "2. Cari Subjek & Masalah Utama di 1–2 Kalimat Terakhir Narasi",
      step3: "3. Arahkan ke Cabang Kisi-Kisi di Bawah Ini & Coret Opsi yang Tidak Nyambung Konteks!"
    },
    branches: [
      {
        id: "twk-fc-pancasila",
        triggerLabel: "Ibadah, HAM, Persatuan, Rapat, atau Kesejahteraan",
        title: "1. Pilar Negara: Pancasila Lengkap (45 Butir + Sifat + Jebakan)",
        mnemonic: "1-TUHAN | 2-HAM/EMPATI | 3-NKRI/LOKAL | 4-MUSYAWARAH | 5-EKONOMI/ANTI MEWAH",
        badge: "8–10 Soal",
        color: "rose",
        subNodes: [
          {
            id: "fc-pancasila-filosofi",
            title: "A. Sifat Dasar Pancasila & Pembeda Bantuan/Internasional",
            summary: "Pancasila bersifat Organis (satu kesatuan utuh), Saling Mengisi, dan Hierarkis Piramidal (Sila 1 menjiwai Sila 2–5).",
            smallPoints: [
              "Sifat Hierarkis Piramidal: Sila 1 meliputi & menjiwai Sila 2, 3, 4, 5. Sila 5 dijiwai Sila 1, 2, 3, 4.",
              "Beda Bantuan Sila 2 vs Sila 5: Menolong korban kecelakaan/bencana karena iba & menyelamatkan nyawa = SILA 2. Memberi modal UMKM, pelatihan kerja, atau membangun jalan agar warga mandiri sejahtera = SILA 5.",
              "Beda Hubungan Internasional Sila 2 vs Sila 3: Mengirim bantuan medis/kemanusiaan darurat ke luar negeri atas dasar sesama umat manusia = SILA 2. Mengirim Pasukan Garuda TNI / diplomasi kedaulatan demi ketertiban dunia = SILA 3."
            ],
            trapAlert: "Jangan pernah memilih Sila 5 jika soal hanya menekankan penyelamatan nyawa darurat atau donor darah!"
          },
          {
            id: "fc-pancasila-sila1",
            title: "B. Sila ke-1: Ketuhanan YME (Lambang Bintang • 7 Butir Lengkap)",
            summary: "Fokus pada hubungan vertikal dengan Tuhan (Takwa) & hubungan horizontal antarumat beragama (Toleransi Ibadah).",
            smallPoints: [
              "Makna Lambang: Bintang emas bersudut lima di atas perisai latar hitam melambangkan cahaya kerohanian Tuhan menerangi semesta.",
              "Butir 1: Percaya dan takwa kepada Tuhan YME sesuai agama dan kepercayaan masing-masing.",
              "Butir 2: Ketakwaan dijalankan menurut dasar kemanusiaan yang adil dan beradab.",
              "Butir 3: Mengembangkan sikap hormat-menghormati dan bekerja sama antar pemeluk agama/kepercayaan berbeda (dalam urusan sosial, BUKAN mencampuradukkan ritual ibadah/sinkretisme!).",
              "Butir 4: Membina kerukunan hidup di antara sesama umat beragama (contoh: FKUB, Tri Kerukunan Umat Beragama: intern seagama, antarumat agama, & umat dengan pemerintah).",
              "Butir 5: Agama/kepercayaan adalah urusan hubungan pribadi manusia dengan Tuhan YME.",
              "Butir 6: Saling menghormati kebebasan menjalankan ibadah (misal: menskors rapat saat waktu Salat Jumat atau menjaga ketenangan saat Nyepi).",
              "Butir 7: Tidak memaksakan suatu agama dan kepercayaan kepada orang lain.",
              "Pasal Kembar Agama: Individu bebas memeluk agama = Pasal 28E ayat (1) & (2) UUD 1945. Negara berdasar Ketuhanan YME = Pasal 29 ayat (1). Negara menjamin kemerdekaan penduduk beribadah = Pasal 29 ayat (2)."
            ],
            trapAlert: "Penyimpangan Sila 1: Ateisme, penistaan agama, perusakan rumah ibadah, pemaksaan pindah keyakinan, & mencampuradukkan ritual ibadah agama."
          },
          {
            id: "fc-pancasila-sila2",
            title: "C. Sila ke-2: Kemanusiaan yang Adil & Beradab (Rantai • 10 Butir Lengkap)",
            summary: "Fokus pada harkat martabat manusia, persamaan derajat (HAM), empati personal, anti-bullying, & solidaritas kemanusiaan.",
            smallPoints: [
              "Makna Lambang: Rantai emas bermata persegi (laki-laki) dan bulat (perempuan) berjumlah 17 yang saling menyatu erat (setara/egaliter).",
              "Butir 1: Mengakui dan memperlakukan manusia sesuai harkat dan martabatnya (contoh: menghormati pekerja kebersihan/ART).",
              "Butir 2: Mengakui persamaan derajat, hak, dan kewajiban asasi tanpa membeda-bedakan suku, keturunan, agama, gender, status sosial, atau warna kulit.",
              "Butir 3: Mengembangkan sikap saling mencintai sesama manusia.",
              "Butir 4: Mengembangkan sikap saling tenggang rasa dan tepa selira (tidak body shaming / menjaga perasaan).",
              "Butir 5: Mengembangkan sikap tidak semena-mena terhadap orang lain (anti-perundungan/anti-bullying & anti-eksploitasi bawahan).",
              "Butir 6: Menjunjung tinggi nilai-nilai kemanusiaan (nyawa manusia lebih utama dari urusan materi).",
              "Butir 7: Gemar melakukan kegiatan kemanusiaan (donor darah, relawan evakuasi bencana).",
              "Butir 8: Berani membela kebenaran dan keadilan (menjadi saksi membela teman yang difitnah).",
              "Butir 9: Bangsa Indonesia merasa dirinya sebagai bagian dari seluruh umat manusia.",
              "Butir 10: Mengembangkan sikap hormat-menghormati dan bekerja sama dengan bangsa lain (misi kemanusiaan global).",
              "Pasal Terkait: Bab XA HAM Pasal 28A–28J UUD 1945, terutama Pasal 28I ayat (2) tentang bebas dari perlakuan diskriminatif."
            ],
            trapAlert: "Setiap kasus bullying, doxing, body shaming, human trafficking, atau diskriminasi layanan pejabat vs rakyat kecil = 100% SILA KE-2!"
          },
          {
            id: "fc-pancasila-sila3",
            title: "D. Sila ke-3: Persatuan Indonesia (Pohon Beringin • 7 Butir & 6 Paham Pengancam)",
            summary: "Fokus pada keutuhan NKRI, kepentingan bangsa di atas pribadi/golongan, cinta tanah air, produk lokal, & Bhinneka Tunggal Ika.",
            smallPoints: [
              "Makna Lambang: Pohon beringin rindang berakar tunjang kuat dengan sulur menjalar (mengayomi seluruh suku/budaya yang bersatu dalam Bhinneka).",
              "Butir 1: Menempatkan persatuan, kesatuan, serta kepentingan & keselamatan bangsa di atas kepentingan pribadi dan golongan.",
              "Butir 2: Sanggup dan rela berkorban untuk kepentingan negara dan bangsa (patriotisme: misal dokter bertugas di pulau terluar, pembebasan lahan tol dengan ganti untung).",
              "Butir 3: Mengembangkan rasa cinta kepada tanah air dan bangsa (menjaga hutan/laut, melestarikan budaya).",
              "Butir 4: Mengembangkan rasa kebanggaan berkebangsaan dan bertanah air Indonesia (bangga membeli & memakai produk UMKM lokal).",
              "Butir 5: Memelihara ketertiban dunia berdasarkan kemerdekaan, perdamaian abadi, & keadilan sosial (Pasukan Garuda PBB).",
              "Butir 6: Mengembangkan persatuan Indonesia atas dasar Bhinneka Tunggal Ika.",
              "Butir 7: Memajukan pergaulan demi persatuan dan kesatuan bangsa.",
              "6 Paham Pengancam Sila 3 (Wajib Hafal!): (1) Primordialisme = pilih kasih karena ikatan lahir/sesuku/sekampung; (2) Etnosentrisme = menilai/merendahkan budaya suku lain memakai standar sukunya; (3) Sukuisme = mementingkan suku sendiri saja; (4) Chauvinisme = cinta tanah air berlebihan yang merendahkan bangsa lain; (5) Separatisme = ingin memisahkan diri dari NKRI; (6) Ekstremisme/Radikalisme = memaksakan perubahan dengan kekerasan."
            ],
            trapAlert: "Beda Primordialisme vs Etnosentrisme vs Chauvinisme: Pilih kasih teman sekampung = Primordialisme; Ejek adat suku lain = Etnosentrisme; Ejek negara/bangsa lain = Chauvinisme!"
          },
          {
            id: "fc-pancasila-sila4",
            title: "E. Sila ke-4: Kerakyatan / Demokrasi (Kepala Banteng • 10 Butir & Jebakan Butir 9)",
            summary: "Fokus pada kedaulatan rakyat, musyawarah mufakat, tidak memaksakan kehendak, & menerima hasil rapat/pemilu dengan itikad baik.",
            smallPoints: [
              "Makna Lambang: Kepala Banteng (hewan sosial yang gemar berkumpul & kuat saat bersatu untuk bermusyawarah).",
              "Butir 1: Sebagai warga negara & masyarakat, setiap manusia Indonesia punya kedudukan, hak, dan kewajiban sama (dalam hak politik/suara).",
              "Butir 2: Tidak boleh memaksakan kehendak kepada orang lain (anti-otoriter & anti-anarkis).",
              "Butir 3: Mengutamakan musyawarah dalam mengambil keputusan untuk kepentingan bersama.",
              "Butir 4: Musyawarah mencapai mufakat diliputi semangat kekeluargaan (jika deadlock, baru voting sah sesuai aturan!).",
              "Butir 5: Menghormati dan menjunjung tinggi setiap keputusan hasil musyawarah.",
              "Butir 6: Dengan itikad baik & tanggung jawab menerima dan melaksanakan hasil keputusan musyawarah meski usulannya kalah.",
              "Butir 7: Mengutamakan kepentingan bersama di atas pribadi/golongan saat bermusyawarah.",
              "Butir 8: Musyawarah dilakukan dengan akal sehat dan sesuai hati nurani yang luhur (berbasis data/argumen logis).",
              "Butir 9 (JEBAKAN FAVORIT!): Keputusan yang diambil harus dapat dipertanggungjawabkan secara moral kepada Tuhan YME, menjunjung tinggi harkat martabat manusia, kebenaran, keadilan, persatuan demi kepentingan bersama -> INI SILA KE-4 (bukan Sila 1)!",
              "Butir 10: Memberikan kepercayaan kepada wakil-wakil yang dipercayai (aktif Pemilu, salurkan aspirasi lewat DPR/DPRD)."
            ],
            trapAlert: "Hati-hati Butir 9 Sila 4! Ada kata 'Tuhan YME' dan 'martabat manusia', tetapi subjek utamanya adalah 'Keputusan yang diambil (hasil musyawarah)' -> Jawabannya mutlak SILA KE-4!"
          },
          {
            id: "fc-pancasila-sila5",
            title: "F. Sila ke-5: Keadilan Sosial (Padi & Kapas • 11 Butir Lengkap)",
            summary: "Fokus pada keseimbangan hak & kewajiban, menghormati hak publik, anti-boros/hedonisme, kerja keras, & menghargai karya.",
            smallPoints: [
              "Makna Lambang: Padi (pangan) dan Kapas (sandang) sebagai kebutuhan pokok kesejahteraan merata bagi seluruh rakyat.",
              "Butir 1: Mengembangkan perbuatan luhur yang mencerminkan kekeluargaan & kegotongroyongan.",
              "Butir 2: Mengembangkan sikap adil terhadap sesama.",
              "Butir 3: Menjaga keseimbangan antara hak dan kewajiban (misal: bayar pajak tepat waktu sebelum menuntut jalan mulus).",
              "Butir 4: Menghormati hak orang lain (tidak menyerobot antrean, tidak parkir di trotoar pejalan kaki).",
              "Butir 5: Suka memberi pertolongan kepada orang lain agar dapat BERDIRI SENDIRI (pemberdayaan UMKM, pelatihan kerja).",
              "Butir 6: Tidak menggunakan hak milik untuk pemerasan terhadap orang lain (anti-rentenir).",
              "Butir 7: Tidak menggunakan hak milik untuk pemborosan & gaya hidup mewah (anti-flexing/hedonisme pejabat).",
              "Butir 8: Tidak menggunakan hak milik untuk merugikan kepentingan umum (anti-penimbunan sembako, tidak merusak fasilitas umum).",
              "Butir 9: Suka bekerja keras.",
              "Butir 10: Suka menghargai hasil karya orang lain yang bermanfaat bagi kemajuan bersama (anti-plagiarisme/anti-pembajakan).",
              "Butir 11: Melakukan kegiatan mewujudkan kemajuan yang merata & berkeadilan sosial (Pasal 33 & 34 UUD 1945)."
            ],
            trapAlert: "Jika soal menceritakan plagiarisme, flexing kemewahan, menimbun sembako, menyerobot trotoar, atau pelatihan UMKM = SILA KE-5!"
          }
        ]
      },
      {
        id: "twk-fc-uud-nkri",
        triggerLabel: "Pasal UUD 1945, Lembaga Negara, Perda, atau Otonomi Daerah",
        title: "2. UUD 1945, Tata Negara & NKRI (Amandemen & Kewenangan Lembaga)",
        mnemonic: "Uji UU = MK | Uji Perda/PP = MA | 6 Urusan Pusat = PO-PER-KE-YU-MO-A",
        badge: "3–5 Soal",
        color: "indigo",
        subNodes: [
          {
            id: "fc-uud-pembukaan",
            title: "A. Makna 4 Alinea Pembukaan UUD 1945 & Hierarki Peraturan",
            summary: "Pembukaan UUD 1945 berkedudukan sebagai Staatsfundamentalnorm (tidak boleh diubah termasuk oleh MPR).",
            smallPoints: [
              "Alinea 1: Keteguhan bangsa menentang penjajahan karena tidak sesuai perikemanusiaan dan perikeadilan.",
              "Alinea 2: Perjuangan kemerdekaan telah sampai pada saat bahagia untuk mengantarkan Indonesia merdeka, bersatu, berdaulat, adil, dan makmur.",
              "Alinea 3: Motivasi spiritual luhur bahwa kemerdekaan diraih 'Atas berkat rakhmat Allah Yang Maha Kuasa' (Sila 1).",
              "Alinea 4: Memuat 4 Tujuan Negara (Melindungi segenap bangsa, memajukan kesejahteraan umum, mencerdaskan kehidupan bangsa, ikut melaksanakan ketertiban dunia) + Bentuk Republik + Dasar Negara Pancasila.",
              "Hierarki Perundang-undangan (UU No. 12 Tahun 2011): (1) UUD NRI 1945 -> (2) Ketetapan MPR -> (3) UU / Perppu -> (4) PP -> (5) Perpres -> (6) Perda Provinsi -> (7) Perda Kabupaten/Kota."
            ]
          },
          {
            id: "fc-uud-lembaga",
            title: "B. Peta 8 Lembaga Negara Pasca-Amandemen & 3 Hak DPR",
            summary: "Tidak ada lagi Lembaga Tertinggi Negara! Seluruh lembaga tinggi negara sejajar dalam sistem Checks and Balances.",
            smallPoints: [
              "MPR: Mengubah/menetapkan UUD (tidak boleh ubah Pembukaan & bentuk NKRI), melantik Presiden/Wapres, memberhentikan Presiden atas usul DPR setelah putusan MK.",
              "DPR (3 Fungsi: Legislasi, Anggaran, Pengawasan): Memiliki 3 Hak Utama -> (1) Interpelasi (meminta keterangan kebijakan pemerintah), (2) Angket (menyelidiki dugaan pelanggaran UU oleh pemerintah), (3) Menyatakan Pendapat (tindak lanjut hasil angket / dugaan pelanggaran Presiden).",
              "DPD: Mengajukan & membahas RUU seputar otonomi daerah, hubungan pusat-daerah, & perimbangan keuangan pusat-daerah.",
              "BPK: Memeriksa pengelolaan keuangan negara; laporan diserahkan kepada DPR, DPD, dan DPRD.",
              "MA (Mahkamah Agung): Peradilan kasasi tertinggi + Menguji peraturan DI BAWAH UU (PP, Perpres, Perda) terhadap UU.",
              "MK (Mahkamah Konstitusi): Menguji UU terhadap UUD 1945, memutus sengketa kewenangan lembaga negara, pembubaran parpol, & sengketa hasil Pemilu.",
              "KY (Komisi Yudisial): Mengusulkan pengangkatan Hakim Agung + menjaga kehormatan & perilaku hakim (tidak memutus perkara!)."
            ],
            trapAlert: "Jika soal menanyakan Perda bermasalah diuji ke mana -> Mahkamah Agung (MA)! Jika Undang-Undang (UU) bertentangan UUD -> Mahkamah Konstitusi (MK)!"
          },
          {
            id: "fc-uud-otda",
            title: "C. Pasal Kunci Hak Warga Negara & 6 Urusan Pusat (Otonomi Daerah)",
            summary: "Pemda mengurus otonomi seluas-luasnya KECUALI 6 urusan absolut Pemerintah Pusat.",
            smallPoints: [
              "6 Urusan Absolut Pusat (PO-PER-KE-YU-MO-A): (1) Politik Luar Negeri, (2) Pertahanan, (3) Keamanan, (4) Yustisi (peradilan/hukum/imigrasi/grasi), (5) Moneter & Fiskal Nasional (cetak rupiah/pajak pusat/BI), (6) Agama.",
              "Pasal Kunci Warga Negara: Pasal 27(1) Kesamaan di hadapan hukum; Pasal 27(2) Pekerjaan & penghidupan layak; Pasal 27(3) Bela Negara; Pasal 30 Pertahanan & Keamanan (Sishankamrata); Pasal 31 Pendidikan (min 20% APBN/APBD); Pasal 32 Kebudayaan; Pasal 33 Perekonomian & Kekayaan Alam dikuasai negara; Pasal 34 Fakir miskin & anak terlantar dipelihara negara."
            ]
          }
        ]
      },
      {
        id: "twk-fc-nasionalisme-bela",
        triggerLabel: "Sejarah 1908–1945, Netralitas ASN, Ancaman Siber/Hoaks, atau Pengabdian 3T",
        title: "3. Nasionalisme & Bela Negara (Sejarah, Nilai Dasar & Peran ASN)",
        mnemonic: "NASIONALISME = Identitas & Perekat Bangsa | BELA NEGARA = Hadapi Ancaman & Abdi Profesi",
        badge: "8–10 Soal",
        color: "amber",
        subNodes: [
          {
            id: "fc-nas-sejarah",
            title: "A. Nasionalisme, Tonggak Sejarah (1908–1945) & Fungsi ASN",
            summary: "Pergeseran perjuangan kedaerahan-fisik menjadi perjuangan nasional terorganisasi modern sejak 1908.",
            smallPoints: [
              "Budi Utomo (20 Mei 1908): Hari Kebangkitan Nasional (Dr. Sutomo & Wahidin Sudirohusodo) -> organisasi modern pertama berbasis pendidikan.",
              "Indische Partij (25 Des 1912): Tiga Serangkai (Douwes Dekker, Cipto Mangunkusumo, Suwardi Suryaningrat/Ki Hajar Dewantara) -> partai politik pertama yang menuntut Indonesia merdeka penuh.",
              "Sumpah Pemuda (28 Okt 1928): Peleburan organisasi kedaerahan menjadi ikrar Satu Tanah Air, Satu Bangsa, Satu Bahasa Persatuan.",
              "BPUPKI vs PPKI: BPUPKI (Sidang I: 29 Mei–1 Juni 1945 rumuskan dasar negara; Piagam Jakarta 22 Juni 1945; Sidang II: 10–17 Juli 1945 rancangan UUD). PPKI (18 Ags 1945 mengesahkan UUD 1945 & memilih Soekarno-Hatta).",
              "3 Fungsi ASN (UU ASN): (1) Pelaksana kebijakan publik, (2) Pelayan publik, (3) Perekat & pemersatu bangsa (wajib netral dari politik praktis!)."
            ]
          },
          {
            id: "fc-bela-negara",
            title: "B. Bela Negara: 5 Nilai Dasar & Sishankamrata (Pasal 27 & 30)",
            summary: "Bela negara modern dilakukan lewat pengabdian sesuai profesi untuk menangkal ancaman militer maupun nir-militer.",
            smallPoints: [
              "5 Nilai Dasar Bela Negara (UU No. 23 Tahun 2019): (1) Cinta Tanah Air, (2) Sadar Berbangsa & Bernegara, (3) Setia pada Pancasila sebagai Ideologi, (4) Rela Berkorban untuk Bangsa & Negara, (5) Kemampuan Awal Bela Negara.",
              "Sishankamrata (Pasal 30 ayat 2): TNI & Polri sebagai Komponen/Kekuatan Utama; Warga Negara/Rakyat sebagai Komponen Cadangan & Pendukung.",
              "Contoh Bela Negara Nir-Militer & Profesi: Dokter mengabdi di pulau terluar (3T), Pranata Komputer mengamankan data server instansi dari serangan siber/ransomware, warga memverifikasi berita sebelum share (anti-hoaks), & taat membayar pajak."
            ],
            trapAlert: "Bela Negara tidak melulu angkat senjata! Dalam soal CPNS, menghadapi hoaks, korupsi, narkoba, & serangan siber melalui profesi adalah Bela Negara!"
          }
        ]
      },
      {
        id: "twk-fc-integritas",
        triggerLabel: "Kejujuran, Suap, Gratifikasi, Pungli, atau Dilema Perintah Atasan",
        title: "4. Integritas & Antikorupsi (9 Nilai KPK & Delik Tipikor)",
        mnemonic: "9 Nilai KPK: JU-DI-TA | MA-KER-SE | BE-PE-AD • Gratifikasi Wajib Lapor Maks 30 Hari Kerja",
        badge: "4–6 Soal",
        color: "emerald",
        subNodes: [
          {
            id: "fc-int-kpk",
            title: "A. 9 Nilai Integritas KPK & Beda Suap vs Gratifikasi vs Pemerasan",
            summary: "Integritas adalah kesesuaian antara hati nurani, perkataan, dan tindakan nyata bahkan ketika tidak ada CCTV atau atasan mengawasi.",
            smallPoints: [
              "3 Nilai Inti: (1) Jujur (tidak mark-up SPPD/absen), (2) Disiplin (taat SOP & waktu), (3) Tanggung Jawab (berani tanggung risiko kesalahan sendiri).",
              "3 Etos Kerja: (4) Mandiri (tidak bergantung berlebihan pada orang lain), (5) Kerja Keras, (6) Sederhana (tidak flexing/hedonisme).",
              "3 Nilai Sikap: (7) Berani (menolak perintah atasan yang melanggar hukum & berani lapor/whistleblowing), (8) Peduli, (9) Adil (tidak nepotisme).",
              "Suap: Ada pertemuan kehendak/kesepakatan transaksional antara pemberi & penerima untuk memengaruhi keputusan jabatan (Keduanya dipidana!).",
              "Gratifikasi: Pemberian hadiah dalam arti luas terkait jabatan tanpa kesepakatan langsung (misal parsel/bingkisan). Dianggap suap jika TIDAK ditolak atau TIDAK dilaporkan ke KPK/UPG maksimal 30 hari kerja!",
              "Pemerasan: Pejabat secara aktif memaksa/mengancam warga memberikan uang/imbalan agar urusannya dilancarkan."
            ],
            trapAlert: "Jika atasan menyuruh memanipulasi data/SPPD -> JANGAN patuhi atas nama loyalitas! Wajib tolak dengan santun berdasar peraturan hukum!"
          }
        ]
      },
      {
        id: "twk-fc-bindo",
        triggerLabel: "Ide Pokok, Simpulan, Kalimat Efektif, Kata Baku, Imbuhan, atau Tanda Baca",
        title: "5. Bahasa Indonesia (EYD Edisi V & KBBI Baku)",
        mnemonic: "Coret 'Bagi/Dalam' di Awal Kalimat • K-T-S-P + Vokal Luluh • Konsonan Ganda Tidak Luluh",
        badge: "5–7 Soal",
        color: "indigo",
        subNodes: [
          {
            id: "fc-bindo-paragraf",
            title: "A. Ide Pokok, Kalimat Efektif & Peluluhan Imbuhan K-T-S-P",
            summary: "Bagian paling objektif di TWK: kuasai struktur kalimat dan kaidah ejaan terbaru untuk mengamankan 25–35 poin!",
            smallPoints: [
              "Letak Kalimat Utama/Ide Pokok: Deduktif (kalimat 1, lalu kalimat 2 pakai kata rujukan 'hal ini/tersebut'), Induktif (kalimat akhir diawali 'jadi/oleh karena itu/dengan demikian'), Campuran (awal & ditegaskan lagi di akhir).",
              "6 Syarat Kalimat Efektif: (1) Wajib punya S + P (salah jika diawali 'Bagi para peserta diharap...', 'Dalam rapat membahas...'); (2) Hemat/anti-pleonasme ('para hadirin sekalian', 'sangat indah sekali', 'agar supaya', 'banyak rumah-rumah'); (3) Konjungsi tidak ganda ('Meskipun... tetapi...'); (4) Sejajar/paralel imbuhannya; (5) Logis; (6) Tepat ejaan.",
              "Hukum K-T-S-P: Awalan meN- bertemu kata dasar huruf awal K, T, S, P + huruf kedua VOKAL -> LULUH (ubah->mengubah, sapu->menyapu, sosialisasi->menyosialisasikan, tulis->menulis). Jika huruf kedua KONSONAN -> TIDAK LULUH (proses->memproses, kritik->mengkritik, transfer->mentransfer).",
              "Pengecualian K-T-S-P Wajib Ingat: mengkaji (ilmu) vs mengaji (Al-Qur'an); mempunyai (tidak luluh).",
              "Preposisi 'di' (tempat -> dipisah: di kantor, di mana, di atas) vs Awalan 'di-' (kata kerja pasif -> digabung: diketik, dilaksanakan).",
              "Konjungsi Antarkalimat (awal kalimat + wajib koma): 'Namun,', 'Oleh karena itu,', 'Meskipun demikian,', 'Selain itu,'. Konjungsi Intrakalimat (tengah kalimat, didahului koma): ', sedangkan', ', melainkan'.",
              "Penulisan Gelar (EYD V): Titik di singkatan, dipisah koma dengan nama: 'Dr. Chairul Linad, S.Kom., M.T.'",
              "Daftar Kata Baku KBBI Langganan Soal: Sistem (bukan sistim), Analisis (bukan analisa), Risiko (bukan resiko), Apotek (bukan apotik), Praktik (bukan praktek), Antre (bukan antri), Nasihat (bukan nasehat), Kuitansi (bukan kwitansi), Izin (bukan ijin), Ekstrem (bukan ekstrim), Diagnosis (bukan diagnosa), Kualitas (bukan kwalitas)."
            ],
            trapAlert: "Jangan terkecoh kata 'merubah' dan 'mensosialisasikan' -> Bentuk bakunya yang benar adalah 'mengubah' dan 'menyosialisasikan'!"
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CABANG 2: TIU (TES INTELIGENSIA UMUM)
  // ==========================================================================
  TIU: {
    code: "TIU",
    title: "Flowchart & Rumus Lengkap TIU (Tes Inteligensia Umum)",
    targetScore: "Target Aman S1 Informatika: 140+ / 175 (Minimal 28 Benar dari 35 Soal)",
    rootFlow: {
      step1: "1. Identifikasi Jenis Soal TIU dalam 3 Detik Pertama (Numerik / Verbal / Figural)",
      step2: "2. Pilih Jalur Rumus Cepat yang Sesuai (Hindari Perkalian Panjang & Membayangkan di Kepala)",
      step3: "3. Gunakan Teknik Eliminasi Opsi atau Uji Angka Kontras untuk Menghemat Waktu < 45 Detik/Soal"
    },
    branches: [
      {
        id: "tiu-fc-hitung-cepat",
        triggerLabel: "Operasi Pecahan, Persen, Desimal, Kuadrat, atau Akar",
        title: "1. Numerik Hitung Cepat & Pecahan Istimewa",
        mnemonic: "Hafal 1/8..7/8 & 1/6..5/6 • Selisih Kuadrat a²-b² = (a+b)(a-b) • Pecahan Berulang = /9 atau /99",
        badge: "4–6 Soal",
        color: "indigo",
        subNodes: [
          {
            id: "fc-tiu-pecahan",
            title: "A. Tabel Pecahan Istimewa & Pecahan Desimal Berulang",
            summary: "Ubah persen atau desimal rumit menjadi pecahan sederhana agar bisa langsung dicoret dengan angka pengalinya.",
            smallPoints: [
              "Kelipatan Per-Delapan: 1/8 = 12,5% (0,125) | 3/8 = 37,5% (0,375) | 5/8 = 62,5% (0,625) | 7/8 = 87,5% (0,875).",
              "Kelipatan Per-Enam & Tiga: 1/3 = 33,33% | 2/3 = 66,67% | 1/6 = 16,67% | 5/6 = 83,33%.",
              "Kelipatan Per-Empat & Lima: 1/4 = 25% | 3/4 = 75% | 1/5 = 20% | 2/5 = 40% | 3/5 = 60% | 4/5 = 80%.",
              "Pecahan Desimal Berulang: 0,aaaa... = a/9 (contoh 0,777... = 7/9); 0,ababab... = ab/99 (contoh 0,121212... = 12/99 = 4/33); 0,abcabc... = abc/999.",
              "Pembagian Pecahan: A ÷ (B/C) selalu diubah menjadi A × (C/B). Dahulukan KaBaTaKu (Kurung -> Kali/Bagi -> Tambah/Kurang)."
            ]
          },
          {
            id: "fc-tiu-aljabar",
            title: "B. Identitas Aljabar Kilat & Trik Perkalian Cepat",
            summary: "Jika angka pada soal besar sekali (seperti tahun 2026²), PASTI menggunakan sifat aljabar, bukan dihitung manual!",
            smallPoints: [
              "Selisih Kuadrat: a² - b² = (a + b)(a - b). Contoh: 2026² - 2025² = (2026 + 2025)(1) = 4051.",
              "Kuadrat Jumlah/Selisih: (a + b)² = a² + 2ab + b² | (a - b)² = a² - 2ab + b².",
              "Sifat Distributif: (a × b) ± (a × c) = a × (b ± c). Keluarkan angka kembarnya terlebih dahulu!",
              "Perkalian 5 / 25 / 125: Kali 5 = bagi 2 tambah nol; Kali 25 = bagi 4 kali 100; Kali 125 = bagi 8 kali 1000.",
              "Akar Kuadrat Cepat (Satuan 1->1/9, 4->2/8, 5->5, 6->4/6, 9->3/7) & Pendekatan Pembulatan saat selisih opsi A–E berjauhan."
            ]
          }
        ]
      },
      {
        id: "tiu-fc-deret",
        triggerLabel: "Barisan Angka, Huruf, atau Pola Angka dalam Gambar",
        title: "2. Deret Angka, Huruf & Pola Bilangan Model Baru",
        mnemonic: "≤6 Suku = 1 Larik | Zig-Zag = Lompat 1 (2 Larik) | ≥9 Suku = Lompat 2 (3 Larik)",
        badge: "4–6 Soal",
        color: "indigo",
        subNodes: [
          {
            id: "fc-tiu-deret-jenis",
            title: "A. 7 Jenis Pola Deret & Pola Gambar Angka Terbaru",
            summary: "Jangan hitung dari depan jika deret panjang! Diagnosis jumlah suku dan naik-turunnya angka dalam 5 detik.",
            smallPoints: [
              "1. Pola 1 Larik: U1 -> U2 -> U3 langsung dengan operasi (+, -, ×, ÷) atau kombinasi seperti (×2 + 1).",
              "2. Pola 2 Larik (Lompat 1): Ciri angka naik-turun zig-zag (misal 10, 50, 12, 45). Suku ganjil ikut suku ganjil, suku genap ikut suku genap. Jika ditanya 1 titik di akhir, hitung larik yang mendarat di titik itu saja!",
              "3. Pola 3 Larik (Lompat 2): Umumnya panjang barisan 9–12 suku.",
              "4. Pola Bertingkat 2: Selisih tingkat pertama belum teratur (+2, +5, +10, +17), cek selisih tingkat dua (+3, +5, +7).",
              "5. Deret Fibonacci: Suku berikutnya = penjumlahan 2 suku sebelumnya (2, 3, 5, 8, 13, 21) atau Tribonacci (3 suku).",
              "6. Bilangan Spesial: Kuadrat (1, 4, 9, 16, 25, 36, 49, 64, 81, 100), Kubik (1, 8, 27, 64, 125, 216), Prima (2, 3, 5, 7, 11, 13, 17, 19).",
              "7. Pola Bilangan Gambar/Tabel (Part 54): Uji operasi silang/pinggir hingga konsisten di Gambar 1 DAN Gambar 2 (misal A×B - A, atau (Atas+Bawah)×(Kiri-Kanan)) sebelum diterapkan ke Gambar 3."
            ]
          }
        ]
      },
      {
        id: "tiu-fc-kuantitatif-tabel",
        triggerLabel: "Bandingkan P vs Q, Pernyataan (1) & (2), atau Membaca Tabel Data",
        title: "3. Perbandingan Kuantitatif (P vs Q), Kecukupan Data & Tabel",
        mnemonic: "Uji 4 Angka Kontras: 2, 1/2, 0, -2 • Persentase = Selisih / Awal • Kali Silang Pecahan",
        badge: "5–8 Soal",
        color: "indigo",
        subNodes: [
          {
            id: "fc-tiu-pvsq",
            title: "A. P vs Q & Kecukupan Data (Pernyataan 1 & 2)",
            summary: "Pada Kecukupan Data Anda tidak wajib menghitung hasil akhir secara lengkap, cukup pastikan persamaannya menghasilkan 1 nilai unik yang pasti!",
            smallPoints: [
              "Uji 4 Angka Kontras pada P vs Q: Coba substitusi x = 2 (bulat >1), x = 1/2 (pecahan 0<x<1), x = 0, dan x = -2 (negatif) sesuai syarat soal. Jika menghasilkan tanda berbeda (kadang P>Q, kadang P<Q), pilih 'Tidak dapat ditentukan'.",
              "Jebakan Pangkat Genap: x² = 25 berarti x = +5 ATAU x = -5 (ada 2 nilai -> BELUM CUKUP sampai ada syarat x > 0 atau pernyataan kedua!).",
              "5 Opsi Baku Kecukupan Data: A = (1) saja cukup; B = (2) saja cukup; C = (1) & (2) harus digabung; D = Masing-masing (1) saja atau (2) saja cukup; E = Keduanya digabung tetap belum cukup."
            ]
          },
          {
            id: "fc-tiu-tabel",
            title: "B. Analisa Data Tabel & Grafik",
            summary: "Cek opsi jawaban terlebih dahulu agar tidak menghitung baris tabel yang tidak ditanyakan!",
            smallPoints: [
              "Persentase Kenaikan/Penurunan = ((Nilai Baru - Nilai Lama) / Nilai Lama) × 100%. Pembagi SELALU nilai awal/lama!",
              "Membandingkan 2 Pecahan Tanpa Desimal: Bandingkan a/b vs c/d dengan KALI SILANG (a×d vs b×c).",
              "Rata-Rata Gabungan (Jungkat-Jungkit): Jika kelompok A (n=20, rata 80) & kelompok B (n=30, rata 90), selisih 10 poin dibagi rasio 2:3 -> gabungannya = 80 + (3/5 × 10) = 86."
            ]
          }
        ]
      },
      {
        id: "tiu-fc-soal-cerita",
        triggerLabel: "Pekerja vs Hari, Jarak-Kecepatan-Waktu, Diskon, Untung-Rugi",
        title: "4. Soal Cerita & Perbandingan (Rumus Komplet)",
        mnemonic: "Senilai = Silang | Berbalik = Lurus | 3 Var = O/(S×W) | Terhenti = (P×L)/Sisa",
        badge: "4–6 Soal",
        color: "indigo",
        subNodes: [
          {
            id: "fc-tiu-cerita-rumus",
            title: "A. Semua Rumus Soal Cerita BKN (Perbandingan, JKW, Aritmatika Sosial)",
            summary: "Kenali arah hubungan antar variabel sebelum menulis rumus.",
            smallPoints: [
              "Perbandingan Senilai (Searah, misal bensin vs jarak): A1 / B1 = A2 / B2 (Kali silang).",
              "Perbandingan Berbalik Nilai (Berlawanan, misal pekerja vs waktu): P1 × H1 = P2 × H2 (Kali lurus).",
              "3 Variabel (Subjek S, Objek hasil O, Waktu W): O1 / (S1 × W1) = O2 / (S2 × W2).",
              "Pekerjaan Terhenti di Tengah Jalan: Tambahan Pekerja = (Pekerja Awal × Lama Terhenti) ÷ Sisa Hari Wajib.",
              "Kerja Bersama 2 Orang: T_gabung = (A × B) / (A + B). Untuk 3 orang: 1/T = 1/A + 1/B + 1/C.",
              "JKW Berpapasan: Jika berangkat sama: t = Jarak Total / (V1 + V2). Jika berangkat BEDA waktu: kurangi dulu Jarak Total dengan jarak yang sudah ditempuh orang ke-1!",
              "JKW Susul-Menyusul: t_susul = Selisih Jarak Awal / (V_penyusul - V_disusul).",
              "Untung/Rugi: %Untung = (Untung / Harga Beli) × 100%. Harga Beli = Harga Jual ÷ (100% ± %Untung/Rugi).",
              "Diskon Bertingkat (misal 50% + 20%): Diskon Total = D1 + D2 - (D1 × D2)/100 = 50 + 20 - 10 = 60% (BUKAN 70%!).",
              "Bunga Tunggal Bank: Bunga = Modal × (%Bunga/tahun) × (Jumlah Bulan / 12)."
            ]
          }
        ]
      },
      {
        id: "tiu-fc-verbal",
        triggerLabel: "Premis Jika-Maka, Semua-Sebagian, Argumen, atau Urutan/Meja Bundar",
        title: "5. Verbal: Silogisme 3 Premis, Penguatan Argumen & Penalaran Analitis",
        mnemonic: "Coret Variabel Kembar • p->q ≡ ~q->~p • Semua+Sebagian = Sebagian • Cek Syarat Langsung ke Opsi!",
        badge: "7–10 Soal",
        color: "indigo",
        subNodes: [
          {
            id: "fc-tiu-silogisme",
            title: "A. Rumus Logika Silogisme, Kuantor & Evaluasi Argumen (Part 59)",
            summary: "Jangan pakai perasaan bahasa sehari-hari; ikuti hukum logika formal matematika!",
            smallPoints: [
              "Modus Ponens: (p -> q) dan p benar ==> Kesimpulan: q.",
              "Modus Tollens: (p -> q) dan ~q (tidak q) terjadi ==> Kesimpulan: ~p.",
              "Silogisme Rantai (3 Premis): p -> q, q -> r, r -> s ==> Coret variabel tengah kembar (q & r) ==> p -> s (atau ~s -> ~p).",
              "2 Ekuivalensi Wajib Hafal: (1) Kontraposisi: p -> q ≡ ~q -> ~p. (2) Disjungsi: p -> q ≡ ~p atau q.",
              "Negasi Implikasi: ~(p -> q) ≡ p dan ~q ('Belajar tetapi tidak lulus').",
              "Aturan Kuantor: 'Semua + Semua = Semua' | 'Semua + Sebagian = Sebagian/Ada' | 'Semua + Tidak ada = Tidak ada' | 'Sebagian + Sebagian = TIDAK DAPAT DISIMPULKAN'.",
              "Kesalahan Logika Terlarang: JANGAN menyimpulkan balik 'q -> p' atau '~p -> ~q' dari premis 'p -> q'!",
              "Memperkuat & Memperlemah Argumen (Part 59): Memperkuat = menambah bukti/data bahwa sebab X benar memicu akibat Y. Memperlemah = menunjukkan adanya penyebab lain di luar X, atau X terjadi tapi Y gagal!"
            ]
          },
          {
            id: "fc-tiu-analitis",
            title: "B. Penalaran Analitis (Urutan, Jadwal, Meja Bundar & Pemilihan Tim)",
            summary: "Ubah seluruh kalimat syarat menjadi simbol coretan di kertas buram, jangan dihafal di kepala.",
            smallPoints: [
              "Urutan/Ranking: Selalu tulis dengan tanda > atau < secara konsisten (misal C > A > B).",
              "Blok Berdekatan: 'X tepat di sebelah Y' ditulis dalam kotak [XY] atau [YX] agar tidak terpisah.",
              "Meja Bundar (6/8 Kursi): Posisikan orang pertama di jam 6 menghadap ke tengah meja -> Kanan menghadap jam 4, Kiri menghadap jam 8, Berhadapan di jam 12.",
              "Trik Eliminasi Syarat Terbalik: Jika soal menanyakan 'Urutan yang MUNGKIN benar', langsung uji opsi A–E satu per satu terhadap Syarat 1, Syarat 2, dst. Tanpa menyusun dari nol!"
            ]
          }
        ]
      },
      {
        id: "tiu-fc-figural",
        triggerLabel: "Serial Gambar, Ketaksamaan Gambar, atau Analogi Gambar",
        title: "6. Figural: Rotasi, Pencerminan, Serial & Ketaksamaan",
        mnemonic: "Lacak 1 Elemen (Panah/Titik) -> Coret 3 Opsi -> Rotasi (Kongruen) vs Pencerminan (Terbalik)",
        badge: "5–6 Soal",
        color: "indigo",
        subNodes: [
          {
            id: "fc-tiu-figural-cek",
            title: "A. 5 Parameter Pengecekan Cepat Soal Figural",
            summary: "Jangan melihat keseluruhan gambar yang ramai sekaligus; amati 1 elemen per langkah.",
            smallPoints: [
              "1. Rotasi (Putaran): Cek sudut putar 45°, 90°, 135°, atau 180° searah jarum jam (CW) maupun berlawanan (CCW).",
              "2. Pencerminan (Refleksi): Pencerminan membalik posisi kiri dan kanan objek (seperti huruf 'F' menjadi 'ꟻ'). Di soal Ketaksamaan Gambar, 4 gambar adalah hasil ROTASI yang kongruen sedangkan 1 gambar adalah hasil PENCERMINAN!",
              "3. Jumlah Elemen / Sisi / Titik: Hitung apakah jumlah sisi bangun atau titik bertambah/berkurang (+1, +2) tiap langkah.",
              "4. Perubahan Warna / Arsiran: Cek pola bergantian Hitam -> Putih -> Garis -> Hitam.",
              "5. Pergeseran Posisi Sudut: Lacak perpindahan titik sudut (misal: pojok kiri atas -> kanan atas -> kanan bawah -> kiri bawah)."
            ]
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CABANG 3: TKP (TES KARAKTERISTIK PRIBADI)
  // ==========================================================================
  TKP: {
    code: "TKP",
    title: "Flowchart & Matriks Skenario Poin 5 TKP (6 Aspek Lengkap)",
    targetScore: "Target Aman: 195+ / 225 (Rata-rata Poin 4–5 di 45 Soal • Nol Jawaban Kosong!)",
    rootFlow: {
      step1: "1. Identifikasi Aspek Kompetensi yang Sedang Diuji di Soal (1 dari 6 Aspek)",
      step2: "2. Coret Opsi Pasif (Diam/Abaikan), Opsi Reaktif/Emosional, dan Opsi Melanggar SOP!",
      step3: "3. Dari 2 Opsi Terbaik Tersisa, Pilih Tindakan Nyata yang Proaktif, Memberdayakan, & Sesuai Wewenang/SOP!"
    },
    branches: [
      {
        id: "tkp-fc-pelayanan",
        triggerLabel: "Melayani Masyarakat, Antrean, Komplain Warga, atau Kelompok Rentan",
        title: "1. Pelayanan Publik (Skenario Loket & Aduan Masyarakat)",
        mnemonic: "3S: Sapa/Tenangkan -> Sesuaikan SOP/Wewenang -> Solusi Tuntas",
        badge: "7–8 Soal",
        color: "emerald",
        subNodes: [
          {
            id: "fc-tkp-pel-detail",
            title: "Poin-Poin Kecil Skenario Pelayanan Publik (Poin 5 vs Jebakan)",
            summary: "Pelayanan prima adalah kombinasi keramahan, kecepatan solusi, dan kepatuhan mutlak pada prosedur resmi.",
            smallPoints: [
              "Warga Marah / Memotong Antrean: Tenangkan dengan senyum dan bahasa sopan, jelaskan aturan antrean dengan tenang, serta arahkan sesuai prosedur (JANGAN langsung bentak, dan JANGAN pula diloloskan memotong antrean!).",
              "Lansia / Ibu Hamil / Disabilitas: Berikan pelayanan prioritas sesuai jalur khusus/SOP prioritas kantor dan bantu arahkan prosesnya dengan ramah.",
              "Berkas Pemohon Kurang 1 Syarat saat Jam Istirahat Hampir Tiba: Jelaskan kekurangannya dengan ramah dan arahkan ke fasilitas fotokopi/bantuan pelengkap agar dapat diproses segera (JANGAN meloloskan berkas ilegal tanpa syarat!).",
              "Warga Komplain Salah Paham di Media Sosial/Loket: Dengarkan dengan empati, klarifikasi informasi secara transparan berbasis fakta/SOP, dan berikan saluran penyelesaian resmi."
            ],
            trapAlert: "Jebakan Terbesar: Menjadi 'Pahlawan Kesiangan' yang meloloskan berkas kurang atau melanggar aturan antrean demi kasihan — itu melanggar SOP (hanya poin 2–3)!"
          }
        ]
      },
      {
        id: "tkp-fc-jejaring",
        triggerLabel: "Kerja Tim, Rekan Pasif, Diklat, Pindah Unit, atau Lintas Divisi",
        title: "2. Jejaring Kerja / Kemitraan (Sinergi & Kolaborasi)",
        mnemonic: "Dialog Persuasif -> Berbagi Ilmu (Knowledge Sharing) -> Kolaborasi Tujuan Bersama",
        badge: "7–8 Soal",
        color: "emerald",
        subNodes: [
          {
            id: "fc-tkp-jk-detail",
            title: "Poin-Poin Kecil Skenario Jejaring Kerja (Poin 5 vs Jebakan)",
            summary: "ASN unggul tidak bekerja sendirian (individualis), melainkan mampu membangun sinergi lintas pihak.",
            smallPoints: [
              "Rekan Kerja Pasif / Menunda Tugas Tim: Ajak berdiskusi secara pribadi dengan baik untuk mengetahui kendalanya, bantu jelaskan, dan koordinasikan pembagian kerja (JANGAN langsung ambil alih semua tugasnya sendiri atau langsung adukan ke atasan sebelum komunikasi!).",
              "Selesai Mengikuti Diklat / Pelatihan Baru: Berinisiatif merangkum materi dan membagikan/mendiskusikan ilmu tersebut kepada rekan kerja satu tim agar kinerja unit naik bersama.",
              "Konflik Ego Antar Divisi dalam Rapat: Jadilah penengah yang mendengarkan kedua argumen, mengingatkan tujuan bersama organisasi, dan menyinergikan ide terbaik kedua belah pihak.",
              "Dimutasi ke Bagian / Kantor Baru: Proaktif memperkenalkan diri, menjalin komunikasi akrab-profesional, dan cepat mempelajari alur kerja serta kebiasaan positif tim baru."
            ]
          }
        ]
      },
      {
        id: "tkp-fc-sosbud",
        triggerLabel: "Penempatan Daerah Baru, Perbedaan Adat/Bahasa, atau Gotong Royong",
        title: "3. Sosial Budaya (Adaptasi Kemajemukan & Kearifan Lokal)",
        mnemonic: "Hormati Kearifan Lokal + Pelajari Bahasa/Adat + Tetap Patuhi Hukum Negara",
        badge: "7–8 Soal",
        color: "emerald",
        subNodes: [
          {
            id: "fc-tkp-sb-detail",
            title: "Poin-Poin Kecil Skenario Sosial Budaya (Poin 5 vs Jebakan)",
            summary: "Mampu bekerja efektif di tengah masyarakat Indonesia yang majemuk suku, agama, bahasa, dan adat istiadat.",
            smallPoints: [
              "Ditempatkan di Daerah Terpencil dengan Bahasa/Adat Asing: Beradaptasi terbuka, berusaha mempelajari kosakata dasar setempat untuk mempermudah pelayanan, dan menghormati tradisi warga.",
              "Tetangga / Lingkungan Baru Adakan Kerja Bakti/Kenduri: Meluangkan waktu hadir dan berbaur secara aktif (bukan sekadar nitip uang/makanan tanpa pernah datang).",
              "Tradisi Lokal Bertentangan dengan Integritas (misal warga memberi uang/hasil bumi sebagai 'adat terima kasih' pengurusan surat): Tetap tolak pemberian dengan sangat santun disertai senyum dan penjelasan halus agar tidak menyinggung kehormatan warga."
            ]
          }
        ]
      },
      {
        id: "tkp-fc-tik",
        triggerLabel: "Aplikasi Baru, Pegawai Senior Gaptek, Sistem Error, atau Keamanan Data",
        title: "4. Teknologi Informasi & Komunikasi (TIK)",
        mnemonic: "Adaptif Belajar Cepat + Bimbing Rekan Senior + Jaga Keamanan Data/Password",
        badge: "7–8 Soal",
        color: "emerald",
        subNodes: [
          {
            id: "fc-tkp-tik-detail",
            title: "Poin-Poin Kecil Skenario TIK (Poin 5 vs Jebakan)",
            summary: "Menguasai transformasi digital pemerintahan dengan tetap memperhatikan aspek keamanan informasi dan kolaborasi.",
            smallPoints: [
              "Kantor Menerapkan Aplikasi Baru & Senior Menolak/Mengeluh: Pelajari sistem baru sampai mahir, lalu secara proaktif bantu bimbing rekan senior dengan sabar (atau buat panduan singkat) agar semua bisa bermigrasi.",
              "Sistem / Server Mengalami Gangguan Saat Pelayanan Padat: Tetap tenang, koordinasi cepat dengan tim IT/teknisi untuk perbaikan, dan jalankan prosedur cadangan (contingency SOP) sementara agar warga tetap terlayani.",
              "Rekan Meminjam Akun/Password Anda atau Minta Data Rahasia: Tolak secara profesional dengan menjelaskan aturan keamanan data, dan bantu sesuai mekanisme akses resmi."
            ]
          }
        ]
      },
      {
        id: "tkp-fc-profesionalisme",
        triggerLabel: "Deadline vs Acara Pribadi, Beban Menumpuk, Kritik Atasan, atau Kesalahan",
        title: "5. Profesionalisme (Tanggung Jawab, Skala Prioritas & Objektivitas)",
        mnemonic: "Skala Prioritas + Tuntaskan Kewajiban Utama + Akui & Perbaiki Kesalahan",
        badge: "7–8 Soal",
        color: "emerald",
        subNodes: [
          {
            id: "fc-tkp-pro-detail",
            title: "Poin-Poin Kecil Skenario Profesionalisme (Poin 5 vs Jebakan)",
            summary: "Menempatkan kepentingan tugas dan standar kerja profesional di atas kepentingan pribadi non-darurat.",
            smallPoints: [
              "Konflik Jadwal (Konser/Liburan Keluarga vs Tugas Mendesak Kantor): Dahulukan kewajiban kantor yang mendesak hingga tuntas, komunikasikan dengan baik kepada teman/keluarga (kecuali keluarga sakit kritis/darurat nyawa -> izin resmi ke atasan & delegasi aman!).",
              "Banyak Tugas dengan Tenggat Berdekatan: Susun skala prioritas berdasarkan urgensi dan tenggat waktu, kerjakan terstruktur tanpa mengeluh.",
              "Melakukan Kesalahan / Ditegur Keras Pimpinan: Akui kesalahan secara terbuka tanpa mencari kambing hitam, minta maaf profesional, dan segera revisi/perbaiki hasilnya."
            ]
          }
        ]
      },
      {
        id: "tkp-fc-antiradikalisme",
        triggerLabel: "Hoaks Grup Kantor, Ujaran Kebencian SARA, Paham Ekstrem, atau Intoleransi",
        title: "6. Anti-Radikalisme (Tabayyun, Moderasi & Jalur Resmi)",
        mnemonic: "Verifikasi Fakta (Tabayyun) -> Dialog Persuasif -> Lapor Atasan/Berwenang Sesuai Prosedur",
        badge: "7–8 Soal",
        color: "emerald",
        subNodes: [
          {
            id: "fc-tkp-ar-detail",
            title: "Poin-Poin Kecil Skenario Anti-Radikalisme (Poin 5 vs Jebakan)",
            summary: "Menjaga keutuhan ideologi Pancasila dan kondusivitas lingkungan kerja dari hoaks, intoleransi, dan paham ekstrem.",
            smallPoints: [
              "Rekan Mengirim Berita Provokatif/Hoaks SARA di Grup WhatsApp Kantor: Cek kebenaran berita (tabayyun/cek fakta), ingatkan rekan dengan santun dan berbasis data valid di ruang dialog yang sejuk (bukan langsung memaki di depan umum atau ikut menyebarkan!).",
              "Menemukan Indikasi Paham Radikal/Anti-Pancasila Terstruktur di Instansi: Kumpulkan bukti objektif secara hati-hati, tidak main hakim sendiri, dan laporkan kepada atasan langsung/pejabat pembina kepegawaian atau pihak berwenang sesuai mekanisme resmi.",
              "Ajakan Menolak Menghormati Simbol Negara / Kegiatan Lintas Iman Sesuai Tugas: Tegas menolak ajakan tersebut dan tetap berpegang teguh pada sumpah setia ASN terhadap Pancasila & UUD 1945."
            ]
          }
        ]
      }
    ]
  }
};

