import Link from "next/link";
import { Navbar } from "@/components/nav/Navbar";
import { AspirationForm } from "@/components/aspiration/AspirationForm";
import styles from "./page.module.css";

const STEPS = [
  { number: "01", title: "CERITA AJA.", description: "Tulis hal yang kamu alami, masukan yang kamu punya, atau ide yang ingin diwujudkan. Nggak harus formal." },
  { number: "02", title: "TETAP ANONIM.", description: "Kamu tidak perlu membuat akun atau mencantumkan nama untuk menyampaikan aspirasi." },
  { number: "03", title: "MASUK KE OSIS.", description: "Pesanmu diterima oleh sistem dan ditinjau oleh pengurus yang memiliki akses." },
  { number: "04", title: "ADA TINDAK LANJUT.", description: "Aspirasi dapat diproses, ditanggapi, atau diarsipkan sesuai hasil pembahasan OSIS." },
] as const;

const RULES = [
  "Sampaikan dengan sopan dan jelas.",
  "Jangan menyerang atau merendahkan orang lain.",
  "Sampaikan informasi yang benar.",
  "Jangan mencantumkan data pribadi siapa pun.",
] as const;

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Navbar />

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>RUANG ASPIRASI SISWA / SMKN 5 MADIUN</span>
          <h1 id="hero-title">NGOMONG.<br /><span>DIDENGAR.</span></h1>
          <p className={styles.heroLead}>Ada sesuatu di sekolah yang menurutmu perlu dibenahi? Punya ide yang ingin diwujudkan? Suaramu punya tempat di sini.</p>
          <div className={styles.heroActions}>
            <a href="#kirim-aspirasi" className={styles.primaryButton}>KIRIM ASPIRASI <span aria-hidden="true">↗</span></a>
            <a href="#cara-kerja" className={styles.secondaryButton}>CARA KERJA</a>
          </div>
          <div className={styles.heroMeta}><span className={styles.liveDot} /> TANPA AKUN <span className={styles.metaDivider}>/</span> ANONIM BY DEFAULT</div>
        </div>

        <div className={styles.heroArtwork} aria-label="Ilustrasi ruang aspirasi OSIS">
          <div className={styles.artTopline}><span>ONY / 2026</span><span>STUDENT VOICE SYSTEM</span></div>
          <div className={styles.artGrid} aria-hidden="true" />
          <div className={styles.artCircle} aria-hidden="true" />
          <div className={styles.artCardBack} aria-hidden="true"><span>IDEA<br />01</span></div>
          <div className={styles.artCard}>
            <span className={styles.artCardLabel}>YOUR VOICE MATTERS</span>
            <div className={styles.artMark}>OY<span>.</span></div>
            <strong>OSIS<br />NGOBROL<br />YUK!</strong>
            <span className={styles.artCardFoot}>RUANG AMAN UNTUK BERSUARA</span>
          </div>
          <div className={styles.artSticker}>SPEAK<br />UP!</div>
          <div className={styles.artBottomline}><span>ANONYMOUS CHANNEL</span><span>NO. 001 — OPEN</span></div>
        </div>
      </section>

      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}><span>NGOMONG AJA</span><b>✳</b><span>SUARAMU PENTING</span><b>✳</b><span>ANONIM BY DEFAULT</span><b>✳</b><span>OSIS NGOBROL YUK</span><b>✳</b><span>NGOMONG AJA</span><b>✳</b><span>SUARAMU PENTING</span><b>✳</b></div>
      </div>

      <section id="cara-kerja" className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>01 / CARA KERJA</span>
            <h2>NGGAK PERLU<br /><em>RIBET.</em></h2>
            <p>Empat langkah sederhana untuk menyampaikan hal yang menurutmu perlu didengar.</p>
          </div>
          <div className={styles.stepsGrid}>
            {STEPS.map((step, index) => (
              <article className={styles.stepCard} key={step.number}>
                <div className={styles.stepTop}><span>{step.number}</span><span className={styles.stepArrow} aria-hidden="true">↗</span></div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <span className={styles.stepAccent} aria-hidden="true">0{index + 1}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.privacySection}>
        <div className={styles.sectionInner}>
          <div className={styles.privacyIntro}>
            <span className={styles.eyebrow}>02 / PRIVACY FIRST</span>
            <h2>IDENTITASMU<br /><em>BUKAN SYARAT.</em></h2>
            <p>Kami merancang ruang ini agar kamu bisa menyampaikan aspirasi tanpa perlu membuat akun atau menuliskan nama.</p>
          </div>
          <div className={styles.privacyGrid}>
            <article className={styles.privacyCard}><span>01</span><strong>NO NAME<br />REQUIRED.</strong><p>Formulir tidak meminta nama atau akun siswa.</p></article>
            <article className={styles.privacyCard}><span>02</span><strong>PRIVATE<br />BY DESIGN.</strong><p>Pesan hanya tersedia melalui alur pengelolaan yang ditentukan.</p></article>
            <article className={styles.privacyCard}><span>03</span><strong>ONE CLEAR<br />PURPOSE.</strong><p>Informasi digunakan untuk meninjau dan menindaklanjuti aspirasi.</p></article>
          </div>
        </div>
      </section>

      <section id="kirim-aspirasi" className={styles.formSection}>
        <div className={styles.formLayout}>
          <div className={styles.formIntro}>
            <span className={styles.eyebrow}>03 / OPEN CHANNEL</span>
            <h2>ADA YANG<br /><em>MAU DIBICARAKAN?</em></h2>
            <p>Tulis pesanmu dengan bahasa yang nyaman. Tidak perlu nama, kelas, atau informasi identitas lainnya.</p>
            <div className={styles.formNote}><span className={styles.noteMark}>i</span><span>Jangan sertakan data pribadi atau informasi sensitif. Baca aturan sebelum mengirim.</span></div>
          </div>
          <div className={styles.formPanel}>
            <div className={styles.panelHeader}><span>ONY://ASPIRATION-BOX</span><span className={styles.panelStatus}><i /> READY</span></div>
            <div className={styles.panelBody}><AspirationForm /></div>
            <div className={styles.panelFooter}><span>MAX. 500 CHARACTERS</span><span>CTRL + ENTER TO SEND</span></div>
          </div>
        </div>
      </section>

      <section id="aturan" className={styles.rulesSection}>
        <div className={styles.sectionInner}>
          <div className={styles.rulesHeading}><span className={styles.eyebrow}>04 / COMMUNITY RULES</span><h2>BEBAS BERSUARA.<br /><em>TETAP BERTANGGUNG JAWAB.</em></h2></div>
          <div className={styles.rulesGrid}>
            {RULES.map((rule, index) => <div className={styles.ruleCard} key={rule}><span>0{index + 1}</span><strong>{rule}</strong></div>)}
          </div>
        </div>
      </section>

      <section className={styles.finalSection}>
        <span className={styles.finalEyebrow}>OSIS NGOBROL YUK / SMKN 5 MADIUN</span>
        <h2>SUARAMU PUNYA<br /><em>TEMPAT.</em></h2>
        <p>Perubahan bisa dimulai dari satu pesan sederhana.</p>
        <a href="#kirim-aspirasi" className={styles.primaryButton}>MULAI NGOBROL <span aria-hidden="true">↗</span></a>
      </section>

      <footer className={styles.footer}>
        <div><strong>OSIS NGOBROL YUK<span>.</span></strong><p>Ruang aspirasi siswa SMKN 5 Madiun.</p></div>
        <div className={styles.footerMeta}><span>PROGRAM KERJA OSIS / 2026</span><Link href="/osama">PANEL PENGELOLA</Link></div>
      </footer>
    </main>
  );
}
