// Tugas 7 JS

// 1. Pastikan Teman Teman Sudah Menginstall Node JS

// 2. Teman - Teman Buatlah File di Folder javascript teman teman sebuah file dengan nama file tugas7.js

// 3. Buatlah Program Dengan Spesifikasi dibawah ini :

//     Buatlah sebuah variabel array dengan maksimal data 10 nilai yang berisikan tinggi badan;
//     Tampilkan array tersebut dengan menggunakan perulangan biasa dan perulangan for off.
//     Teman-teman analisis perbedaan hasilnya,

// Hint : -

// 4. Happy Codding :)

const tinggiSiswa = [
  "160 cm",
  "161 cm",
  "162 cm",
  "163 cm",
  "164 cm",
  "165 cm",
  "166 cm",
  "167 cm",
  "168 cm",
  "169 cm",
  "170 cm",
];

for(let i = 0; i<tinggiSiswa.length; i++) {
  console.log(tinggiSiswa[i]);
}

for(let i of tinggiSiswa) {
  console.log(i);
}

// untuk perulangan for of lebih simple dan praktis digunakan dan menghemat penggunaan syntax