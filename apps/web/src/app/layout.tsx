"use server";

import "@tracklab/commons/tailwind.css";
import React from "react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <main className="flex min-h-screen min-w-screen">{children}</main>
      </body>
    </html>
  );
}
