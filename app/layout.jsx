import "./globals.css";
import { F } from "./components/shared";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  metadataBase: new URL("https://trw-site.vercel.app"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: F.b, background: "#FFF", margin: 0 }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
