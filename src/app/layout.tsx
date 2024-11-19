import type { Metadata } from "next";
import { defaultFont } from "@/config";
import "./globals.css";
import { ServiceProvider } from "@/core/providers/service-provider/ServiceProvider";

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
