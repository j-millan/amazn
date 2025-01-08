import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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
  const cookieStore = cookies();

  if (!cookieStore.get("auth-token")) {
    redirect("/auth/login");
  }
  
  return (
    <div className={styles.container}>
      <ModalProvider>
        <TopMenu />
        <div className={styles.content}>{children}</div>
      </ModalProvider>
    </div>
  );
}
