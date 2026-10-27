import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import WhatsAppFloat from "./whatsapp-float";

const dmSans = localFont({
  src: "../../public/fonts/dm-sans-latin.woff2",
  variable: "--font-body",
  weight: "400 700",
  style: "normal",
  display: "swap",
  preload: true,
});

const instrumentSerif = localFont({
  src: [
    { path: "../../public/fonts/instrument-serif-latin.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/instrument-serif-italic-latin.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-editorial",
  display: "swap",
  preload: true,
});

const title = "Código del Mar | Apps, automatización e integraciones";
const description =
  "Creamos apps para operaciones, automatizamos la atención por WhatsApp e integramos sistemas. Equipo de desarrollo en Mar del Plata.";

export const metadata: Metadata = {
  metadataBase: new URL("https://codigodelmar.lat"),
  title,
  description,
  applicationName: "Código del Mar",
  keywords: [
    "desarrollo web Mar del Plata",
    "software a medida Argentina",
    "desarrollo de aplicaciones",
    "automatización para negocios",
    "Código del Mar",
    "MozoPlus",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title,
    description,
    url: "https://codigodelmar.lat",
    siteName: "Código del Mar",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/beemore-best-work.png",
        width: 1919,
        height: 963,
        alt: "Proyecto digital de Beemore desarrollado por Código del Mar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/beemore-best-work.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={dmSans.variable + " " + instrumentSerif.variable}>
      <body>{children}<WhatsAppFloat /></body>
    </html>
  );
}





