import { Inter, IBM_Plex_Mono } from 'next/font/google'
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-inter',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: "Frontend Dev's Portfoli",
  description: "Portfolio By Priymak Chin-Giz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${plexMono.variable}`}>

      <body>
        
        {children}
      </body>
    </html>
  );
}
