import "./globals.css";
import { bitter } from "./utils/fonts";

export const metadata = {
  title: "Mark Benson Opena",
  description: "Senior Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bitter.className}>{children}</body>
    </html>
  );
}
