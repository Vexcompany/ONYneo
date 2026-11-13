import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OSIS Ngobrol Yuk — Ruang Aspirasi Siswa",
  description: "Ruang aspirasi anonim siswa SMKN 5 Madiun. Sampaikan ide, masukan, dan hal yang perlu didengar OSIS.",
  applicationName: "OSIS Ngobrol Yuk",
  authors: [{ name: "OSIS SMKN 5 Madiun" }],
  formatDetection: { email: false, address: false, telephone: false },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f2efe6",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="id"><body>{children}</body></html>;
}
