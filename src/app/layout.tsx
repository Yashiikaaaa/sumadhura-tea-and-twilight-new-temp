import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToasterProvider from "@/components/ToasterProver";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sumadhura Tea & Twilight",
  description:
    "Explore premium residential properties in Whitefield",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        

<script
          // safe inline injection for GTM; will run only in the browser
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W7HD3DK7');`,
          }}
        />
        
        <script
          async
          src="https://www.googletagmanager.com/ns.html?id=GTM-W7HD3DK7"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){ window.dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-JKJF31M0SR');
`,
          }}
        />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;600;700&display=swap" rel="stylesheet"/>


      </head>
      <body className={inter.className}>
    
<noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5M5RDNVQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
          <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
