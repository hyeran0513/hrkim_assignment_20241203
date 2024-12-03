'use client';

import { useState, useEffect } from "react";
import localFont from "next/font/local";
import "../styles/global.scss";
import { SidebarProvider } from "@/context/SideBarContext";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import TopButton from "@/components/common/TopButton/TopButton";
import SideBar from "@/components/common/SideBar/SideBar";
import Loader from "@/components/common/Loader/Loader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="layoutWrapper">
          {loading ? (
            <Loader />
          ) : (
            <>
              <SidebarProvider>
                <Header />
                <SideBar />
              </SidebarProvider>

              <TopButton />

              <div className="mainContent">{children}</div>

              <Footer />
            </>
          )}
        </div>
      </body>
    </html>
  );
}