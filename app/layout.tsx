import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "I Ketut Ardika - WordPress & E-commerce Developer",
  description: "Senior WordPress & E-commerce Developer with 10+ years of experience. Specialized in custom WooCommerce architecture, trading platforms, and high-performance web solutions.",
  keywords: ["WordPress Developer", "Shopify Developer", "WooCommerce", "E-commerce", "Web Development", "Technical Lead"],
  authors: [{ name: "I Ketut Ardika" }],
  openGraph: {
    title: "I Ketut Ardika - WordPress & E-commerce Developer",
    description: "Senior WordPress & E-commerce Developer with 10+ years of experience",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
