/**
 * ============================================================
 * TUGAS MANDIRI — PEMROGRAMAN INTERNET (JAVASCRIPT DASAR)
 * Program Studi : Pendidikan Sistem dan Teknologi Informasi
 * Universitas   : Universitas Pendidikan Indonesia
 * Study Case    : Sistem Poin & Keanggotaan Member Kedai Kopi
 * Berkas        : app.js (STARTER CODE MAHASISWA)
 * ============================================================
 *
 * PETUNJUK PENGERJAAN:
 * 1. Buka file index.html di browser (klik dua kali atau via Live Server).
 * 2. Buka tab Developer Tools dengan menekan tombol F12 -> pilih tab "Console".
 * 3. Kerjakan tugas ini secara bertahap dari AKTIVITAS 1 sampai AKTIVITAS 6
 *    dengan melengkapi bagian bertanda "// TODO:".
 * 4. Simpan progres pekerjaanmu dengan melakukan minimal 3 kali Git Commit
 *    sesuai panduan di PANDUAN_TUGAS_MANDIRI.md.
 * ============================================================
 */


// ============================================================
// AKTIVITAS 1: Setup Berkas & Integrasi JavaScript Eksternal
// ============================================================
// Menampilkan judul sistem ke tab Console (F12)
console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");
console.log("Skrip app.js berhasil terhubung!");

// TODO 1: Tulis satu baris console.log() untuk memastikan file app.js sudah terhubung!
console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");
console.log("Skrip app.js berhasil terhubung!");
// Contoh output: "Skrip app.js berhasil terhubung!"




// ============================================================
// AKTIVITAS 2: Variabel & Dialog Interaktif
// ============================================================

// ---- BAGIAN 2A: VARIABEL IDENTITAS KEDAI KOPI ----
// TODO 2A:
// 1. Buat konstanta "NAMA_KEDAI" bertipe string (misal: "Kopi PSTI Kampus").
// 2. Buat variabel "namaKasir" (misal: "Kak Eko") dan "shiftKerja" menggunakan "let".
// 3. Cetak nilai NAMA_KEDAI, namaKasir, dan shiftKerja ke Console menggunakan console.log().
const NAMA_KEDAI = "japiyupi kedai";
let namaKasir = "Kak Tabriz";
namaKasir = "Kak Inesh"; // bukti let bisa diubah

alert("Selamat datang di " + NAMA_KEDAI + "!");
let namaPelanggan = prompt("Masukkan nama Anda:");

if (namaPelanggan) {
  console.log("Halo, " + namaPelanggan + "!");
} else {
  namaPelanggan = "Pelanggan japiyupi viewers";
  console.log("Halo, " + namaPelanggan + "!");
}




// ---- DEMO PERBEDAAN LET vs CONST ----
// TODO 2B:
// Ubah (re-assign) nilai variabel "namaKasir" dengan nama kasir lain,
// lalu cetak ke Console untuk membuktikan bahwa variabel "let" nilainya dapat diubah.
namaKasir = "Kak Inesh";
console.log("Nama kasir sekarang: " + namaKasir);




// ---- BAGIAN 2B: INPUT INTERAKTIF & PENGANDAIAN DASAR ----
// TODO 2C:
// 1. Tampilkan pop-up salam pembuka selamat datang menggunakan alert().
// 2. Tampilkan dialog prompt() untuk meminta nama pengunjung, simpan hasilnya ke variabel "namaPelanggan".
// 3. Gunakan percabangan "if - else":
//    - JIKA namaPelanggan ada isinya: tampilkan alert sapaan dan log ke console.
//    - JIKA namaPelanggan kosong / klik Cancel: beri nilai default "Pelanggan Setia" dan tampilkan alert pemberitahuan.
alert("Selamat datang di " + NAMA_KEDAI + "!");
let namaPelanggan = prompt("Masukkan nama Anda:");
if (namaPelanggan) {
  alert("Halo, " + namaPelanggan + "! Terima kasih sudah berkunjung.");
  console.log("Nama pelanggan: " + namaPelanggan);
} else {
  namaPelanggan = "Pelanggan japiyupi viewers";
  alert("Nama tidak diisi. Anda akan tercatat sebagai " + namaPelanggan + ".");
  console.log("Nama pelanggan: " + namaPelanggan + " (default)");
}




// ============================================================
// AKTIVITAS 3: Operasi Aritmatika — Akumulasi Poin Transaksi
// ============================================================
// Catatan: Gunakan bilangan bulat (integer murni tanpa desimal/float).

// TODO 3:
// 1. Buat 3 variabel poin transaksi: "poinKopi", "poinMakanan", dan "poinMerchandise"
//    (isi dengan angka bulat bebas, misal: 45, 35, 20).
// 2. Buat variabel "totalPoin" yang menjumlahkan ketiga variabel poin di atas.
// 3. Cetak rincian perolehan poin dan totalPoin ke Console menggunakan console.log().
let poinKopi = 75;
let poinMakanan = 30;
let poinMerchandise = 80;
let totalPoin = poinKopi + poinMakanan + poinMerchandise;

console.log("=== RINCIAN POIN: " + namaPelanggan + " ===");
console.log("Poin Kopi : " + poinKopi);
console.log("Poin Makanan : " + poinMakanan);
console.log("Poin Merchandise : " + poinMerchandise);
console.log("Total Poin : " + totalPoin);




// ============================================================
// AKTIVITAS 4: Percabangan if-else — Penentuan Tier Membership
// ============================================================

// TODO 4:
// 1. Buat variabel "tierMember" dan "benefit" bertipe string kosong ("").
// 2. Gunakan percabangan "if - else if - else" berdasarkan nilai "totalPoin":
//    - totalPoin >= 100 : tierMember = "Platinum", benefit = "Diskon 20% + Gratis 1 Minuman Signature"
//    - totalPoin >= 70  : tierMember = "Gold", benefit = "Diskon 10% di setiap transaksi"
//    - totalPoin >= 40  : tierMember = "Silver", benefit = "Diskon 5% untuk menu minuman"
//    - selain itu       : tierMember = "Bronze", benefit = "Member Reguler (kumpulkan poin untuk naik tier)"
// 3. Cetak hasil tierMember dan benefit ke Console.
// 4. Tampilkan ringkasan hasil member (nama, total poin, tier, benefit) via dialog alert().
let tierMember = "";
let benefit = "";

if (totalPoin >= 85) {
  tierMember = "Platinum";
  benefit = "Diskon 20% + Gratis 1 Minuman Signature";
} else if (totalPoin >= 75) {
  tierMember = "Gold";
  benefit = "Diskon 10% di setiap transaksi";
} else if (totalPoin >= 30) {
  tierMember = "Silver";
  benefit = "Diskon 5% untuk menu minuman";
} else {
  tierMember = "Bronze";
  benefit = "Member Reguler";
}

console.log("Tier Member : " + tierMember);
console.log("Benefit : " + benefit);
alert(namaPelanggan + " terdaftar sebagai member " + tierMember + "!");




// ============================================================
// AKTIVITAS 5: Function — Membuat Fungsi yang Bisa Dipakai Ulang
// ============================================================

// TODO 5A:
// Buat fungsi "hitungTotalPoin(p1, p2, p3)" yang menerima 3 parameter nilai poin,
// menjumlahkannya, dan mengembalikan (return) nilai total penjumlahannya.
function hitungTotalPoin(p1, p2, p3) {
  return p1 + p2 + p3;
}

function tentukanTierMember(poin) {
  if (poin >= 85) return "Platinum";
  else if (poin >= 75) return "Gold";
  else if (poin >= 30) return "Silver";
  else return "Bronze";
}



// TODO 5B:
// Buat fungsi "tentukanTierMember(poin)" yang menerima 1 parameter nilai poin,
// dan mengembalikan (return) string nama tier beserta keterangannya.
let totalPoinB = hitungTotalPoin(30, 25, 20);
let tierB = tentukanTierMember(totalPoinB);
console.log("Pelanggan B - Total Poin: " + totalPoinB + ", Tier: " + tierB);




// TODO 5C:
// Buktikan bahwa fungsi di atas bisa dipakai ulang (reusable):
// 1. Hitung total poin dan tentukan tier untuk simulasi Pelanggan B (misal poin: 35, 25, 20).
// 2. Hitung total poin dan tentukan tier untuk simulasi Pelanggan C (misal poin: 15, 10, 5).
// 3. Cetak data Pelanggan B dan C ke tab Console.
let totalPoinC = hitungTotalPoin(60, 40, 15);
let tierC = tentukanTierMember(totalPoinC);
console.log("Pelanggan C - Total Poin: " + totalPoinC + ", Tier: " + tierC);



// ============================================================
// AKTIVITAS 6: Array & For Loop — Daftar Menu Rekomendasi
// ============================================================

// TODO 6A:
// Buat variabel Array bernama "menuRekomendasi" yang berisi minimal 5 nama menu kopi/makanan.




// TODO 6B:
// Gunakan perulangan "for loop" untuk mencetak setiap menu ke Console dengan format:
// "1. Nama Menu", "2. Nama Menu", dst. Gunakan (i + 1) untuk nomor urutnya.




// TODO 6C:
// Cetak jumlah total menu di akhir daftar menggunakan properti ".length".
// Akhiri program dengan: console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES! ===");

