export const ME = 'aam hermansyah';
export const CRUSH = 'elisa nuramanah';

export const SCENE1 = {
  title: 'Hai selamat datang! Mau jumpa siapa nich? Btw ada yang rindu lohh:)',
  warningPopupMessage: 'Mungkin ini tidak terlalu spesial untukmu yang terlalu sempurna. Tetapi saya selaku pembuatnya merasa cukup senang kamu bisa ada disini dan melihat ini. Nikmatilah apa yang ada disini dan percayalah saya membuat karya ini dengan penuh cinta, tenaga, pikiran dan keikhlasan hati yang mendalam untuk sesuatu yang mungkin tidak akan kamu bayangkan sebelumnya. Untuk hasil tidak apa apa mau itu benar atau salah, iya atau tidak, buruk atau engga, itu semua akan menjadi pelajaran yang sangat berharga untuk saya:)'
}

export const SCENE2 = {
  targetName: ME,
  failedStepMessage: {
    1: 'Kok bukan aku sih?😥\nItu siapa?...',
    2: 'Iihh salah lagi:(\nGa sayang aku kah?🥺',
    3: 'Itu siapa? Kok bukan aku🥺...\nIni aku calon pendamping hidupmu💕\nAyo pasti bisa "Nda"❤️😘',
    4: 'Hhmm... salah lagi🥲\nIni aku yang setiap hari menunggu kamu🥺\nAyo bisa bunda, ini kesempatan terakhir sebelum hatiku mati rasa:)💕.'
  },
  successStepMessage: {
    1: 'Yeayy!...🎉🎊✨\nKeren nda satu percobaan langsung bener😍\nBerarti beyy sayang banget aku kan?🥰',
    2: 'Nah gitu dong😍\nIni aa yang sayang banget nda...🥰\nWalaupun satu kali percobaan gagal tapi ga apa apa aku masih tetep I ❤️ U',
    3: 'Ahh dasar nda 3x percobaan baru bener😭\nTapi aku tetep sayang kok...\nMisscuuu❤️',
    4: 'Alhamdulilah 4x percobaan nda bisa jawab🥰\nGa apa apa 4x juga hati aa tetep sayang banget nda kok😍💕',
    5: 'Makasih banget masih ingat sama aa💕🥺\nWalaupun nda udah banyak percobaan yang gagal jawabnya,\ntapi hati aa bahagia lagi kok full kembali.🥰😍'
  },
  inputNameFailed: {
    emptyString: 'Jangan kosong dong😭\nKan hati nda mau aku isi sekarang juga🥰',
    numberExists: 'Nama itu cuma huruf aja ayang🤣\nIhh kamu mah gemoy banget😭❤️',
    nameHasBeenUsed: 'Itu nama yang tadi loh, kan bukan itu😑',
    almostRight: {
      firstNameMessage: 'Aduhh hampir tuh ayo terusin...🥰😘❤️',
      lastNameMessage: 'Kalo ini nama belakangnya loh😗🤭💕'
    }
  },
  afterSuccessMessage: `Hhmm... ${ME.toUpperCase()} itu nama aku...\nSemoga selalu ada dihati kamu nda❤️🥰`
}

export const TTS_DATA = {
  across: {
    4: {
      question: 'Panggilan ketika nda ngelakuin hal lucu🤣🤭.',
      answered: 'gemboy'
    },
    6: {
      question: 'Bulan yang paling istimewa😍.',
      answered: 'maret'
    },
    8: {
      question: 'Berapa waktu yang akan kita habiskan bersama💕.',
      answered: 'forever'
    },
  },
  down: {
    1: {
      question: 'Hubungan🤞.',
      answered: 'ikatan'
    },
    2: {
      question: 'Nama panggilan  yang sering dipakai berdua🥰.',
      answered: 'bey'
    },
    3: {
      question: 'Sikap nda yang di inginkan aa😗.',
      answered: 'posesif'
    },
    5: {
      question: 'Makanan yang nda sukai ketika sakit🥺.',
      answered: 'nestle'
    },
    7: {
      question: 'Salah satu warna yang kita sukai❤️.',
      answered: 'biru'
    },
  },
}

export const MEMORY_GAME = {
  images: [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]
}

export const SLIDING_PUZZLE = {
  images: [0, 1, 2, 3, 4, 5, 6, 7, 8]
}

export const DASHBOARD = {
  gamesTitle: [
    {
      title: 'Replace Images',
      id: 'replace-puzzle',
      color: 'bg-[#3A1078]',
      url: '/replace-image'
    },
    {
      title: 'Sliding Puzzle',
      id: 'sliding-puzzle',
      color: 'bg-[#F99417]',
      url: '/sliding-image'
    },
    {
      title: 'Guess Images',
      id: 'guess-images',
      color: 'bg-lime-500',
      url: '/guess-image'
    },
    {
      title: 'TTS',
      id: 'cross-words',
      color: 'bg-[#27E1C1]',
      url: '/cross-words'
    }
  ],
  gameTitleKeysLocalStorage: {
    'replace-puzzle': 'replace-puzzle',
    'sliding-puzzle': 'sliding-puzzle',
    'guess-images': 'guess-images',
    'cross-words': 'cross-words'
  }
}

export const LOVE_LETTERS = 'Dear orang yg paling aku sayangi❤️...\n\nDahulu aku telah berbuat kejam kepada dirimu, menyakiti hati kamu. Jujur waktu itu aku seakan dirasuki oleh sosok orang yang serakah dan tidak tahu caranya bersyukur mendapatkan perempuan seperti kamu. Tapi sekarang, aku sudah sadar bahwa itu adalah perbuatan yang menyakiti dirimu dan aku setiap hari selalu menangis memikirkan hatimu dulu yang pernah aku rusak:)\n\nHal yang tidak diinginkan pun terjadi, ini memang salahku. Tapi aku minta sekali saja kesempatan buat membuktikan bahwa aku bukanlah orang yang seperti dulu. Aku lebih bisa menghargai, mencintai, menyayangi, memperhatikan dan membahagiakan kamu sebagai orang yang paling spesial dihidup aku, bahkan di setiap detik yang berlalu, aku merindukanmu semakin dalam.\n\nKamu adalah sosok yang membuat hidupku penuh warna. Kamu adalah sumber kebahagiaan dan inspirasi bagiku. Ketika kau pergi, aku merasa kehilangan arah. Segala sesuatu terasa berat dan hampa tanpamu. Dan kini, aku memohon kepadamu, kembalilah padaku. Aku tahu, kita memiliki masa lalu yang berliku. Tapi percayalah, aku tidak ingin kembali ke sana. Aku ingin membangun masa depan yang indah bersamamu. Aku ingin menghabiskan setiap detik hidupku bersamamu, untuk saling mencintai dan merawat satu sama lain.\n\nMungkin, kamu masih ragu untuk kembali padaku. Namun, aku berjanji, aku akan selalu berusaha untuk membuatmu bahagia. Aku akan selalu menghargai dan mencintaimu dengan sepenuh hati. Dan aku berharap, kamu juga dapat memberikan kesempatan kepadaku untuk membuktikan cintaku.\n\nKembalilah padaku, kekasihku. Biarkan aku menunjukkan betapa besar cintaku padamu. Biarkan aku memelukmu dan mencium keningmu yang manis. Biarkan kita memulai kembali dari awal, dan bersama-sama, kita bangun sebuah masa depan yang penuh cinta dan kebahagiaan.\n\nDengan cinta yang tulus,\n\nAam Hermansyah'