import Link from "next/link";
import { AspirationForm } from "@/components/aspiration/AspirationForm";
import { Navbar } from "@/components/nav/Navbar";
import styles from "./page.module.css";

export default function AspirationPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.page} aria-label="Kirim Aspirasi">
        <Link href="/" className={styles.back}>← KEMBALI</Link>
        <div className={styles.header}>
          <div className={styles.eyebrow}>OPEN CHANNEL</div>
          <h1>TULIS. KIRIM.<br /><span>SELESAI.</span></h1>
          <p>Nggak perlu mikirin kata-kata yang terlalu formal. Tulis aja apa yang menurutmu perlu diketahui.</p>
        </div>
        <div className={styles.consoleWrap}>
          <div className={styles.sticker}>MAX 500 CHARACTERS ✦</div>
          <div className={styles.console}>
            <div className={styles.consoleTop}><span className={styles.dots}><i /><i /><i /></span><strong>OSIS://ASPIRASI</strong><span>ANON</span></div>
            <div className={styles.consoleBody}><AspirationForm /></div>
          </div>
        </div>
        <div className={styles.privacy}><strong>ANONYMOUS MODE ON.</strong><span>Tidak perlu nama atau akun untuk mengirim aspirasi.</span></div>
        <div className={styles.afterNote}>Anonim bukan berarti bebas melakukan apa saja. Tetap gunakan ruang ini dengan bertanggung jawab.</div>
      </section>
    </main>
  );
}
