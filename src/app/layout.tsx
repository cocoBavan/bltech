import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import CustomCursor from "@/components/common/CustomCursor";
config.autoAddCss = false;

/*
const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-opensans" });
*/

const poppinsN = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const openSansN = Open_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-opensans",
});

export const metadata: Metadata = {
  title: "BL TechConsult",
  description: "Consulting and SaaS Services by Bavan Palan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppinsN.variable} ${openSansN.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="mx-auto relative">
        <NavBar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
        <CustomCursor />
      </body>
    </html>
  );
}
