import ContextProvider from "@/components/contextProvider";
// import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { createContext, useRef, useState } from "react";
// const inter = Inter({ subsets: ["latin"] });
// export const metadata: Metadata = {
//   title: {
//     absolute: "",
//     default: "Product Info",
//     template: "%s | Product",
//   }
// }





export default function RootLayout(
  { children, }: Readonly<{ children: React.ReactNode; }>
) {

  return (
    <html lang="en">

      {/* <body onClick={() => resetActivity()}> */}
      <body>
        <ContextProvider>
          <Header />
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
