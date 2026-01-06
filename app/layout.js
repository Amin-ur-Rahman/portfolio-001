import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Developer Portfolio - MERN Stack Specialist",
  description:
    "Full-stack developer portfolio showcasing modern web applications",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/logo-ar.jpg",
        sizes: "32x32",
        type: "image/jpeg",
      },
    ],
    apple: "/logo-ar.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

