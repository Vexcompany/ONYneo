import Link from "next/link";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Osis Ngobrol Yuk">
          <span className={styles.logoMark}>OY</span>
          <span className={styles.logoText}>OSIS NGOBROL YUK</span>
        </Link>
        <nav className={styles.links} aria-label="Navigasi utama">
          <a href="/#cara-kerja">Cara Kerja</a>
          <a href="/#aturan">Aturan</a>
          <Link href="/#kirim-aspirasi" className={styles.navCta}>Kirim Aspirasi ↗</Link>
        </nav>
      </div>
    </header>
  );
}
