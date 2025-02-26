import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { TopMenu } from "@/shared";
import { ModalProvider } from "@/core";
import { categoriesService, CategorySelectorProvider, QuickAccessBar } from "@/shop";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Amazn: Home page",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await categoriesService.getCategories();
  const cookieStore = cookies();

  if (!cookieStore.get("auth-token")?.value) {
    redirect("/auth/login");
  }

  return (
    <div className={styles.container}>
      <ModalProvider>
        <CategorySelectorProvider categories={categories}>
          <TopMenu />
          <QuickAccessBar />
          <div className={styles.content}>{children}</div>
        </CategorySelectorProvider>
      </ModalProvider>
    </div>
  );
}
