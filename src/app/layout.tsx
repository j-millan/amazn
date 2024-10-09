import type { Metadata } from "next";
import { defaultFont } from "@/config/fonts";
import { TopMenu } from "../shared";
import styles from "./page.module.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amazn",
  description:
    "Free shipping on millions of items.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={defaultFont.className}>
        <TopMenu />
        <div className={styles.content}>{children}</div>
      </body>
    </html>
  );
}
