import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "PV-ERP | Giải pháp ERP hiện đại",
  description: "Landing page giới thiệu giải pháp PV-ERP.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
