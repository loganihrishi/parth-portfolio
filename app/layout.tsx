import type { Metadata } from "next";
import { Libre_Franklin, JetBrains_Mono, Caveat } from "next/font/google";
import Bluu_Next from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./provider";

const libre_Franklin = Libre_Franklin({ 
  subsets: ["latin"],
  weight: "400",
  display: 'swap',
  variable: "--font-libre-franklin",
});

const jetBrains_Mono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: "400", 
  display: 'swap',
  variable: "--font-jetbrains-mono" 
});

const caveat = Caveat({ 
  subsets: ["latin"], 
  weight: "400", 
  display: 'swap',
  variable: "--font-caveat" 
});

const bluu_Next = Bluu_Next({
  src: './BluuNext-Bold.otf',
  weight: '400',
  display: 'swap',
  variable: "--font-bluu-next",
})

export const metadata: Metadata = {
  title: "Parth's Portfolio",
  description: "Developed by Parth Patel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${libre_Franklin.variable} ${jetBrains_Mono.variable} ${caveat.variable} ${bluu_Next.variable}`}>
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
  );
}
