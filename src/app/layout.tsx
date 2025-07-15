import type { Metadata } from "next";
import "../styles/globals.css";
import Link from "next/link";
import Starfield from "../components/Starfield";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

export const metadata: Metadata = {
  title: "Hagen Farrell's Galactic Portfolio",
  description: "A Star Wars-themed developer portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Loader />
        <Starfield />
        <nav id="main-nav">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/bualds">Builds</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}