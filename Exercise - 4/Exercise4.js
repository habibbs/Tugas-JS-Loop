// 4. Tampilkan sebuah konfirmasi popup kepada user menggunakan confirm()
//    - berikan teks 'Apakah mau mengulang' pada box confirm
//    - jika user memilih 'OK' maka program akan terus menampilkan pop up yang sama
//    - jika user memilih 'Cancel' maka program akan menampilkan teks 'perulangan sudah dilakukan sebanyak ... (jumlah klik OK yang dilakukan user)'
var ulang = confirm('Apakah mau mengulang ?');
var i =0;

while(ulang) {
   i++;
   ulang = confirm('Apakah mau mengulang ?');
}

document.write('<p>Perulangan sudah dilakukan sebanyak '+ i +'</p>');