import type { Metadata } from "next";
import "./globals.css";
import Template from "./template";

export const metadata: Metadata = {
  title: "Javed Rasin | Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FAF9F6]">
        <Template>{children}</Template>
      </body>
    </html>
  );
}
