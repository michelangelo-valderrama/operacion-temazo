import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { MainLayout } from "@/components/layouts/main-layout";
import "@/app/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: {
    default: "OT",
    template: "%s | OT"
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark select-none">
      <body
        className={cn(
          "font-sans antialiased overflow-hidden",
          fontSans.variable
        )}
      >
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
