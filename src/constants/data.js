export const ME = 'aam hermansyah';
export const CRUSH = 'elisa nuramanah';

export const SCENE1 = {
  title: 'Hai selamat datang! Mau jumpa siapa nich? Btw ada yang rindu lohh:)'
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
    nameHasBeenUsed: 'Itu nama yang tadi loh, kan bukan itu😑'
  },
  afterSuccessMessage: `Hhmm... ${ME.toUpperCase()} itu nama aku...\nSemoga selalu ada dihati kamu nda❤️🥰`
}