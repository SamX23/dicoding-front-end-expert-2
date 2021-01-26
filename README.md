## Delicious Dish Web App

## Submission dicoding front end expert

- npm start
- npm build

## Kriteria Submission I

1. App Bar (Navigation Bar) - #CHECKED
   Syarat:
   Menampilkan nama aplikasi atau brand logo dari aplikasi katalog restoran (tentukan sendiri nama aplikasi atau brand logonya).
   Terdapat navigation menu:
   Home -> mengarah ke root domain.
   Favorite -> target URL cukup bernilai “#” (Sebagai placeholder untuk digunakan pada submission selanjutnya).
   About Us -> arahkan ke profil LinkedIn/Github/Social Media Anda, atau boleh juga ke personal web/blog.
   Terdapat fitur navigation drawer yang berfungsi dengan baik bila diakses pada layar seluler.

2. Hero Element (Jumbotron Element) #CHECKED
   Syarat:
   Menampilkan hero element (berukuran full width) dengan gambar yang sudah ditentukan, silakan pilih salah satu aset yang disediakan di dalam starter proyek, src -> public -> images -> hero. Gambar yang tidak digunakan, bisa Anda hapus.
   Terdapat teks yang ditampilkan pada hero elemen. Konten teks bebas, namun akan lebih baik jika relevan dengan konten yang ditampilkan.

3. Daftar Restoran #CHECKED
   Syarat:
   Menampilkan daftar restoran berdasarkan data yang sudah disediakan di dalam project starter (src -> DATA.json), untuk menampilkannya boleh melalui cara hardcoded di berkas HTML, atau menggunakan DOM manipulation menggunakan JavaScript.
   Minimal menampilkan gambar, kota, rating, dan deskripsi (bisa diberi maksimal teks) dari restoran.

4. Footer - #CHECKED
   Syarat:
   Terdapat footer yang ditampilkan di bawah halaman.
   Terdapat konten copyright mencangkup tahun dan nama aplikasi. Contoh: “Copyright © 2020 - Hunger Apps”.

5. Responsibilitas Tampilan #CHECKED
   Syarat:
   Tampilan web app harus responsif pada seluruh ukuran layar (mobile - tablet - desktop). Utamakan tampilan mobile terlebih dahulu.
   Gunakan teknik Grid CSS atau Flexbox dalam menyusun layout. Bila terdapat float, submission akan ditolak.
   Menetapkan ukuran viewport secara dinamis berdasarkan layar device yang digunakan.

6. Aksesibilitas Website #CHECKED
   Syarat:
   Seluruh fungsionalitas website dapat dilakukan dengan menggunakan keyboard. Contohnya mengakses tombol hamburger button, mengakses tautan yang ada.
   Menerapkan teknik skip to content untuk melewati focus pada menu navigasi.
   Terdapat alternative teks pada seluruh gambar yang ditampilkan. Bila hanya gambar tidak memiliki arti apapun, cukup berikan atribut alt dengan nilai kosong.
   Ukuran elemen button/tautan harus memiliki ukuran minimal 44x44px.
   Menggunakan semantic element dalam menyusun struktur dan landmarking HTML.

## Kriteria Submission II

1. Halaman Utama (Daftar Restoran) #half
   Syarat:
   Menampilkan daftar restoran yang datanya bersumber dari API https://restaurant-api.dicoding.dev/. Silakan lihat dokumentasinya pada halaman tersebut.
   Minimal menampilkan gambar, kota, rating, dan deskripsi (bisa diberi maksimal teks) dari restoran.
   Terdapat tautan/CTA yang mengarah ke detail restoran pada tiap itemnya.
   Hero elemen tetap dipertahankan.

2. Halaman Detail Restoran #half
   Syarat:
   Menampilkan detail dari restoran yang dipilih dari halaman utama (daftar restoran) atau halaman favorit restoran.
   Pada halaman detail restoran harus terdapat:
   Gambar
   Alamat Lengkap
   Kategori Menu
   Menu Makanan
   Menu Minuman
   Rating
   Customer Reviews
   Terdapat tombol favorite untuk memasukkan atau menghapus restoran favorit dari database (gunakan IndexedDB).
3. Halaman Daftar Restoran Favorit
   Syarat:
   Halaman Daftar Restoran dapat diakses melalui menu navigasi favorit.
   Menampilkan restoran yang difavoritkan oleh pengguna (data diambil dari indexedDB).
   Minimal menampilkan gambar, kota, rating, dan deskripsi (bisa diberi maksimal teks) dari restoran.
   Terdapat tautan/CTA yang mengarah ke detail restoran pada tiap itemnya.
4. Native Capability #CHECKED
   Syarat:
   Aplikasi dapat diakses dalam keadaan offline tanpa ada aset yang gagal dimuat, termasuk data yang didapatkan dari API. Anda bebas menggunakan strategi caching apapun, bahkan menggunakan workbox.
   Aplikasi harus menampilkan icon Add to Home Screen.
   Aplikasi memiliki custom icon yang ditampilkan pada home screen dan splash screen.
5. Code Quality #CHECKED
   Syarat:
   Menggunakan ESLint sebagai linter ketika menuliskan kode JavaScript. Harap lampirkan berkas konfigurasi ESLint ya.
   Menerapkan salah satu style guide baik itu Google JavaScript Code Style, AirBnB JavaScript Code Style, atau StandardJS Code Style.
6. Pertahankan syarat yang ada pada submission sebelumnya.
   Seperti responsibilitas tampilan, dan aksesibilitas pada website.
