import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import DelayedRender from "./Components/DelayedRender";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Foodie Oppskrift App",
  description: "Fantastiske oppskrifter for deg og dine",
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
        <Suspense fallback={<Loading />}>
          <div>{children}</div>
        </Suspense>
        <div className="bg-default absolute top-0 right-0 bottom-0 left-0 bg-cover bg-center h-screen -z-10 opacity-5"></div>
        <Footer />
      </body>
    </html>
  );
}
