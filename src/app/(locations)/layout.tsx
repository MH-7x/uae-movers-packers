import QuoteSection from "@/components/base/RequestQuote";
import React from "react";

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="mt-28 relative md:px-0 px-3">{children}</div>
      <QuoteSection />
    </>
  );
}

export default RootLayout;
