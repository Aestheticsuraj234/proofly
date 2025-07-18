import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


import {TRPCProvider}  from '@/trpc/client'
import { ThemeProvider } from "@/providers/theme-providers";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Proofly - Your Proof of Work. Unified.",
  description: "Tired of sharing scattered links? Proofly brings all your work—GitHub, YouTube, LinkedIn, X, and more—into one powerful profile. Let your work speak for you, without saying a word.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TRPCProvider>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${poppins.className} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
      </body>
    </html>
    </TRPCProvider>
  );
}
