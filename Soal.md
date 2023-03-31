1. kita sudah mengetahui bahwa banyaknya user adalah 100,buat sebuah program yang menampilkan teks 'User ke-1 ... user ke-100'pada setiap baris di halaman HTML, lakukan for loop pada javascript


2. Lakukan pengulangan menggunakan FOR LOOP untuk melakukan penambahan nilai sebanyak 10 kali.
 - nilai awal = 0
 - pengulangan = 10 kali
 - nilai awal ditambah 2 setiap pengulangan
 - tampilah hasil penambahan pada setiap pengulangan

 3. lakukan pengulangan dengan FOR LOOP yang melakukan iterasi dari 0 ... 20
  - setiap iterasi / pengulangan lakukan pengecekan apakah nilai tersebut ganjil atau genap
  - tampilkan keterangan ganjil dan genap pada sebuah nilai setiap pengulangan

  4. Tampilkan sebuah konfirmasi popup kepada user menggunakan confirm()
   - berikan teks 'Apakah mau mengulang' pada box confirm
   - jika user memilih 'OK' maka program akan terus menampilkan pop up yang sama
   - jika user memilih 'Cancel' maka program akan menampilkan teks 'perulangan sudah dilakukan sebanyak ... (jumlah klik OK yang dilakukan user)'

   5. Buat sebuah program kuis
    - tampilkan prompt() untuk meminta inputan dari user. Tampilan teks 'Sebutkan kepanjangan dari nama IB (Impact Byte)?'
    - lakukan pengecekan apakah jawaban user sudah benar
    - jika benar, tampilkan alert 'Selamat jawaban kamu benar'
    - Jika salah, lakukan pengulangan untuk menampilkan prompt() yg sama hingga jawaban dari user benar


===== NB =====
1. Dikerjakan menggunakan VS Code
2. Tambahkan Readme Penjelasan
3. Push ke Github Masing Masing
4. Pastikan Github Repo untuk Tugas Ini Bersifat Open to Public
5. Add @ariefdfaltah as partcipant
6. Deadline Sampai Senin
7. 20 Orang Pertama Mendapatkan bintang 



===== PENJELASAN =====

1. i merupakan iterasi kondisi awal dimana kondisi awal dimulai dari 0, apabila User ke-i kurang dari sama dengan 100 maka perulangan akan terus diulang sampai User ke-i bernilai 100

        for (let i =0; i <= 100; i++) {
        document.write('<p>User ke-'+ i +'</p>');
        }


2. i merupakan iterasi kondisi awal dimana kondisi awal dimulai dari 0, apabila i kurang dari samadengan 20 maka perulangan dan i ditambah 2 akan terus diulang sampai perulangan dilakukan sebanyak 10 kali

for (let i = 0; i <= 20; i+=2) {
   document.write('<p>'+ i +'</p>');
}


3. i merupakan iterasi kondisi awal dimana kondisi awal dimulai dari 0, apabila i kurang dari samadengan 20 maka i+1 lalu dilakukan pengecekan apakah i%2 ==0 apabila bernilai true maka akan menghasilkan output "i merupakan bilangan GENAP" apabila bernilai false akan menghasilkan output "i merupakan bilangan GENAP"

for (let i =0; i <=20; i++) {
   if(i % 2 == 0) {
      document.write('<p>'+i+ ' merupakan bilangan GENAP</p>')
   } else {
      document.write('<p>'+i+ ' merupakan bilangan GANJIL</p>')
   }
}


4. var i merupakan kondisi awal dimana kondisi awal i bernilai 0, perulangan akan terus terjadi atau terus diulang apabila variabel ulang bernilai true,Selama kita memilih Ok pada dialog konfirmasi, maka variabel ulang akan terus bernilai true. Apabila kita menekan cancel maka variabel ulang akan bernilai false dan perulangan akan dihentikan.

var ulang = confirm('Apakah mau mengulang ?');
var i =0;

while(ulang) {
   i++;
   ulang = confirm('Apakah mau mengulang ?');
}

document.write('<p>Perulangan sudah dilakukan sebanyak '+ i +'</p>');


5. perulangan atau prompt akan terus terjadi apabila jawaban yang kita inputkan tidak sesuai dengan soal = "Impact Byte", namun apabila jawaban yang kita inputkan benar atau sesuai akan menampilkan sebuah alert atau notif 'Selamat jawaban kamu benar'

while(soal != "Impact Byte"){
   var soal = prompt('Sebutkan kepanjangan dari nama IB !');
   if (soal == "Impact Byte"){
      alert('Selamat jawaban kamu benar');
   }
}

