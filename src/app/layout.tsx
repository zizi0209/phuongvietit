import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GlobalWaves from "@/components/decor/GlobalWaves";

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

        {/* Overlay phủ toàn trang, ĐÈ LÊN section nhưng không che chữ */}
        <GlobalWaves opacity={0.72} />

        {/* Nội dung trang (z thấp hơn header, cao hơn nền body) */}
        <main className="relative">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
