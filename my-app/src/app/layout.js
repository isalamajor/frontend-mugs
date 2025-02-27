import localFont from "next/font/local";
import "./globals.css";
import { CartProvider } from './context/ContextoCarrito';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Frontend Mugs",
  description: "Frontend of an online store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CartProvider>
        {children}
        </CartProvider>
      </body>
    </html>
  );
}
