import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AnimeList",
  description: "Website for search anime list",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-dark via-secondary to-dark min-h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
