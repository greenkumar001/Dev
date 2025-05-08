import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devrath Industries",
  description: "Created by green",
  icons: {
    icon: "/DEVLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.jpg" type="image/jpeg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
