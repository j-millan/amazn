import type { Metadata } from "next";
import { TopMenu } from "@/shared";
import { ModalProvider } from "@/core";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Amazn: Home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ModalProvider>
      <TopMenu />
      <div className={styles.content}>{children}</div>
    </ModalProvider>
  );
}
