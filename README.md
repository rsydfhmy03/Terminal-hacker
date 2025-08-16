# **Terminal Hacker: Code Breaker**

*Final Capstone Project untuk Program IBM Student Developer Initiative.*

-----

> https://terminal-hacker.vercel.app/

## **Deskripsi Proyek (Project Overview)**

**Terminal Hacker: Code Breaker** adalah sebuah game teka-teki berbasis web dengan estetika terminal retro. Dalam game ini, pemain berperan sebagai seorang *agent* (peretas) yang harus memecahkan serangkaian 10 teka-teki terkait dunia teknologi dan pemrograman dalam batas waktu 60 detik untuk berhasil "meretas" sistem.

**Tujuan proyek** ini adalah untuk menciptakan sebuah game yang imersif dan menantang, sambil mendemonstrasikan bagaimana AI generatif, khususnya **IBM Granite**, dapat digunakan sebagai alat bantu utama untuk mempercepat dan meningkatkan kualitas proses pengembangan perangkat lunak dari ide hingga produk fungsional dalam waktu yang sangat singkat.

-----

## **Fitur-Fitur Utama**

  * **Antarmuka Terminal Retro:** Seluruh pengalaman bermain game disajikan dalam sebuah UI yang menyerupai terminal komputer klasik, lengkap dengan teks *monospace* berwarna hijau dan efek-efek visual yang mendukung tema.
  * **10 Level Teka-Teki Progresif:** Game ini memiliki 10 level teka-teki yang harus dipecahkan secara berurutan, dengan tingkat kesulitan yang meningkat secara bertahap.
  * **Timer Mundur:** Pemain diberi waktu 60 detik untuk menyelesaikan semua teka-teki, menambahkan elemen ketegangan dan tantangan. Jawaban yang salah akan mengurangi sisa waktu.
  * **Animasi & Efek Suara:** Untuk meningkatkan pengalaman imersif, teks puzzle muncul dengan animasi ketikan, dan setiap tindakan pemain (jawaban benar/salah) direspons dengan efek suara yang sesuai.
  * **Layar Hasil Akhir Dinamis:** Di akhir permainan, akan muncul layar kemenangan atau kekalahan yang sinematik, lengkap dengan tombol untuk memulai kembali permainan.

-----

## **Teknologi yang Digunakan**

Berikut adalah teknologi yang menjadi tulang punggung dari proyek ini:

  * **Framework:** **React.js (dengan TypeScript)**
      * **Alasan:** Dipilih karena menyediakan lingkungan pengembangan Web yang modern, cepat, dan terstruktur. TypeScript digunakan untuk memastikan tipe data yang aman dan mengurangi potensi *bug* dalam logika game yang kompleks.
  * **Styling:** **Tailwind CSS**
      * **Alasan:** Memungkinkan pembuatan desain UI yang *custom* dan responsif dengan sangat cepat langsung di dalam komponen, yang sangat ideal untuk menciptakan estetika terminal yang spesifik tanpa CSS eksternal.
  * **Animasi:** **Framer Motion**
      * **Alasan:** Dipilih untuk mengimplementasikan animasi yang halus dan profesional, seperti efek ketikan pada teks dan transisi layar, yang sangat penting untuk "menghidupkan" UI yang statis.
  * **Audio:** **Howler.js**
      * **Alasan:** Merupakan *library* audio yang andal dan ringan untuk mengelola pemutaran efek suara secara presisi, yang krusial untuk memberikan umpan balik instan kepada pemain.
  * **Deployment:** **Vercel**
      * **Alasan:** Sebagai platform pilihan untuk Next.js, Vercel menawarkan proses *deployment* yang sangat mudah dan cepat, terintegrasi langsung dengan GitHub.

-----

## **Instruksi Setup & Instalasi**

Untuk menjalankan proyek ini secara lokal di komputermu, ikuti langkah-langkah berikut:

1.  **Clone Repository Ini**

    ```bash
    git clone [Link ke Repository GitHub Kamu]
    ```

2.  **Masuk ke Direktori Proyek**

    ```bash
    cd terminal-hacker
    ```

3.  **Instal Semua Dependencies**

    ```bash
    npm install
    ```

4.  **Jalankan Server Development Lokal**

    ```bash
    npm run dev
    ```

5.  Buka **http://localhost:5173** (atau port yang tertera di terminal) di browser-mu.

-----

## **Penjelasan Dukungan AI (AI Support Explanation)**

Proyek ini dikembangkan dalam waktu yang sangat singkat berkat kolaborasi intensif dengan **model AI IBM Granite** yang diakses melalui IBM watsonx.ai Prompt Lab. AI tidak hanya berperan sebagai generator kode, tetapi sebagai **konsultan teknis dan *co-developer*** di setiap tahapan proyek.

### **Cara Penggunaan & Dampak Nyata AI:**

Pemanfaatan AI dilakukan dengan strategi **"Chaining Prompt"**, di mana saya membangun "percakapan" untuk menyelesaikan masalah yang kompleks secara bertahap.

1.  **Tahap 1: Generasi UI & Visual:** Saya memulai dengan meminta AI untuk membuat komponen dasar terminal dengan styling Tailwind CSS.

      * **Contoh Prompt:** *"Generate a React component named `Terminal.tsx`... It should have a black background, green monospace text, and a header with fake window controls to simulate a retro terminal."*
      * **Dampak:** Menghemat sekitar **1-2 jam** waktu desain dan setup UI awal.

2.  **Tahap 2: Implementasi Logika Inti Game:** Ini adalah bagian di mana AI paling bersinar. Saya meminta AI untuk merancang "otak" dari game ini.

      * **Contoh Prompt (Chaining):** *"Create a custom React hook `useGameLogic` that manages the game's state: current level, a 60-second countdown timer, and user input. It must include a function to check answers against a separate data file."*
      * **Dampak:** AI berhasil merancang *state management* dan logika *timer* yang kompleks. Ini **mengurangi waktu development logika inti dari yang diperkirakan 4-5 jam menjadi hanya sekitar 1 jam**.

3.  **Tahap 3: Polishing & Efek Khusus:** Saya menggunakan AI untuk menambahkan sentuhan akhir yang membuat game ini menonjol.

      * **Contoh Prompt:** *"Create a React component that takes text as a prop and displays it with a character-by-character typing animation using Framer Motion."*
      * **Dampak:** Mengimplementasikan fitur animasi yang kompleks menjadi sangat mudah, meningkatkan kualitas visual dan pengalaman pengguna secara signifikan.

### **Insight & Pengalaman:**

Pengalaman paling berharga dari proyek ini adalah belajar bahwa efektivitas AI bergantung pada kemampuan kita untuk memecah masalah. Teknik *prompting* yang paling efektif adalah **Problem Decomposition**. Daripada meminta "buatkan saya game", saya belajar untuk meminta serangkaian tugas yang lebih kecil dan spesifik ("buat timer", "cek jawaban", "buat animasi").

Secara keseluruhan, penggunaan AI **mempercepat total waktu pengembangan proyek ini sekitar 70%** dan memungkinkan saya untuk mengimplementasikan fitur-fitur (seperti animasi dan logika game yang solid) yang mungkin tidak akan tercapai dalam batas waktu yang ketat jika dikerjakan secara manual.