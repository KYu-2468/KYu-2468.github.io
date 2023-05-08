import React from "react";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Free Web tutorials" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

        <title>Kevin Yu Portfolio</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
