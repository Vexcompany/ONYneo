# OSIS Ngobrol Yuk — ONYneo

ONYneo adalah aplikasi ruang aspirasi siswa SMKN 5 Madiun. Siswa dapat mengirim aspirasi secara anonim; pengurus yang diizinkan dapat meninjau, memperbarui status, menulis balasan, dan mengekspor ringkasan percakapan sebagai PNG.

## Fitur

- Form aspirasi publik anonim, maksimal 500 karakter.
- Validasi Zod di sisi klien dan server, honeypot, pembatasan pengiriman, serta moderasi konten server-side.
- Case ID untuk setiap aspirasi yang berhasil disimpan.
- Penyimpanan PostgreSQL melalui Supabase dengan akses tabel dibatasi ke service role di server.
- Panel internal dengan autentikasi email OTP Supabase dan allowlist email server-side.
- Dashboard daftar aspirasi, detail kasus, transisi status, dan balasan resmi OSIS.
- Pratinjau canvas yang menyatukan Case ID, pesan anonim, dan balasan admin; dapat diunduh sebagai PNG.
- Kak Taksaka untuk bantuan percakapan dan moderasi, dengan provider AI yang dikonfigurasi di server.

## Stack

- Next.js 14 App Router, React 18, TypeScript
- Supabase PostgreSQL dan Supabase Auth
- @supabase/ssr, @supabase/supabase-js, Zod
- CSS Modules dan HTML Canvas

## Menjalankan secara lokal

1. Gunakan Node.js yang kompatibel dengan Next.js 14.
2. Instal dependensi dengan **npm ci**.
3. Salin **.env.example** menjadi **.env.local**.
4. Siapkan project Supabase, lalu jalankan SQL berikut secara berurutan melalui SQL Editor:
   - **supabase/schema.sql**
   - **supabase/schema-v2.sql**
5. Buat akun pengurus melalui Supabase Auth. Masukkan hanya alamat email pengurus yang diizinkan ke **OSAMA_ALLOWED_EMAILS**. Tidak ada pendaftaran admin publik.
6. Isi variabel wajib di **.env.local**, kemudian jalankan **npm run dev**.

Aplikasi berjalan di **http://localhost:3000**.

## Environment variables

| Variabel | Wajib | Keterangan |
| --- | --- | --- |
| NEXT_PUBLIC_SUPABASE_URL | Ya | URL project Supabase |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | Ya | Publishable/anon key |
| SUPABASE_SERVICE_ROLE_KEY | Ya | Server-only; jangan pernah expose ke browser |
| OSAMA_ALLOWED_EMAILS | Ya | Daftar email pengurus, dipisahkan koma |
| HONEYPOT_FIELD_NAME | Tidak | Nama field honeypot yang diperiksa server |
| NEXT_PUBLIC_HONEYPOT_FIELD_NAME | Tidak | Harus sama dengan nama honeypot server |
| RATE_LIMIT_WINDOW_SECONDS | Tidak | Default 60 detik |
| RATE_LIMIT_MAX | Tidak | Default 3 permintaan per window |
| OPENROUTER_API_KEY, CEREBRAS_API_KEY, GROQ_API_KEY, CLOUDFLARE_API_TOKEN, NVIDIA_API_KEY | Tidak | Provider opsional Kak Taksaka; server-only |

Lihat **.env.example** untuk seluruh variabel opsional dan pengaturan Kak Taksaka.

## Alur aplikasi

- Publik: **/** → formulir aspirasi → **POST /api/aspirations** → Case ID.
- Admin: **/osama** → OTP → **/osama/dashboard** → detail kasus.
- Balasan admin: **POST /api/osama/cases/[caseId]/reply**, maksimal 450 karakter.
- Status: **POST /api/osama/cases/[caseId]/status**.

Transisi status yang diizinkan:

- new → processing → resolved → archived
- new → archived
- processing → archived

Balasan admin disimpan pada kolom **admin_reply**. Canvas detail menggunakan template **public/kak-taksaka/osama/template.jpg** dan menyediakan unduhan PNG.

## Catatan keamanan dan operasional

- Service role key dan daftar email admin hanya boleh berada di environment server.
- Endpoint admin memverifikasi sesi Supabase dan allowlist sebelum melakukan mutasi.
- RLS pada tabel aspirasi diaktifkan tanpa policy publik; operasi aplikasi menggunakan service role di server.
- Rate limiter saat ini bersifat in-memory dan dibatasi ukuran map. Ini merupakan perlindungan best-effort per instance, **bukan** rate limit terdistribusi. Untuk deployment multi-instance/produksi dengan trafik publik, gunakan penyimpanan rate-limit bersama atau layanan rate limiting terdistribusi.
- Jangan mengklaim anonimitas sebagai jaminan bahwa tidak ada metadata jaringan yang diproses oleh infrastruktur hosting. Form tidak meminta nama atau akun siswa, dan IP tidak disimpan sebagai kolom aspirasi.
- Perubahan skema Supabase harus diuji di project staging sebelum diterapkan ke data produksi.

## Pemeriksaan

Jalankan **npm run build** dan **npm run lint** setelah perubahan. Jangan menandai build/lint berhasil sebelum hasil aktualnya diperiksa.
