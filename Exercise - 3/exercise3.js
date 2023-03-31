// 3. lakukan pengulangan dengan FOR LOOP yang melakukan iterasi dari 0 ... 20
// - setiap iterasi / pengulangan lakukan pengecekan apakah nilai tersebut ganjil atau genap
// - tampilkan keterangan ganjil dan genap pada sebuah nilai setiap pengulangan

for (let i =0; i <=20; i++) {
   if(i % 2 == 0) {
      document.write('<p>'+i+ ' merupakan bilangan GENAP</p>')
   } else {
      document.write('<p>'+i+ ' merupakan bilangan GANJIL</p>')
   }
}