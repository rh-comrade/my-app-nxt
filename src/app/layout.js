import { Inter } from "next/font/google";
import "./globals.css";
import {Header} from "@/header"
import { Footer } from "@/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "shopper-x",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}