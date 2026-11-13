import Link from "next/link";
import { Navbar } from "@/components/nav/Navbar";
import styles from "./page.module.css";

const STEPS = [
  ["01", "CERITA AJA.", "Tulis seperti kamu lagi ngobrol. Nggak harus panjang dan nggak harus terlalu formal."],
  ["02", "NGGAK PERLU KENALAN.", "Kamu nggak perlu membuat akun atau menuliskan nama untuk menyampaikan aspirasi."],
  ["03", "MASUK KE OSIS.", "Aspirasi yang dikirim akan diterima dan ditinjau oleh pihak yang mengelola ruang aspirasi OSIS."],
  ["04", "JANGAN CUMA JADI OMONGAN.", "Aspirasi yang relevan dapat menjadi bahan evaluasi, pembahasan, atau tindak lanjut."],
] as const;

const RULES = [
  "NGOMONG YANG SOPAN.",
  "JANGAN JATUHIN ORANG.",
  "PASTIKAN BENAR.",
  "JANGAN BAGIKAN DATA PRIBADI.",
];

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Navbar />

      <section className={styles.hero} aria-label="Beranda">
        <div className={styles.heroArt} aria-hidden="true">
          <span className={`${styles.shape} ${styles.shapeOne}`} />
          <span className={`${styles.shape} ${styles.shapeTwo}`} />
          <span className={`${styles.shape} ${styles.shapeThree}`} />
          <span className={styles.dots} />
          <span className={styles.star}>✦</span>
          <div className={styles.speech}>ADA YANG MAU<br />KAMU SAMPAIKAN?</div>
          <div className={styles.logoCenter}>
            <div className={`${styles.logoCard} ${styles.logoSchool}`}>
              <div className={styles.logoInner}><img src="/Smk5.png" alt="Logo SMKN 5 Madiun" /></div>
            </div>
            <div className={`${styles.logoCard} ${styles.logoOsis}`}>
              <div className={styles.logoInner}><img src="/Osama.jpg" alt="Logo OSIS" /></div>
            </div>
          </div>
          <div className={styles.sticker}>SPEAK<br />UP!</div>
          <div className={styles.artLabel}>OSIS / 2026</div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.eyebrow}>RUANG ASPIRASI SISWA</div>
          <h1>NGOMONG.<br /><span>DIDENGAR.</span></h1>
          <p>Ada sesuatu di sekolah yang menurutmu perlu dibenerin? Punya ide yang pengen diwujudin? Nggak perlu dipendem. Ngomong aja.</p>
          <div className={styles.heroActions}>
            <Link href="/aspirasi" className={styles.primaryButton}>KIRIM ASPIRASI →</Link>
            <a href="#cara-kerja" className={styles.secondaryButton}>LIHAT DULU</a>
          </div>
        </div>
      </section>

      <div className={styles.ticker} aria-hidden="true">
        <span>NGOMONG AJA</span><b>✦</b><span>SUARAMU PENTING</span><b>✦</b><span>ANONIM BY DEFAULT</span><b>✦</b><span>OSIS NGOBROL YUK</span><b>✦</b>
      </div>

      <section id="cara-kerja" className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.eyebrow}>CARA KERJA</div>
          <h2>NGGAK PERLU RIBET.</h2>
          <p className={styles.intro}>Ini tempat buat menyampaikan hal yang kamu alami, masukan yang kamu punya, atau ide yang ingin kamu lihat terjadi di sekolah.</p>
          <div className={styles.stepsGrid}>
            {STEPS.map(([num, title, desc]) => <article className={styles.stepCard} key={num}><span className={styles.stepNum}>{num}</span><h3>{title}</h3><p>{desc}</p></article>)}
          </div>
        </div>
      </section>

      <section className={styles.privacySection}>
        <div className={styles.sectionInner}>
          <div className={styles.eyebrow}>PRIVACY FIRST</div>
          <h2>ANONYMOUS BY DEFAULT.</h2>
          <div className={styles.privacyGrid}>
            {[["01", "END-TO-END ANONIM"], ["02", "NGGAK ADA LOG, NGGAK ADA JEJAK"], ["03", "NO NAME. NO ACCOUNT."], ["04", "YOUR MESSAGE, YOUR CHOICE."]].map(([n, t]) => <div className={styles.privacyCard} key={n}><span>{n}</span><strong>{t}</strong></div>)}
          </div>
        </div>
      </section>

      <section id="aturan" className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.eyebrow}>BEFORE YOU SEND</div>
          <h2>BENTAR. BACA DULU.</h2>
          <p className={styles.intro}>Anonim bukan berarti bebas melakukan apa saja. Tetap gunakan ruang ini dengan bertanggung jawab.</p>
          <div className={styles.rulesGrid}>{RULES.map((rule, i) => <div className={styles.ruleCard} key={rule}><span>0{i + 1}</span><strong>{rule}</strong></div>)}</div>
        </div>
      </section>

      <section className={styles.finalSection}>
        <div className={styles.finalSticker}>✦</div>
        <div className={styles.eyebrow}>OSIS NGOBROL YUK</div>
        <h2>SUARAMU PUNYA TEMPAT.</h2>
        <p>Ada yang mau kamu sampaikan? Mulai dari ngomong dulu.</p>
        <Link href="/aspirasi" className={styles.primaryButton}>MULAI NGOBROL →</Link>
      </section>

      <footer className={styles.footer}>
        <strong>OSIS NGOBROL YUK.</strong>
        <span>SMKN 5 MADIUN / PROGRAM KERJA OSIS / 2026</span>
      </footer>
    </main>
  );
}
