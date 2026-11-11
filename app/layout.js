
import "./globals.css";

export const metadata = {
  title: "RAFEE'S | Premium Men's Fashion",
  description:
    "Discover premium men's clothing, refined tailoring and timeless fashion at RAFEE'S.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
