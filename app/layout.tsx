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
  title: "Ketut Ardika - Sr. Wordpress Engineer & Technical Lead",
  description: "Senior Wordpress Engineer & Technical Lead with 10+ years of experience. Specialized in custom WooCommerce architecture, trading platforms, and high-performance web solutions.",
  keywords: ["WordPress Engineer", "WordPress Developer", "Shopify Developer", "WooCommerce", "E-commerce", "Web Development", "Technical Lead"],
  authors: [{ name: "Ketut Ardika" }],
  openGraph: {
    title: "Ketut Ardika - Senior Wordpress Engineer & Technical Lead",
    description: "Senior Wordpress Engineer & Technical Lead with 10+ years of experience",
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
