"use client";

import { ThirdwebProvider } from "@thirdweb-dev/react";


export default function AirdropLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return 
    <ThirdwebProvider>{children}</ThirdwebProvider>
    ;
}