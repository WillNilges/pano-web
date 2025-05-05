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
      <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=search" />
      </head>
      <body>
        <div>
        <PanoHeader/>
        {children}
        </div>
      </body>
    </html>
  );
}
