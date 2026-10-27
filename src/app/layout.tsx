export const dynamic = 'force-dynamic';
import type { Metadata } from "next";
import "./globals.css";
import AppShell from "@/components/layout/AppShell";

export const metadata: Metadata = {
  title: "Vinay's World - Personal Digital Library & Reader",
  description: "Welcome to Vinay's World. Discover, search, and read 230+ handpicked books and novels in a luxury Emerald & Gold OLED Black reader.",
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark antialiased" suppressHydrationWarning>
      <body className="bg-[var(--bg-main)] text-[var(--text-primary)] min-h-screen">
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
