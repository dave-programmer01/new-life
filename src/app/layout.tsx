import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Pasos de Crecimiento — New Life Bronx",
  description:
    "Discover your DISC personality type, spiritual gifts, and Dream Team ministry placement at New Life Bronx Church.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} antialiased`}>
      <body className="bg-gradient-animated">
        {children}
      </body>
    </html>
  );
}
