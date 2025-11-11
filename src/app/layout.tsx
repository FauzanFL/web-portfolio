import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fauzan Fashihul Lisan",
  description:
    "Personal portfolio website showcasing my work as a software engineer and web developer. Specialized in frontend and backend development with modern web technologies.",
  keywords: [
    "Software Engineer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Fauzan Fatihul Lisan" }],
  openGraph: {
    title: "Fauzan Fatihul Lisan - Software Engineer",
    description:
      "Software engineer passionate about building modern web applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
