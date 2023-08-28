import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Show Crypto",
  description: "The largest cryptocurrency database in the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
