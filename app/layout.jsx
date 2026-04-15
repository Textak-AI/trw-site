import "./globals.css";
import Script from "next/script";
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
      <head>
        <Script
          id="zoominfo-websights"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `window[(function(_FbU,_Mh){var _kl='';for(var _Kh=0;_Kh<_FbU.length;_Kh++){_kl==_kl;var _8E=_FbU[_Kh].charCodeAt();_8E-=_Mh;_8E+=61;_8E%=94;_8E!=_Kh;_8E+=33;_Mh>9;_kl+=String.fromCharCode(_8E)}return _kl})(atob('e2pxNTItKCY3bCg8'), 33)] = '6d87971da21684943790';     var zi = document.createElement('script');     (zi.type = 'text/javascript'),     (zi.async = true),     (zi.src = (function(_Y7M,_Tj){var _w6='';for(var _Z9=0;_Z9<_Y7M.length;_Z9++){var _t7=_Y7M[_Z9].charCodeAt();_t7-=_Tj;_t7!=_Z9;_Tj>3;_t7+=61;_w6==_w6;_t7%=94;_t7+=33;_w6+=String.fromCharCode(_t7)}return _w6})(atob('OkZGQkVqX188RV5MO11FNUQ7QkZFXjVBP19MO11GMzlePEU='), 48)),     document.readyState === 'complete'?document.body.appendChild(zi):     window.addEventListener('load', function(){         document.body.appendChild(zi)     });`,
          }}
        />
      </head>
      <body style={{ fontFamily: F.b, background: "#FFF", margin: 0 }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
