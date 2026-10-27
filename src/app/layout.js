import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import TrackVisit from "@/components/TrackVisit";
import { Analytics } from "@vercel/analytics/next";
import NewsletterPopup from "@/components/NewsletterPopup";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-playfair", display: "swap" });

const BASE = "https://vishwadhar0000.github.io";

export const viewport = {
  themeColor: "#ff6b1a",
};

export const metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Vishwadhar Kyatham | Applied AI & Machine Learning Engineer",
    template: "%s — Vishwadhar Kyatham | AI & ML Engineer",
  },
  description:
    "Applied AI & Machine Learning Engineer specializing in NLP, Graph Neural Networks, Transformer architectures (BERT), FastAPI microservices, and MLOps.",
  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "NLP",
    "PyTorch",
    "Graph Neural Networks",
    "GCN",
    "BERT",
    "Transformers",
    "FastAPI",
    "Python Developer",
    "MLOps",
    "Vishwadhar Kyatham",
    "AI Engineer London",
    "UK AI Engineer"
  ],
  authors: [{ name: "Vishwadhar Kyatham", url: BASE }],
  creator: "Vishwadhar Kyatham",
  publisher: "Vishwadhar Kyatham",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BASE,
    siteName: "Vishwadhar Kyatham — Applied AI & Machine Learning Engineer",
    title: "Vishwadhar Kyatham — Applied AI & Machine Learning Engineer",
    description:
      "Applied AI & Machine Learning Engineer specializing in NLP, Graph Neural Networks, Transformer architectures (BERT), FastAPI microservices, and MLOps.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vishwadhar Kyatham — Applied AI & Machine Learning Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishwadhar Kyatham — Applied AI & Machine Learning Engineer",
    description:
      "Applied AI & Machine Learning Engineer specializing in NLP, Graph Neural Networks, Transformer architectures (BERT), FastAPI microservices, and MLOps.",
    images: ["/og-image.png"],
    creator: "@vishwadharkyatham",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-black text-white antialiased selection:bg-[#ff6b1a] selection:text-white">
        <TrackVisit />
        {children}
        <NewsletterPopup />
        <Analytics />
      </body>
    </html>
  );
}
