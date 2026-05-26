import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const BASE_URL = "https://final-portfolio-two-beryl.vercel.app";

export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Shadman Shakib Fuad | Frontend Developer – React & Next.js",
    template: "%s | Shadman Shakib Fuad",
  },

  description:
    "Portfolio of Md. Shadman Shakib Fuad (also known as Shadman Shakib Fuad or S. Fuad) — Frontend Web Developer from Bangladesh specializing in React JS, Next.js, and modern UI/UX. CSE student at SouthEast University.",

  keywords: [
    "Shadman Shakib Fuad",
    "Md Shadman Shakib Fuad",
    "Shadman Fuad",
    "S. Fuad",
    "Shadman developer",
    "Shadman portfolio",
    "Frontend developer Bangladesh",
    "React developer Bangladesh",
    "Next.js developer",
    "CSE student SouthEast University",
    "web developer Dhaka",
    "Shadman Shakib",
  ],

  authors: [{ name: "Md. Shadman Shakib Fuad", url: BASE_URL }],
  creator: "Md. Shadman Shakib Fuad",
  publisher: "Md. Shadman Shakib Fuad",

  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Shadman Shakib Fuad | Frontend Developer",
    description:
      "Portfolio of Md. Shadman Shakib Fuad — React & Next.js Frontend Developer from Bangladesh.",
    siteName: "Shadman Shakib Fuad Portfolio",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Shadman Shakib Fuad – Frontend Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shadman Shakib Fuad | Frontend Developer",
    description:
      "React & Next.js Frontend Developer from Bangladesh. Check out my portfolio.",
    images: [`${BASE_URL}/og-image.png`],
  },

  alternates: {
    canonical: BASE_URL,
  },

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

  verification: {
    google: "GnVH85R0Muv9kTXIeLpRcwvlGy5ekP1FES2k7zfRsRs",
  },
};

// ── JSON-LD Structured Data ──────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Md. Shadman Shakib Fuad",
  alternateName: ["Shadman Shakib Fuad", "Shadman Fuad", "S. Fuad"],
  url: BASE_URL,
  image: `${BASE_URL}/og-image.png`,
  jobTitle: "Frontend Web Developer",
  description:
    "Frontend Web Developer from Bangladesh specializing in React JS and Next.js.",
  knowsAbout: ["React JS", "Next.js", "JavaScript", "Tailwind CSS", "Frontend Development"],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "SouthEast University",
    department: "Department of Computer Science & Engineering",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  sameAs: [
    "https://github.com/Shadman-Shakib-Fuad",
    "https://www.linkedin.com/in/md-shadman-shakib-fuad-435009317/",
    "https://www.facebook.com/shadmanshakib.fuad",
    "https://www.instagram.com/shadman.shakib.fuad/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href={BASE_URL} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}