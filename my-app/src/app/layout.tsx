import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export const metadata: Metadata = {
  title: "Murphy’s Bar & Grill (React)",
  description: "ICS 314 In-Class Group WOD — Murphy’s Bar & Grill React version",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
