# MONO-COMPARE

Aplikasi mini e-commerce dengan fitur perbandingan produk dan keranjang belanja cerdas. Aplikasi ini menggunakan data dari dummyjson.com dan menampilkan antarmuka hitam-putih yang responsif.

Demo:
> https://expatify.netlify.app

Fitur Utama:
  * 🛍️ Katalog Produk & Pencarian: Jelajahi daftar produk dengan fitur pencarian real-time dan paginasi halaman.
  * ⚖️ Perbandingan Produk (Side-by-Side): Pilih dua produk untuk dibandingkan spesifikasinya secara berdampingan. Tabel perbandingan dioptimalkan untuk tampilan mobile dengan kolom atribut yang sticky (tetap terlihat saat scroll ke samping).
  * 🧠 Keranjang Cerdas (Smart Cart): Saat Anda menambahkan produk ke keranjang, aplikasi secara otomatis memberikan saran produk terkait dari kategori yang sama (misalnya, menambahkan smartphone akan memunculkan rekomendasi aksesoris smartphone).
  * 🖤 UI Hitam-Putih Minimalis: Desain antarmuka monokrom yang bersih, fokus pada konten, dan sepenuhnya responsif di berbagai ukuran layar.
  * 🏗️ Arsitektur Modern: Pemisahan logika bisnis (Custom Hooks) dan tampilan (UI Components). Menggunakan Zustand untuk state klien (UI/Keranjang) dan TanStack Query untuk manajemen data server (API).
