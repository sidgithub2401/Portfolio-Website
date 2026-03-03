import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Siddhant Sharma | AI/ML Engineer",
  description:
    "AI/ML Engineer with 2+ years of experience designing cloud-native systems and building production-ready machine learning and Generative AI solutions.",
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "LangGraph",
    "LangChain",
    "RAG",
    "Azure",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Siddhant Sharma" }],
  openGraph: {
    title: "Siddhant Sharma | AI/ML Engineer",
    description:
      "AI/ML Engineer crafting intelligent systems — from production-ready ML pipelines to RAG-based LLM applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
