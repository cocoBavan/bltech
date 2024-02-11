import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import CustomCursor from "@/components/common/CustomCursor";
config.autoAddCss = false;

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

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
    <html lang="en">
      <body className={`${poppins.className} mx-auto relative`}>
        <NavBar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
        <CustomCursor />
      </body>
    </html>
  );
}
