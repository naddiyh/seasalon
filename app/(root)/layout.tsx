import { Navbar } from "@/components/Navbar";
import Providers from "../providers";
import { Footer } from "@/components/Footer/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="main-root">
      <Providers>
        <Navbar />
        {children}
        <Footer />
      </Providers>
    </main>
  );
}
