# 🚀 Modern Company Profile (SPA)

Sebuah aplikasi web *Company Profile* berkinerja tinggi yang dibangun menggunakan arsitektur *Monolithic Modern*. Proyek ini dirancang untuk memberikan pengalaman pengguna yang sangat mulus layaknya *Single Page Application* (SPA) tanpa mengorbankan kualitas SEO (*Search Engine Optimization*).

Diperlengkapi dengan Panel Admin yang tangguh untuk mengelola konten Berita (Blog), Galeri Portofolio, dan memantau interaksi dari pengunjung melalui *Inbox Command Center*.

## 🛠️ Tech Stack Utama

Aplikasi ini dibangun menggunakan teknologi standar industri terbaru:
* **Backend:** [Laravel 12](https://laravel.com) (PHP 8.x)
* **Frontend:** [React.js](https://react.dev/)
* **Penyambung (Bridge):** [Inertia.js](https://inertiajs.com/) (Menghilangkan kebutuhan pembuatan REST API terpisah)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Database:** MySQL

## ✨ Fitur Unggulan

### 🌍 Sisi Publik (Front-End)
* **Responsive Landing Page:** Desain modern yang beradaptasi sempurna di layar HP, Tablet, maupun Desktop.
* **Galeri Portofolio Dinamis:** Menampilkan karya terbaik dengan sistem *pagination* agar halaman tetap ringan.
* **Sistem Berita (Blog) SEO-Friendly:** Artikel menggunakan URL *Slug* yang ramah mesin pencari.
* **Formulir Kontak Aman:** Dilengkapi dengan sistem Anti-Spam (Rate Limiting) dan sanitasi data pencegah serangan XSS.
* **Custom 404 Page:** Halaman *error* khusus untuk *User Experience* (UX) yang lebih baik.

### 🔐 Sisi Admin (Back-End)
* **Dashboard Command Center:** Statistik *real-time* dan pengelolaan pesan masuk dengan wujud UI interaktif (Modal *Pop-up* responsif).
* **CRUD Berita & Portofolio:** Pengelolaan konten penuh dengan validasi form yang ketat (Form Requests).
* **Advanced File Management:** Sistem *upload*, baca, dan hapus gambar secara otomatis di *local storage* untuk mencegah penumpukan *file* sampah.

## ⚙️ Panduan Instalasi (Local Development)

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di mesin lokal Anda.

### Prasyarat:
Pastikan Anda sudah menginstal:
* PHP >= 8.2
* Composer
* Node.js & NPM
* MySQL (Bisa menggunakan XAMPP / Laragon)

### Langkah Instalasi:

1. **Clone repositori ini:**
   ```bash
   git clone [https://github.com/norizna/nama-repo-kamu.git](https://github.com/norizna/nama-repo-kamu.git)
   cd nama-repo-kamu

2. **Instal dependensi Backend (PHP):**
    ```bash

    composer install```

3. **Instal dependensi Frontend (Node.js):**
    ```bash

    npm install```

4. **Persiapkan Environment:**
    Salin file konfigurasi bawaan dan sesuaikan dengan database Anda.
    ```bash

    cp .env.example .env
    php artisan key:generate```

    (Buka file .env dan atur DB_DATABASE, DB_USERNAME, dan DB_PASSWORD sesuai dengan pengaturan MySQL Anda).

5. **Hubungkan Storage Gambar (PENTING!):**
    Perintah ini wajib dijalankan agar gambar portofolio dan berita dapat diakses di browser.
    ```bash

    php artisan storage:link```

6. **Jalankan Migrasi Database:**
    ```bash

    php artisan migrate```

7. **Jalankan Server (Buka 2 Terminal Berbeda):**

    Terminal 1 (Untuk menjalankan Vite & React):
    ```bash

    npm run dev```

    Terminal 2 (Untuk menjalankan server Laravel):
    ```bash

    php artisan serve```

8. **Akses Aplikasi:**
    Buka http://localhost:8000 di browser Anda.

## 🚀 Persiapan Deployment (Production)

Jika Anda ingin mengunggah aplikasi ini ke hosting atau VPS, pastikan Anda menjalankan perintah build untuk mengoptimasi dan mengecilkan ukuran file Frontend:
```bash

npm run build```

Pastikan juga file .env di server production Anda memiliki APP_ENV=production dan APP_DEBUG=false.

## 👨‍💻 Pengembang

Noor Rizky Permana
- Software & Web Developer
- GitHub Profile
