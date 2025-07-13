import React from "react";

import "./globals.css";
import {ThemeModeScript} from "flowbite-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
        <title>Tag</title>
        <ThemeModeScript />
    </head>
      <body>
        {children}
      </body>
    </html>
  );
}
