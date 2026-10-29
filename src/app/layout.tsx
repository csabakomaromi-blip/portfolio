import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Szakmai portfólió | Grafika, kiadvány, web",
  description:
    "Grafikai tervezés, kiadványszerkesztés és honlapszerkesztés. Szakmai portfólió, átgondolt vizuális megoldásokkal.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}
