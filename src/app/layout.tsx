"use client";
import type { Metadata } from "next";
import React, { Suspense, use, useEffect, useState } from "react";
import "../styles/global.scss";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Layout from "../components/layout/Layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <html lang="en" suppressHydrationWarning>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/png" href="imgs/favicon.png" />
      <title>Chăm sóc khách hàng Phú Xuân</title>

      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </head>
      <body>

        {!isLoginPage ? <Layout>{children}</Layout> : children}
      </body>
    </html>
  );
}
