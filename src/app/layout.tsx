import "@/app/globals.css";
import PanoHeader from "@/components/Pano/Header/PanoHeader";
import * as React from "react";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <PanoHeader/>
        {children}
      </body>
    </html>
  );
}
