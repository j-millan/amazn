import type { Metadata } from "next";
import { defaultFont } from "@/core/config";
import { ServiceProvider } from "@/core";
import "./globals.css";
import "@/core/config/yup";

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
        <ServiceProvider>
          <div>{children}</div>
        </ServiceProvider>
      </body>
    </html>
  );
}
