import Header from "@/common/Header/Header";
import "./css/globals.css";
import { Poppins } from "next/font/google";
import Sidebar from "@/common/Sidebar/Sidebar";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>TaskAza</title>
      </head>
      <body className={poppins.className}>
        <Header />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
