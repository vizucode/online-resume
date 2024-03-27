import "./globals.css";
import { FiraCodeFont, PoppinsFont } from "@/libs/fonts/fonts";

export const metadata = {
  title: "Mitsuha Nguyen | CV",
  description: "Mitsuha Nguyen | CV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${PoppinsFont} ${FiraCodeFont} font-main`}>{children}</body>
    </html>
  );
}
