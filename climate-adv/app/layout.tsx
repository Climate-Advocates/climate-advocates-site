import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../app/Components/Navbar";

export const metadata: Metadata = {
  title: "Climate Advocates",
  description: "Climate Advocates for a better world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
        style={{
          background:
            "linear-gradient(180deg, rgba(12, 80, 66, 0.77) 0%, rgba(3, 18, 15, 0.77) 100%)",
          margin: 0,
          color: "white", // Optional
        }}
      >
        <div className=" ">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
