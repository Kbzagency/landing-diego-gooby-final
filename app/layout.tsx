import type { Metadata } from "next";
import { Bebas_Neue, Playfair_Display, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-var",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-var",
  display: "swap",
});

const barlow = Barlow_Condensed({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow-var",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gooby.vercel.app"),
  title: "GOOBY — El Ecosistema Digital Oficial de Diego Maradona",
  description:
    "A 40 años de México 86. El legado de Diego Maradona ahora se vive en cada fan. Inmersivo, interactivo y participativo.",
  openGraph: {
    title: "GOOBY — El Legado de Diego, Ahora se Vive en Cada Fan",
    description:
      "A 40 años de México 86. Una nueva forma de conectar con Diego Maradona.",
    images: [{ url: "/assets/images/hero-estadio.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${bebas.variable} ${playfair.variable} ${barlow.variable}`}
    >
      <body>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
