import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <NavBar />
        {children}
        <div className="bg-default absolute top-0 right-0 bottom-0 left-0 bg-cover bg-center h-screen -z-10 opacity-10"></div>
        <Footer />
      </body>
    </html>
  );
}