// 5. Buat sebuah program kuis
// - tampilkan prompt() untuk meminta inputan dari user. Tampilan teks 'Sebutkan kepanjangan dari nama IB (Impact Byte)?'
// - lakukan pengecekan apakah jawaban user sudah benar
// - jika benar, tampilkan alert 'Selamat jawaban kamu benar'
// - Jika salah, lakukan pengulangan untuk menampilkan prompt() yg sama hingga jawaban dari user benar


while(soal != "Impact Byte"){
   var soal = prompt('Sebutkan kepanjangan dari nama IB !');
   if (soal == "Impact Byte"){
      alert('Selamat jawaban kamu benar');
   }
}