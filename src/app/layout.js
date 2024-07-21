'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import Footer from "./footer/page";
import Navbar from "./navbar/page";
import NextTopLoader from 'nextjs-toploader';
import {useRouter} from "next/navigation";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  const router=useRouter();
 
  return (
    <html lang="en">
   
      <body className={inter.className}>
        
      <Navbar />
        {children}
        <Footer />
        </body>
      
    </html>
  );
}
