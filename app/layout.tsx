import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SkeletonTheme } from "react-loading-skeleton";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb clone",
  description: "An airbnb clone.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SkeletonTheme baseColor="#ebebeb" highlightColor="#999">
        <body className={inter.className}>{children}</body>
      </SkeletonTheme>
    </html>
  );
}
