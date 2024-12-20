import Header from "@/common/Header/Header";
import "./css/globals.css";
import { Poppins } from "next/font/google";
import Sidebar from "@/common/Sidebar/Sidebar";
import AppContextProvider from "@/context/AppContext";

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
        <AppContextProvider>
          <Header />
          <div className="px-5">
            <Sidebar />
            {children}
          </div>
        </AppContextProvider>
      </body>
    </html>
  );
}
