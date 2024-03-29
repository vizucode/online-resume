import "./globals.css";
import { FiraCodeFont, PoppinsFont } from "@/libs/fonts/fonts";

export const metadata = {
  title: "Hafiz Iqbal Sahrunizar | CV",
  description: "Hafiz Iqbal Sahrunizar | CV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${PoppinsFont} ${FiraCodeFont} font-main`}>{children}</body>
    </html>
  );
}
