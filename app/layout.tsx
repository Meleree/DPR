import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "DPR Argentina | Escuela de pilotos",
  description:
    "Formación y entrenamiento de pilotos de velocidad en Arrecifes, Buenos Aires.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={barlow.variable}>{children}</body>
    </html>
  );
}